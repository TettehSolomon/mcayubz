import React, { useEffect } from 'react';
import imageSrc from '/mc_1.jpg';

const About = () => {
  return (
    <section id="about" className="py-32 relative bg-[#F2F9FB]">
      <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#d0c6ab] mb-4 uppercase">
            The Philosophy
          </h2>
          <h3 className="font-['Montserrat'] text-[26px] md:text-[48px] leading-[1.2] font-bold text-[#5d5a5a] mb-8">
            Bridging Two Worlds: Clean Entertainment &amp; Hybrid Hosting.
          </h3>
          <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#958865] text-justify mb-8">
            MC Ayubz isn't just a voice on a microphone; he's a master of atmosphere. With a unique ability to ignite wedding dance floors and command business events with infectious energy, he represents the pinnacle of "Hybrid Entertainment."
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-[#A7AAAD] rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span className="font-['Montserrat'] text-[40px] leading-[1.2] font-bold text-[white] block mb-2">100+</span>
              <span className="font-['Montserrat'] text-[15px] tracking-[0.1em] font-semibold text-[white]">Events Anchored</span>
            </div>
            <div className="p-6 bg-[#A7AAAD] rounded-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <span className="font-['Montserrat'] text-[40px] leading-[1.2] font-bold text-[white] block mb-2">20+</span>
              <span className="font-['Montserrat'] text-[15px] tracking-[0.1em] font-semibold text-[white]">Global Brands</span>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
            <img
              className="w-full h-full object-cover rounded-2xl"
              alt="Professional male MC in sharp suit and traditional cap speaking into microphone at luxury corporate gala"
              src={imageSrc}
            />
          </div>
          <div className="absolute -bottom-16 md:-bottom-8 -left-8 glass-card p-6 rounded-2xl max-w-[240px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="material-symbols-outlined text-[#ffe16d] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            <p className="font-['Inter'] text-[16px] leading-[1.6] text-[#e5e2e1] italic">"Ayubz brought a level of sophistication we hadn't seen before."</p>
            <p className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold mt-2 text-[#ffe16d]">— Founder of TMN,<br /> Mary Damilola</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;