import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#F2F9FB] h-20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-full">
          <span className="font-['Montserrat'] text-[32px] font-black tracking-tighter text-[#5a5a5d]">
            MC AYUBZ
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a href="#about" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#5d5a5a] hover:text-[#ffe16d] transition-colors duration-300">
              About
            </a>
            <a href="#services" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#5d5a5a] hover:text-[#ffe16d] transition-colors duration-300">
              Services
            </a>
            <a href="#gallery" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#5d5a5a] hover:text-[#ffe16d] transition-colors duration-300">
              Gallery
            </a>
            <button className="ml-4 bg-[#5d5a5a] text-[white] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-3 px-8 rounded-full hover:brightness-110 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,225,109,0.4)]">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#5d5a5a]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#201f1f]/95 backdrop-blur-xl border-b border-white/10 py-4 px-8 flex flex-col gap-4">
            <a href="#about" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d]" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d]" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#gallery" className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d]" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
            <button className="bg-[#ffe16d] text-[#221b00] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-3 px-6 rounded-full w-full">Book Now</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;