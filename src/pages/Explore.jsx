import { ChevronDown, Filter, SearchX, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import ProductCard from '../components/ProductCard';
import { useMarketplace } from '../context/MarketplaceContext';

export default function Explore() {
  const { products } = useMarketplace();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({ category: searchParams.get('category') || '', minPrice: '', maxPrice: '', condition: '', status: 'available' });
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest');
  const [mobileFilters, setMobileFilters] = useState(false);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    if (searchParams.get('category')) setFilters((current) => ({ ...current, category: searchParams.get('category') }));
  }, [searchParams]);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const list = products.filter((product) => {
      const matchingQuery = !normalized || `${product.title} ${product.category} ${product.description}`.toLowerCase().includes(normalized);
      const matchingCategory = !filters.category || product.category === filters.category;
      const matchingMin = !filters.minPrice || product.price >= Number(filters.minPrice);
      const matchingMax = !filters.maxPrice || product.price <= Number(filters.maxPrice);
      const matchingCondition = !filters.condition || product.condition === filters.condition;
      const matchingStatus = filters.status === 'all' || product.status === filters.status;
      return matchingQuery && matchingCategory && matchingMin && matchingMax && matchingCondition && matchingStatus;
    });
    return list.sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return new Date(b.postedAt) - new Date(a.postedAt);
    });
  }, [products, filters, query, sort]);

  const changeQuery = (value) => {
    setQuery(value);
    const next = new URLSearchParams(searchParams);
    if (value) next.set('q', value); else next.delete('q');
    setSearchParams(next, { replace: true });
  };

  return <main className="min-h-[calc(100vh-72px)] bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Marketplace</p><h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Find your next campus essential</h1><p className="mt-2 text-sm text-slate-500">Browse verified student listings near you.</p></div><div className="flex gap-2"><button onClick={() => setMobileFilters(true)} className="btn-secondary lg:hidden"><Filter size={17} /> Filters</button><div className="relative"><select value={sort} onChange={(event) => setSort(event.target.value)} className="h-11 appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-4 pr-9 text-sm font-semibold text-slate-600 outline-none transition focus:border-indigo-400"><option value="newest">Newest first</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-3 text-slate-400" /></div></div></div><div className="mt-7 flex min-w-0 items-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100"><SlidersHorizontal size={18} className="text-slate-400" /><input value={query} onChange={(event) => changeQuery(event.target.value)} className="h-12 min-w-0 flex-1 px-3 text-sm outline-none placeholder:text-slate-400" placeholder="Search all listings by name, category or keyword" />{query && <button onClick={() => changeQuery('')} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100"><X size={16} /></button>}</div><div className="mt-7 grid gap-6 lg:grid-cols-[250px_1fr]"><div className="hidden lg:block"><FilterSidebar filters={filters} setFilters={setFilters} resultCount={results.length} /></div><div><div className="mb-4 flex items-center justify-between"><p className="text-sm text-slate-500"><strong className="text-ink">{results.length}</strong> {results.length === 1 ? 'listing' : 'listings'} available</p>{(filters.category || filters.condition || filters.minPrice || filters.maxPrice || filters.status !== 'available' || query) && <button onClick={() => { setFilters({ category: '', minPrice: '', maxPrice: '', condition: '', status: 'available' }); changeQuery(''); }} className="text-xs font-bold text-indigo-600 hover:text-indigo-700">Reset results</button>}</div>{results.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="grid min-h-80 place-items-center rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center"><div><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-indigo-50 text-indigo-500"><SearchX size={26} /></span><h2 className="mt-4 text-lg font-bold text-ink">No listings found</h2><p className="mt-2 max-w-sm text-sm text-slate-500">Try adjusting your search or filters to find more campus essentials.</p><button onClick={() => { setFilters({ category: '', minPrice: '', maxPrice: '', condition: '', status: 'available' }); changeQuery(''); }} className="btn-secondary mt-5">Clear all filters</button></div></div>}</div></div></div>{mobileFilters && <div className="fixed inset-0 z-50 bg-slate-950/30 lg:hidden" onMouseDown={() => setMobileFilters(false)}><div className="absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-3xl bg-white p-4 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><FilterSidebar filters={filters} setFilters={setFilters} resultCount={results.length} onClose={() => setMobileFilters(false)} /></div></div>}</main>;
}
