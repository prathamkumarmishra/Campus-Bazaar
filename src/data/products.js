export const categories = [
  { name: 'Cycles', icon: 'Bike', tint: 'bg-sky-50 text-sky-600' },
  { name: 'Electronics', icon: 'Laptop', tint: 'bg-violet-50 text-violet-600' },
  { name: 'Coolers', icon: 'Fan', tint: 'bg-cyan-50 text-cyan-600' },
  { name: 'Kitchen Appliances', icon: 'CookingPot', tint: 'bg-orange-50 text-orange-600' },
  { name: 'Books & Notes', icon: 'BookOpen', tint: 'bg-emerald-50 text-emerald-600' },
  { name: 'Furniture', icon: 'Armchair', tint: 'bg-amber-50 text-amber-600' },
  { name: 'Hostel Essentials', icon: 'PackageCheck', tint: 'bg-rose-50 text-rose-600' },
  { name: 'Others', icon: 'MoreHorizontal', tint: 'bg-slate-100 text-slate-600' },
];

export const demoUsers = [
  {
    id: 'user-aisha',
    name: 'Aisha Sharma',
    email: 'aisha@campus.demo',
    college: 'Delhi Technological University',
    location: 'Rohini, Delhi',
    avatar: 'https://i.pravatar.cc/160?img=47',
    rating: 4.9,
    trustScore: 98,
    soldCount: 18,
    joined: 'August 2023',
    bio: 'Final-year design student. Giving useful things a second home.',
  },
  {
    id: 'user-rohan',
    name: 'Rohan Mehta',
    email: 'rohan@campus.demo',
    college: 'Delhi Technological University',
    location: 'Sector 17, Rohini',
    avatar: 'https://i.pravatar.cc/160?img=12',
    rating: 4.8,
    trustScore: 95,
    soldCount: 11,
    joined: 'January 2024',
    bio: 'CS student and conscious consumer. Happy to help juniors settle in.',
  },
  {
    id: 'user-kabir',
    name: 'Kabir Singh',
    email: 'kabir@campus.demo',
    college: 'Delhi Technological University',
    location: 'Vijay Nagar, Delhi',
    avatar: 'https://i.pravatar.cc/160?img=33',
    rating: 4.7,
    trustScore: 92,
    soldCount: 9,
    joined: 'July 2024',
    bio: 'Mechanical engineering student. Selling well-kept hostel gear.',
  },
];

export const seedProducts = [
  {
    id: 'p-101', title: 'Firefox Road Runner 27.5T Cycle', category: 'Cycles', price: 6200, originalPrice: 9500, condition: 'Good',
    description: 'Smooth 21-speed city cycle with front suspension, bottle holder and working disc brakes. Recently serviced, perfect for campus commutes.',
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-21', status: 'available', views: 84,
  },
  {
    id: 'p-102', title: 'Bajaj Air Cooler 36L', category: 'Coolers', price: 3400, originalPrice: 5790, condition: 'Like New',
    description: 'Used for one summer only. Honeycomb pads, remote and ice chamber all working perfectly. Pickup from girls hostel gate.',
    image: 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-20', status: 'available', views: 57,
  },
  {
    id: 'p-103', title: 'Logitech Wireless Keyboard & Mouse', category: 'Electronics', price: 1400, originalPrice: 2495, condition: 'Good',
    description: 'Comfortable full-size wireless combo. USB receiver included, batteries changed last month. No keys missing.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-19', status: 'available', views: 49,
  },
  {
    id: 'p-104', title: 'Engineering Mathematics Notes - Complete Set', category: 'Books & Notes', price: 450, originalPrice: 1200, condition: 'Good',
    description: 'Neat handwritten notes for M1 and M2, including solved previous-year questions and unit-wise formula sheets.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-18', status: 'available', views: 112,
  },
  {
    id: 'p-105', title: 'IKEA Study Table with Drawer', category: 'Furniture', price: 2100, originalPrice: 4990, condition: 'Good',
    description: 'Compact white study table with a smooth pull-out drawer. Minor wear on the edge, very sturdy. Disassembles for transport.',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-17', status: 'available', views: 90,
  },
  {
    id: 'p-106', title: 'Prestige Electric Kettle 1.5L', category: 'Kitchen Appliances', price: 650, originalPrice: 1299, condition: 'Like New',
    description: 'Boils water in minutes. Auto shut-off working, cleaned and descaled. Comes with original base.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-16', status: 'available', views: 64,
  },
  {
    id: 'p-107', title: 'HP 15s Laptop - Ryzen 5, 8GB RAM', category: 'Electronics', price: 29500, originalPrice: 48999, condition: 'Good',
    description: 'Reliable Ryzen 5 laptop with 512GB SSD, original charger and 2.5-hour battery backup. Great for coding and coursework.',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-15', status: 'available', views: 238,
  },
  {
    id: 'p-108', title: 'Foldable Laundry Basket & Hangers', category: 'Hostel Essentials', price: 350, originalPrice: 699, condition: 'New',
    description: 'Unused foldable mesh laundry basket plus 20 durable hangers. A simple hostel-room essential bundle.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-14', status: 'available', views: 35,
  },
  {
    id: 'p-109', title: 'Boat Rockerz 450 Bluetooth Headphones', category: 'Electronics', price: 900, originalPrice: 1999, condition: 'Good',
    description: 'Deep bass headphones with about 10 hours of backup. Earcups are clean and folding mechanism is intact.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-13', status: 'sold', views: 72,
  },
  {
    id: 'p-110', title: 'Nescafé Mini Coffee Maker', category: 'Kitchen Appliances', price: 1100, originalPrice: 2200, condition: 'Good',
    description: 'Compact coffee maker, ideal for a late-night study corner. Tested last week and includes reusable filter.',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-12', status: 'available', views: 43,
  },
  {
    id: 'p-111', title: 'Campus Backpack 32L', category: 'Hostel Essentials', price: 600, originalPrice: 1499, condition: 'Like New',
    description: 'Water-resistant laptop backpack with padded sleeve and lots of storage. Used only for one semester.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-11', status: 'available', views: 31,
  },
  {
    id: 'p-112', title: 'Plastic Drawer Storage Unit', category: 'Furniture', price: 800, originalPrice: 1699, condition: 'Fair',
    description: 'Three-drawer storage unit, sturdy and clean. One handle has been repaired but drawers slide well.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-10', status: 'available', views: 26,
  },
  {
    id: 'p-113', title: 'Physics Reference Books - First Year', category: 'Books & Notes', price: 750, originalPrice: 1800, condition: 'Good',
    description: 'HC Verma Vol. 1 & 2 plus university physics reference. A few highlighted sections, otherwise excellent.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-09', status: 'available', views: 67,
  },
  {
    id: 'p-114', title: 'Table Fan with 3 Speed Settings', category: 'Coolers', price: 700, originalPrice: 1599, condition: 'Good',
    description: 'Quiet table fan with adjustable tilt and three speed modes. Recently cleaned; no wobble.',
    image: 'https://images.unsplash.com/photo-1520013573795-38516d2661e4?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-08', status: 'available', views: 38,
  },
  {
    id: 'p-115', title: 'Yonex Badminton Racket Pair', category: 'Others', price: 1200, originalPrice: 2599, condition: 'Good',
    description: 'Pair of beginner-friendly rackets with covers. Fresh grip wraps and strings have good tension.',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-07', status: 'available', views: 44,
  },
  {
    id: 'p-116', title: 'Philips LED Study Lamp', category: 'Hostel Essentials', price: 500, originalPrice: 999, condition: 'Like New',
    description: 'Dimmable LED lamp with touch controls and flexible neck. Ideal for quiet late-night revision.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-06', status: 'available', views: 29,
  },
  {
    id: 'p-117', title: 'Casio Scientific Calculator FX-991ES', category: 'Electronics', price: 650, originalPrice: 1245, condition: 'Good',
    description: 'Essential engineering calculator with cover. All functions and display tested, ready for exams.',
    image: 'https://images.unsplash.com/photo-1612831818205-1d8dd3f079c5?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-05', status: 'available', views: 95,
  },
  {
    id: 'p-118', title: 'Single Foam Mattress 6 Inch', category: 'Furniture', price: 1350, originalPrice: 3200, condition: 'Good',
    description: 'Comfortable standard single mattress with washable cover. No sagging, marks or smell. Pickup only.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-11-04', status: 'available', views: 51,
  },
  {
    id: 'p-119', title: 'Sketching & Art Supply Kit', category: 'Others', price: 800, originalPrice: 1700, condition: 'Like New',
    description: 'Graphite pencils, fineliners, watercolour palette and two sketchbooks. Everything is nearly unused.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-03', status: 'available', views: 40,
  },
  {
    id: 'p-120', title: 'Milton Thermosteel Flask 1L', category: 'Kitchen Appliances', price: 450, originalPrice: 899, condition: 'Like New',
    description: 'Keeps water hot/cold for hours. Barely used, no dents, with leak-proof cap and original box.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85', sellerId: 'user-rohan', sellerName: 'Rohan Mehta', sellerAvatar: 'https://i.pravatar.cc/160?img=12', sellerRating: 4.8, trustScore: 95, location: 'Sector 17, Rohini', postedAt: '2026-11-02', status: 'available', views: 22,
  },
  {
    id: 'p-121', title: 'Decathlon Riverside Hybrid Cycle', category: 'Cycles', price: 8800, originalPrice: 13999, condition: 'Like New',
    description: 'A fast, light hybrid bicycle with 7 gears, helmet and lock included. Serviced this term; ready to ride.',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85', sellerId: 'user-aisha', sellerName: 'Aisha Sharma', sellerAvatar: 'https://i.pravatar.cc/160?img=47', sellerRating: 4.9, trustScore: 98, location: 'Rohini, Delhi', postedAt: '2026-11-01', status: 'available', views: 117,
  },
  {
    id: 'p-122', title: 'Bean Bag Chair - Navy Blue', category: 'Furniture', price: 1100, originalPrice: 2299, condition: 'Good',
    description: 'Relaxed navy bean bag, newly refilled so it is still firm and comfortable. Cover has been machine washed.',
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=85', sellerId: 'user-kabir', sellerName: 'Kabir Singh', sellerAvatar: 'https://i.pravatar.cc/160?img=33', sellerRating: 4.7, trustScore: 92, location: 'Vijay Nagar, Delhi', postedAt: '2026-10-31', status: 'available', views: 36,
  },
];
