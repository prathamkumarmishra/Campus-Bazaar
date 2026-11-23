import { CheckCircle2, ImagePlus, Info, IndianRupee, LoaderCircle, Upload, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/products';
import { useMarketplace } from '../context/MarketplaceContext';

const emptyForm = { title: '', category: '', price: '', originalPrice: '', condition: '', description: '', contact: '' };
const fallbackImage = 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85';

export default function SellItem() {
  const { createListing, currentUser } = useMarketplace();
  const navigate = useNavigate();
  const [form, setForm] = useState(emptyForm);
  const [preview, setPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  const readImage = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) return setErrors((current) => ({ ...current, image: 'Please choose an image file.' }));
    if (file.size > 3 * 1024 * 1024) return setErrors((current) => ({ ...current, image: 'Use an image smaller than 3MB for this demo.' }));
    const reader = new FileReader();
    reader.onload = () => { setPreview(reader.result); setErrors((current) => ({ ...current, image: '' })); };
    reader.readAsDataURL(file);
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (form.title.trim().length < 5) nextErrors.title = 'Add a clear title with at least 5 characters.';
    if (!form.category) nextErrors.category = 'Choose a category.';
    if (!form.price || Number(form.price) <= 0) nextErrors.price = 'Enter a valid selling price.';
    if (!form.condition) nextErrors.condition = 'Select the item condition.';
    if (form.description.trim().length < 20) nextErrors.description = 'Write at least 20 characters so buyers know what to expect.';
    if (!form.contact.trim()) nextErrors.contact = 'Add a contact preference for demo purposes.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setSubmitting(true);
    window.setTimeout(() => {
      const product = createListing({ ...form, title: form.title.trim(), description: form.description.trim(), price: Number(form.price), originalPrice: form.originalPrice ? Number(form.originalPrice) : undefined, image: preview || fallbackImage });
      setSubmitting(false);
      navigate(`/product/${product.id}`);
    }, 450);
  };

  return <main className="min-h-[calc(100vh-72px)] bg-slate-50"><div className="mx-auto max-w-5xl px-4 py-9 sm:px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-[1fr_310px]"><div><p className="eyebrow">Create a listing</p><h1 className="mt-1 text-3xl font-black tracking-tight text-ink sm:text-4xl">Give your item a new campus home.</h1><p className="mt-3 text-sm leading-6 text-slate-500">A thoughtful listing helps another student make a confident decision.</p><form onSubmit={submit} className="mt-7 space-y-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-card sm:p-7"><section><h2 className="text-lg font-bold text-ink">Item details</h2><p className="mt-1 text-sm text-slate-500">Be specific about what you’re selling.</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><div className="sm:col-span-2"><label className="label">Product title <span className="text-rose-500">*</span></label><input value={form.title} onChange={(event) => update('title', event.target.value)} className={`field mt-1.5 ${errors.title ? 'border-rose-400' : ''}`} placeholder="e.g. Firefox Road Runner cycle, 21-speed" />{errors.title && <p className="error">{errors.title}</p>}</div><div><label className="label">Category <span className="text-rose-500">*</span></label><select value={form.category} onChange={(event) => update('category', event.target.value)} className={`field mt-1.5 ${errors.category ? 'border-rose-400' : ''}`}><option value="">Select a category</option>{categories.map((category) => <option key={category.name}>{category.name}</option>)}</select>{errors.category && <p className="error">{errors.category}</p>}</div><div><label className="label">Condition <span className="text-rose-500">*</span></label><select value={form.condition} onChange={(event) => update('condition', event.target.value)} className={`field mt-1.5 ${errors.condition ? 'border-rose-400' : ''}`}><option value="">Select condition</option>{['New', 'Like New', 'Good', 'Fair'].map((condition) => <option key={condition}>{condition}</option>)}</select>{errors.condition && <p className="error">{errors.condition}</p>}</div><div><label className="label">Selling price (₹) <span className="text-rose-500">*</span></label><div className="relative mt-1.5"><IndianRupee size={17} className="absolute left-3 top-3 text-slate-400" /><input type="number" min="1" value={form.price} onChange={(event) => update('price', event.target.value)} className={`field pl-9 ${errors.price ? 'border-rose-400' : ''}`} placeholder="0" /></div>{errors.price && <p className="error">{errors.price}</p>}</div><div><label className="label">Original price <span className="font-normal text-slate-400">(optional)</span></label><div className="relative mt-1.5"><IndianRupee size={17} className="absolute left-3 top-3 text-slate-400" /><input type="number" min="1" value={form.originalPrice} onChange={(event) => update('originalPrice', event.target.value)} className="field pl-9" placeholder="What you paid" /></div></div><div className="sm:col-span-2"><label className="label">Description <span className="text-rose-500">*</span></label><textarea value={form.description} onChange={(event) => update('description', event.target.value)} className={`field mt-1.5 min-h-32 resize-y ${errors.description ? 'border-rose-400' : ''}`} placeholder="Mention the condition, useful features, what’s included, and any small imperfections." maxLength="700" />{errors.description ? <p className="error">{errors.description}</p> : <p className="mt-1 text-right text-xs text-slate-400">{form.description.length}/700</p>}</div></div></section><section className="border-t border-slate-100 pt-6"><h2 className="text-lg font-bold text-ink">Photos</h2><p className="mt-1 text-sm text-slate-500">Add one clear picture. It stays in this browser for the demo.</p><div className="mt-4">{preview ? <div className="relative max-w-sm overflow-hidden rounded-xl border border-slate-200"><img src={preview} alt="Item preview" className="aspect-[4/3] w-full object-cover" /><button type="button" onClick={() => setPreview('')} className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white text-slate-600 shadow hover:text-rose-500"><X size={17} /></button></div> : <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-5 py-9 text-center transition hover:border-indigo-300 hover:bg-indigo-50/40"><span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-indigo-600 shadow-sm"><ImagePlus size={21} /></span><span className="mt-3 text-sm font-bold text-ink">Upload item photo</span><span className="mt-1 text-xs text-slate-400">PNG, JPG or WEBP · max 3MB</span><input type="file" accept="image/*" onChange={readImage} className="hidden" /></label>}{errors.image && <p className="error">{errors.image}</p>}</div></section><section className="border-t border-slate-100 pt-6"><h2 className="text-lg font-bold text-ink">Contact preference</h2><p className="mt-1 text-sm text-slate-500">Demo only — this isn’t shared through a real backend.</p><label className="label mt-4">Phone or preferred meetup channel <span className="text-rose-500">*</span></label><input value={form.contact} onChange={(event) => update('contact', event.target.value)} className={`field mt-1.5 ${errors.contact ? 'border-rose-400' : ''}`} placeholder="e.g. WhatsApp at 98XXXXXX12" />{errors.contact && <p className="error">{errors.contact}</p>}</section><button disabled={submitting} className="btn-primary w-full disabled:cursor-wait disabled:opacity-70">{submitting ? <><LoaderCircle size={18} className="animate-spin" /> Publishing listing...</> : <><Upload size={18} /> Publish listing</>}</button></form></div><aside className="lg:pt-12"><div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5"><div className="flex items-center gap-3"><img src={currentUser.avatar} alt="" className="h-10 w-10 rounded-full" /><div><p className="text-xs font-semibold text-indigo-600">LISTING AS</p><p className="text-sm font-bold text-ink">{currentUser.name}</p></div></div><p className="mt-4 text-sm leading-6 text-slate-600">Your seller reputation travels with every listing.</p></div><div className="mt-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-card"><div className="flex items-center gap-2"><Info size={18} className="text-indigo-600" /><h2 className="font-bold text-ink">Listing tips</h2></div><ul className="mt-4 grid gap-3 text-sm leading-5 text-slate-600">{['Use a specific, searchable title.', 'Share both strengths and small flaws.', 'Price fairly — students love a good deal.', 'Meet in a well-known campus location.'].map((tip) => <li key={tip} className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />{tip}</li>)}</ul></div></aside></div></div></main>;
}
