import Slider from "react-slick";
import { Link } from "react-router-dom";

import "./slick.css";
import "./slick-theme.css";

function Carousel({ arrayFromApiSliced }) {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
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
