'use client'
import { TestimonialProps } from "@/types";
import { MessageSquareQuote, Star } from "lucide-react";
import Image from "next/image";



const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, location, avatar, rating }) => (
  <div className="testimonial-item bg-white rounded-2xl shadow-xl p-7 md:p-8 h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-sky-500/25 hover:scale-[1.02]">
    <div className="flex-shrink-0 text-sky-500 mb-5">
        <MessageSquareQuote size={40} strokeWidth={1.25} />
    </div>
    <p className="text-slate-700 italic text-base md:text-lg leading-relaxed flex-grow mb-7">&quot;{quote}&quot;</p>
    <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center">
            <Image width={300} height={300} src={avatar} alt={author} className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-sky-300 shadow-md" />
            <div>
                <p className="font-bold text-slate-800 text-md md:text-lg">{author}</p>
                <p className="text-sm text-slate-500">{location}</p>
            </div>
        </div>
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'} />
            ))}
        </div>
    </div>
  </div>
);
const Testimonials: React.FC = () => {


  const testimonialsData = [
    { quote: 'An absolutely flawless experience from booking to drop-off. The car was luxurious, the chauffeur professional, and the scenery breathtaking. HimachalRide made our anniversary trip truly special!', author: 'Rohan & Aisha Mehra', location: 'Mumbai, India', avatar: '/rm.svg', rating: 5 },
    { quote: 'As a solo female traveler, safety and reliability were paramount. HimachalRide exceeded all expectations. Courteous driver, immaculate vehicle, and prompt service. Felt completely at ease.', author: 'Dr. Priya Sharma', location: 'Bengaluru, India', avatar: '/ps.svg', rating: 5 },
    { quote: 'We used HimachalRide for a corporate retreat. Their team handled all logistics perfectly. Punctual, flexible, and highly professional. Our clients were thoroughly impressed.', author: 'Amit Khanna, CEO ConnectInc', location: 'New Delhi, India', avatar: '/ak.svg', rating: 4 },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-[-5%] left-[-5%] w-72 h-72 md:w-96 md:h-96 bg-sky-500/10 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 md:w-[450px] md:h-[450px] bg-purple-500/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slower animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <span className="text-sky-600 font-semibold uppercase tracking-widest text-xs md:text-sm block mb-2">Client Acclaim</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-5 tracking-tighter">Journeys Praised. <span className="text-sky-500">Memories Cherished</span>.</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Our commitment to excellence is reflected in the words of our valued clients. Discover why travelers choose HimachalRide.
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 md:gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;