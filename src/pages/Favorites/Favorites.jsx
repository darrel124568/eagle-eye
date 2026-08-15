import Navbar from "../../components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { favoritesContext } from "../../context/favoritesContext";
import { RemoveFavorite } from "../../utils/setFavorites";

export default function Favorites() {
  const {favorites, setFavorites} = useContext(favoritesContext)
  

  return (
    <>
    <Navbar/>
    <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
      <div><p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-blue-600">Your collection</p><h1 className="text-4xl font-bold tracking-tight text-[#0b1f3a]">Favorite Birds</h1></div>
      {favorites === null ? (
        <p className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-slate-600">You have no favorite birds yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((bird) => (
        <li key={bird.id} className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
          <Link
          to={`/bird/${bird.id}`}
          className="mt-4 inline-block w-full rounded-xl bg-blue-700 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
          View the {bird.name}
          </Link>
          <button onClick={() => RemoveFavorite(bird.id, favorites, setFavorites)} className="mt-3 inline-block w-full rounded-xl border border-blue-200 py-2.5 text-center text-sm font-semibold text-blue-800 transition-colors hover:bg-blue-50">
          Remove from Favorites</button>
        </li>
          ))}
        </ul>
      )}
    </main>
    </>
  );
}
