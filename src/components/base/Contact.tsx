'use client'

import { CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', date: '', serviceType: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation example
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields."); // Replace with a nicer notification
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    formRef.current?.reset(); // Reset form fields
    setFormData({ name: '', email: '', phone: '', message: '', date: '', serviceType: '' }); // Reset state
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactDetails = [
    { icon: Phone, text: '+91 12345 67890', href: 'tel:+911234567890', label: '24/7 Helpline' },
    { icon: Mail, text: 'bookings@himachalride.com', href: 'mailto:bookings@himachalride.com', label: 'Email Inquiries' },
    { icon: MapPin, text: 'The Mall Road, Suite #101, Shimla, HP 171001', label: 'Head Office (By Appointment)' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="text-sky-600 font-semibold uppercase tracking-widest text-xs md:text-sm block mb-2">Reach Out to Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-5 tracking-tighter">Let&apos;s Plan Your <span className="text-sky-500">Perfect Escape</span>.</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Our travel specialists are ready to assist you with any inquiries, custom requests, or booking needs. Connect with us today.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 contact-form-wrapper">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-12 items-start">
            {/* Contact Information Section (Left) */}
            <div className="lg:col-span-1 contact-info-grid space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 tracking-tight">Contact Details</h3>
              <p className="text-slate-600 text-sm mb-6 -mt-1">For immediate assistance or to discuss your travel plans, please use the details below.</p>
              {contactDetails.map((item, index) => (
                <div key={index} className="contact-info-card-item flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center mr-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 ease-in-out transform group-hover:scale-105">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 uppercase tracking-wider">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-slate-700 text-base md:text-lg font-semibold hover:text-sky-600 transition-colors duration-200">{item.text}</a>
                    ) : (
                      <p className="text-slate-700 text-base md:text-lg font-semibold">{item.text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form Section (Right) */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 tracking-tight">Send Us an Inquiry</h3>
              {isSubmitted ? (
                <div className="text-center py-12 px-6 bg-green-50 border-2 border-green-300 rounded-xl">
                  <CheckCircle size={56} className="text-green-500 mx-auto mb-5" />
                  <p className="text-2xl font-bold text-green-700 mb-2">Thank You!</p>
                  <p className="text-green-600 text-base leading-relaxed">Your inquiry has been received. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-700 font-semibold mb-1.5 text-sm">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-700 font-semibold mb-1.5 text-sm">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-slate-700 font-semibold mb-1.5 text-sm">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm" />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-slate-700 font-semibold mb-1.5 text-sm">Preferred Travel Date</label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="block text-slate-700 font-semibold mb-1.5 text-sm">Service of Interest</label>
                    <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm bg-white appearance-none">
                      <option value="">Select a service...</option>
                      <option value="local_tour">Luxury Local Tour</option>
                      <option value="outstation_trip">Premium Outstation Journey</option>
                      <option value="hourly_charter">Executive Hourly Charter</option>
                      <option value="airport_transfer">VIP Airport Concierge</option>
                      <option value="custom_package">Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-slate-700 font-semibold mb-1.5 text-sm">Message / Requirements <span className="text-red-500">*</span></label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all text-sm shadow-sm resize-none" required ></textarea>
                  </div>
                  <button type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-sky-500/40 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-sky-300 focus:ring-opacity-50 text-base">
                    Submit Your Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;