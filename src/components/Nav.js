import { NavLink } from "react-router-dom";

function Nav({ handleShowHideNav, navOpen }) {
    function closeNav(e) {
        if (window.innerWidth < 660) {
            handleShowHideNav();
        } else {
            e.target.blur();
        }
    }

    return (
        <nav
            className={`navigation-bar ${navOpen ? "show-nav-menu" : ""}`}
            onClick={closeNav}
        >
            <ul className="navigation-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favourites">Favourites</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
