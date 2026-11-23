import { ArrowRight, Home } from 'lucide-react';
import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Explore from './pages/Explore';
import HomePage from './pages/Home';
import Offers from './pages/Offers';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import SellItem from './pages/SellItem';
import Wishlist from './pages/Wishlist';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return <main className="grid min-h-[65vh] place-items-center bg-slate-50 p-6 text-center"><div><p className="text-7xl font-black text-indigo-100">404</p><h1 className="mt-2 text-2xl font-bold text-ink">This campus lane is empty.</h1><p className="mt-2 text-sm text-slate-500">The page you’re looking for may have moved.</p><Link to="/" className="btn-primary mt-6"><Home size={17} /> Back home <ArrowRight size={16} /></Link></div></main>;
}

export default function App() {
  return <div className="flex min-h-screen flex-col bg-white"><ScrollToTop /><Navbar /><div className="flex-1"><Routes><Route path="/" element={<HomePage />} /><Route path="/explore" element={<Explore />} /><Route path="/product/:id" element={<ProductDetails />} /><Route path="/sell" element={<SellItem />} /><Route path="/wishlist" element={<Wishlist />} /><Route path="/offers" element={<Offers />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/profile" element={<Profile />} /><Route path="/about" element={<About />} /><Route path="*" element={<NotFound />} /></Routes></div><Footer /></div>;
}
