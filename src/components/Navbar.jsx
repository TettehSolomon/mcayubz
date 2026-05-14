import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Custom hamburger icon component with 3 lines (middle one half-width)
  const HamburgerIcon = () => (
    <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5">
      <div className="w-6 h-0.5 bg-[#5d5a5a] rounded transition-all duration-300"></div>
      <div className="w-3 h-0.5 bg-[#5d5a5a] rounded transition-all duration-300"></div>
      <div className="w-6 h-0.5 bg-[#5d5a5a] rounded transition-all duration-300"></div>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#F2F9FB] h-15 md:h-20">
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-8 h-full">
          <span className="font-['Montserrat'] text-[26px] md:text-[32px] font-black tracking-tighter text-[#5a5a5d]">
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
            <a
              href="tel:+2348067306770"
              className='cursor-pointer'>
            <button className="ml-4 bg-[#5d5a5a] text-[white] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-3 px-8 rounded-full hover:brightness-110 transition-all active:scale-95 shadow-[0_0_15px_rgba(255,225,109,0.4)]">
              Book Now
            </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#5d5a5a] cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile Slide-in Menu from Left */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 md:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            ></div>

            {/* Slide-in Menu from Left */}
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-[#201f1f]/95 backdrop-blur-xl border-l border-white/10 py-4 px-8 flex flex-col gap-4 animate-slide-in-left pt-24">
              <a
                href="#about"
                className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d] transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d] transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#d0c6ab] hover:text-[#ffe16d] transition-colors py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="tel:+2348067306770">
              <button className="bg-[#ffe16d] text-[#221b00] font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold py-3 px-6 rounded-full w-full mt-4">
                Book Me
              </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;