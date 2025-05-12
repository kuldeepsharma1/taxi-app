'use client';
import { smoothScrollTo } from '@/lib/smoothscroll';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState, forwardRef } from 'react';



const Header = forwardRef<HTMLElement>((props, ref) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 50;
      setIsScrolled(window.scrollY > offset);
      if (ref && 'current' in ref && ref.current) {
        if (window.scrollY > offset) {
          ref.current.classList.add('scrolled');
        } else {
          ref.current.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  const navLinks = ['Home', 'Services', 'Why Us', 'Destinations', 'Testimonials', 'Contact'];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const headerHeight = ref && 'current' in ref && ref.current?.offsetHeight || 70;
    smoothScrollTo(`#${item.toLowerCase().replace(' ', '-')}`, headerHeight);
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out 
        ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={(e) => handleNavLinkClick(e, 'Home')}
          className={`text-3xl lg:text-4xl font-black tracking-tighter transition-colors duration-300 ease-in-out
            ${isScrolled || isMobileMenuOpen ? 'text-sky-600' : 'text-white'}`}
        >
          Hima<span className={isScrolled || isMobileMenuOpen ? 'text-slate-800' : 'text-sky-300'}>Go</span>
        </Link>
        <nav className="hidden lg:flex space-x-7 xl:space-x-9 items-center">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleNavLinkClick(e, item)}
              className={`font-semibold text-sm uppercase tracking-wider transition-all duration-300 ease-in-out group relative
                ${isScrolled || isMobileMenuOpen ? 'text-slate-600 hover:text-sky-600' : 'text-slate-200 hover:text-white'}`}
            >
              {item}
              <span
                className={`absolute bottom-[-6px] left-0 w-0 h-0.5 bg-sky-500 transition-all duration-300 ease-in-out group-hover:w-full`}
              ></span>
            </a>
          ))}
        </nav>
        <button
          className={`lg:hidden transition-colors duration-300 ease-in-out p-2 rounded-md
            ${isScrolled || isMobileMenuOpen ? 'text-slate-700 hover:text-sky-600 focus:bg-sky-100' : 'text-white hover:text-sky-300 focus:bg-white/10'}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>
      <div
        className={`lg:hidden overflow-y-auto transition-all duration-500 ease-in-out bg-white shadow-2xl fixed top-0 left-0 right-0 bottom-0 z-[-1] pt-24 px-6 pb-8
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0 h-screen' : 'opacity-0 -translate-y-full'}`}
        style={{ transformOrigin: 'top center' }}
      >
        <nav className="flex flex-col space-y-3">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => handleNavLinkClick(e, item)}
              className="block px-4 py-3.5 rounded-lg text-lg font-semibold text-slate-700 hover:bg-sky-50 hover:text-sky-600 active:bg-sky-100 transition-all duration-200 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
export default Header;