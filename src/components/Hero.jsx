import React, { useState } from "react";
import bgHero from "../assets/bg_hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center mt-[-60px] pt-65 md:mt-0 pt-10 md:pt-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="MC Ayubz hosting an event"
          className="w-full h-full object-cover opacity-40 mt-20"
          src={bgHero}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-transparent"></div>
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#ffe16d]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00daf3]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 mt-37 md:mt-17 text-center flex flex-col items-center">
        <h1 className="font-['Montserrat'] text-[48px] md:text-[80px] leading-[1.1] tracking-[-0.02em] font-black text-white mb-4 uppercase animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          MC AYUBZ
        </h1>
        <p className="font-['Montserrat'] text-[28px] md:text-[58px] leading-[1.2] font-bold text-[#d0c6ab] mb-12 max-w-3xl mx-auto uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          THE HYBRID MC🎙️ <span className="text-[#e5e2e1]"></span> <br /><span className="text-[#e9c400]">For All Events</span>
        </p>
        <div className="flex flex-row md:flex-row gap-6 justify-center items-center animate-fade-in-up mb-8 md:mb-12" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://wa.link/yohktp"
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer'
          >
            <button className="bg-[#d0c6ab] text-[#221b00] font-['Montserrat'] text-[13px] tracking-[0.1em] font-semibold py-3 md:py-5 md:px-12 px-8 rounded-full hover:brightness-110 transition-all text-glow">
              Book Me
            </button>
          </a>

          
            <a
              href="tel:+2348067306770"
              className='cursor-pointer'>
              <button className="bg-[#5d5a5a] text-white font-['Montserrat'] text-[13px] tracking-[0.1em] font-semibold py-3 md:py-5 md:px-12 px-8 rounded-full hover:bg-[white]/10 transition-all">
                Call Now
              </button>
            </a>
        </div>

        <button
          onClick={() => {
            const nextSection = document.querySelector('.corporate-marquee');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform"
        >
          <span className="material-symbols-outlined text-[#ffe16d] text-4xl">keyboard_double_arrow_down</span>
        </button>
      </div>
    </section>
  );
};


export default Hero;