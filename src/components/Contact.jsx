import React, { useEffect } from 'react';

const Contact = () => {
    return (

        <section id="contact" className="py-8 md:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffe16d]/5 blur-[120px] -z-10"></div>
            <div className="max-w-[1280px] mx-auto px-2">
                <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-16">
                    <div className="text-center mb-16">
                        <h3 className="font-['Montserrat'] text-[32px] md:text-[48px] leading-[1.2] font-bold text-[#e5e2e1] mb-4">Ready to Elevate Your Event?</h3>
                        <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#d0c6ab] hidden md:block">Let's create something unforgettable together.</p>
                    </div>
                    <form action="https://formspree.io/f/xjglzdkv" method="POST" className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-2">
                                <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">FULL NAME</label>
                                <input name="name" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none" placeholder="Enter your name" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">EVENT TYPE</label>
                                <select name="event_type" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none">
                                    <option>Weddings</option>
                                    <option>Corporate Gala</option>
                                    <option>Media/Hosting</option>
                                    <option>Church Event</option>
                                    <option>Birthday Party</option>
                                    <option>Corporate Meeting</option>
                                    <option>Product Launch</option>
                                    <option>Seminar/Conference</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">EVENT DATE</label>
                                <input name="event_date" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none" type="date" />
                            </div>
                        </div>
                        <div className="space-y-6 flex flex-col">
                            <div className="flex flex-col gap-2 flex-grow">
                                <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">ADDITIONAL DETAILS</label>
                                <textarea
                                    name="details"
                                    className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none h-32 resize-vertical"
                                    placeholder="Tell us about your event..."
                                ></textarea>   </div>
                            <button type="submit" className="w-full bg-[#ffe16d] text-[#221b00] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-5 rounded-xl hover:brightness-110 transition-all text-glow cursor-pointer">
                                SEND BOOKING INQUIRY
                            </button>
                        </div>
                    </form>
                    <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 border-t border-white/5 pt-12 hidden md:flex">
                        <a href="https://wa.link/yohktp" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                            <span className="material-symbols-outlined">chat</span>
                            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold">WhatsApp Chat</span>
                        </a>
                        <a href="https://www.instagram.com/mcayubz/" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                            <span className="material-symbols-outlined">photo_camera</span>
                            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold">Instagram Portfolio</span>
                        </a>
                        <a href="tel:+2348067306770" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                            <span className="material-symbols-outlined">phone</span>
                            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold"> +2348067306770</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;