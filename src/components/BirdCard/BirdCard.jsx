import { Link } from 'react-router-dom';
import ToggleFavorite from '../../utils/toggleFavorite';

export default function BirdCard({ bird }) {
  return (
  <article className="group flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm shadow-blue-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <section className="bg-white p-6 sm:p-7">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-blue-600">{bird.common_name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-52 overflow-hidden rounded-xl bg-blue-50">
              <img
                src={bird.male_image || bird.female_image || 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80'}
                alt={bird.common_name}
                className="w-full h-full object-cover"
                loading='Lazy'
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0b1f3a]">{bird.common_name}</h3>
              <p className="text-sm italic text-gray-500">{bird.scientific_name}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{bird.description}</p>
              <Link
                to={`/bird/${bird.scientific_name}`}
                className="inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                More about {bird.common_name} &rarr;
              </Link>
              {bird.sound && <section><h2 className="text-2xl font-semibold mb-2">Listen</h2><audio controls src={bird.sound} className="w-full">
                Your browser does not support audio playback.
              </audio></section>}
            </div>
          <ToggleFavorite bird={bird}/>
      </div>
      </section>
      </article>
  );
}
