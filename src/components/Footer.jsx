import React, { useEffect } from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0e0e0e] border-t border-white/5 w-full py-8 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1280px] mx-auto">
                <div className="text-center md:text-left hidden md:block">
                    <span className="font-['Montserrat'] text-[14px] tracking-[0.1em] font-semibold text-[#ffe16d] block mb-2 tracking-widest">MC AYUBZ</span>
                </div>
                
                <p className="text-[#ffe16d] font-['Inter'] text-[14px] leading-[1.6]">© 2026 MC AYUBZ. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;