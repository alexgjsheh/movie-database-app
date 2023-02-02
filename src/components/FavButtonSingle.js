// Fav Button
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";

function FavButtonSingle({ object, remove, handleFavClick }) {
    function handleAddFav() {
        handleFavClick(true, object);
    }

    function handleRemoveFav() {
        handleFavClick(false, object);
    }

    return (
        <>
            {remove === false ? (
                <img
                    className="single-movie-page-heart"
                    src={unfilledHeart}
                    alt="Heart"
                    onClick={handleAddFav}
                />
            ) : (
                <img
                    className="single-movie-page-heart"
                    src={filledHeart}
                    alt="Heart"
                    onClick={handleRemoveFav}
                />
            )}
        </>
    );
}

FavButtonSingle.defaultProps = {
    remove: false,
};

export default FavButtonSingle;
