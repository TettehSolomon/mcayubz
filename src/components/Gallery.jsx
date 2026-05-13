import React, { useEffect } from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-32 bg-[#F2F9FB]">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="mb-16 flex justify-between items-end">
                    <div>
                        <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#d0c6ab] mb-4 uppercase">Visual Journey</h2>
                        <h3 className="font-['Montserrat'] text-[40px] md:text-[48px] leading-[1.2] font-bold text-[#5d5a5a]">The Stage Presence</h3>
                    </div>
                    <button className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] flex items-center gap-2 group hidden md:flex">
                        VIEW ALL MOMENTS <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </button>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_1" src="../public/img1.jpg" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_2" src="../public/img2.jpg" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_3" src="../public/img3.jpg" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_4" src="../public/img4.jpg" />
                    </div>
                    
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_6" src="../public/img6.jpg" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_7" src="../public/img7.jpg" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_5" src="../public/img5.png" />
                    </div>
                    <div className="rounded-2xl overflow-hidden glass-card">
                        <img className="w-full hover:scale-105 transition-transform duration-500" alt="mc_ayubz_5" src="../public/img8.jpg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;