
export function AddFavorite(bird, favorites, setFavorites) {
  if (!favorites.some(fav => fav.scientific_name === bird.scientific_name)) {
    const updatedFavorites = [
      ...favorites,
      {
        scientific_name: bird.scientific_name,
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

export function RemoveFavorite(birdSciName, favorites, setFavorites) {
  const updatedFavorites = favorites.filter(bird => bird.scientific_name !== birdSciName);
  setFavorites(updatedFavorites);
  
  localStorage.setItem(
    "favorites",
    JSON.stringify(updatedFavorites)
  );
}
