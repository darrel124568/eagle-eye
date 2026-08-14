import Navbar from "../../components/Navbar/Navbar"
import BirdCard from '../../components/BirdCard/BirdCard'
import { useContext, useEffect } from "react"
import { birdContext } from "../../context/birdContext"
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function Home() {
  const { data, loading, error, retry, setEndpoint } = useContext(birdContext)

  useEffect(() => {
    setEndpoint(
      `/api/birds?common_name=${encodeURIComponent("Abbott's babbler")}`
    )
  }, [])

  if (loading) return <p>Loading bird…</p>
  if (error) return <ErrorMessage message={error.message} onRetry={retry} />
  if (!Array.isArray(data) || data.length === 0) return <p>No bird found.</p>

  return (
    <>
      <Navbar />
      <main>
        <section>
          <h1>Discover the world of birds</h1>
          <p>
            Explore a collection of more than 11,000 bird species, each with
            comprehensive information and its conservation status to help raise
            awareness and support their protection.
          </p>
          <p>
            Save birds to your favourites and add personal notes to keep track
            of the species that inspire you.
          </p>
        </section>
        <h1>Featured bird</h1>
        <BirdCard bird={data[0]} />
      </main>
    </>
  )
}
