'use client'
import { WhyChooseItemProps } from "@/types";
import gsap from "gsap";
import { Car, Headphones, ShieldCheck, Sparkles, Tag, Users } from "lucide-react";
import { useEffect } from "react";

const WhyChooseItem: React.FC<WhyChooseItemProps> = ({ icon: Icon, title, description }) => (
    <div className="why-choose-item flex items-start space-x-5 p-2 group">
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mt-1 shadow-lg group-hover:bg-sky-500 group-hover:text-white group-hover:scale-105 transition-all duration-300 ease-in-out">
            <Icon size={28} />
        </div>
        <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1.5 group-hover:text-sky-700 transition-colors">{title}</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">{description}</p>
        </div>
    </div>
);

// --- WHY CHOOSE US COMPONENT ---
const WhyChooseUs: React.FC = () => {
    useEffect(() => {
        gsap.from('.why-choose-item', {
            opacity: 0,
            x: -70,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: { trigger: '#why-us .grid-cols-1', start: 'top 80%', toggleActions: 'play none none none' }, // Target specific grid for item animation
        });
        gsap.from('.why-us-image-container', {
            opacity: 0,
            scale: 0.8,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: { trigger: '#why-us', start: 'top 70%', toggleActions: 'play none none none' },
        });
    }, []);

    const features = [
        { icon: ShieldCheck, title: 'Uncompromising Safety', description: 'Professionally trained chauffeurs, GPS-enabled fleet, and rigorous vehicle maintenance for your peace of mind.' },
        { icon: Users, title: 'Local Expertise, Global Standards', description: 'Courteous, multilingual drivers with deep local knowledge, ensuring an authentic and smooth experience.' },
        { icon: Car, title: 'Luxury Fleet Selection', description: 'A curated collection of modern, high-end vehicles, from premium sedans to spacious SUVs, all impeccably maintained.' },
        { icon: Tag, title: 'Transparent & All-Inclusive Pricing', description: 'No hidden fees. Clear, upfront quotes covering all aspects of your journey for complete budget clarity.' },
        { icon: Headphones, title: 'Dedicated 24/7 Concierge', description: 'Personalized assistance around the clock, from booking to on-trip support, for a truly seamless service.' },
        { icon: Sparkles, title: 'Bespoke Itinerary Crafting', description: 'We collaborate with you to design tailor-made travel plans that reflect your unique interests and preferences.' },
    ];

    return (
        <section id="why-us" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
                    <span className="text-sky-600 font-semibold uppercase tracking-widest text-xs md:text-sm block mb-2">The HimachalRide Difference</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-5 tracking-tighter">Excellence in Every <span className="text-sky-500">Mile</span>.</h2>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        Choosing HimachalRide means opting for a travel experience defined by luxury, reliability, and a deep commitment to your satisfaction.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                        {features.map((item, index) => (
                            <WhyChooseItem key={index} {...item} />
                        ))}
                    </div>
                    <div className="why-us-image-container relative aspect-square lg:aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden group">
                        <svg className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000"><rect width="100%" height="100%" fill="#e0f2fe" /><path fill="#0ea5e9" d="M162.9 497.13h4.02q1.48 0 2.58-.37t1.83-1.06 1.09-1.68.36-2.21q0-1.16-.36-2.1t-1.08-1.6-1.82-1.01-2.6-.35h-4.02zm-5.38-14.54h9.4q2.9 0 5.02.68t3.5 1.9 2.05 2.92.67 3.72q0 2.1-.7 3.85t-2.1 3.01-3.51 1.96-4.93.7h-4.02v10.18h-5.38zm28.34 9.64.3 2.32q.96-1.84 2.28-2.89t3.12-1.05q1.42 0 2.28.62l-.32 3.7q-.1.36-.29.51t-.51.15q-.3 0-.89-.1t-1.15-.1q-.82 0-1.46.24t-1.15.69-.9 1.09-.73 1.46v12.64h-4.94v-20.52h2.9q.76 0 1.06.27t.4.97m14.46 6.66h9.32q0-.96-.27-1.81t-.81-1.49-1.37-1.01-1.93-.37q-2.14 0-3.37 1.22t-1.57 3.46m12.6 2.98h-12.7q.12 1.58.56 2.73t1.16 1.9 1.71 1.12 2.19.37 2.07-.28 1.52-.62 1.14-.62.95-.28q.62 0 .92.46l1.42 1.8q-.82.96-1.84 1.61t-2.13 1.04-2.26.55-2.23.16q-2.14 0-3.98-.71t-3.2-2.1-2.14-3.44-.78-4.75q0-2.1.68-3.95t1.95-3.22 3.1-2.17 4.13-.8q1.94 0 3.58.62t2.82 1.81 1.85 2.92.67 3.95q0 1.12-.24 1.51t-.92.39m9.8 9.64h-4.94v-20.52h3.02q.96 0 1.26.9l.32 1.52q.54-.6 1.13-1.1t1.26-.86 1.44-.57 1.69-.21q1.94 0 3.19 1.05t1.87 2.79q.48-1.02 1.2-1.75t1.58-1.19 1.83-.68 1.95-.22q1.7 0 3.02.52t2.22 1.52 1.37 2.44.47 3.3v13.06h-4.94v-13.06q0-1.96-.86-2.95t-2.52-.99q-.76 0-1.41.26t-1.14.75-.77 1.23-.28 1.7v13.06h-4.96v-13.06q0-2.06-.83-3t-2.43-.94q-1.08 0-2.01.53t-1.73 1.45zm28.72-20.52h4.96v20.52h-4.96zm5.64-5.98q0 .64-.26 1.2t-.69.98-1.01.67-1.24.25q-.64 0-1.21-.25t-.99-.67-.67-.98-.25-1.2q0-.66.25-1.24t.67-1 .99-.67 1.21-.25q.66 0 1.24.25t1.01.67.69 1 .26 1.24m17.1 5.98h4.94v20.52h-3.02q-.98 0-1.24-.9l-.34-1.64q-1.26 1.28-2.78 2.07t-3.58.79q-1.68 0-2.97-.57t-2.17-1.61-1.33-2.47-.45-3.15v-13.04h4.94v13.04q0 1.88.87 2.91t2.61 1.03q1.28 0 2.4-.57t2.12-1.57zm14.76 20.52H284v-20.52h3.02q.96 0 1.26.9l.32 1.52q.54-.6 1.13-1.1t1.26-.86 1.44-.57 1.69-.21q1.94 0 3.19 1.05t1.87 2.79q.48-1.02 1.2-1.75t1.58-1.19 1.83-.68 1.95-.22q1.7 0 3.02.52t2.22 1.52 1.37 2.44.47 3.3v13.06h-4.94v-13.06q0-1.96-.86-2.95t-2.52-.99q-.76 0-1.41.26t-1.14.75-.77 1.23-.28 1.7v13.06h-4.96v-13.06q0-2.06-.83-3t-2.43-.94q-1.08 0-2.01.53t-1.73 1.45zm59.26-28.92v4.42h-8.72v24.5h-5.38v-24.5h-8.72v-4.42zm7.38 9.64.3 2.32q.96-1.84 2.28-2.89t3.12-1.05q1.42 0 2.28.62l-.32 3.7q-.1.36-.29.51t-.51.15q-.3 0-.89-.1t-1.15-.1q-.82 0-1.46.24t-1.15.69-.9 1.09-.73 1.46v12.64h-4.94v-20.52h2.9q.76 0 1.06.27t.4.97m21.4 13.98v-3.46q-2.14.1-3.6.37t-2.34.69-1.26.98-.38 1.22q0 1.3.77 1.86t2.01.56q1.52 0 2.63-.55t2.17-1.67m-10.44-10.78-.88-1.58q3.54-3.24 8.52-3.24 1.8 0 3.22.59t2.4 1.64 1.49 2.51.51 3.2v12.96h-2.24q-.7 0-1.08-.21t-.6-.85l-.44-1.48q-.78.7-1.52 1.23t-1.54.89-1.71.55-2.01.19q-1.3 0-2.4-.35t-1.9-1.05-1.24-1.74-.44-2.42q0-.78.26-1.55t.85-1.47 1.53-1.32 2.31-1.08 3.19-.75 4.16-.35v-1.2q0-2.06-.88-3.05t-2.54-.99q-1.2 0-1.99.28t-1.39.63-1.09.63-1.09.28q-.52 0-.88-.27t-.58-.63m34.5-4.44h3.9l-8.14 20.52h-4.48l-8.14-20.52h4.08q.56 0 .93.26t.49.66l3.96 10.96q.32.96.56 1.88t.42 1.84q.2-.92.44-1.84t.58-1.88l4.04-10.96q.14-.4.5-.66t.86-.26m10.42 7.9h9.32q0-.96-.27-1.81t-.81-1.49-1.37-1.01-1.93-.37q-2.14 0-3.37 1.22t-1.57 3.46m12.6 2.98h-12.7q.12 1.58.56 2.73t1.16 1.9 1.71 1.12 2.19.37 2.07-.28 1.52-.62 1.14-.62.95-.28q.62 0 .92.46l1.42 1.8q-.82.96-1.84 1.61t-2.13 1.04-2.26.55-2.23.16q-2.14 0-3.98-.71t-3.2-2.1-2.14-3.44-.78-4.75q0-2.1.68-3.95t1.95-3.22 3.1-2.17 4.13-.8q1.94 0 3.58.62t2.82 1.81 1.85 2.92.67 3.95q0 1.12-.24 1.51t-.92.39m4.92-20.08h4.94v29.72h-4.94zm38.62 5.08h-12.84v8.02h10.12v4.14h-10.12v8.18h12.84v4.3h-18.24v-28.92h18.24zm15.28 13.84 7.02 10.8h-4.76q-.54 0-.87-.28t-.55-.64l-4.34-7.14q-.1.34-.23.64t-.29.56l-3.84 5.94q-.22.34-.54.63t-.8.29h-4.42l7.04-10.58-6.76-9.94h4.76q.54 0 .8.15t.46.49l4.3 6.84q.22-.68.62-1.34l3.46-5.4q.44-.74 1.14-.74h4.54zm14.52-3.72v9.2q.84 1.02 1.83 1.44t2.15.42q1.12 0 2.02-.42t1.53-1.28.97-2.17.34-3.09q0-1.8-.29-3.05t-.83-2.03-1.31-1.14-1.75-.36q-1.54 0-2.62.65t-2.04 1.83m-.66-5.1.4 1.9q1.26-1.42 2.86-2.3t3.76-.88q1.68 0 3.07.7t2.4 2.03 1.56 3.28.55 4.47q0 2.3-.62 4.26t-1.77 3.4-2.78 2.25-3.65.81q-1.72 0-2.94-.53t-2.18-1.47v8.4h-4.94v-27.22h3.02q.96 0 1.26.9m22.34 7h9.32q0-.96-.27-1.81t-.81-1.49-1.37-1.01-1.93-.37q-2.14 0-3.37 1.22t-1.57 3.46m12.6 2.98h-12.7q.12 1.58.56 2.73t1.16 1.9 1.71 1.12 2.19.37 2.07-.28 1.52-.62 1.14-.62.95-.28q.62 0 .92.46l1.42 1.8q-.82.96-1.84 1.61t-2.13 1.04-2.26.55-2.23.16q-2.14 0-3.98-.71t-3.2-2.1-2.14-3.44-.78-4.75q0-2.1.68-3.95t1.95-3.22 3.1-2.17 4.13-.8q1.94 0 3.58.62t2.82 1.81 1.85 2.92.67 3.95q0 1.12-.24 1.51t-.92.39m9.22-9.64.3 2.32q.96-1.84 2.28-2.89t3.12-1.05q1.42 0 2.28.62l-.32 3.7q-.1.36-.29.51t-.51.15q-.3 0-.89-.1t-1.15-.1q-.82 0-1.46.24t-1.15.69-.9 1.09-.73 1.46v12.64h-4.94v-20.52h2.9q.76 0 1.06.27t.4.97m10.72-1.24h4.96v20.52h-4.96zm5.64-5.98q0 .64-.26 1.2t-.69.98-1.01.67-1.24.25q-.64 0-1.21-.25t-.99-.67-.67-.98-.25-1.2q0-.66.25-1.24t.67-1 .99-.67 1.21-.25q.66 0 1.24.25t1.01.67.69 1 .26 1.24m8.26 13.88h9.32q0-.96-.27-1.81t-.81-1.49-1.37-1.01-1.93-.37q-2.14 0-3.37 1.22t-1.57 3.46m12.6 2.98h-12.7q.12 1.58.56 2.73t1.16 1.9 1.71 1.12 2.19.37 2.07-.28 1.52-.62 1.14-.62.95-.28q.62 0 .92.46l1.42 1.8q-.82.96-1.84 1.61t-2.13 1.04-2.26.55-2.23.16q-2.14 0-3.98-.71t-3.2-2.1-2.14-3.44-.78-4.75q0-2.1.68-3.95t1.95-3.22 3.1-2.17 4.13-.8q1.94 0 3.58.62t2.82 1.81 1.85 2.92.67 3.95q0 1.12-.24 1.51t-.92.39m9.14-9.98.34 1.62q.62-.62 1.31-1.15t1.46-.9 1.65-.58 1.92-.21q1.68 0 2.98.57t2.17 1.6 1.32 2.46.45 3.15v13.06h-4.94v-13.06q0-1.88-.86-2.91t-2.62-1.03q-1.28 0-2.4.58t-2.12 1.58v14.84h-4.94v-20.52H586q.96 0 1.26.9m34.28 1.64-1.3 1.8q-.22.28-.43.44t-.61.16q-.38 0-.74-.23t-.86-.52-1.19-.52-1.71-.23q-1.3 0-2.28.47t-1.63 1.35-.97 2.13-.32 2.83q0 1.64.35 2.92t1.01 2.15 1.6 1.32 2.12.45 1.91-.29 1.23-.64.87-.64.83-.29q.6 0 .9.46l1.42 1.8q-.82.96-1.78 1.61t-1.99 1.04-2.12.55-2.17.16q-1.9 0-3.58-.71t-2.94-2.07-1.99-3.33-.73-4.49q0-2.26.65-4.19t1.91-3.34 3.12-2.21 4.28-.8q2.3 0 4.03.74t3.11 2.12m7.18 5.36h9.32q0-.96-.27-1.81t-.81-1.49-1.37-1.01-1.93-.37q-2.14 0-3.37 1.22t-1.57 3.46m12.6 2.98h-12.7q.12 1.58.56 2.73t1.16 1.9 1.71 1.12 2.19.37 2.07-.28 1.52-.62 1.14-.62.95-.28q.62 0 .92.46l1.42 1.8q-.82.96-1.84 1.61t-2.13 1.04-2.26.55-2.23.16q-2.14 0-3.98-.71t-3.2-2.1-2.14-3.44-.78-4.75q0-2.1.68-3.95t1.95-3.22 3.1-2.17 4.13-.8q1.94 0 3.58.62t2.82 1.81 1.85 2.92.67 3.95q0 1.12-.24 1.51t-.92.39" /></svg>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white p-2">
                            <h3 className="text-2xl md:text-3xl font-bold leading-tight">Your Journey, Perfected.</h3>
                            <p className="text-sm md:text-base text-slate-200 mt-2">Experience Himachal with unparalleled comfort and care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;