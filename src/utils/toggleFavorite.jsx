import { useContext } from 'react';
import { birdContext } from '../context/birdContext';
import { AddFavorite, RemoveFavorite } from './setFavorites';
 
export default function ToggleFavorite({bird}) {

    const { favorites, setFavorites } = useContext(birdContext);
    return (
    <div className="mt-4">
    {favorites.some((fav) => fav.id === bird.id) ? (
    <button
    className="w-50 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white"
    onClick={()=> RemoveFavorite(bird.id, favorites, setFavorites)}
    >
    Remove from Favorites
    </button>
    ) : (
    <button
    onClick={() => AddFavorite(bird, favorites, setFavorites)}
    className="w-50 rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
    >
    Add to Favorites
    </button>
    )}
    </div>    
    )
}
    