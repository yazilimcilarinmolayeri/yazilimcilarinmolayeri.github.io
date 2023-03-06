import { useFormik } from "formik";
import IAdvertiseForm from "../../types/IAdvertiseForm";
import { post } from "../../services/request";
import ReCAPTCHA from "react-google-recaptcha";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AdvertiseForm() {
    const [loading, setLoading] = useState(false);
    const captchaRef = useRef<any>(null);
    const { handleSubmit, handleChange, resetForm, values } =
        useFormik<IAdvertiseForm>({
            initialValues: {
                token: "",
                name: "",
                email: "",
                advType: "",
                discord: "",
                description: "",
            },

            onSubmit: async (values: any) => {
                setLoading(true);

                values.token = captchaRef.current.getValue();

                const res = await post(
                    "http://localhost:5001/api/advertise",
                    values
                );

                console.log(values);

                if (res.message === "Succesfully sent") {
                    resetForm();
                    captchaRef.current.reset();
                    toast.success("İlanınız başarıyla gönderildi.");
                } else if (res.message === "You are a robot") {
                    captchaRef.current.reset();
                    toast.error("Robot doğrulaması başarısız.");
                } else {
                    toast.error("Ters giden bir şeyler oldu.");
                }

                setLoading(false);
            },
        });

    return (
        <section className="pt-20">
            <div className="_container">
                <div className="adv-form-wrapper">
                    <h1 className="text-4xl text-h1-title mb-12 text-center">
                        İş / Staj İlanı
                    </h1>
                    <hr className="mb-12 border-blue" />
                    <form onSubmit={handleSubmit} className="grid gap-y-12">
                        <div className="adv-form-group">
                            <div className="adv-form-input-wrapper">
                                <input
                                    required
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    className="adv-form-input peer valid:pt-3"
                                />
                                <label
                                    htmlFor="name"
                                    className="adv-form-label peer-valid:text-xs peer-valid:top-3"
                                >
                                    İsminiz
                                </label>
                            </div>

                            <div className="adv-form-input-wrapper">
                                <input
                                    required
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    className="adv-form-input peer valid:pt-3"
                                />
                                <label
                                    htmlFor="email"
                                    className="adv-form-label peer-valid:text-xs peer-valid:top-3"
                                >
                                    E-posta
                                </label>
                            </div>
                        </div>

                        <div className="adv-form-group">
                            <div className="adv-form-input-wrapper">
                                <select
                                    required
                                    name="advType"
                                    value={values.advType}
                                    onChange={handleChange}
                                    className="adv-form-input peer valid:pt-3"
                                >
                                    <option disabled hidden />
                                    <option value="İş İlanı">İş İlanı</option>
                                    <option value="Staj İlanı">
                                        Staj İlanı
                                    </option>
                                </select>
                                <label
                                    htmlFor="advType"
                                    className="adv-form-label peer-valid:text-xs peer-valid:top-3"
                                >
                                    İlan türü
                                </label>
                            </div>

                            <div className="adv-form-input-wrapper">
                                <input
                                    required
                                    name="discord"
                                    type="text"
                                    value={values.discord}
                                    onChange={handleChange}
                                    className="adv-form-input peer valid:pt-3"
                                />
                                <label
                                    htmlFor="discord"
                                    className="adv-form-label peer-valid:text-xs peer-valid:top-3"
                                >
                                    Discord
                                </label>
                            </div>
                        </div>

                        <div className="adv-form-input-wrapper">
                            <textarea
                                required
                                name="description"
                                className="adv-form-input h-textarea peer valid:pt-6"
                                onChange={handleChange}
                                value={values.description}
                            />
                            <label
                                htmlFor="description"
                                className="adv-form-label peer-valid:text-xs peer-valid:top-3"
                            >
                                İlan Detayı
                            </label>
                        </div>

                        <ReCAPTCHA
                            sitekey="6Le6Ms4kAAAAALucMmMq6JCtzRseUje7fd8cJ7MX"
                            ref={captchaRef}
                        />

                        <button type="submit" className="adv-form-btn">
                            <span className="font-semibold">Gönder</span>{" "}
                            {loading && (
                                <div
                                    className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                    role="status"
                                >
                                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                        Loading...
                                    </span>
                                </div>
                            )}
                        </button>
                    </form>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </section>
    );
}

export default AdvertiseForm;
