import { useContext } from 'react';
import { favoritesContext } from '../context/favoritesContext';
import { AddFavorite, RemoveFavorite } from './setFavorites';
 
export default function ToggleFavorite({bird}) {

    const { favorites, setFavorites } = useContext(favoritesContext);
    return (
    <div className="mt-4">
    {favorites.some((fav) => fav.scientific_name === bird.scientific_name) ? (
    <button
    className="rounded-xl border border-blue-200 bg-white px-4 py-2.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
    onClick={()=> RemoveFavorite(bird.scientific_name, favorites, setFavorites)}
    >
    Remove from Favorites
    </button>
    ) : (
    <button
    onClick={() => AddFavorite(bird, favorites, setFavorites)}
    className="rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
    Add to Favorites
    </button>
    )}
    </div>
    )
}
