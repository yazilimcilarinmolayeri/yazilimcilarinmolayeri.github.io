import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className="bg-blue md:h-[300px] lg:h-[400px] xl:h-[450px] 2xl:h-hero-section flex items-center">
            <div className="_container flex justify-around">
                <div className="hero-banner-wrapper hidden md:block">
                    <Link to="https://discord.gg/KazHgb2" target="blank">
                        <img
                            className="hero-banner"
                            src="https://cdn.discordapp.com/attachments/854448022288990238/1080452962037547048/welcome_ymy.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="hero-banner-wrapper">
                    <Link
                        to="https://pixels.yazilimcilarinmolayeri.com"
                        target="blank"
                    >
                        <img
                            className="hero-banner"
                            src="https://cdn.discordapp.com/attachments/854448022288990238/1080476524148437142/ymy_pixel_event.png"
                            alt=""
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
