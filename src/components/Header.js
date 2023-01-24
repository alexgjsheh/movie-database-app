import LogoSvg from "../images/movieDatabaseAppLogo.svg";
import Nav from "./Nav";
import { useState, useEffect } from "react";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    // LEARN THIS STUFF LATER
    const showHideNav = () => {
        setNavOpen(!navOpen);
    };

    const isDesktop = (e) => {
        if (e.matches) {
            setNavOpen(false);
        }
    };

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 600px)");
        mediaQuery.addEventListener("change", isDesktop);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeEventListener("change", isDesktop);
    }, []);

    return (
        <header>
            <img
                className="site-logo"
                src={LogoSvg}
                alt="Movie Database App Logo"
            />
            <button className="nav-hamburger-btn" onClick={showHideNav}>
                <div className={`hamburger ${navOpen ? "is-active" : ""}`}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </button>
            <Nav handleShowHideNav={showHideNav} navOpen={navOpen} />
        </header>
    );
}

export default Header;