
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PageLayout from './components/PageLayout';
import Contact from './components/Contact';
import Arts from './components/Arts';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

// Scroll to top on route change wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Component that consumes context to define routes with dynamic content
const AppRoutes = () => {
  const { content } = useLanguage();

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Map specific routes based on context content */}
      <Route path="/personal-bio" element={<PageLayout data={content['personal-bio']} />} />
      <Route path="/career-bio" element={<PageLayout data={content['career-bio']} />} />
      <Route path="/taekwondo" element={<PageLayout data={content['taekwondo']} />} />
      <Route path="/arts" element={<Arts />} />
      <Route path="/fitness" element={<PageLayout data={content['fitness']} />} />
      <Route path="/contact" element={<Contact />} />

      {/* Fallback */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// Footer
const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 font-serif text-sm">
          &copy; {new Date().getFullYear()} {t('rightsReserved')}
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  // HashRouter is the most compatible router for static hosting like GitHub Pages
  // because it uses the URL hash (#) to manage routing, avoiding server-side configuration requirements.
  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
