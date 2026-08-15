import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { birdContext } from "../../context/birdContext";
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
  const { id } = useParams();
  const {setEndpoint, data, error, loading } = useContext(birdContext)

  useEffect(() => {
     
  setEndpoint(`/api/birds/${id}`)    
  }, [id, setEndpoint]);

  if (error) {
    return (
      <><Navbar />
      <main className="p-6" role="alert">
        <ErrorMessage>{error}</ErrorMessage>
      </main>
      </>
    )
  }

  if (!data) {
    return <><Navbar /><main className="p-6">Loading bird details...</main></>;
  }

  if (loading) {
    return <><main className="p-6"><Loading/></main></>;
  }

  const images = [
    ["Male", data.male_image || fallbackImage],
    ["Female", data.female_image || fallbackImage],
    ...(data.other_images || []).map((image) => [image.name || "Bird image", image.source]),
  ].filter(([, source]) => source);

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
        <header>
          <p className="text-sm font-semibold text-blue-700">{data.conservation_status}</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0b1f3a]">{data.common_name}</h1>
          <p className="text-lg italic text-gray-600">{data.scientific_name}</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Bird images">
          {images.map(([name, source], index) => (
            <figure key={`${source}-${index}`}>
              <img className="h-64 w-full rounded-xl object-cover shadow-sm" src={source} alt={`${data.common_name} — ${name}`} loading="lazy"/>
              <figcaption className="mt-1 text-sm text-gray-600">{name}</figcaption>
            </figure>
          ))}
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-[#0b1f3a]">About</h2>
          <p className="max-w-3xl leading-7 text-slate-700">{data.description}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-[#0b1f3a]">Classification</h2>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {taxonomyFields.map((field) => data[field] && (
              <div key={field} className="rounded-xl border border-blue-100 bg-white p-4 shadow-sm shadow-blue-950/5">
                <dt className="text-sm text-gray-600">{field}</dt>
                <dd className="font-medium">{data[field]}</dd>
              </div>
            ))}
          </dl>
        </section>

        {data.sound && <section><h2 className="text-2xl font-semibold mb-2">Call</h2><audio controls src={data.sound}>Your browser does not support audio playback.</audio></section>}
        {data.sources && <p><a className="font-semibold text-blue-700 underline" href={data.sources} target="_blank" rel="noreferrer">Learn more about {data.common_name}</a></p>}
         <ToggleFavorite bird={data}/>
      </main>
    </>
  );
}
