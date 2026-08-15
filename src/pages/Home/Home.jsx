import Navbar from "../../components/Navbar/Navbar"
import Loading from '../../components/Loading/Loading'
import { useContext, useEffect } from "react"
import { featuredBirdContext } from "../../context/featuredBirdContext"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { ArrowRight, Compass, ShieldCheck, Music } from 'lucide-react';
import { Link} from 'react-router-dom'
import heroBird from '../../assets/ray-hennessy-TAJHgDh7BY0-unsplash.jpg'

export default function Home() {
  const { data, loading, error, retry, setFeaturedEndpoint } = useContext(featuredBirdContext)

  useEffect(() => {
    setFeaturedEndpoint(
      `/api/birds?scientific_name=${encodeURIComponent("Sterna paradisaea")}`
    )
  }, [setFeaturedEndpoint])

  if (loading) return <Loading/>

  if (error) return <ErrorMessage message={error.message} onRetry={retry} />
  if (!Array.isArray(data) || data.length === 0) {

    return <ErrorMessage message="We couldn't load the page properly, please retry." onRetry={retry} />

  }
  const featuredBird = data[0]

  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl space-y-14 px-5 py-8 sm:px-8 sm:py-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-[#082b50] p-8 text-white shadow-xl shadow-blue-950/15 sm:p-12 lg:p-16">
        <img src={heroBird} alt="Bird in flight" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082b50] via-[#0c3d70]/90 to-[#0c3d70]/35" />
        <div className="max-w-2xl space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Discover the world's birds
          </h1>
          <p className="text-blue-100 text-base sm:text-lg">
            Explore species taxonomy, vocalizations, distribution, and environmental status across global ecosystems.
          </p>
          <div className="flex flex-wrap gap-4">
             <Link
            to="/explore"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#0e4f8f] shadow-md transition hover:bg-sky-50"
          >
            <span>Explore Birds</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/local-radar"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-[#0e4f8f] shadow-md transition hover:bg-sky-50"
          >
            <span>Local bird Radar</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
          </div>
         
      </section>

      {/* Feature Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <Compass className="h-8 w-8 text-blue-600" />
          <h3 className="text-lg font-bold text-[#0b1f3a]">Extensive Catalog</h3>
          <p className="text-sm text-gray-600">Access data profiles on thousands of verified avian species.</p>
        </div>
        <div className="space-y-2 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <Music className="h-8 w-8 text-blue-600" />
          <h3 className="text-lg font-bold text-[#0b1f3a]">Audio Records</h3>
          <p className="text-sm text-gray-600">Listen to high-fidelity field recordings of calls and songs.</p>
        </div>
        <div className="space-y-2 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5">
          <ShieldCheck className="h-8 w-8 text-blue-600" />
          <h3 className="text-lg font-bold text-[#0b1f3a]">Conservation Tracking</h3>
          <p className="text-sm text-gray-600">Monitor IUCN vulnerability designations per species.</p>
        </div>
      </section>

      {/* Featured Bird Section */}
      {featuredBird && (
        <section className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-950/5 sm:p-8">
          <h2 className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-blue-600">Featured Bird</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="h-64 overflow-hidden rounded-xl bg-blue-50">
              <img
                src={featuredBird.male_image || featuredBird.female_image}
                alt={featuredBird.common_name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#0b1f3a]">{featuredBird.common_name}</h3>
              <p className="text-sm italic text-gray-500">{featuredBird.scientific_name}</p>
              <p className="text-sm text-gray-600 line-clamp-3">{featuredBird.description}</p>
              <Link
                to={`/bird/${featuredBird.scientific_name}`}
                className="inline-block text-sm font-semibold text-blue-700 hover:underline"
              >
                More about the {featuredBird.common_name} &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
    </>
  )
}
