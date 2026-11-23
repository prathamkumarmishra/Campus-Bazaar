import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarketplace } from '../context/MarketplaceContext';

export default function SearchBar({ compact = false, onSearch }) {
  const { products } = useMarketplace();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    const close = (event) => {
      if (!wrapper.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const matches = query.trim()
    ? products.filter((item) => item.status === 'available' && item.title.toLowerCase().includes(query.toLowerCase())).slice(0, 5)
    : [];

  const submit = (event) => {
    event?.preventDefault();
    const term = query.trim();
    if (onSearch) onSearch(term);
    else if (term) navigate(`/explore?q=${encodeURIComponent(term)}`);
    else navigate('/explore');
    setOpen(false);
  };

  return (
    <div className="relative" ref={wrapper}>
      <form onSubmit={submit} className={`flex items-center rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-100 ${compact ? 'h-10' : 'h-12'}`}>
        <Search size={compact ? 17 : 19} className="ml-3.5 shrink-0 text-slate-400" />
        <input value={query} onChange={(event) => { setQuery(event.target.value); setOpen(true); }} onFocus={() => setOpen(true)} className="min-w-0 flex-1 bg-transparent px-3 text-sm text-slate-800 outline-none placeholder:text-slate-400" placeholder="Search books, cycles, electronics..." aria-label="Search marketplace" />
        {query && <button type="button" onClick={() => { setQuery(''); setOpen(false); }} className="mr-2 rounded-md p-1 text-slate-400 hover:text-slate-700" aria-label="Clear search"><X size={16} /></button>}
      </form>
      {open && query.trim() && (
        <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-xl border border-slate-100 bg-white p-1.5 shadow-xl">
          {matches.length ? matches.map((product) => (
            <button key={product.id} onClick={() => { navigate(`/product/${product.id}`); setOpen(false); }} className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-slate-50">
              <img src={product.image} alt="" className="h-9 w-9 rounded-md object-cover" />
              <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-700">{product.title}</span>
              <span className="text-xs font-bold text-indigo-600">₹{product.price.toLocaleString('en-IN')}</span>
            </button>
          )) : <p className="px-3 py-3 text-sm text-slate-500">No matching listings. Press Enter to search all.</p>}
          {matches.length > 0 && <button onClick={submit} className="w-full rounded-lg px-3 py-2 text-left text-xs font-semibold text-indigo-600 hover:bg-indigo-50">View all results for “{query}”</button>}
        </div>
      )}
    </div>
  );
}
