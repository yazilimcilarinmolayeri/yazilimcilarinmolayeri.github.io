import { SiGithub, SiTelegram, SiDiscord } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="bg-blue h-header">
            <div className="_container h-full flex items-center justify-between">
                <div className="h-full flex items-center">
                    <NavLink to="/">
                        <img
                            src="https://cdn.discordapp.com/attachments/854448022288990238/1079761013563469894/ymy_logo_banner.png"
                            alt="YMY_Logo"
                        />
                    </NavLink>
                </div>
                <nav className="h-full flex items-center text-white">
                    <NavLink to="/advertise" className="nav-item">
                        <MdWork size={24} /> İş / Staj İlanı
                    </NavLink>
                    <Link
                        to="https://github.com/yazilimcilarinmolayeri"
                        target="blank"
                        className="nav-item"
                    >
                        <SiGithub size={24} /> GitHub
                    </Link>
                    <Link
                        to="https://t.me/ymyoht"
                        target="blank"
                        className="nav-item"
                    >
                        <SiTelegram size={24} /> Telegram
                    </Link>
                    <Link
                        to="https://discord.gg/KazHgb2"
                        target="blank"
                        className="join-discord-btn"
                    >
                        <SiDiscord size={24} /> Discord
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
