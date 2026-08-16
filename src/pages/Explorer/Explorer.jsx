import Navbar from "../../components/Navbar/Navbar";
import BirdGrid from "../../components/BirdGrid/BirdGrid";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Explorer() {
  return (
    <>
    <Navbar />
    <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8 sm:py-12">
      <header className="mb-8 max-w-xl">
        <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-blue-600">Bird directory</p>
        <h1 className="text-3xl font-bold tracking-tight text-[#0b1f3a] sm:text-4xl">Find your next sighting.</h1>
      </header>
      <SearchBar />  
      <BirdGrid />
    </main>
    </>
  )
}
