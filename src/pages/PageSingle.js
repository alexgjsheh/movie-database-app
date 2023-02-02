import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { toHoursAndMinutes } from "../utils/lib";

import FavButtonSingle from "../components/FavButtonSingle";
import { useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import { useSelector } from "react-redux";

const apiKey = "c996a81d85c17dc34079c75c472905fd";

function PageSingle({ isFav }) {
    const [singleMovieObject, setSingleMovieObject] = useState({});

    const favs = useSelector((state) => state.favs.items);

    const dispatch = useDispatch();

    function handleFavClick(addToFav) {
        if (addToFav === true) {
            console.log(singleMovieObject);
            dispatch(addFav(singleMovieObject));
        } else {
            console.log(singleMovieObject);
            dispatch(deleteFav(singleMovieObject));
        }
    }

    for (let index = 0; index < favs.length; index++) {
        if (favs[index].id === singleMovieObject.id) {
            isFav = true;
        } else {
            isFav = false;
        }
    }

    useEffect(() => {
        document.title = `filmsPerSecond - Single Movie`;
    }, []);

    // extracting "id" parameter passed into this component
    let { id } = useParams();

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
            );
            const movie = await data.json();
            console.log(movie);
            // saving movie object
            setSingleMovieObject(movie);
        };
        fetchMovies();
    }, [id]);

    const genres = [];
    // looping through and pushing genres into array
    // singleMovieObject.genres is an array of objects
    if (singleMovieObject?.genres) {
        for (let i = 0; i < singleMovieObject.genres.length; i++) {
            genres.push(` ${singleMovieObject.genres[i].name}`);
        }
    }

    // use curly braces + && for image path to prevent the current error
    return (
        <section className="single-movie-info-container">
            <h2 className="single-movie-header">{singleMovieObject.title}</h2>
            {/* rename this class to something better later */}
            <div className="single-movie-top-container">
                <p className="single-movie-rating">{`${Math.round(
                    singleMovieObject.vote_average * 10
                )}%`}</p>
                <img
                    className="single-movie-poster"
                    src={
                        "https://image.tmdb.org/t/p/w500" +
                        singleMovieObject.poster_path
                    }
                    alt="Movie Poster"
                />
                {isFav ? (
                    <FavButtonSingle
                        remove={true}
                        handleFavClick={handleFavClick}
                    />
                ) : (
                    <FavButtonSingle handleFavClick={handleFavClick} />
                )}
            </div>
            {/* rename this class to something better later */}

            <div className="single-movie-bottom-container">
                <p className="single-movie-general-info">
                    {singleMovieObject.release_date} • {genres.toString()} •{" "}
                    {toHoursAndMinutes(singleMovieObject.runtime)}
                </p>
                <h3 className="single-movie-overview-header">Overview</h3>
                <p className="single-movie-overview">
                    {singleMovieObject.overview}
                </p>
            </div>
        </section>
    );
}

export default PageSingle;
