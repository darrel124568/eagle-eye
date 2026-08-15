import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { detailedBirdContext } from "../../context/detailedBirdContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from '../../components/Loading/Loading'
import ToggleFavorite from "../../utils/toggleFavorite";

 const fallbackImage = 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=600&q=80'

const taxonomyFields = [
  "domain",
  "kingdom",
  "phylum",
  "class",
  "order",
  "family",
  "genus",
  "species",
];

export default function BirdDetails() {
  const { sciName } = useParams();
  const {setDetailedEndpoint, data, error, loading } = useContext(detailedBirdContext)

  useEffect(() => {
     
  setDetailedEndpoint(`/api/birds?scientific_name=${encodeURIComponent(sciName)}`)    
  }, [sciName, setDetailedEndpoint]);

  if (error) {
    return (
      <><Navbar />
      <main className="p-6" role="alert">
        <ErrorMessage>{error}</ErrorMessage>
      </main>
      </>
    )
  }

  if (loading) {
    return <><main className="p-6"><Loading/></main></>;
  }

  const bird = Array.isArray(data) ? data[0] : data;

  if (!bird) {
    return <><Navbar /><main className="p-6">No bird details were found.</main></>;
  }

  const images = [
    ["Male", bird.male_image || fallbackImage],
    ["Female", bird.female_image || fallbackImage],
    ...(bird.other_images || []).map((image) => [image.name || "Bird image", image.source]),
  ].filter(([, source]) => source);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
        <header>
          <p className="text-sm font-semibold text-blue-700">{bird.conservation_status}</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0b1f3a]">{bird.common_name}</h1>
          <p className="text-lg italic text-gray-600">{bird.scientific_name}</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Bird images">
          {images.map(([name, source], index) => (
            <figure key={`${source}-${index}`}>
              <img className="h-64 w-full rounded-xl object-cover shadow-sm" src={source} alt={`${bird.common_name} — ${name}`} loading="lazy"/>
              <figcaption className="mt-1 text-sm text-gray-600">{name}</figcaption>
            </figure>
          ))}
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-[#0b1f3a]">About</h2>
          <p className="max-w-3xl leading-7 text-slate-700">{bird.description}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-[#0b1f3a]">Classification</h2>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {taxonomyFields.map((field) => bird[field] && (
              <div key={field} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5">
                <dt className="text-sm text-gray-600">{field}</dt>
                <dd className="font-medium">{bird[field]}</dd>
              </div>
            ))}
          </dl>
        </section>

        {bird.sound && <section><h2 className="text-2xl font-semibold mb-2">Call</h2><audio controls src={bird.sound}>Your browser does not support audio playback.</audio></section>}
        {bird.sources && <p><a className="font-semibold text-blue-700 underline" href={bird.sources} target="_blank" rel="noreferrer">Learn more about {bird.common_name}</a></p>}
         <ToggleFavorite bird={bird}/>
      </main>
    </>
  );
}
