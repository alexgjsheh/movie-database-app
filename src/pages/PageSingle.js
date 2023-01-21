import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";

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
            <img
                className="single-movie-poster"
                src={
                    "https://image.tmdb.org/t/p/w500" +
                    singleMovieObject.poster_path
                }
                alt="Movie Poster"
            />
            <div>
                <h1>{singleMovieObject.title}</h1>
                <p>
                    {singleMovieObject.release_date} • {genres.toString()} •{" "}
                    {`${singleMovieObject.runtime} minutes`}
                </p>
                <p className="single-movie-ratingw">{`${Math.round(
                    singleMovieObject.vote_average * 10
                )}%`}</p>
                <h2>Overview</h2>
                <p>{singleMovieObject.overview}</p>
                <h3>^_^</h3>
            </div>
        </section>
    );
}

export default PageSingle;
