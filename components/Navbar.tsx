
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Circle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { navigation, t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);


  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled || isOpen ? 'bg-[#fafaf9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 z-50 group">
            <Circle className={`h-3 w-3 fill-current ${scrolled || !isHome ? 'text-stone-900' : 'text-stone-900'}`} />
            <span className={`font-sans font-bold text-lg tracking-tighter ${scrolled || isOpen || !isHome ? 'text-stone-900' : 'text-stone-900'
              }`}>
              {t('welcome')}
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `
                  text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 relative group
                  ${isActive ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-stone-900 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Language Toggle (Desktop) */}
            <button
              onClick={toggleLanguage}
              className="ml-4 flex items-center space-x-1 text-xs font-bold tracking-widest text-stone-900 border border-stone-300 px-3 py-1 rounded-full hover:bg-stone-200 transition-colors uppercase"
            >
              <Globe size={12} />
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 lg:hidden z-50">
            {/* Language Toggle (Mobile) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-xs font-bold tracking-widest text-stone-900 border border-stone-300 px-3 py-1 rounded-full bg-white/50"
            >
              <span>{language === 'en' ? 'DE' : 'EN'}</span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none text-stone-900`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#fafaf9] z-40 lg:hidden pt-32 px-6 h-screen"
        >
          <div
            className="flex flex-col space-y-8"
          >
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) => `
                  text-4xl font-serif font-light
                  ${isActive ? 'text-stone-900 italic' : 'text-stone-400'}
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
