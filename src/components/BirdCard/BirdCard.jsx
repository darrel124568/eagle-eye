import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImageOff } from 'lucide-react';
import { birdContext } from '../../context/birdContext';
import ToggleFavorite from '../../utils/toggleFavorite';

export default function BirdCard({ bird }) {
  const [imgError, setImgError] = useState(false);
  

  const fallbackImage = 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80';


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
          <ToggleFavorite bird={bird}/>
          </div>
        </section>
        }
      </div>
  );
}