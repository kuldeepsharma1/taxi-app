'use client'
import { DestinationProps } from "@/types";

import { ArrowRight } from "lucide-react";
import Image from "next/image";


const DestinationCard: React.FC<DestinationProps> = ({ image, name, description, tags, priceCategory }) => (
  <div className="destination-card-item bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-sky-500/30 group flex flex-col h-full">
    <div className="relative overflow-hidden h-64 md:h-72">
        <Image width={300} height={300} src={image} alt={name} className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
        <div className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider">{priceCategory}</div>
        <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out translate-y-4 group-hover:translate-y-0">
             <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1 drop-shadow-lg tracking-tight">{name}</h3>
        </div>
    </div>
    <div className="p-5 md:p-6 flex-grow flex flex-col">
      <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 group-hover:text-slate-700 transition-colors">{description}</p>
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(tag => (
                <span key={tag} className="text-xs bg-sky-100 text-sky-700 px-2.5 py-1 rounded-full font-medium group-hover:bg-sky-200 transition-colors">{tag}</span>
            ))}
        </div>
        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2.5 px-5 rounded-lg text-sm transition-all duration-300 ease-in-out inline-flex items-center justify-center group-hover:shadow-lg group-hover:shadow-sky-500/30 transform group-hover:-translate-y-0.5">
            Explore Destination <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  </div>
);

// --- DESTINATIONS COMPONENT ---
const Destinations: React.FC = () => {

  
  const destinationsData = [
    {
      image: '/manali.svg',
      name: 'Manali Peaks',
      description: 'A breathtaking tapestry of snow-capped mountains, lush valleys, and thrilling adventures. Manali is the quintessential Himalayan dream.',
      tags: ['Adventure', 'Nature', 'Mountains', 'Skiing'],
      priceCategory: "Premium"
    },
    {
      image: '/shimla.svg',
      name: 'Shimla Heritage',
      description: 'Step back in time with Shimla’s colonial architecture, scenic toy train, and vibrant Mall Road. A blend of history and natural beauty.',
      tags: ['Culture', 'History', 'City Vibe', 'Relaxation'],
      priceCategory: "Luxury"
    },
    {
      image: '/dharamshala.svg',
      name: 'Dharamshala Spirit',
      description: 'Discover spiritual tranquility in the abode of the Dalai Lama, surrounded by serene monasteries and the majestic Dhauladhar range.',
      tags: ['Spiritual', 'Culture', 'Trekking', 'Yoga'],
      priceCategory: "Mid-Range"
    },
  ];

  return (
    <section id="destinations" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="text-sky-600 font-semibold uppercase tracking-widest text-xs md:text-sm block mb-2">Gateway to Wonders</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-5 tracking-tighter">Explore Himachal&apos;s <span className="text-sky-500">Crown Jewels</span>.</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                From bustling hill stations to tranquil valleys, let us guide you to the most captivating destinations Himachal has to offer.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {destinationsData.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;