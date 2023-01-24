import { Link } from "react-router-dom";

function Hero({ id, title, overview, backdropPath }) {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{overview}</p>
                {/* <a className="more-info-btn" href="#">
                    More Info
                </a> */}
                <Link className="more-info-btn" to={`/single-movie/${id}`}>
                    More Info
                </Link>
            </div>
            <img
                src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
                alt="Hero Banner"
                className="hero-img"
            />
        </div>
    );
}

export default Hero;