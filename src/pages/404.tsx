import Link from 'next/link';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
export default function NotFoundPage() {
  return (
    <Layout isBackgroundLight={true}>
      <Seo templateTitle='Not Found' />
      <main>
        <section className='bg_404'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='text-center font-secondary text-[62px] font-semibold text-[#181818] lg:text-[120px]'>
              404
            </h1>
            <h3 className='py-5 text-center font-primary text-[22px] font-bold text-[#000] lg:text-[62px]'>
              Page introuvable
            </h3>
            <h3 className='text-center font-secondary text-[12px] text-[#181818] lg:text-[22px]'>
              Veuillez nous excuser, la page que vous avez demandée est
              introuvable
            </h3>
            <div className='flex items-center gap-12 sm:gap-20 '>
              <Link href='/'>
                <Button
                  variant='primary'
                  className='my-5 rounded-tl-3xl rounded-br-3xl'
                >
                  Page D&apos;accueil
                </Button>
              </Link>
              <Link href='/offre-noel-2022-forfaits-a-vie/epilation-laser-lausanne'>
                <Button
                  variant='primary'
                  className='my-5 rounded-tl-3xl rounded-br-3xl'
                >
                  Offre de Decembre
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
