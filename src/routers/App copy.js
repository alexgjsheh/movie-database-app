import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Hero from "./Hero";
import FilterBtn from "./FilterBtn";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { getItem } from "../utils/lib";
const apiKey = "c996a81d85c17dc34079c75c472905fd";

function App() {
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

    const favs = getItem("favorites");

    // generate cards here
    let cards = arrayFromApi.map((movie, i) => (
        <Card
            object={arrayFromApi[i]}
            key={movie.id}
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

    const filterBtns = [
        {
            name: "Popular",
            type: "popular",
        },
    ];
    // create a function to store favorites into local storage that you pass down to each child component

    let randIndex = Math.floor(Math.random() * 20);
    const randHero = arrayFromApi?.[randIndex];

    return (
        <div className="App">
            <Navbar />
            {randHero ? (
                <Hero
                    title={randHero.title}
                    overview={randHero.overview}
                    backdropPath={randHero.backdrop_path}
                />
            ) : null}
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
                    />
                ))} */}
                <FilterBtn
                    name="Popular"
                    type="popular"
                    handleClick={handleFilterButton}
                />
                <FilterBtn
                    name="Top Rated"
                    type="top_rated"
                    handleClick={handleFilterButton}
                />
                <FilterBtn
                    name="Upcoming"
                    type="upcoming"
                    handleClick={handleFilterButton}
                />
                <FilterBtn
                    name="Now Playing"
                    type="now_playing"
                    handleClick={handleFilterButton}
                />
            </div>
            <section className="main-content">
                <div
                    className="movie-card-container"
                    style={{ position: "relative" }}
                >
                    {cards}
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;

// camel case prop names
// props that pass functions use onclick, actual function name uses the word handle
