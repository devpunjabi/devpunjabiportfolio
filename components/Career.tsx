import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Career: React.FC = () => {
    const { content, navigation, t } = useLanguage();
    const data = content['career-bio'];

    const [activeImage, setActiveImage] = useState(data?.heroImage || '');
    const [activeImageId, setActiveImageId] = useState('hero');

    useEffect(() => {
        if (data) {
            setActiveImage(data.heroImage);
            setActiveImageId('hero');
        }
    }, [data]);

    if (!data) return null;

    const currentNavId = 'career-bio';
    const currentIndex = navigation.findIndex(item => item.id === currentNavId);
    const nextItem = currentIndex !== -1 ? navigation[(currentIndex + 1) % navigation.length] : null;

    return (
        <div className="min-h-screen bg-[#fafaf9]">

            {/* Large Title Header */}
            <div className="pt-40 pb-20 px-6 md:px-12 lg:px-20 max-w-[90rem] mx-auto">
                <div>
                    <h2 className="text-stone-500 font-medium tracking-widest uppercase text-sm md:text-base mb-6 pl-1">
                        {data.subtitle}
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-stone-900 leading-[0.9] tracking-tight">
                        {data.title}
                    </h1>
                </div>
            </div>

            {/* Split View Layout */}
            <div className="flex flex-col lg:flex-row max-w-[100rem] mx-auto">

                {/* LEFT COLUMN: Sticky Image Display (Desktop) - REDUCED WIDTH */}
                <div className="hidden lg:block w-[30%] h-screen sticky top-0 p-8 xl:p-12 z-10">
                    <div className="w-full h-[60vh] mt-20 rounded-[2rem] overflow-hidden shadow-2xl relative bg-white border border-stone-100 flex items-center justify-center p-8">
                        <img
                            key={activeImageId}
                            src={activeImage}
                            alt="Professional Experience"
                            className="w-full h-full object-contain transition-opacity duration-500"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Scrolling Text Content - INCREASED WIDTH */}
                <div className="w-full lg:w-[70%] flex flex-col px-6 md:px-12 lg:px-20 pb-40">

                    {/* Introduction Block */}
                    <div
                        className="min-h-[60vh] flex flex-col justify-center lg:pr-20 py-20"
                        onMouseEnter={() => {
                            setActiveImage(data.heroImage);
                            setActiveImageId('hero');
                        }}
                    >
                        {/* Mobile Hero Image */}
                        <div className="lg:hidden w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-lg bg-white border border-stone-100 p-4">
                            <img src={data.heroImage} alt={data.title} className="w-full h-full object-contain" />
                        </div>

                        <p className="text-2xl md:text-3xl font-serif leading-relaxed text-stone-800">
                            {data.description}
                        </p>
                        <div className="w-24 h-1 bg-stone-300 mt-12 rounded-full"></div>
                    </div>

                    {/* Gallery Items / Scrollytelling Sections */}
                    <div className="space-y-32 lg:space-y-0">
                        {data.gallery.map((item, index) => (
                            <div
                                key={item.id}
                                className="min-h-[50vh] lg:min-h-[70vh] flex flex-col justify-center lg:pr-20"
                                onMouseEnter={() => {
                                    setActiveImage(item.imageUrl);
                                    setActiveImageId(item.id);
                                }}
                            >
                                {/* Mobile Image */}
                                <div className="lg:hidden w-3/4 mx-auto aspect-video rounded-xl overflow-hidden mb-8 shadow-md bg-white border border-stone-100 p-4">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-contain" />
                                </div>

                                <div className="flex flex-col gap-6">
                                    <span className="text-stone-400 font-mono text-sm">EXP 0{index + 1}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 border-l-4 border-stone-900 pl-6">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <div className="pl-7">
                                            <p className="text-xl md:text-2xl text-stone-700 leading-relaxed">
                                                {item.description}
                                            </p>
                                            {/* Placeholder for more technical details if data supports it later */}
                                            <p className="mt-4 text-stone-500 text-base leading-7">
                                                Details regarding the technical stack, leadership responsibilities, and key achievements at this role would go here to provide the depth of experience required.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
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

export default Career;
