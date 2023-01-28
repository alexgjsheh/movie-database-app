// Fav Button

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
        <button onClick={handleAddFav}>Add To Favourites</button>
      ) : (
        <button onClick={handleRemoveFav}>Remove From Favourites</button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
