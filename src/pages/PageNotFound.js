import { useEffect } from "react";

function PageNotFound() {
    useEffect(() => {
        document.title = `filmsPerSecond - Page Not Found`;
    }, []);
    return (
        <>
            <section className="page-not-found-section">
                <h2 className="page-not-found-heading">Page Not Found</h2>
                <p>
                    The page you are looking for was not found. Please go back
                    to home.
                </p>
            </section>
        </>
    );
}

export default PageNotFound;
