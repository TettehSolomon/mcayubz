import React, { useEffect } from 'react';
import myVideo from '../assets/vid2.mp4';

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#201f1f]">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-['Montserrat'] text-[14px] md:text-[16px] tracking-[0.2em] font-semibold text-[#d0c6ab] mb-4 uppercase">Service Excellence</h2>
                    <h3 className="font-['Montserrat'] text-[42px] md:text-[55px] leading-[1.2] font-bold text-white">Curated Experiences</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Corporate Galas */}
                    <div className="md:col-span-8 glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe16d]/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#ffe16d]/10 transition-all"></div>
                        <span className="material-symbols-outlined text-[#ffe16d] text-5xl mb-5" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
                        <h4 className="font-['Montserrat'] text-[25px] md:text-[36px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Corporate Galas</h4>
                        <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[1.6] text-[#d0c6ab] mb-8 max-w-lg text-justify">Professional, precise and perfectly paced. Elevate your wedding parties, birthdays, award night, church seminars, product launch or AGM with an MC who understands corporate nuance and brand integrity.</p>
                        <ul className="space-y-3 font-['Inter'] text-[15px] md:text-[16px] leading-[1.6] text-[#d0c6ab]">
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Formal Protocol Adherence</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Productive Audience Engagement</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Seamless Transition Management</li>
                            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">language</span> Available for International Bookings</li>
                        </ul>
                    </div>

                    {/* Elite Weddings */}
                    <div className="md:col-span-4 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-between group">
                        <div>
                            <span className="material-symbols-outlined text-[#ffe16d] text-5xl mb-5" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            <h4 className="font-['Montserrat'] text-[25px] md:text-[36px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Elite Weddings</h4>
                            <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[1.6] text-[#d0c6ab] text-justify">High-energy, cultural mastery and vibrant celebration. From traditional rites to modern receptions, we keep the heart of your union beating.</p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-[#e5e2e15f]">
                            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d] uppercase">Energy Level: ELECTRIC</span>
                        </div>
                    </div>

                    {/* Media Hosting */}
                    <div className="md:col-span-5 glass-card rounded-3xl p-8 md:p-12 group">
                        <span className="material-symbols-outlined text-[#ffe16d] text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>mic_external_on</span>
                        <h4 className="font-['Montserrat'] text-[25px] md:text-[36px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Event Hosting</h4>
                        <p className="font-['Inter'] text-[15px] md:text-[16px] leading-[1.6] text-[#d0c6ab] mb-6">Vibrant and ready to host engaging events and dynamic live broadcast management.</p>
                        <div className="aspect-video rounded-xl bg-[#131313]/50 border border-white/10 overflow-hidden flex items-center justify-center">
                            <video
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                                loop
                            >
                                <source src={myVideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    {/* Specialized Events */}
                    <div className="md:col-span-7 glass-card rounded-3xl p-5 md:p-8 bg-gradient-to-br from-[#ffe16d]/10 to-transparent group">
                        <h4 className="font-['Montserrat'] text-[25px] md:text-[36px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Specialized Events</h4>
                        <p className="font-['Inter'] text-[15px] leading-[1.6] text-[#d0c6ab] mb-8 text-justify">From the corporate stage to the cultural aisle to traditional weddings, birthdays, seminars and galas. Every room gets the same energy.</p>
                        <div className="grid grid-cols-2 gap-4 text-center md:text-left">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">GRAND OPENINGS</span>
                            </div>
                            <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">ANNIVERSARY CELEBRATION</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">BUSINESS SEMINARS</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">CHURCH EVENTS</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">CORPORATE EVENTS</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">BIRTHDAY PARTIES</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">TRADITIONAL WEDDINGS</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">ENGAGEMENT CEREMONIES</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">WHITE WEDDINGS</span>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                <span className="font-['Montserrat'] text-[12px] md:text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">PRODUCT LAUNCHES</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
