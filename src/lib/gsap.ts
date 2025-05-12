import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const initGSAP = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export const fadeInUpAnimation = (element: string, delay: number = 0) => {
  return {
    opacity: 0,
    y: 60,
    duration: 1,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  };
};

export const staggerAnimation = (element: string, stagger: number = 0.2) => {
  return {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  };
};

export const scaleAnimation = (element: string, delay: number = 0) => {
  return {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    delay,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  };
};
