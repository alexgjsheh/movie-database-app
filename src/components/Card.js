import { useState, useEffect } from "react";
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";

import { Link } from "react-router-dom";

function Card({
    object,
    id,
    title,
    voteAverage,
    overview,
    posterPath,
    releaseDate,
}) {
    const [isLiked, setIsLiked] = useState(false);
    // button to change filter
    const [hover, setHover] = useState(false);

    function handleFavoriteButton() {
        setIsLiked(!isLiked);
    }

    // function handleFavoriteButton2() {
    //     if (isLiked) {
    //         const movieString = JSON.stringify(object);
    //         const originData = getItem("favorites");
    //         // originData.push();
    //         localStorage.setItem("favorites", movieString);
    //     } else if (!isLiked) {
    //         localStorage.removeItem(id);
    //     }
    // }

    // locally storing favorites
    useEffect(() => {
        if (isLiked) {
            const movieString = JSON.stringify(object);
            localStorage.setItem(id, movieString);
        } else if (!isLiked) {
            localStorage.removeItem(id);
        }
    }, [isLiked]);

    return (
        <article
            className="movie-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img
                className={`movie-card-image ${hover ? "darken" : ""}`}
                src={"https://image.tmdb.org/t/p/w500" + posterPath}
                alt="Movie Image"
            />
            <div className={`movie-hover ${hover ? "hovered" : ""}`}>
                <img
                    className="heart"
                    src={isLiked ? filledHeart : unfilledHeart}
                    alt="Heart Image"
                    onClick={handleFavoriteButton}
                />
                <p className="movie-overview">{overview}</p>
                {/* <a className="more-info-btn" href="#">
                    More Info
                </a> */}

                {/* adding the movie id to the link as aN URL parameter */}
                <Link className="more-info-btn" to={`/single-movie/${id}`}>
                    More Info
                </Link>
            </div>
            <div className="movie-info-container">
                <p className="movie-title">{title}</p>
                <p>{releaseDate}</p>
                <p>{`${voteAverage * 10}%`}</p>
            </div>
        </article>
    );
}

export default Card;
