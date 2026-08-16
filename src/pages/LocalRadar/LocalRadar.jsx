import Navbar from '../../components/Navbar/Navbar';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import useBirds from '../../hooks/useBirds';


export default function LocalRadar() {

  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const geolocationSupported = typeof navigator !== 'undefined' && Boolean(navigator.geolocation);
  const apiKey = import.meta.env.VITE_EBIRD_API_KEY;
  const endpoint = location
    ? `/v2/data/obs/geo/recent?lat=${location.latitude}&lng=${location.longitude}`
    : null;
  const options = { headers: { "X-eBirdApiToken": apiKey } } ;
  const {data, loading, error, retry} = useBirds(endpoint, 'https://api.ebird.org', options);

  useEffect(() => {
    if (!geolocationSupported) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setLocationError(error.message || 'Location permission was not granted.');
      }
    );
  }, [geolocationSupported]);

  if (!geolocationSupported) {
    return (
      <><Navbar /><main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12"><p className="rounded-2xl border border-red-200 bg-white p-8 text-slate-700">Geolocation is not supported by this browser.</p></main></>
    );
  }

  if (locationError) {
    return (
      <><Navbar /><main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12"><p className="rounded-2xl border border-red-200 bg-white p-8 text-slate-700">{locationError}</p></main></>
    );
  }

  if (!location) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <p className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-slate-600">
            Retrieving your location...
          </p>
          <Loading/>
        </main>
      </>
    );
  }

  if (loading) {
    return <><Navbar /><main className="p-6"><Loading /></main></>;
  }

  if (error) {
    return <ErrorMessage message={error.message} onRetry={retry} />;
  }

  if (data.length === 0) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <p className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-slate-600">
            No birds found in your area.
          </p>
        </main>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-blue-600">Local Radar</p>
          <h1 className="text-4xl font-bold tracking-tight text-[#0b1f3a]">Birds in Your Area</h1>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((bird) => (
            <li key={bird.speciesCode} className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
              <h2 className="text-lg font-semibold text-[#0b1f3a]">{bird.comName}</h2>
              <p className="text-sm text-gray-600">Scientific Name: {bird.sciName}</p>
              <p className="mt-2 text-sm text-gray-600">{bird.howMany} observed on {new Date(bird.obsDt).toLocaleDateString()}</p>
              <Link
                to={`/bird/${encodeURIComponent(bird.sciName)}`}
                className="mt-4 inline-block w-full rounded-xl bg-blue-700 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                View Details
              </Link>
            </li>
          ))
          }
        </ul>
      </main>
    </>
  );
}
