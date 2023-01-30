// Fav Button
import unfilledHeart from "../images/unfilledHeart.svg";
import filledHeart from "../images/filledHeart.svg";

function FavButton({ object, remove, handleFavClick }) {
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
        className="heart"
        src={unfilledHeart}
        alt="Heart"
        onClick={handleAddFav}
      />
      ) : (
        <img
        className="heart"
        src={filledHeart}
        alt="Heart"
        onClick={handleRemoveFav}
    />
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;

