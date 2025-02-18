import React, { ReactNode } from 'react';

interface CtaBannerProps {
  title: string;
  button: ReactNode;
}
export default function CtaBanner({ title, button }: CtaBannerProps) {
  return (
    <section className='cta-banner-full mt-12 h-[280px] text-center lg:mt-24'>
      <div className='mx-auto flex h-full max-w-3xl flex-col items-center justify-center space-y-4 px-4'>
        <p className='z-10 text-center text-lg text-white'>{title}</p>
        <div className='z-10'>{button}</div>
      </div>
    </section>
  );
}
