import * as React from 'react';

import Banner from '@/components/layout/Banner';
import Footer from '@/components/layout/Footer';
import Navigation from '@/components/layout/Navigation';

interface ILayout {
  children: React.ReactNode;
  isNavbarHidden?: boolean;
  isBackgroundLight?: boolean;
  FooterBackground?: string;
  isSocialHidden?: boolean;
}
export default function Layout({
  children,
  isNavbarHidden = false,
  isBackgroundLight = false,
  FooterBackground = 'bg-[#F6F1E7]',
  isSocialHidden,
}: ILayout) {
  // Put Header or Footer Here
  return (
    <div className='relative overflow-x-hidden'>
      <Banner
        message='Faites vite ! La réduction se termine dans :'
        remainingDate='Feb 01, 2023'
      />
      <Navigation
        isHidden={isNavbarHidden}
        isBackgroundLight={isBackgroundLight}
        isSocialHidden={isSocialHidden}
      />
      {children}
      <Footer FooterBackground={FooterBackground} />
    </div>
  );
}
