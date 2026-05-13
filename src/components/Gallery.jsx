import React, { useEffect } from 'react';

const Gallery = () => {
    return (
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
    );
};

export default Gallery;