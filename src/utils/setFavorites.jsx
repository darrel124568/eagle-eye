
export function AddFavorite(bird, favorites, setFavorites) {
  if (!favorites.some(fav => fav.id === bird.id)) {
    const updatedFavorites = [
      ...favorites,
      {
        id: bird.id,
        name: bird.common_name
      }
    ];

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  } else {
    alert("This bird is already in your favorites.");
  }
}

export function RemoveFavorite(birdId, favorites, setFavorites) {
  const updatedFavorites = favorites.filter(bird => bird.id !== birdId);
  setFavorites(updatedFavorites);
  
  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
}
