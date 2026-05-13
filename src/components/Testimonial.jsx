import React, { useEffect } from 'react';

const Testimonial = () => {
    return (
        <section className="py-32 bg-[#201f1f]">
            <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
                <div className=''>
                    <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#00daf3] mb-4 uppercase">Testimonials</h2>
                    <h3 className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[#e5e2e1] mb-12">What Clients Say</h3>
                    <div className="space-y-8">
                        <div className="p-8 bg-[#1c1b1b] rounded-3xl border border-white/5 glass-card">
                            <div className="flex gap-1 mb-4 text-[#ffe16d]">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#e5e2e1] mb-6 italic leading-relaxed">"Ayubz is the only MC I trust for our annual gala. He knows exactly how to read the room, transitioning from formal protocols to high-energy celebrations seamlessly."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#00daf3]/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#00daf3]">person</span>
                                </div>
                                <div>
                                    <p className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#e5e2e1]">Sarah K.</p>
                                    <p className="text-xs text-[#605f5e] uppercase">Events Lead, Global Tech</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative group cursor-pointer">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card">
                        <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Wedding guests laughing and clapping with bride and groom under fairy lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVOWzfswilnB5ZiRrE2PtO9qhry3DRDC_c4_bMZAbmhyraSQvFkzwEmEFVHCk1jwccRc48yfdf-NT_0O2YwfjbLMmjOqxf1S2fB7RMgDBzdUerZfFvaepbXrJ0WBI9zFT73ctmYBqHbqb9Cpb1c4TMFn81TVDIyvfQt-E-Is31hP8kIftOHBFSBrF5rfbFCWKdTfPa0n4n-KRaNvmVKlrEYDTLegzVmYC92AOzOBqLG00nAU3Mbq3lsIhnQ548D4hAp7diw27egdo" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-[#ffe16d] text-[#221b00] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl">play_arrow</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-2xl">
                        <p className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold text-[#ffe16d]">100%</p>
                        <p className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Testimonial;