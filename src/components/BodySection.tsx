import { TbNorthStar } from "react-icons/tb";
import { SiPython, SiDiscord } from "react-icons/si";
import { AiFillBug } from "react-icons/ai";
import { ImArrowRight2 } from "react-icons/im";
import { BiCodeAlt } from "react-icons/bi";
import { FiTerminal } from "react-icons/fi";

function BodySection() {
    return (
        <section className="pt-20">
            <div className="_container">
                <h1 className="text-5xl text-h1-title mb-12">Biz Kimiz?</h1>
                <div className="flex items-center justify-around gap-12 flex-col 2xl:gap-0 lg:flex-row">
                    <div className="md:w-body-item grid gap-y-8">
                        <p>
                            Yazılımcıların Mola Yeri, 2018 Yılında kurulmuş olan
                            ve Türkiye'deki yazılımcılara destek olmayı
                            hedefleyen bir topluluktur. Başta İbrahim Yavuz
                            olmak üzere büyük bir çaba ile çalışan ekibimiz
                            sayesinde Yazılımcıların Mola Yeri sunucusu şu anda
                            3000+ kişilik dev bir aile haline gelmiştir.
                        </p>
                        <p>
                            Topluluk içerisinde bilgisayar bilimleri, donanım,
                            teknik problemler gibi konuların yanı sıra yazılım
                            dünyasının her alanından soru sorabilir,
                            tartışabilir ve bu konuda tecrübelerinizi
                            aktarabilir veya tecrübelileri dinleyebilirsiniz.
                            Discord sunucusuna giriş yapıp kurallarımızı
                            okuduktan sonra içeride özgürce gezinebilirsiniz.
                            Örneğin geliştirdiğiniz uygulamanın bir yerinde bir
                            türlü çözemediğiniz bir mantık hatası var veya
                            yapmak istediğiniz bir şeyi nasıl yapmanız
                            gerektiğini bilmiyorsunuz... Bu durumda, açıklayıcı
                            bir şekilde sorunuzu konuyla alakalı metin
                            kanallarında sorarak konu hakkında tecrübeli
                            olanların yorumlarını ve fikirlerini alabilirsiniz.
                        </p>
                        <p>
                            Siz de bu topluluğun bir parçası olarak yazılım
                            hakkındaki sorularınıza cevap bulabilir,
                            Türkiye'deki diğer yazılımcılarla işbirliği
                            yapabilir, iş ilanı verebilir ve ortamın tadını
                            çıkarabilirsiniz.
                        </p>
                    </div>
                    <div className="md:w-body-item shadow-2xl text-center p-5 grid gap-y-12">
                        <h2 className="text-[32px] text-h2-title">
                            Zaman tüneli
                        </h2>
                        <div className="bg-timeline h-[3px] flex items-center justify-center gap-x-4 sm:gap-x-14">
                            <div className="body-icon">
                                <TbNorthStar />
                            </div>
                            <div className="body-icon">
                                <BiCodeAlt />
                            </div>
                            <div className="body-icon">
                                <SiPython />
                            </div>
                            <div className="body-icon">
                                <SiDiscord />
                            </div>
                            <div className="body-icon">
                                <FiTerminal />
                            </div>
                            <div className="body-icon">
                                <AiFillBug />
                            </div>
                        </div>
                        <p className="text-xl">
                            Topluluğumuzun tarihini keşfedin ve topluluğumuzu
                            bugünkü haline getiren olaylar hakkında bilgi
                            edinin.
                        </p>
                        <div className="flex justify-center">
                            <button
                                className="body-btn"
                                onClick={() => alert("Yakında...")}
                            >
                                <span>Beni götür!</span> <ImArrowRight2 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BodySection;
