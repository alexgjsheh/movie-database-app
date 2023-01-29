import { useEffect } from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { favsSlice } from "../features/favs/favsSlice";

function PageFavorites() {
  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `filmsPerSecond - Favorites`;
  }, []);

  return (
    <main>
      <section>
        <h2>Favourite Movies</h2>
        {favs.length < 1 ? (
          <p>
            No favorite Movies. Please add some favorite Movies.
            <Card/>
          </p>
        ) : (
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
                />
              );
            })}
          </div>
          )}
      </section>
    </main>
  );
}

export default PageFavorites;
