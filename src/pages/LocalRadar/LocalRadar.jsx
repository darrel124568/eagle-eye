import Navbar from '../../components/Navbar/Navbar';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';


export default function LocalRadar() {

  const [location, setLocation] = useState(null);
  const [birds, setBirds] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${location.latitude}&lng=${location.longitude}`, 
        {
          headers: {
            'X-eBirdApiToken': 'd46e0c31-cf38-42b8-9b41-e70a016b0f5f' 
          }
        }
      )
        .then((response) => response.json())
        .then((data) => setBirds(data))
        .catch((error) => console.error('Error fetching birds:', error));
    }
  }, [location]);

  if (!location) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-7xl space-y-8 px-5 py-10 sm:px-8 sm:py-12">
          <p className="rounded-2xl border border-dashed border-blue-200 bg-white p-8 text-slate-600">
            Retrieving your location...
          </p>
        </main>
      </>
    );
  }

  if (birds.length === 0) {
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
          {birds.map((bird) => (
            <li key={bird.speciesCode} className="flex flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white p-5 shadow-sm shadow-blue-950/5">
              <h2 className="text-lg font-semibold text-[#0b1f3a]">{bird.comName}</h2>
              <p className="text-sm text-gray-600">{bird.sciName}</p>
              <p className="mt-2 text-sm text-gray-600">Observed on: {new Date(bird.obsDt).toLocaleDateString()}</p>
              <Link
                to={`/bird/${bird.speciesCode}`}
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
    