import "../components/App.css";
import Card from "../components/Card";
import Hero from "../components/Hero";
import FilterBtn from "../components/FilterBtn";
import MoreMoviesBtn from "../components/MoreMoviesBtn";
import { useState, useEffect } from "react";
// import { getItem } from "../utils/lib";
import isFav from "../utils/isFav";
import { useSelector } from "react-redux";

import Carousel from "../components/Carousel/Carousel";

const apiKey = "c996a81d85c17dc34079c75c472905fd";

function PageHome() {
    // const [randomHeroObject, setRandomHeroObject] = useState();
    const [arrayFromApi, setArrayFromApi] = useState([]);
    const [movieFilter, setMovieFilter] = useState("popular");
    const [pageNum, setPageNum] = useState(1);
    const favs = useSelector((state) => state.favs.items);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieFilter}?api_key=${apiKey}&language=en-US&page=${pageNum}`
                // `https://api.themoviedb.org/3/movie/${movieFilter}?api_key=${apiKey}`
            );
            const movies = await data.json();
            // problem if this number is higher
            if (pageNum === 1) {
                setArrayFromApi(movies.results);
            } else {
                setArrayFromApi((prevArrayFromApi) => {
                    // spreading the original array and the newly generated one
                    return [...prevArrayFromApi, ...movies.results];
                });
            }
            // Once you pull a array, you can set the movie banner here
            // setRandomHeroObject(
            //     movies.results?.[Math.floor(Math.random() * 20)]
            // );
        };
        fetchMovies();
    }, [movieFilter, pageNum]);

    // just for testing
    console.log(arrayFromApi);

    // button to change filter
    function handleFilterButton(filter) {
        setMovieFilter(filter);
        setPageNum(1);
    }

    // increment pageNumber when clicking more movies btn
    // can try appending each one by looping through them?
    function handleMoreMoviesButton() {
        setPageNum((prevState) => {
            return prevState + 1;
        });
    }

    // generate cards here

    // filter buttons array
    const filterBtnsArray = [
        {
            name: "Popular",
            type: "popular",
        },
        {
            name: "Top Rated",
            type: "top_rated",
        },
        {
            name: "Upcoming",
            type: "upcoming",
        },
        {
            name: "Now Playing",
            type: "now_playing",
        },
    ];

    const filterBtns = filterBtnsArray.map((item, i) => (
        <FilterBtn
            key={i}
            name={item.name}
            type={item.type}
            handleClick={handleFilterButton}
            currentFilter={movieFilter}
        />
    ));

    // to generate a random hero image

    // console.log(randomHeroObject);

    // const hero = randomHeroObject ? (
    //     <Hero
    //         title={randomHeroObject.title}
    //         overview={randomHeroObject.overview}
    //         backdropPath={randomHeroObject.backdrop_path}
    //         id={randomHeroObject.id}
    //     />
    // ) : null;

    useEffect(() => {
        document.title = `filmsPerSecond - Home`;
    }, []);

    // slice original array

    // let x = arrayFromApi.slice(0, 2);
    // console.log(x);

    return (
        <div className="App">
            {/* {hero} */}
            {arrayFromApi.length && (
                <Carousel arrayFromApiSliced={arrayFromApi.slice(0, 3)} />
            )}
            <div className="filter-btn-container">{filterBtns}</div>
            <section className="main-content">
                <div
                    className="movie-card-container"
                    style={{ position: "relative" }}
                >
                    {arrayFromApi.map((movie, i) => (
                        <Card
                            object={arrayFromApi[i]}
                            key={movie.id}
                            // this returns true or false
                            // fav={favs.includes(movie.id)}
                            id={movie.id}
                            title={movie.title}
                            voteAverage={movie.vote_average}
                            overview={movie.overview}
                            posterPath={movie.poster_path}
                            releaseDate={movie.release_date}
                            isFav={isFav(favs, null, movie.id)}
                        />
                    ))}
                </div>
                <MoreMoviesBtn onClick={handleMoreMoviesButton} />
            </section>
        </div>
    );
}

export default PageHome;

// camel case prop names
// props that pass functions use onclick, actual function name uses the word handle
