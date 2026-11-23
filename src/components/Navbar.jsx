import { ChevronDown, Heart, Menu, Moon, Plus, ShieldCheck, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMarketplace } from '../context/MarketplaceContext';
import DemoAuthModal from './DemoAuthModal';
import SearchBar from './SearchBar';

const navClass = ({ isActive }) => `text-sm font-medium transition ${isActive ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-900'}`;

export default function Navbar() {
  const { currentUser, profiles, wishlist, switchAccount, theme, toggleTheme } = useMarketplace();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2 text-ink" onClick={() => setMenuOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-lg font-black text-white shadow-lg shadow-indigo-200">C</span>
          <span className="hidden text-lg font-extrabold tracking-tight sm:block">Campus <span className="text-indigo-600">Bazaar</span></span>
        </Link>
        <div className="hidden max-w-lg flex-1 md:block"><SearchBar compact /></div>
        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          <NavLink to="/explore" className={navClass}>Explore</NavLink>
          <NavLink to="/offers" className={navClass}>Offers</NavLink>
          <NavLink to="/dashboard" className={navClass}>Dashboard</NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2 md:ml-2">
          <button onClick={toggleTheme} className="rounded-lg p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/wishlist" className="relative rounded-lg p-2.5 text-slate-600 transition hover:bg-slate-100 hover:text-indigo-600" aria-label="Wishlist">
            <Heart size={20} />
            {wishlist.length > 0 && <span className="absolute right-1 top-1 grid h-4 min-w-4 place-items-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">{wishlist.length}</span>}
          </Link>
          <Link to="/sell" className="hidden items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 sm:flex"><Plus size={17} /> Sell item</Link>
          <div className="relative hidden sm:block">
            <button onClick={() => setProfileOpen((open) => !open)} className="flex items-center gap-2 rounded-xl p-1.5 transition hover:bg-slate-50">
              <img src={currentUser.avatar} alt={currentUser.name} className="h-8 w-8 rounded-full object-cover" />
              <ChevronDown size={16} className="text-slate-400" />
            </button>
            {profileOpen && <div className="absolute right-0 mt-2 w-72 overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
              <Link to="/profile" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50">
                <img src={currentUser.avatar} alt="" className="h-9 w-9 rounded-full" />
                <span><strong className="block text-sm text-ink">{currentUser.name}</strong><small className="text-xs text-slate-500">View profile</small></span>
              </Link>
              <div className="mx-3 border-t border-slate-100" />
              <p className="flex items-center gap-1.5 px-4 pb-1 pt-3 text-[11px] font-bold uppercase tracking-wider text-slate-400"><ShieldCheck size={13} /> Demo accounts</p>
              {profiles.map((user) => <button key={user.id} onClick={() => { switchAccount(user.id); setProfileOpen(false); }} className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm ${user.id === currentUser.id ? 'bg-indigo-50 font-semibold text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}><img src={user.avatar} alt="" className="h-6 w-6 rounded-full" />{user.name}</button>)}
              <button onClick={() => { setProfileOpen(false); setAuthOpen(true); }} className="mt-1 w-full border-t border-slate-100 px-4 py-2.5 text-left text-xs font-bold text-indigo-600 hover:bg-indigo-50">Sign in or register a demo student</button>
              <p className="px-4 pt-2 text-[11px] leading-relaxed text-slate-400">Simulated accounts. Data stays only in this browser.</p>
            </div>}
          </div>
          <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={22} /></button>
        </div>
      </div>
      {menuOpen && <div className="fixed inset-0 z-50 bg-slate-950/30 lg:hidden" onClick={() => setMenuOpen(false)}>
        <div className="ml-auto flex h-full w-80 max-w-[88vw] flex-col bg-white p-5 shadow-2xl" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-center justify-between"><span className="text-lg font-bold text-ink">Menu</span><button onClick={() => setMenuOpen(false)} className="rounded-lg p-2 hover:bg-slate-100"><X size={20} /></button></div>
          <div className="mt-5"><SearchBar /></div>
          <nav className="mt-6 grid gap-1">
            {[['/explore', 'Explore marketplace'], ['/sell', 'Sell an item'], ['/wishlist', 'My wishlist'], ['/offers', 'Offers & negotiations'], ['/dashboard', 'My dashboard'], ['/profile', 'My profile'], ['/about', 'About Campus Bazaar']].map(([to, label]) => <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => `rounded-lg px-3 py-3 text-sm font-semibold ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-50'}`}>{label}</NavLink>)}
          </nav>
          <div className="mt-auto rounded-xl bg-slate-50 p-3"><div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-500">Switch demo student</p><button onClick={toggleTheme} className="rounded-lg p-1.5 text-indigo-600 hover:bg-indigo-100" title="Toggle colour mode">{theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}</button></div><div className="mt-2 flex gap-2">{profiles.map((user) => <button onClick={() => switchAccount(user.id)} key={user.id} title={user.name} className={`rounded-full p-0.5 ${user.id === currentUser.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}><img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" /></button>)}</div><button onClick={() => { setMenuOpen(false); setAuthOpen(true); }} className="mt-3 text-xs font-bold text-indigo-600">Sign in / register demo</button></div>
        </div>
      </div>}
      {authOpen && <DemoAuthModal onClose={() => setAuthOpen(false)} />}
    </header>
  );
}
