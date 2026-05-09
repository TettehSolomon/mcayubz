import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import imageSrc from './assets/mc_1.jpg';
import myVideo from './assets/vid2.mp4';

const MCAyubzPortfolio = () => {
  // State for mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // For marquee scrolling, we duplicate the brand logos to create seamless loop
  const brands = [
    "SAFARICOM",
    "COCA-COLA",
    "AIRBNB",
    "MICROSOFT",
    "BMW GROUP"
  ];

  // Function to handle form submission
  // Inject external fonts and Material Symbols into document head
  useEffect(() => {
    // Add Google Fonts
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
      {/* Custom Global Styles for Animations and Color Overrides */}
      <style>{`
        /* Custom color classes exactly matching original palette */
        .bg-background { background-color: #131313; }
        .bg-primary-fixed { background-color: #ffe16d; }
        .bg-primary-fixed-dim { background-color: #e9c400; }
        .bg-secondary-fixed-dim { background-color: #00daf3; }
        .bg-surface-container-lowest { background-color: #0e0e0e; }
        .bg-surface-container-low { background-color: #1c1b1b; }
        .bg-surface-container { background-color: #201f1f; }
        .bg-surface-container-high { background-color: #2a2a2a; }
        .bg-surface-container-highest { background-color: #353534; }
        .bg-surface-variant { background-color: #353534; }
        .bg-on-tertiary-fixed-variant { background-color: #474746; }
        
        .text-primary-fixed { color: #ffe16d; }
        .text-primary-fixed-dim { color: #e9c400; }
        .text-secondary-fixed-dim { color: #00daf3; }
        .text-on-primary-fixed { color: #221b00; }
        .text-on-surface { color: #e5e2e1; }
        .text-on-surface-variant { color: #d0c6ab; }
        .text-on-tertiary-container { color: #605f5e; }
        .text-on-tertiary-fixed-variant { color: #474746; }
        
        .border-secondary-fixed-dim { border-color: #00daf3; }
        .border-primary-fixed { border-color: #ffe16d; }
        
        /* Glass card styling */
        .glass-card {
          background: rgba(53, 53, 52, 0.4);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease-in-out;
        }
        .glass-card:hover {
          border-color: rgba(255, 225, 109, 0.5);
          transform: scale(1.02);
        }
        
        /* Marquee animation */
        .marquee-track {
          display: flex;
          width: calc(250px * 10);
          animation: scroll 30s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-250px * 5)); }
        }
        
        /* Text glow */
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 225, 109, 0.3);
        }
        
        /* Fade in and slide up animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        /* Slide in from right animation */
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
        
        /* Fade in animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        /* Slide in from left animation */
        @keyframes slideInLeft {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        /* Custom scrollbar & smooth behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Additional hover & transitions */
        .transition-all-300 { transition: all 0.3s ease-in-out; }
      `}</style>

      <Navbar />

      <Hero />

      {/* Corporate Marquee */}
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

      {/* About Section */}
      <section id="about" className="py-32 relative bg-[#F2F9FB]">
        <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#d0c6ab] mb-4 uppercase">
              The Philosophy
            </h2>
            <h3 className="font-['Montserrat'] text-[28px] md:text-[48px] leading-[1.2] font-bold text-[#5d5a5a] mb-8">
              Bridging Two Worlds: Clean Entertainment &amp; Hybrid Hosting.
            </h3>
            <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#d0c6ab] text-justify mb-8">
              MC Ayubz isn't just a voice on a microphone; he's a master of atmosphere. With a unique ability to command corporate boardrooms with precision and ignite wedding dance floors with infectious energy, he represents the pinnacle of "Hybrid Entertainment."
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-[#A7AAAD] rounded-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <span className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[white] block mb-2">500+</span>
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[white]">Events Orchestrated</span>
              </div>
              <div className="p-6 bg-[#A7AAAD] rounded-xl animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <span className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[white] block mb-2">12</span>
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[white]">Global Brands</span>
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
              <p className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold mt-2 text-[#ffe16d]">— Event Director, Safaricom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-32 bg-[#0e0e0e]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#ffe16d] mb-4 uppercase">Service Excellence</h2>
            <h3 className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[#e5e2e1]">Curated Experiences</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Corporate Galas */}
            <div className="md:col-span-8 glass-card rounded-3xl p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe16d]/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-[#ffe16d]/10 transition-all"></div>
              <span className="material-symbols-outlined text-[#ffe16d] text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
              <h4 className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Corporate Galas</h4>
              <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#d0c6ab] mb-8 max-w-lg">Professional, precise, and perfectly paced. Elevate your awards night, product launch, or AGM with an MC who understands corporate nuance and brand integrity.</p>
              <ul className="space-y-3 font-['Inter'] text-[16px] leading-[1.6] text-[#d0c6ab]">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Formal Protocol Adherence</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Productive Audience Engagement</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#ffe16d] text-xl">check_circle</span> Seamless Transition Management</li>
              </ul>
            </div>
            {/* Elite Weddings */}
            <div className="md:col-span-4 glass-card rounded-3xl p-12 flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-[#00daf3] text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <h4 className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Elite Weddings</h4>
                <p className="font-['Inter'] text-[16px] leading-[1.6] text-[#d0c6ab]">High-energy, cultural mastery, and vibrant celebration. From traditional rites to modern receptions, we keep the heart of your union beating.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#00daf3] uppercase">Energy Level: ELECTRIC</span>
              </div>
            </div>
            {/* Media Hosting */}
            <div className="md:col-span-5 glass-card rounded-3xl p-12 group">
              <span className="material-symbols-outlined text-[#ffe16d] text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>mic_external_on</span>
              <h4 className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Media Hosting</h4>
              <p className="font-['Inter'] text-[16px] leading-[1.6] text-[#d0c6ab] mb-6">Vibrant and improv-ready for TV, radio, and digital streams. Engaging interviews and dynamic live broadcast management.</p>
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
            <div className="md:col-span-7 glass-card rounded-3xl p-12 bg-gradient-to-br from-[#ffe16d]/10 to-transparent group">
              <h4 className="font-['Montserrat'] text-[32px] leading-[1.3] font-bold text-[#e5e2e1] mb-4">Specialized Productions</h4>
              <p className="font-['Inter'] text-[18px] leading-[1.6] text-[#d0c6ab] mb-8">Concerts, festivals, and fashion shows. Where high production value meets raw stage presence.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">CONCERTS</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d]">FASHION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="font-['Montserrat'] text-[14px] tracking-[0.2em] font-semibold text-[#ffe16d] mb-4 uppercase">Visual Journey</h2>
              <h3 className="font-['Montserrat'] text-[48px] leading-[1.2] font-bold text-[#e5e2e1]">The Stage Presence</h3>
            </div>
            <button className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d] flex items-center gap-2 group">
              VIEW ALL MOMENTS <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <div className="rounded-2xl overflow-hidden glass-card">
              <img className="w-full hover:scale-105 transition-transform duration-500" alt="Wide cinematic shot of outdoor concert crowd with vibrant stage lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHOc46sf84eOheCs1qJcHPr6gBp4k8xiv_cf7NE41MxaYuH-Lv_L5muUGbcuZ6pI9RyL1cAyLRAAAo_Z3CMYUCGLWX3Ul7VgBiYflIGT2T3ZpLvXARSQi1wmSHHrTu-QlgF1KrSzYK2tT5TN1hKPrMJ82Imuc3iVh2krng1E5B8mgvjWSfs1WTZ2_shnXKTfdYb0wPEQiZCzJeUDcKqBR3jm8zzHmd66NohhHby94MzKPPXyyUYsn3h9Se3iVu-8UsqBMs9QCQO-4" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-card">
              <img className="w-full hover:scale-105 transition-transform duration-500" alt="Luxury ballroom for corporate gala with MC in white traditional ensemble" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfHhkGW_ezdRBZmh2B0bJ8U5x0GCgzP55LXSwM6nTED3sKq7fFPGqotAh9HsdaZMBAiIe-2nLT0M5kwB6s6RZNz8qw9NM_0X0r7g5qp-SVY6XrWExcn4pv6uz-4wIRaPMk-UrwVB0SD40JA1pWAosm53Fht5EAvyHf40YWfeVWIyXk1cfGMt1GIwD0uIniueS4mQEprw7GCUq-3DFiBRAu88THrQFu1FTMQxEaMqYRsedfcXeMxG0sLZCUMqwrFAQS3MrzxMG8IJI" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-card">
              <img className="w-full hover:scale-105 transition-transform duration-500" alt="Close-up of MC Ayubz laughing while interviewing guest on talk-show set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHvA91abp7BF-GQBMClsncXu2vwDlro4b-5J87Pxu5oi-UgO2zOrSQaThizqOz1P9qkFhk13zhNk5dBRsFgEuEkPiQ9j7digU9L_AqXEtCLg7k-daN8tFdzOejv0SZQIpExwOB_nzHlmc1klW-HkrZ1PBJNtZgRAkzT4nbXZAf5XC0kn_8JroBMKa1u8oL0pfHj7Mxj_mxYdpEkbPWQjoksrcoO-PcocU1Ht2Yf4H5zdZ1JquanWqFoPzoCPsQV8AWGt29_HcOyY" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-card">
              <img className="w-full hover:scale-105 transition-transform duration-500" alt="Wedding dance floor with guests celebrating as MC leads" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7W66a4VpKRZC82sGHBCY5UQARrwCd-1bxk2W3rcBwS3rk_4RuzLPZQ8cuz-Ej192NV63uvsOZ0E8SXqlxz8oPtFXF7WXTBWKvXLxTp_tt_xqRe_uWHWAq-UNq2QQ1VX34H3_s4S4yT2UD92MUNyuUnirIaDPc-GDnS_zA17jjHuoYM4svKwIUdxFB9GkUFd2Jf6RnH_QZei4oTkSpMVXfvo9HyoOlDD9s3mX7d4mGK99RELJlNk8efhyjLJZ6cxPPUhoSucf7bDQ" />
            </div>
            <div className="rounded-2xl overflow-hidden glass-card">
              <img className="w-full hover:scale-105 transition-transform duration-500" alt="Side profile of MC on stage lit by dramatic spotlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYHLOdGLWTsrnSpREg8iKGKJksIWhw--xnn6LI7wMMgcBTIdT4OtXmHs-7EL505ozGwYSxHIQsMVRkBlUYwIRMDYk-LuUYpK_Ctl1ta3cOmKJcbx5Pb2_tYP5OggmqRKa4FVIL1nMVLIU2j-KU5j232tc7VRCJSO0Kt5WCpuzFImV0GZarhp04NyUfpoIl5QxIzY2XKX6ced2J80q0Yj0eGhKE3kHBKFnmt_gqneDfBHvRvsKJ1Tasxqe3YfYPlDsTt5ZhNbm71Os" />
            </div>
          </div>
        </div>
      </section>

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