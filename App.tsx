
import React, { useEffect } from 'react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageLayout from './components/PageLayout';
import Contact from './components/Contact';
import { PAGES_DATA } from './constants';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <MemoryRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Map specific routes based on constants */}
            <Route path="/personal-bio" element={<PageLayout data={PAGES_DATA['personal-bio']} />} />
            <Route path="/career-bio" element={<PageLayout data={PAGES_DATA['career-bio']} />} />
            <Route path="/taekwondo" element={<PageLayout data={PAGES_DATA['taekwondo']} />} />
            <Route path="/paintings" element={<PageLayout data={PAGES_DATA['paintings']} />} />
            <Route path="/sculptures" element={<PageLayout data={PAGES_DATA['sculptures']} />} />
            <Route path="/digital-3d" element={<PageLayout data={PAGES_DATA['digital-3d']} />} />
            <Route path="/fitness" element={<PageLayout data={PAGES_DATA['fitness']} />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-500 font-serif text-sm">
              &copy; {new Date().getFullYear()} Dev Punjabi. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
               <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </MemoryRouter>
  );
};

export default App;
