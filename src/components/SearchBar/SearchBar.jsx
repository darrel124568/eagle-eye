import {useState, useContext, useRef, useEffect} from "react"
import { birdContext } from "../../context/birdContext"
import { Search, X } from 'lucide-react';

export default function SearchBar() {
  const inputRef = useRef(null);
  const [term, setTerm] = useState('')
  const {setEndpoint} = useContext(birdContext)

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault()
    setEndpoint(`/api/birds?common_name=${encodeURIComponent(term)}`)
    setTerm('')
  }

  const handleClear = () => {
    setTerm('');
  };
 return (
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
  );
}
