import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";

function PageFavourites() {
    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        document.title = `filmsPerSecond - Favourites`;
    }, []);

    return (
        <main>
            <section className="main-content">
                {favs.length < 1 ? (
                    <section className="about-section">
                        <h2 className="favourite-movies-heading">
                            Favourite Movies
                        </h2>
                        <p>
                            You have no favourite movies. Please add some
                            favourite movies by clicking the hearts on the home
                            page.
                        </p>
                    </section>
                ) : (
                    <>
                        <h2 className="favourite-movies-heading has-fav">
                            Favourite Movies
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

export default PageFavourites;
