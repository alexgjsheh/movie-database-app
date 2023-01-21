import { useEffect } from "react";

function PageFavorites({ card }) {
    useEffect(() => {
        document.title = `filmsPerSecond - Favorites`;
    }, []);

    return (
        <>
            <section className="main-content">
                <div
                    className="movie-card-container"
                    style={{ position: "relative" }}
                >
                    {card}
                </div>
            </section>
        </>
    );
}

export default PageFavorites;
