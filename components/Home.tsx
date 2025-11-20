
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as HomeImages from '../assets/home/images';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-[#fafaf9] overflow-hidden">
      
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* Soft Gradient Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-stone-200/50 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 pt-20 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-stone-500 font-medium tracking-[0.2em] text-sm mb-8 pl-1">PORTFOLIO 2024</h2>
            
            <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-serif font-light text-stone-900 leading-[0.9] -ml-1 mb-10 tracking-tighter">
              Quiet <br/>
              <span className="italic text-stone-400">Mastery</span>
            </h1>
            
            <p className="text-stone-600 text-xl md:text-2xl max-w-lg font-light leading-relaxed mb-12">
              A digital sanctuary exploring the intersection of technology, art, and the human spirit.
            </p>
            
            <div className="flex flex-wrap items-center gap-8">
              <Link to="/personal-bio" className="group flex items-center space-x-4">
                <span className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300">
                   <ArrowRight className="text-stone-400 group-hover:text-white transition-colors" size={20} />
                </span>
                <span className="text-lg font-medium text-stone-800 group-hover:text-stone-900">Begin Journey</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Image Grid on Right */}
        <div className="lg:col-span-5 hidden lg:block relative h-[80vh]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute top-10 right-0 w-64 h-80 bg-stone-200 rounded-lg overflow-hidden shadow-2xl"
            >
               <img src={HomeImages.DECORATIVE_1} className="w-full h-full object-cover opacity-90" alt="Decorative" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="absolute top-1/3 left-10 w-72 h-96 bg-stone-300 rounded-lg overflow-hidden shadow-2xl z-10"
            >
               <img src={HomeImages.DECORATIVE_2} className="w-full h-full object-cover opacity-90" alt="Decorative" />
            </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8 md:left-12 text-stone-400 text-xs font-mono tracking-widest">
        EST. 2025 — DESIGNED BY Dev
      </div>
    </div>
  );
};

export default Home;
