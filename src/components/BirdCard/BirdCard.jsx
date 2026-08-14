import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageOff } from 'lucide-react';

export default function BirdCard({ bird }) {
  const [imgError, setImgError] = useState(false);

  const fallbackImage = 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80';

  function handleclick() {
    const favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
    );
  if (!favorites.some(fav => fav.id === bird.id)) {
  favorites.push({id:bird.id, name: bird.common_name});

  localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  else {
    alert("This bird is already in your favorites.");
  }
}

  return (
    <div className="bg-white rounded-xl shadow-sm border border-forest-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
      <div className="relative h-48 bg-forest-100 flex items-center justify-center overflow-hidden">
        {!imgError ? (
          <img
            src={bird.male_image || fallbackImage}
            alt={bird.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-forest-500 p-4">
            <ImageOff className="h-8 w-8 mb-1" />
            <span className="text-xs">Image unavailable</span>
          </div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-lg text-forest-900 line-clamp-1">{bird.common_name}</h3>
          <p className="text-xs italic text-gray-500 mb-2">{bird.scientific_name || 'Species unknown'}</p>
          <p className="text-sm text-gray-600 line-clamp-2">{bird.description || 'No description available.'}</p>
        </div>
        <Link
          to={`/bird/${bird.id}`}
          className="mt-4 inline-block text-center w-full py-2 bg-green-800 hover:bg-green-900 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          View Details
        </Link>
        <button
          onClick={handleclick}
          className="mt-4 inline-block text-center w-full py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Add to Favorites
        </button>
      </div>
    </div>
  );
}