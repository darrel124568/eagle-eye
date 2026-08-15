import {useState, useContext, useRef, useEffect} from "react"
import { birdContext } from "../../context/birdContext"
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const inputRef = useRef(null);
  const [term, setTerm] = useState('')
  const [filter, setFilter] = useState('common_name')
  const {setEndpoint} = useContext(birdContext)

  const custom_filters = [
    "common_name",
    "scientific_name",
    "family",
    "order",
    "genus",
    "species"
  ]

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    setEndpoint(`/api/birds?${filter}=${encodeURIComponent(term)}`)
    setTerm('')
  }

  const handleClear = () => {
    setTerm('');
  };

  function handleFilterChange(e) {
    setFilter(e.target.value)
  }
 return (
    <>
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
    <form id="search-form" onSubmit={(e)=>handleSubmit(e)} className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search by common or scientific name..."
        className="w-full rounded-xl border border-blue-200 bg-white py-3 pl-10 pr-10 text-[#0b1f3a] shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-slate-400"
      />
      <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" onClick={(e)=> handleSubmit(e)}/>
      {term && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </form>
    {
      <select onChange={(e)=>handleFilterChange(e)} value={filter} className="rounded-xl border border-blue-200 bg-white p-3 text-sm font-medium text-[#0b1f3a] shadow-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100">
        <option value="" className="text-blue-700">Search by...</option>
        {
          custom_filters.map((f)=> (
          <option key={f} value={f} className="text-gray-700">{f}</option>))  
        }
      </select>
        
    }
    </div>
    </>
  );
}
