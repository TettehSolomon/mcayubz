import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';

import myVideo from './assets/vid2.mp4';

const MCAyubzPortfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle form submission
  // Inject external fonts and Material Symbols into document head
  useEffect(() => {
    const linkFontMontserrat = document.createElement("link");
    linkFontMontserrat.rel = "stylesheet";
    linkFontMontserrat.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&family=Inter:wght@400;500&display=swap";
    document.head.appendChild(linkFontMontserrat);

    // Add Material Symbols
    const linkMaterialIcons = document.createElement("link");
    linkMaterialIcons.rel = "stylesheet";
    linkMaterialIcons.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1";
    document.head.appendChild(linkMaterialIcons);

    return () => {
      document.head.removeChild(linkFontMontserrat);
      document.head.removeChild(linkMaterialIcons);
    };
  }, []);

  return (
    <div className="bg-[#131313] text-[#e5e2e1] font-body-md overflow-x-hidden relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />

      {/* Testimonials Section */}
      <section className="py-32 bg-[#201f1f]">
        <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div>
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

      {/* Booking Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffe16d]/5 blur-[120px] -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-16">
            <div className="text-center mb-16">
              <h3 className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[#e5e2e1] mb-4">Ready to Elevate Your Event?</h3>
              <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#d0c6ab]">Let's create something unforgettable together.</p>
            </div>
            <form action="https://formspree.io/f/yourFormId" method="POST" className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">FULL NAME</label>
                  <input name="name" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none" placeholder="Enter your name" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab]">EVENT TYPE</label>
                  <select name="event_type" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none">
                    <option>Corporate Gala</option>
                    <option>Elite Wedding</option>
                    <option>Media/Hosting</option>
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
                  <textarea name="details" className="bg-[#2a2a2a] border-none rounded-xl p-4 text-[#e5e2e1] focus:ring-2 focus:ring-[#ffe16d] transition-all outline-none h-full" placeholder="Tell us about your event..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#ffe16d] text-[#221b00] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-5 rounded-xl hover:brightness-110 transition-all text-glow">
                  SEND BOOKING INQUIRY
                </button>
              </div>
            </form>
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-12 border-t border-white/5 pt-12">
              <a href="#" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                <span className="material-symbols-outlined">chat</span>
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold">WhatsApp Chat</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                <span className="material-symbols-outlined">photo_camera</span>
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold">Instagram Portfolio</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-[#d0c6ab] hover:text-[#ffe16d] transition-colors">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold">ayubz@mcayubz.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

     
      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-white/5 w-full py-16 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1280px] mx-auto">
          <div className="text-center md:text-left">
            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d] block mb-2 tracking-widest">MC AYUBZ</span>
            <p className="font-['Inter'] text-[16px] leading-[1.6] text-[#474746] text-sm max-w-[200px]">The premier choice for global events and elite celebrations.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#474746] hover:text-[#00daf3] transition-colors font-['Inter'] text-[16px] leading-[1.6] hover:scale-105 transition-transform">Instagram</a>
            <a href="#" className="text-[#474746] hover:text-[#00daf3] transition-colors font-['Inter'] text-[16px] leading-[1.6] hover:scale-105 transition-transform">LinkedIn</a>
            <a href="#" className="text-[#474746] hover:text-[#00daf3] transition-colors font-['Inter'] text-[16px] leading-[1.6] hover:scale-105 transition-transform">WhatsApp</a>
            <a href="#" className="text-[#474746] hover:text-[#00daf3] transition-colors font-['Inter'] text-[16px] leading-[1.6] hover:scale-105 transition-transform">Contact</a>
          </div>
          <p className="text-[#474746] font-['Inter'] text-[16px] leading-[1.6]">© 2024 MC AYUBZ. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default MCAyubzPortfolio;