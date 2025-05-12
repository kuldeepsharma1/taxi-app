'use client'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { HomeProps } from '@/types';
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import Destinations from "@/components/marketing/Destinations";
import Testimonials from "@/components/marketing/Testimonials";
import CTA from "@/components/marketing/CTA";
import { Contact } from "lucide-react";




export default function Home({ headerRef }: HomeProps) {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    tl.fromTo('.hero-bg-image', { scale: 1.1, opacity: 0.7 }, { scale: 1, opacity: 0.3, duration: 2.5 })
      .fromTo('.hero-title-word',
        { opacity: 0, y: 80, skewY: 7 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.1, delay: -1.8 }
      )
      .fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
      .fromTo('.hero-cta-button', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, "-=0.5");
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero headerRef={headerRef} />
      <Services />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}
