import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { demoUsers, seedProducts } from '../data/products';

const MarketplaceContext = createContext(null);

const STORAGE = {
  products: 'campus-bazaar-products',
  wishlist: 'campus-bazaar-wishlist',
  offers: 'campus-bazaar-offers',
  userId: 'campus-bazaar-current-user',
  profiles: 'campus-bazaar-profiles',
  theme: 'campus-bazaar-theme',
};

const readStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch {
    return fallback;
  }
};

const seededOffers = [
  {
    id: 'offer-001', productId: 'p-102', buyerId: 'user-rohan', sellerId: 'user-aisha', amount: 3000,
    status: 'pending', createdAt: '2026-11-22T10:30:00.000Z', history: [{ type: 'sent', amount: 3000, by: 'user-rohan', at: '2026-11-22T10:30:00.000Z' }],
  },
  {
    id: 'offer-002', productId: 'p-107', buyerId: 'user-aisha', sellerId: 'user-rohan', amount: 27500,
    status: 'countered', createdAt: '2026-11-20T09:30:00.000Z', history: [
      { type: 'sent', amount: 27500, by: 'user-aisha', at: '2026-11-20T09:30:00.000Z' },
      { type: 'countered', amount: 28500, by: 'user-rohan', at: '2026-11-20T15:10:00.000Z' },
    ],
  },
];

export function MarketplaceProvider({ children }) {
  const [products, setProducts] = useState(() => readStorage(STORAGE.products, seedProducts));
  const [wishlist, setWishlist] = useState(() => readStorage(STORAGE.wishlist, []));
  const [offers, setOffers] = useState(() => readStorage(STORAGE.offers, seededOffers));
  const [profiles, setProfiles] = useState(() => readStorage(STORAGE.profiles, demoUsers));
  const [currentUserId, setCurrentUserId] = useState(() => localStorage.getItem(STORAGE.userId) || 'user-aisha');
  const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE.theme) || 'light');

  useEffect(() => localStorage.setItem(STORAGE.products, JSON.stringify(products)), [products]);
  useEffect(() => localStorage.setItem(STORAGE.wishlist, JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem(STORAGE.offers, JSON.stringify(offers)), [offers]);
  useEffect(() => localStorage.setItem(STORAGE.profiles, JSON.stringify(profiles)), [profiles]);
  useEffect(() => localStorage.setItem(STORAGE.userId, currentUserId), [currentUserId]);
  useEffect(() => {
    localStorage.setItem(STORAGE.theme, theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const currentUser = profiles.find((user) => user.id === currentUserId) || profiles[0];

  const toggleWishlist = (productId) => {
    setWishlist((current) => {
      const exists = current.includes(productId);
      toast.success(exists ? 'Removed from your wishlist' : 'Added to your wishlist');
      return exists ? current.filter((id) => id !== productId) : [...current, productId];
    });
  };

  const createListing = (listing) => {
    const product = {
      ...listing,
      id: `p-${Date.now()}`,
      sellerId: currentUser.id,
      sellerName: currentUser.name,
      sellerAvatar: currentUser.avatar,
      sellerRating: currentUser.rating,
      trustScore: currentUser.trustScore,
      location: currentUser.location,
      postedAt: new Date().toISOString().slice(0, 10),
      status: 'available',
      views: 0,
    };
    setProducts((current) => [product, ...current]);
    toast.success('Your listing is live on Campus Bazaar!');
    return product;
  };

  const updateListing = (id, updates) => {
    setProducts((current) => current.map((product) => product.id === id ? { ...product, ...updates } : product));
    toast.success('Listing updated');
  };

  const deleteListing = (id) => {
    setProducts((current) => current.filter((product) => product.id !== id));
    setWishlist((current) => current.filter((productId) => productId !== id));
    toast.success('Listing deleted');
  };

  const markAsSold = (id) => {
    setProducts((current) => current.map((product) => product.id === id ? { ...product, status: 'sold' } : product));
    toast.success('Marked as sold — nice work!');
  };

  const sendOffer = (product, amount) => {
    if (product.sellerId === currentUser.id) {
      toast.error("You can't make an offer on your own listing");
      return false;
    }
    const existing = offers.find((offer) => offer.productId === product.id && offer.buyerId === currentUser.id && ['pending', 'countered'].includes(offer.status));
    if (existing) {
      toast.error('You already have an active offer for this item');
      return false;
    }
    const now = new Date().toISOString();
    setOffers((current) => [{
      id: `offer-${Date.now()}`, productId: product.id, buyerId: currentUser.id, sellerId: product.sellerId,
      amount: Number(amount), status: 'pending', createdAt: now,
      history: [{ type: 'sent', amount: Number(amount), by: currentUser.id, at: now }],
    }, ...current]);
    toast.success('Offer sent to the seller');
    return true;
  };

  const respondToOffer = (offerId, action, counterAmount) => {
    const now = new Date().toISOString();
    const labels = { accept: 'accepted', reject: 'rejected', counter: 'countered' };
    setOffers((current) => current.map((offer) => {
      if (offer.id !== offerId) return offer;
      const status = labels[action];
      const amount = action === 'counter' ? Number(counterAmount) : offer.amount;
      return { ...offer, status, amount, history: [...offer.history, { type: status, amount, by: currentUser.id, at: now }] };
    }));
    if (action === 'accept') toast.success('Offer accepted! Arrange a meetup with the buyer.');
    if (action === 'reject') toast.success('Offer declined');
    if (action === 'counter') toast.success('Counter-offer sent');
  };

  const updateProfile = (updates) => {
    const updatedProfile = { ...currentUser, ...updates };
    setProfiles((current) => current.map((profile) => profile.id === currentUser.id ? updatedProfile : profile));
    // Keep the seller snapshot on existing personal listings in sync with profile changes.
    setProducts((current) => current.map((product) => product.sellerId === currentUser.id ? {
      ...product,
      sellerName: updatedProfile.name,
      sellerAvatar: updatedProfile.avatar,
      sellerRating: updatedProfile.rating,
      trustScore: updatedProfile.trustScore,
      location: updatedProfile.location,
    } : product));
    toast.success('Profile saved');
  };

  const switchAccount = (userId) => {
    setCurrentUserId(userId);
    const account = profiles.find((user) => user.id === userId);
    toast.success(`Switched to ${account?.name || 'demo account'}`);
  };

  const registerDemoUser = ({ name, email, college, location }) => {
    const id = `user-demo-${Date.now()}`;
    const profile = {
      id,
      name: name.trim(),
      email: email.trim(),
      college: college.trim(),
      location: location.trim(),
      avatar: `https://i.pravatar.cc/160?u=${encodeURIComponent(email.trim())}`,
      rating: 5,
      trustScore: 88,
      soldCount: 0,
      joined: new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(new Date()),
      bio: 'New to Campus Bazaar — ready to find great campus essentials.',
    };
    setProfiles((current) => [...current, profile]);
    setCurrentUserId(id);
    toast.success(`Welcome to Campus Bazaar, ${profile.name.split(' ')[0]}!`);
  };

  const resetDemo = () => {
    setProducts(seedProducts);
    setWishlist([]);
    setOffers(seededOffers);
    setProfiles(demoUsers);
    setCurrentUserId('user-aisha');
    toast.success('Demo data reset');
  };

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

  const value = useMemo(() => ({
    products, wishlist, offers, profiles, currentUser, currentUserId, theme,
    toggleWishlist, createListing, updateListing, deleteListing, markAsSold,
    sendOffer, respondToOffer, updateProfile, switchAccount, registerDemoUser, resetDemo, toggleTheme,
  }), [products, wishlist, offers, profiles, currentUser, currentUserId, theme]);

  return <MarketplaceContext.Provider value={value}>{children}</MarketplaceContext.Provider>;
}

export function useMarketplace() {
  const context = useContext(MarketplaceContext);
  if (!context) throw new Error('useMarketplace must be used within MarketplaceProvider');
  return context;
}
