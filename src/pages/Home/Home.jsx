import Navbar from "../../components/Navbar/Navbar"
import BirdCard from '../../components/BirdCard/BirdCard'
import { useContext, useEffect } from "react"
import { birdContext } from "../../context/birdContext"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { ArrowRight, Compass, ShieldCheck, Music } from 'lucide-react';
import { Link} from 'react-router-dom'

export default function Home() {
  const { data, loading, error, retry, setEndpoint } = useContext(birdContext)

  useEffect(() => {
    setEndpoint(
      `/api/birds?common_name=${encodeURIComponent("Arctic Tern")}`
    )
  }, [])

  if (loading) return <p>Loading bird…</p>
  if (error) return <ErrorMessage message={error.message} onRetry={retry} />
  if (!Array.isArray(data) || data.length === 0) return <p>No bird found.</p>
  const featuredBird = data[0]

  return (
    <>
    <Navbar />
    <div className="space-y-16 py-4">
      {/* Hero Section */}
      <section className="bg-green-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl">
        <div className="max-w-2xl space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Discover the world's birds
          </h1>
          <p className="text-green-100 text-base sm:text-lg">
            Explore species taxonomy, vocalizations, distribution, and environmental status across global ecosystems.
          </p>
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-500/90 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            <span>Explore Birds</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm space-y-2">
          <Compass className="h-8 w-8 text-green-500" />
          <h3 className="font-bold text-lg text-green-900">Extensive Catalog</h3>
          <p className="text-sm text-gray-600">Access data profiles on thousands of verified avian species.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm space-y-2">
          <Music className="h-8 w-8 text-green-500" />
          <h3 className="font-bold text-lg text-green-900">Audio Records</h3>
          <p className="text-sm text-gray-600">Listen to high-fidelity field recordings of calls and songs.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm space-y-2">
          <ShieldCheck className="h-8 w-8 text-green-500" />
          <h3 className="font-bold text-lg text-green-900">Conservation Tracking</h3>
          <p className="text-sm text-gray-600">Monitor IUCN vulnerability designations per species.</p>
        </div>
      </section>

      {/* Featured Bird Section */}
      {featuredBird && (
        <section className="bg-white rounded-2xl border border-green-100 p-6 sm:p-8 shadow-sm">
          <h2 className="text-xs font-bold text-green-500 uppercase tracking-wider mb-4">Featured Bird</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-64 rounded-xl overflow-hidden bg-green-100">
              <img
                src={featuredBird.male_image || featuredBird.female_image}
                alt={featuredBird.common_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-900">{featuredBird.common_name}</h3>
              <p className="text-sm italic text-gray-500">{featuredBird.scientific_name}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{featuredBird.description}</p>
              <Link
                to={`/bird/${featuredBird.id}`}
                className="inline-block text-green-800 font-semibold text-sm hover:underline"
              >
                More about this bird &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>    
    </>
  )
}
