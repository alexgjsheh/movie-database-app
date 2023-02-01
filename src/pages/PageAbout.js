import { useEffect } from "react";

import TmdbLogo from "../images/tmdbLogo.svg";

function PageAbout() {
    useEffect(() => {
        document.title = `filmsPerSecond - About`;
    }, []);
    return (
        <>
            <section className="about-section">
                <h2 className="about-section-heading">About</h2>
                <p>
                    filmsPerSecond is an online movie database application that
                    allows users to browse and view detailed information about
                    popular, top-rated, and upcoming movies. filmsPerSecond also
                    allows users to track their favorite movies.
                </p>
                <p>
                    This product uses the TMDb API but is not endorsed or
                    certified by TMDb.
                </p>
                <img className="tmdb-logo" src={TmdbLogo} alt="TMDb Logo" />
            </section>
        </>
    );
}

export default PageAbout;
