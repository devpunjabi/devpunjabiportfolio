
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageData } from '../types';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  data?: PageData;
}

const PageLayout: React.FC<Props> = ({ data }) => {
  const { t, navigation } = useLanguage();
  // State to track which image should be displayed in the sticky left panel
  const [activeImage, setActiveImage] = useState(data?.heroImage || '');
  const [activeImageId, setActiveImageId] = useState('hero');

  // Reset to hero image when page data changes (navigation)
  useEffect(() => {
    if (data) {
      setActiveImage(data.heroImage);
      setActiveImageId('hero');
    }
  }, [data]);

  // Guard clause: if data is missing, do not render the layout
  if (!data) {
    return (
      <div className="min-h-screen bg-[#fafaf9] flex items-center justify-center">
        <p className="text-stone-400 uppercase tracking-widest">Content not found</p>
      </div>
    );
  }

  // Calculate next page for navigation
  const currentIndex = navigation.findIndex(item => item.id === data.id);
  const nextItem = navigation[(currentIndex + 1) % navigation.length];

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      
      {/* Large Title Header */}
      <div className="pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm md:text-base mb-6 pl-1">
            {data.subtitle}
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-stone-900 leading-[0.9] tracking-tight">
            {data.title}
          </h1>
        </motion.div>
      </div>

      {/* Split View Layout */}
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT COLUMN: Sticky Image Display (Desktop) */}
        <div className="hidden lg:block w-1/2 h-screen sticky top-0 p-8 xl:p-12 z-10">
          <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-stone-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageId} // Use ID to trigger animation even if URL is same (though usually distinct)
                src={activeImage}
                alt="Display"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            {/* Overlay gradient for better text contrast if needed, mostly aesthetic here */}
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col px-6 md:px-12 lg:px-20 pb-40">
          
          {/* Introduction Block */}
          <motion.div 
            className="min-h-[60vh] flex flex-col justify-center lg:pr-20 py-20"
            onViewportEnter={() => {
              setActiveImage(data.heroImage);
              setActiveImageId('hero');
            }}
            viewport={{ amount: 0.5 }}
          >
            {/* Mobile Hero Image */}
            <div className="lg:hidden w-full aspect-[4/3] rounded-xl overflow-hidden mb-10 shadow-lg">
               <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-2xl md:text-3xl font-serif leading-relaxed text-stone-800">
              {data.description}
            </p>
            <div className="w-24 h-1 bg-stone-300 mt-12 rounded-full"></div>
          </motion.div>

          {/* Gallery Items / Scrollytelling Sections */}
          <div className="space-y-32 lg:space-y-0">
            {data.gallery.map((item, index) => (
              <motion.div
                key={item.id}
                className="min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center lg:pr-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ amount: 0.3, once: true }}
                onViewportEnter={() => {
                  setActiveImage(item.imageUrl);
                  setActiveImageId(item.id);
                }}
              >
                {/* Mobile Image (Visible only on mobile) */}
                <div className="lg:hidden w-full rounded-xl overflow-hidden mb-8 shadow-md">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-stone-400 font-mono text-sm">0{index + 1}</span>
                  <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Next Page Navigation Area */}
          {nextItem && (
            <div className="min-h-[40vh] flex items-center justify-center mt-20 lg:mt-0">
              <Link to={nextItem.path} className="group relative inline-flex flex-col items-center">
                  <span className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-4 group-hover:text-stone-600 transition-colors">{t('upNext')}</span>
                  <span className="text-5xl md:text-7xl font-serif text-stone-300 group-hover:text-stone-900 transition-colors duration-500">
                    {nextItem.label}
                  </span>
                  <div className="mt-8 w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300">
                    <ArrowRight className="text-stone-400 group-hover:text-white transition-colors" />
                  </div>
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PageLayout;
