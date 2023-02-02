import { useState } from "react";
import FavButton from "./FavButton";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";

import { Link } from "react-router-dom";

function Card({
    object,
    id,
    title,
    voteAverage,
    overview,
    posterPath,
    releaseDate,
    isFav,
}) {
    // button to change filter
    const [hover, setHover] = useState(false);
    const [clicked, setClick] = useState(false);

    const dispatch = useDispatch();

    function handleFavClick(addToFav) {
        if (addToFav === true) {
            console.log(object);
            dispatch(addFav(object));
        } else {
            console.log(object);
            dispatch(deleteFav(object));
        }
    }

    return (
        <article
            className="movie-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setClick(!clicked)}
        >
            <img
                className={`movie-card-image ${
                    hover || clicked ? "darken" : ""
                }`}
                src={"https://image.tmdb.org/t/p/w500" + posterPath}
                alt="Movie Poster"
            />
            <div className={`movie-hover ${hover || clicked ? "hovered" : ""}`}>
                <div className="btn-favourite">
                    {isFav ? (
                        <FavButton
                            remove={true}
                            handleFavClick={handleFavClick}
                        />
                    ) : (
                        <FavButton handleFavClick={handleFavClick} />
                    )}
                </div>
                <p className="movie-overview">{overview}</p>
                {/* adding the movie id to the link as aN URL parameter */}
                <Link className="more-info-btn" to={`/single-movie/${id}`}>
                    More Info
                </Link>
            </div>
            <div className="movie-info-container">
                <p className="movie-title">{title}</p>
                <p>{releaseDate}</p>
                <p>{`${Math.round(voteAverage * 10)}%`}</p>
            </div>
        </article>
    );
}

export default Card;
