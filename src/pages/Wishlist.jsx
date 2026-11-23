import { Heart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useMarketplace } from '../context/MarketplaceContext';

export default function Wishlist() {
  const { products, wishlist } = useMarketplace();
  const saved = products.filter((product) => wishlist.includes(product.id));
  return <main className="min-h-[calc(100vh-72px)] bg-slate-50"><div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8"><p className="eyebrow">Saved for later</p><div className="flex flex-wrap items-end justify-between gap-4"><div><h1 className="mt-1 text-3xl font-black tracking-tight text-ink sm:text-4xl">My wishlist</h1><p className="mt-2 text-sm text-slate-500">Keep an eye on the campus finds you love.</p></div>{saved.length > 0 && <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-bold text-indigo-700">{saved.length} {saved.length === 1 ? 'item' : 'items'} saved</span>}</div>{saved.length ? <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{saved.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="mt-8 grid min-h-[400px] place-items-center rounded-3xl border border-dashed border-slate-200 bg-white p-8 text-center"><div><span className="mx-auto grid h-20 w-20 place-items-center rounded-[1.5rem] bg-rose-50 text-rose-400"><Heart size={35} /></span><h2 className="mt-5 text-xl font-bold text-ink">Your wishlist is waiting for a find</h2><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">Save listings you’re interested in and return whenever you’re ready to make an offer.</p><Link to="/explore" className="btn-primary mt-6"><Search size={18} /> Explore marketplace</Link></div></div>}</div></main>;
}
