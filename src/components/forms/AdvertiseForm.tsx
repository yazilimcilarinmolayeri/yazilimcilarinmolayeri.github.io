import { useFormik } from "formik";
import IAdvertiseForm from "../../types/IAdvertiseForm";

function AdvertiseForm() {
    const { handleSubmit, handleChange, values } = useFormik<IAdvertiseForm>({
        initialValues: {
            name: "",
            email: "",
            advType: "",
            discord: "",
            description: "",
        },
        onSubmit: (values) => {
            // send discord
            console.log(values);
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

                        <button type="submit" className="adv-form-btn">
                            Gönder
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default AdvertiseForm;
