import { HandCoins, X } from 'lucide-react';
import { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';

export default function OfferModal({ product, onClose }) {
  const { sendOffer, currentUser } = useMarketplace();
  const [amount, setAmount] = useState(Math.round(product.price * 0.9));
  const [message, setMessage] = useState('Hi! I am interested in this item. Would you consider this offer?');
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    const value = Number(amount);
    if (!value || value <= 0) return setError('Enter a valid offer amount.');
    if (value > product.price * 1.1) return setError('Offer amount should be within a reasonable range.');
    if (sendOffer(product, value)) onClose();
  };
  return <div className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/40 p-4 backdrop-blur-sm" onMouseDown={onClose}><div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl" onMouseDown={(event) => event.stopPropagation()}><div className="flex items-start justify-between"><div><span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600"><HandCoins size={21} /></span><h2 className="mt-3 text-xl font-bold text-ink">Make an offer</h2><p className="mt-1 text-sm text-slate-500">Negotiate directly with {product.sellerName.split(' ')[0]}.</p></div><button onClick={onClose} className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"><X size={19} /></button></div><div className="mt-5 flex gap-3 rounded-xl bg-slate-50 p-3"><img src={product.image} alt="" className="h-12 w-12 rounded-lg object-cover" /><div className="min-w-0"><p className="truncate text-sm font-bold text-ink">{product.title}</p><p className="mt-0.5 text-xs text-slate-500">Listed at <strong className="text-ink">₹{product.price.toLocaleString('en-IN')}</strong></p></div></div>{product.sellerId === currentUser.id ? <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm text-amber-700">This is your listing. Switch demo accounts in the profile menu to try the buyer flow.</p> : <form onSubmit={submit} className="mt-5"><label className="label">Your offer (₹)</label><input autoFocus type="number" value={amount} onChange={(event) => setAmount(event.target.value)} className="field mt-1.5 text-lg font-bold" /><div className="mt-3 flex gap-2">{[85, 90, 95].map((percent) => <button key={percent} type="button" onClick={() => setAmount(Math.round(product.price * percent / 100))} className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-indigo-50 hover:text-indigo-700">{percent}%</button>)}</div><label className="label mt-5">Note to seller <span className="font-normal text-slate-400">(optional)</span></label><textarea value={message} onChange={(event) => setMessage(event.target.value)} rows="3" className="field mt-1.5 resize-none" />{error && <p className="mt-2 text-xs font-medium text-rose-600">{error}</p>}<button className="btn-primary mt-5 w-full">Send offer for ₹{Number(amount || 0).toLocaleString('en-IN')}</button></form>}</div></div>;
}
