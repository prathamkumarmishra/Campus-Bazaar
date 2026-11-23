import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {
  const Icon = Icons[category.icon] || Icons.Package;
  return <Link to={`/explore?category=${encodeURIComponent(category.name)}`} className="group flex min-w-[132px] flex-col items-center rounded-2xl border border-slate-100 bg-white px-4 py-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-indigo-100 hover:shadow-card"><span className={`grid h-12 w-12 place-items-center rounded-xl ${category.tint} transition group-hover:scale-110`}><Icon size={23} /></span><span className="mt-3 text-sm font-bold text-ink">{category.name}</span><span className="mt-1 text-xs text-slate-400">Explore</span></Link>;
}
