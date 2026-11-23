import { Heart, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMarketplace } from '../context/MarketplaceContext';
import TrustScore from './TrustScore';

const conditionClasses = { New: 'bg-emerald-50 text-emerald-700', 'Like New': 'bg-sky-50 text-sky-700', Good: 'bg-amber-50 text-amber-700', Fair: 'bg-slate-100 text-slate-600' };

export default function ProductCard({ product, compact = false }) {
  const { wishlist, toggleWishlist } = useMarketplace();
  const saved = wishlist.includes(product.id);
  const date = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short' }).format(new Date(product.postedAt));

  return (
    <article className={`group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift ${compact ? '' : ''}`}>
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-100">
        <img src={product.image} alt={product.title} className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${product.status === 'sold' ? 'opacity-60' : ''}`} />
        <span className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[11px] font-bold ${conditionClasses[product.condition]}`}>{product.condition}</span>
        {product.status === 'sold' && <span className="absolute inset-0 grid place-items-center bg-slate-950/25"><span className="rounded-full bg-slate-900 px-3 py-1.5 text-xs font-bold text-white">SOLD</span></span>}
      </Link>
      <div className="p-4">
        <div className="flex gap-3">
          <Link to={`/product/${product.id}`} className="min-w-0 flex-1"><h3 className="truncate text-[15px] font-bold text-ink transition group-hover:text-indigo-600">{product.title}</h3></Link>
          <button onClick={() => toggleWishlist(product.id)} aria-label={saved ? 'Remove from wishlist' : 'Add to wishlist'} className={`-mt-1 shrink-0 rounded-lg p-1.5 transition ${saved ? 'bg-rose-50 text-rose-500' : 'text-slate-400 hover:bg-slate-100 hover:text-rose-500'}`}><Heart size={19} className={saved ? 'fill-current' : ''} /></button>
        </div>
        <div className="mt-2 flex items-end gap-2"><span className="text-lg font-extrabold text-ink">₹{product.price.toLocaleString('en-IN')}</span>{product.originalPrice && <span className="pb-0.5 text-xs text-slate-400 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>}</div>
        {!compact && <p className="mt-2 flex items-center gap-1 text-xs text-slate-500"><MapPin size={13} />{product.location}</p>}
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-slate-100 pt-3"><div className="flex min-w-0 items-center gap-1.5"><img src={product.sellerAvatar} alt="" className="h-5 w-5 rounded-full" /><span className="truncate text-xs font-medium text-slate-600">{product.sellerName.split(' ')[0]}</span><Star size={12} className="fill-amber-400 text-amber-400" /><span className="text-[11px] text-slate-500">{product.sellerRating}</span></div><TrustScore score={product.trustScore} compact /></div>
        {!compact && <p className="mt-3 text-[11px] text-slate-400">Listed {date}</p>}
      </div>
    </article>
  );
}
