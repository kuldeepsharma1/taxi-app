import Contact from "@/components/base/Contact";
import CTA from "@/components/marketing/CTA";
import Destinations from "@/components/marketing/Destinations";
import Hero from "@/components/marketing/Hero";
import Services from "@/components/marketing/Services";
import Testimonials from "@/components/marketing/Testimonials";
import WhyChooseUs from "@/components/marketing/WhyChooseUs";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
