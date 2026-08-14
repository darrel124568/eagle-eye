import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImageOff } from 'lucide-react';
import { birdContext } from '../../context/birdContext';

export default function BirdCard({ bird }) {
  const [imgError, setImgError] = useState(false);
  const { favorites, setFavorites } = useContext(birdContext);

  const fallbackImage = 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80';

function handleClick() {
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

    alert(`${bird.common_name} has been added to your favorites!`);
  } else {
    alert("This bird is already in your favorites.");
  }
}

  return (

  <div className="group flex flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {
    <section className="bg-white rounded-2xl border border-green-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-wider mb-4">{bird.common_name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-64 rounded-xl overflow-hidden bg-green-100">
              <img
                src={bird.male_image || bird.female_image}
                alt={bird.common_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-900">{bird.common_name}</h3>
              <p className="text-sm italic text-gray-500">{bird.scientific_name}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{bird.description}</p>
              <Link
                to={`/bird/${bird.id}`}
                className="inline-block text-green-800 font-semibold text-sm hover:underline"
              >
                More about this the {bird.common_name} &rarr;
              </Link>
              {bird.sound && <section><h2 className="text-2xl font-semibold mb-2">Listen</h2><audio controls src={bird.sound}>Your browser does not support audio playback.</audio></section>}
            </div>
            {favorites.some((fav) => fav.id === bird.id) ? (
          <button
            className="w-50 cursor-not-allowed rounded-xl bg-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-500"
            disabled
          >
            Already in Favorites
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="w-50 rounded-xl bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            Add to Favorites
          </button>
        )}
          </div>
        </section>
        }
      </div>
  );
}