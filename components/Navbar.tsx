import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Circle } from 'lucide-react';
import { NAVIGATION } from '../constants';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } }
  };

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled || isOpen ? 'bg-[#fafaf9]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 z-50 group">
            <Circle className={`h-3 w-3 fill-current ${scrolled || !isHome ? 'text-stone-900' : 'text-stone-900'}`} />
            <span className={`font-sans font-bold text-lg tracking-tighter ${
              scrolled || isOpen || !isHome ? 'text-stone-900' : 'text-stone-900'
            }`}>
              Welcome
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-10">
            {NAVIGATION.map((item) => (
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
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden z-50 focus:outline-none text-stone-900`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 bg-[#fafaf9] z-40 lg:hidden pt-32 px-6"
          >
            <motion.div 
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-8"
            >
              {NAVIGATION.map((item) => (
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;