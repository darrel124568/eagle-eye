import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { birdContext } from "../../context/birdContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

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
  const {setEndpoint, data, error } = useContext(birdContext)

  useEffect(() => {
     
  setEndpoint(`/api/birds/${id}`)    
  }, [id]);

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

  const images = [
    ["Male", data.male_image || fallbackImage],
    ["Female", data.female_image || fallbackImage],
    ...(data.other_images || []).map((image) => [image.name || "Bird image", image.source]),
  ].filter(([, source]) => source);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 space-y-8">
        <header>
          <p className="text-sm font-semibold text-green-800">{data.conservation_status}</p>
          <h1 className="text-4xl font-bold">{data.common_name}</h1>
          <p className="text-lg italic text-gray-600">{data.scientific_name}</p>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Bird images">
          {images.map(([name, source], index) => (
            <figure key={`${source}-${index}`}>
              <img className="w-full h-64 object-cover rounded-lg" src={source} alt={`${data.common_name} — ${name}`} loading="lazy"/>
              <figcaption className="mt-1 text-sm text-gray-600">{name}</figcaption>
            </figure>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>{data.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Classification</h2>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {taxonomyFields.map((field) => data[field] && (
              <div key={field} className="rounded-lg bg-gray-100 p-3">
                <dt className="text-sm text-gray-600">{field}</dt>
                <dd className="font-medium">{data[field]}</dd>
              </div>
            ))}
          </dl>
        </section>

        {data.sound && <section><h2 className="text-2xl font-semibold mb-2">Call</h2><audio controls src={data.sound}>Your browser does not support audio playback.</audio></section>}
        {data.sources && <p><a className="text-green-800 underline" href={data.sources} target="_blank" rel="noreferrer">Learn more about {data.common_name}</a></p>}
      </main>
    </>
  );
}
