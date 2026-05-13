import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

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
      <Contact />

     
      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-white/5 w-full py-8 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1280px] mx-auto">
          <div className="text-center md:text-left">
            <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d] block mb-2 tracking-widest">MC AYUBZ</span>
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