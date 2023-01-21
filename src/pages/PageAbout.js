import { useEffect } from "react";

function PageAbout() {
    useEffect(() => {
        document.title = `filmsPerSecond - About`;
    }, []);
    return (
        <>
            <section className="about-section">
                <h1>About</h1>
                <p>
                    filmsPerSecond is an online movie database application that
                    allows users to browse and view detailed information about
                    popular, top-rated, and upcoming movies. filmsPerSecond also
                    allows users to track their favorite movies.
                </p>
            </section>
        </>
    );
}

export default PageAbout;
