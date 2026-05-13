import React, { useEffect } from 'react';

  // For marquee scrolling, we duplicate the brand logos to create seamless loop
  const brands = [
    "SAFARICOM",
    "COCA-COLA",
    "AIRBNB",
    "MICROSOFT",
    "BMW GROUP"
  ];

const Brands = () => {
    return (
      <section className="corporate-marquee py-16 bg-[#0e0e0e] overflow-hidden border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-8 mb-8">
          <p className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#605f5e] uppercase text-center">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="flex marquee-track items-center gap-24">
          {[...brands, ...brands].map((brand, idx) => (
            <div key={idx} className="flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <span className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold tracking-tighter text-[#e5e2e1]">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Brands;