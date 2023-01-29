import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";
import { toHoursAndMinutes } from "../utils/lib";

const apiKey = "c996a81d85c17dc34079c75c472905fd";

function PageSingle() {
    const [singleMovieObject, setSingleMovieObject] = useState({});

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

    console.log(genres);

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
                <img
                    className="single-movie-page-heart"
                    src={filledHeart}
                    alt="Heart Image"
                />
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
