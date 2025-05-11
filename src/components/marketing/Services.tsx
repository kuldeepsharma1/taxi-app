'use client'
import { ServiceCardProps } from "@/types";
import gsap from "gsap";
import { CalendarDays, Car, CheckCircle, MapPin } from "lucide-react";
import { useEffect } from "react";


const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => (
  <div key={index}
    className="service-card-item bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-sky-500/20 hover:-translate-y-2.5 group border-2 border-transparent hover:border-sky-300 overflow-hidden relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
    <div className="relative z-10 flex flex-col items-center w-full">
        <div className="p-5 rounded-full mb-7 transition-all duration-300 ease-in-out bg-sky-100 group-hover:bg-sky-500 group-hover:scale-110 shadow-lg">
          <Icon size={40} className="text-sky-600 transition-colors duration-300 group-hover:text-white" />
        </div>
        <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3.5 group-hover:text-sky-700 transition-colors duration-300">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm lg:text-base line-clamp-3">{description}</p>
    </div>
  </div>
);

// --- SERVICES COMPONENT ---
const Services: React.FC = () => {
  useEffect(() => {
    gsap.from('.service-card-item', {
      opacity: 0,
      y: 80,
      scale: 0.85,
      duration: 0.8,
      stagger: 0.18,
      ease: 'expo.out',
      scrollTrigger: { trigger: '#services', start: 'top 80%', toggleActions: 'play none none none' },
    });
  }, []);

  const servicesData = [
    { icon: Car, title: 'Luxury Local Tours', description: 'Discover Himachal’s gems in chauffeur-driven luxury. Tailored itineraries for discerning travelers seeking comfort and style.' },
    { icon: MapPin, title: 'Premium Outstation Journeys', description: 'Seamless long-distance travel in our top-tier vehicles. Ideal for multi-day explorations or connecting cities with utmost comfort.' },
    { icon: CalendarDays, title: 'Executive Hourly Charters', description: 'Flexible, private car hire for business meetings, special occasions, or personalized city tours at your own pace.' },
    { icon: CheckCircle, title: 'VIP Airport Concierge', description: 'Priority airport transfers with meet & greet services. Start and end your Himalayan escape with effortless sophistication.' },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="text-sky-600 font-semibold uppercase tracking-widest text-xs md:text-sm block mb-2">Our Signature Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-5 tracking-tighter">Travel <span className="text-sky-500">Elevated</span>. Experiences <span className="text-sky-500">Unforgettable</span>.</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                We offer a suite of meticulously crafted transportation solutions, designed to provide unparalleled comfort, safety, and style for your journey through Himachal.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
 export default Services;