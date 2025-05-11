'use client'
import { smoothScrollTo } from "@/lib/smoothscroll";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
    const headerRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } }); // Changed ease for more impact
        tl.fromTo('.hero-bg-image', { scale: 1.1, opacity: 0.7 }, { scale: 1, opacity: 0.3, duration: 2.5 })
            .fromTo('.hero-title-word',
                { opacity: 0, y: 80, skewY: 7 },
                { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.1, delay: -1.8 } // Stagger for word by word
            )
            .fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
            .fromTo('.hero-cta-button', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, "-=0.5");
    }, []);

    return (
        <section
            id="home"
            className="relative h-screen min-h-[750px] md:min-h-[800px] flex items-center justify-center text-center overflow-hidden bg-slate-900"
        >
            <div
                className="hero-bg-image absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://placehold.co/1920x1280/1e293b/94a3b8?text=Majestic+Himachal+Panorama')", backgroundAttachment: 'fixed' }} // Fixed attachment for parallax-like effect
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/75 to-slate-900/95"></div>

            <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-white max-w-4xl mx-auto">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 drop-shadow-2xl tracking-tighter">
                    {"Discover Your".split(" ").map((word, index) => (<span key={index} className="hero-title-word inline-block mr-3 md:mr-4">{word}</span>))}
                    <br className="hidden sm:block" />
                    <span className="hero-title-word inline-block text-sky-400 mr-3 md:mr-4">Himalayan</span>
                    <span className="hero-title-word inline-block">Dream.</span>
                </h1>
                <p className="hero-subtitle text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-slate-200 drop-shadow-lg leading-relaxed">
                    Embark on an unforgettable journey through snow-capped peaks and serene valleys with HimachalRide&apos;s premium taxi services.
                </p>
                <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); smoothScrollTo("#contact", headerRef.current?.offsetHeight || 70) }}
                    className="hero-cta-button bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-10 md:py-5 md:px-12 rounded-xl text-lg md:text-xl transition-all duration-300 ease-in-out inline-flex items-center shadow-2xl hover:shadow-sky-500/40 transform hover:-translate-y-1.5 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50"
                >
                    Start Your Adventure <ArrowRight size={24} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
            </div>
            {/* Angled bottom shape */}
            <div className="absolute bottom-[-1px] left-0 w-full h-20 md:h-32 z-[5]" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)', background: 'linear-gradient(to bottom, transparent, #f8fafc 90%)' }}></div>
        </section>
    );
};

export default Hero;