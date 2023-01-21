import "../components/App.css";
import Card from "../components/Card";
import Hero from "../components/Hero";
import FilterBtn from "../components/FilterBtn";
import { useState, useEffect } from "react";
import { getItem } from "../utils/lib";
const apiKey = "c996a81d85c17dc34079c75c472905fd";

function PageHome() {
    const [arrayFromApi, setArrayFromApi] = useState([]);
    const [movieFilter, setMovieFilter] = useState("popular");

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieFilter}?api_key=${apiKey}`
            );
            const movies = await data.json();
            setArrayFromApi(movies.results);
        };
        fetchMovies();
    }, [movieFilter]);

    // just for testing
    console.log(arrayFromApi);

    // button to change filter
    function handleFilterButton(filter) {
        setMovieFilter(filter);
    }

    // const favs = getItem("favorites");

    // generate cards here
    let cards = arrayFromApi.map((movie, i) => (
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
            // handleFavoriteClick={handleFavoriteButton}
        />
    ));

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

    // create a function to store favorites into local storage that you pass down to each child component

    // to generate a random hero image
    let randIndex = Math.floor(Math.random() * 20);
    const randHero = arrayFromApi?.[randIndex];

    // TEST ARRAY TO PASS INTO SINGLE PAGE
    // const newArray = [];
    // for (let i = 0; i < arrayFromApi.length; i++) {
    //     newArray.push([arrayFromApi?.[i]]);
    // }
    // console.log(newArray);

    const hero = randHero ? (
        <Hero
            title={randHero.title}
            overview={randHero.overview}
            backdropPath={randHero.backdrop_path}
            id={randHero.id}
        />
    ) : null;

    useEffect(() => {
        document.title = `filmsPerSecond - Home`;
    }, []);

    const favs = getItem("favorites");

    // create a function to store favorites into local storage that you pass down to each child component

    return (
        <div className="App">
            {hero}
            {/* {randHero ? (
                <Hero
                    title={randHero.title}
                    overview={randHero.overview}
                    backdropPath={randHero.backdrop_path}
                    id={randHero.id}
                />
            ) : null} */}
            {/* <Hero
                title={arrayFromApi?.[randIndex]?.title}
                overview={arrayFromApi?.[randIndex]?.overview}
                backdropPath={arrayFromApi?.[randIndex]?.backdrop_path}
            /> */}
            <div className="filter-btn-container">
                {/* {filterBtns.map((item) => (
                    <FilterBtn
                        name={item.name}
                        type={item.type}
                        handleClick={handleFilterButton}
                        currentFilter={movieFilter}
                    />
                ))} */}
                {filterBtns}
            </div>
            <section className="main-content">
                <div
                    className="movie-card-container"
                    style={{ position: "relative" }}
                >
                    {cards}
                </div>
            </section>
        </div>
    );
}

export default PageHome;

// camel case prop names
// props that pass functions use onclick, actual function name uses the word handle
