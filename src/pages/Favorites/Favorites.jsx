import Navbar from "../../components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { birdContext } from "../../context/birdContext";
import { RemoveFavorite } from "../../utils/setFavorites";

export default function Favorites() {
  const {favorites, setFavorites} = useContext(birdContext)
  

  return (
    <>
    <Navbar/>
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <h1 className="text-4xl font-bold mb-4">My Favorite Birds</h1>
      {favorites === null ? (
        <p>You have no favorite birds.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((bird) => (
        <div key={bird.id} className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col p-4">
          <Link
          to={`/bird/${bird.id}`}
          className="mt-4 inline-block text-center w-full py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
          View the {bird.name}
          </Link>
          <button onClick={() => RemoveFavorite(bird.id, favorites, setFavorites)} className="mt-4 inline-block text-center w-full py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors">
          Remove from Favorites</button>
        </div>
          ))}
        </ul>
      )}
    </main>
    </>
  );
}