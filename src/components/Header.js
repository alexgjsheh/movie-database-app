import LogoSvg from "../images/movieDatabaseAppLogo.svg";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    // toggle navigation
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
        // cleanup function to remove the listener
        return () => mediaQuery.removeEventListener("change", isDesktop);
    }, []);

    return (
        <header>
            <h1>
                <Link to="/">
                    <img
                        className="site-logo"
                        src={LogoSvg}
                        alt="Movie Database App Logo"
                    />
                </Link>
            </h1>
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
