import Navbar from "../../components/Navbar/Navbar"
import BirdCard from '../../components/BirdCard/BirdCard'
import { useContext, useEffect } from "react"
import { birdContext } from "../../context/birdContext"

export default function Home() {
  const { data, loading, error, setEndpoint } = useContext(birdContext)

  useEffect(() => {
    setEndpoint(
      `/api/birds?common_name=${encodeURIComponent("Abbott's babbler")}`
    )
  }, [])

  if (loading) return <p>Loading bird…</p>
  if (error) return <p>{error.message}</p>
  if (!Array.isArray(data) || data.length === 0) return <p>No bird found.</p>

  return (
    <>
      <Navbar />
      <h1>Home page</h1>
      <BirdCard bird={data[0]} />
    </>
  )
}