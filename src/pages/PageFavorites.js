import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function PageFavorites() {
    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        document.title = `filmsPerSecond - Favorites`;
    }, []);

    return (
        <main>
            <section className="main-content">
                {favs.length < 1 ? (
                    <section className="about-section">
                        <h2 className="favorite-movies-heading">
                            Favorite Movies
                        </h2>
                        <p>
                            No favorite Movies. Please add some favorite Movies.
                        </p>
                    </section>
                ) : (
                    <>
                        <h2 className="favorite-movies-heading has-fav">
                            Favorite Movies
                        </h2>
                        <div className="movie-card-container">
                            {favs.map((movie, i) => {
                                return (
                                    <Card
                                        object={favs[i]}
                                        key={movie.id}
                                        id={movie.id}
                                        title={movie.title}
                                        voteAverage={movie.vote_average}
                                        overview={movie.overview}
                                        posterPath={movie.poster_path}
                                        releaseDate={movie.release_date}
                                        isFav={true}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
            </section>
        </main>
    );
}

export default PageFavorites;
