'use client'
import { smoothScrollTo } from '@/lib/smoothscroll';
import { HeroProps } from '@/types';

import React from 'react'

const Footer: React.FC<HeroProps> = ({ headerRef }) => {
    const footerLinks = {
        company: [
            { name: 'About Us', href: '#why-us' },
            { name: 'Our Fleet', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Blog/Travel Guides', href: '#' },
        ],
        services: [
            { name: 'Luxury Local Tours', href: '#services' },
            { name: 'Premium Outstation', href: '#services' },
            { name: 'Executive Charters', href: '#services' },
            { name: 'Airport Concierge', href: '#services' },
        ],
        support: [
            { name: 'Contact Us', href: '#contact' },
            { name: 'FAQs', href: '#' },
            { name: 'Terms & Conditions', href: '#' },
            { name: 'Privacy Policy', href: '#' },
        ]
    };
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        smoothScrollTo(href, headerRef.current?.offsetHeight || 70);
    };
    return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-16">
          <div className="xl:col-span-2">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="text-3xl font-black text-sky-400 mb-4 inline-block tracking-tighter"
            >
              Hima<span className="text-slate-100">Go</span>
            </a>
            <p className="text-sm mb-6 leading-relaxed max-w-sm">
              Crafting unforgettable journeys through the majestic Himalayas. Experience luxury, reliability, and personalized service with HimaGo.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2C8.7 2 8.3 2.02 7.22 2.07c-1.1.05-1.8.22-2.42.46-.64.25-1.17.58-1.73.14-.55.55-.88 1.08-1.14 1.73-.24.62-.41 1.32-.46 2.42C2.02 8.3 2 8.7 2 12s.02.7.07 1.78c.05 1.1.22 1.8.46 2.42.25.64.58 1.17.14 1.73.55.55 1.08.88 1.73 1.14.62.24 1.32.41 2.42.46.7.05.14.07 1.78.07s.08-.02 1.78-.07c1.1-.05 1.8-.22 2.42-.46.64-.25 1.17-.58 1.73-1.14.55-.55.88-1.08 1.14-1.73.24-.62.41 1.32.46-2.42.05-.7.07-1.14.07-1.78s-.02-.7-.07-1.78c-.05-1.1-.22-1.8-.46-2.42-.25-.64-.58-1.17-1.14-1.73-.55-.55-1.08-.88-1.73-1.14-.62-.24-1.32-.41-2.42-.46C13.7 2.02 13.3 2 12 2zm0 1.8c3.2 0 3.58 0 4.85.07 1.03.05 1.5.2 1.8.34.42.18.7.38 1.04.7.33.33.53.62.7 1.04.15.3.29.77.34 1.8.07 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.03-.2 1.5-.34 1.8-.18.42-.38.7-.7 1.04-.33.33-.62.53-1.04.7-.3.15-.77.29-1.8.34-1.27.07-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.03-.05-1.5-.2-1.8-.34-.42-.18-.7-.38-1.04-.7-.33-.33-.53-.62-.7-1.04-.15-.3-.29-.77-.34-1.8C3.87 15.58 3.87 15.2 3.87 12s0-3.58.07-4.85c.05-1.03.2-1.5.34-1.8.18-.42.38-.7.7-1.04.33-.33.62-.53 1.04-.7.3-.15.77-.29 1.8-.34C8.42 3.87 8.8 3.87 12 3.87zm0 3.6c-2.42 0-4.38 1.96-4.38 4.38s1.96 4.38 4.38 4.38 4.38-1.96 4.38-4.38S14.42 7.47 12 7.47zm0 7.17c-1.54 0-2.79-1.25-2.79-2.79s1.25-2.79 2.79-2.79 2.79 1.25 2.79 2.79-1.25 2.79-2.79 2.79zm5.25-7.32c0 .52-.42.94-.94.94s-.94-.42-.94-.94.42-.94.94-.94.94.42.94.94z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.64 4.92c-.88.39-1.83.65-2.82.77.1-.6.83-1.38 1.2-2.72-.94.56-1.97.97-3.06 1.17A5.24 5.24 0 0016.46 4c-2.9 0-5.25 2.35-5.25 5.25 0 .41.05.81.13 1.2-4.37-.22-8.24-2.31-10.83-5.49-.45.78-.71 1.69-.71 2.65 0 1.82.93 3.43 2.34 4.37-.86-.03-1.67-.26-2.38-.66v.07c0 2.54 1.81 4.66 4.2 5.14-.44.12-.9.18-1.38.18-.34 0-.67-.03-.99-.09.67 2.08 2.6 3.6 4.89 3.64-1.8 1.41-4.06 2.25-6.52 2.25-.42 0-.84-.02-1.25-.07C3.69 21.1 6.02 22 8.62 22c7.95 0 12.3-6.59 12.3-12.3 0-.19 0-.37-.01-.56.84-.6 1.57-1.35 2.13-2.21z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 pt-8 mt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} HimaGO™. All Rights Reserved.</p>
          <p className="mt-1.5">Designed with passion for extraordinary Himalayan adventures.</p>
        </div>
      </div>
    </footer>
    )
}
export default Footer