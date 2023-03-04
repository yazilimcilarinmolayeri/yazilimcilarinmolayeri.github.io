import { SiGithub, SiTelegram, SiDiscord } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";

function Header() {
    const menuRef = useRef<any>(false);
    const [active, setActive] = useState<any>(false);

    const handleMenu = () => {
        menuRef.current.classList.toggle("active");
        if (menuRef.current?.classList.contains("active")) setActive(true);
        else setActive(false);
    };

    return (
        <header className="bg-blue h-header">
            <div className="_container h-full flex items-center justify-between flex-col lg:flex-row">
                <div className="h-full w-full lg:w-auto flex items-center justify-between lg:justify-start">
                    <NavLink className="py-4 lg:py-0" to="/">
                        <img
                            src="https://cdn.discordapp.com/attachments/854448022288990238/1079761013563469894/ymy_logo_banner.png"
                            alt="YMY_Logo"
                        />
                    </NavLink>
                    <button
                        onClick={handleMenu}
                        className="lg:hidden hover:bg-hover-blue h-full w-[76px] flex items-center justify-center"
                    >
                        {active ? (
                            <AiOutlineClose size={24} color="white" />
                        ) : (
                            <AiOutlineMenu size={24} color="white" />
                        )}
                    </button>
                </div>
                <nav className="nav" ref={menuRef}>
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
