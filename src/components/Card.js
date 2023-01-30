import { useState, useEffect } from "react";
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";
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
    movieObj,
    isFav,
}) {
    const [isLiked, setIsLiked] = useState(false);
    // button to change filter
    const [hover, setHover] = useState(false);

    function handleFavoriteButton() {
        setIsLiked(!isLiked);
    }

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
                
            <div className="btn-favourite">
                {isFav ? (
                <FavButton
                    movieObj={movieObj}
                    remove={true}
                    handleFavClick={handleFavClick}
                />
                ) : (
                <FavButton
                    movieObj={movieObj}
                    handleFavClick={handleFavClick}
                />
                )}
            </div>


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
