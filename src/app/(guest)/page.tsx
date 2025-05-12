'use client'
import { HomeProps } from '@/types';
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import Destinations from "@/components/marketing/Destinations";
import Testimonials from "@/components/marketing/Testimonials";
import CTA from "@/components/marketing/CTA";
import Contact from "@/components/base/Contact";





export default function Home({ headerRef }: HomeProps) {
  // useGSAP(() => {
  //   const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  //   tl.fromTo('.hero-bg-image', { scale: 1.1, opacity: 0.7 }, { scale: 1, opacity: 0.3, duration: 2.5 })
  //     .fromTo('.hero-title-word',
  //       { opacity: 0, y: 80, skewY: 7 },
  //       { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.1, delay: -1.8 }
  //     )
  //     .fromTo('.hero-subtitle', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
  //     .fromTo('.hero-cta-button', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, "-=0.5")
  //     .fromTo('.service-card-item', { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(2)' }, "-=0.5")
  //   gsap.from('.service-card-item', {
  //     opacity: 0,
  //     y: 80,
  //     scale: 0.85,
  //     duration: 0.8,
  //     stagger: 0.18,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#services', start: 'top 80%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.cta-content > *', {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.9,
  //     stagger: 0.2,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#cta', start: 'top 75%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.destination-card-item', {
  //     opacity: 0,
  //     y: 80,
  //     scale: 0.85,
  //     duration: 0.8,
  //     stagger: 0.18,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#destinations', start: 'top 80%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.testimonial-item', {
  //     opacity: 0,
  //     y: 80,
  //     scale: 0.85,
  //     duration: 0.8,
  //     stagger: 0.18,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#testimonials', start: 'top 80%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.why-choose-item', {
  //     opacity: 0,
  //     x: -70,
  //     duration: 0.8,
  //     stagger: 0.15,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#why-us .grid-cols-1', start: 'top 80%', toggleActions: 'play none none none' }, // Target specific grid for item animation
  //   });
  //   gsap.from('.why-us-image-container', {
  //     opacity: 0,
  //     scale: 0.8,
  //     duration: 1.2,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#why-us', start: 'top 70%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.contact-form-wrapper', {
  //     opacity: 0,
  //     y: 80,
  //     duration: 1,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '#contact', start: 'top 75%', toggleActions: 'play none none none' },
  //   });
  //   gsap.from('.contact-info-card-item', {
  //     opacity: 0,
  //     x: -60,
  //     duration: 0.8,
  //     stagger: 0.15,
  //     ease: 'expo.out',
  //     scrollTrigger: { trigger: '.contact-info-grid', start: 'top 80%', toggleActions: 'play none none none' },
  //   });
  // }, []);

  return (
    <div className="overflow-hidden">
      <Hero headerRef={headerRef as React.RefObject<HTMLElement>} />
      <Services />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      <CTA headerRef={headerRef as React.RefObject<HTMLElement>} />
      <Contact />
    </div>
  );
}
