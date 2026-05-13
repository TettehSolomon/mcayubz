import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
};

export default MCAyubzPortfolio;