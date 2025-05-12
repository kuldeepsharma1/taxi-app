'use client'
import { smoothScrollTo } from "@/lib/smoothscroll";
import { HeroProps } from "@/types";

import { ArrowRight, Phone } from "lucide-react";


const CTA: React.FC<HeroProps> = ({headerRef}) => {
  

    return (
        <section id="cta" className="py-24 md:py-32 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-400 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/wavecut.png')" }}></div> {/* Subtle pattern */}
            <div className="absolute -bottom-1/4 left-0 w-full h-1/2 bg-white/5 rounded-t-full opacity-30 animate-pulse-slowest"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 cta-content relative z-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-7 drop-shadow-xl tracking-tighter">Your Himalayan Odyssey Awaits.</h2>
                <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-sky-100 drop-shadow-lg leading-relaxed">
                    Don&apos;t just dream about the mountains. Experience them. Contact HimachalRide today to plan your bespoke journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-6">
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact", headerRef.current?.offsetHeight || 70) }}
                        className="bg-white text-sky-600 hover:bg-slate-100 font-bold py-4 px-10 md:py-5 md:px-12 rounded-xl text-lg md:text-xl transition-all duration-300 ease-in-out inline-flex items-center shadow-2xl hover:shadow-white/30 transform hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-opacity-50 w-full sm:w-auto justify-center"
                    >
                        Request a Quote <ArrowRight size={24} className="ml-3" />
                    </a>
                    <a
                        href="tel:+911234567890" // Replace with actual phone
                        className="border-2 border-sky-200/70 text-white hover:bg-white/10 font-semibold py-4 px-10 md:py-5 md:px-12 rounded-xl text-lg md:text-xl transition-all duration-300 ease-in-out inline-flex items-center shadow-xl hover:shadow-white/20 transform hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-sky-100 focus:ring-opacity-30 w-full sm:w-auto justify-center"
                    >
                        <Phone size={22} className="mr-3" /> Call Our Expert
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA