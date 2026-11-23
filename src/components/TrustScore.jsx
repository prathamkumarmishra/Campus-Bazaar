import { ShieldCheck } from 'lucide-react';

export default function TrustScore({ score, compact = false }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-emerald-50 font-semibold text-emerald-700 ${compact ? 'px-2 py-1 text-[11px]' : 'px-2.5 py-1.5 text-xs'}`}>
      <ShieldCheck size={compact ? 13 : 15} strokeWidth={2.5} />
      {score}% Trust Score
    </span>
  );
}
