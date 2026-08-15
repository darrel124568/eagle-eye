import {useState, useContext, useRef, useEffect} from "react"
import { birdContext } from "../../context/birdContext"
import { FilterX, Search, X } from 'lucide-react';

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
    <div className="flex items-center justify-between mb-2">
    <form id="search-form" onSubmit={(e)=>handleSubmit(e)} className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search by common or scientific name..."
        className="w-full pl-10 pr-10 py-3 bg-white border border-forest-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-500 text-forest-900 placeholder-gray-400 shadow-sm"
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
      <select onChange={(e)=>handleFilterChange(e)} value={filter} className="mb-2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
        <option value="" className="text-green-700">Search by...</option>
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
