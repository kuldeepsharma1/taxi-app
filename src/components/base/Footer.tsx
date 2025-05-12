'use client'


import Link from 'next/link';

import React from 'react'

const Footer: React.FC = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Our Fleet', href: '/our-fleet' },
      { name: 'Blogs', href: '/blogs' },
      { name: 'Travel Guides', href: '/travel-guides' },
    ],
    services: [
      { name: 'Luxury Local Tours', href: '/services/luxury-local-tours' },
      { name: 'Premium Outstation', href: '/services/premium-outstation' },
      { name: 'Executive Charters', href: '/services/executive-charters' },
      { name: 'Airport Concierge', href: '/services/airport-concierge' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact-us' },
      { name: 'FAQs', href: '/frequently-asked-questions' },
      { name: 'Terms & Conditions', href: '/policy/terms-and-conditions' },
      { name: 'Privacy Policy', href: '/policy/privacy-policy' },
    ]
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10 mb-16">
          <div className="xl:col-span-2">
            <Link
              href="/"

              className="text-3xl font-black text-sky-400 mb-4 inline-block tracking-tighter"
            >
              Hima<span className="text-slate-100">Go</span>
            </Link>
            <p className="text-sm mb-6 leading-relaxed max-w-sm">
              Crafting unforgettable journeys through the majestic Himalayas. Experience luxury, reliability, and personalized service with HimaGo.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-label="X.com" className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
                <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}

                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}

                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-slate-100 mb-5 tracking-wide">Support</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}

                    className="hover:text-sky-300 transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {link.name}
                  </Link>
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