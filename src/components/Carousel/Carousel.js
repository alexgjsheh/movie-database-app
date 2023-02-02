import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./slick.css";
import "./slick-theme.css";

function Carousel({
    arrayFromApiSliced,
    // title,
    // overview,
    // backdropPath,
    // id,
    // title2,
    // overview2,
    // backdropPath2,
    // id2,
    // title3,
    // overview3,
    // backdropPath3,
    // id3,
}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "ease",
    };

    console.log(arrayFromApiSliced);
    return (
        <div>
            <Slider {...settings}>
                {arrayFromApiSliced?.map((movie, i) => (
                    <div className="hero" key={i}>
                        <div className="hero-text">
                            <h2>{movie.title}</h2>
                            <p className="hero-overview">{movie.overview}</p>
                            <Link
                                className="more-info-btn carousel"
                                to={`/single-movie/${movie.id}`}
                            >
                                More Info
                            </Link>
                        </div>
                        <img
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt="Hero Banner"
                            className="hero-img"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
