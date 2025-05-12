'use client';
import React, { useRef } from 'react';
import Home from '@/app/(guest)/page';
import Header from './Header';
import { HomeProps } from '@/types';
import Footer from './Footer';




interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const headerRef = useRef<HTMLElement>(null);

  const renderChildren = () => {
    if (React.isValidElement<HomeProps>(children)) {
      // Check if the child is the Home component
      if (children.type === Home) {
        return React.cloneElement(children, { headerRef } as HomeProps);
      }
      return children;
    }
    return children;
  };

  return (
    <>
      <Header ref={headerRef} />
      <main>{renderChildren()}</main>
      <Footer  />
    </>
  );
}