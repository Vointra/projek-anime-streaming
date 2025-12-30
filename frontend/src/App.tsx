// src/App.tsx
import { useState } from 'react';

// Tipe data dummy untuk Anime
interface Anime {
  id: number;
  title: string;
  episode: string;
  image: string;
}

// Data Dummy (Nanti bisa diganti dengan API)
const animeList: Anime[] = [
  { id: 1, title: "Attack on Titan", episode: "Ep 12", image: "https://placehold.co/300x450/1e293b/FFF?text=AOT" },
  { id: 2, title: "One Piece", episode: "Ep 1080", image: "https://placehold.co/300x450/1e293b/FFF?text=One+Piece" },
  { id: 3, title: "Jujutsu Kaisen", episode: "Ep 24", image: "https://placehold.co/300x450/1e293b/FFF?text=JJK" },
  { id: 4, title: "Demon Slayer", episode: "Ep 10", image: "https://placehold.co/300x450/1e293b/FFF?text=DS" },
  { id: 5, title: "Naruto Shippuden", episode: "Ep 500", image: "https://placehold.co/300x450/1e293b/FFF?text=Naruto" },
  { id: 6, title: "Bleach", episode: "Ep 366", image: "https://placehold.co/300x450/1e293b/FFF?text=Bleach" },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      {/* Menggunakan warna dari variabel CSS yang kita buat: bg-surface */}
      <nav className="bg-surface sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-brand font-bold text-2xl tracking-wider">ANI<span className="text-text-main">STREAM</span></span>
            </div>

            {/* Desktop Menu (Hidden on Mobile) */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="bg-brand text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-text-muted hover:text-brand transition-colors px-3 py-2 rounded-md text-sm font-medium">Popular</a>
                <a href="#" className="text-text-muted hover:text-brand transition-colors px-3 py-2 rounded-md text-sm font-medium">New Season</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-surface inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-white hover:bg-brand focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon Hamburger sederhana */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-surface border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="bg-brand text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#" className="text-text-muted hover:text-white block px-3 py-2 rounded-md text-base font-medium">Popular</a>
              <a href="#" className="text-text-muted hover:text-white block px-3 py-2 rounded-md text-base font-medium">New Season</a>
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 w-full">
        
        {/* Hero Section / Banner */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-surface rounded-lg h-64 flex items-center justify-center border-2 border-dashed border-gray-700">
            <h2 className="text-3xl font-bold text-text-muted">Featured Anime Banner</h2>
          </div>
        </div>

        {/* Anime Grid */}
        <div className="px-4 sm:px-0 mt-8">
          <h3 className="text-xl font-bold mb-4 border-l-4 border-brand pl-3">Sedang Tayang</h3>
          
          {/* Grid Responsif: 
              - Mobile: 2 kolom (grid-cols-2)
              - Tablet: 3 kolom (md:grid-cols-3)
              - Desktop: 4/5 kolom (lg:grid-cols-5) 
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {animeList.map((anime) => (
              <div key={anime.id} className="group relative bg-surface rounded-lg overflow-hidden shadow-md hover:shadow-brand/50 transition-all duration-300 cursor-pointer">
                {/* Image Container */}
                <div className="aspect-[2/3] w-full overflow-hidden">
                  <img 
                    src={anime.image} 
                    alt={anime.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay Episode Badge */}
                <div className="absolute top-2 right-2 bg-brand text-white text-xs font-bold px-2 py-1 rounded">
                  {anime.episode}
                </div>

                {/* Title Info */}
                <div className="p-3">
                  <h4 className="text-sm font-semibold truncate text-text-main group-hover:text-brand transition-colors">
                    {anime.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-surface py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-text-muted text-sm">
          &copy; 2024 AniStream. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
