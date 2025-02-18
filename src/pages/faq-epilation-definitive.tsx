import Image from 'next/image';
import React from 'react';

import Faq from '@/components/faq/Faq';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function FaqLaser() {
  return (
    <Layout isBackgroundLight>
      <Seo
        title='Que devez-vous savoir sur l’épilation laser et électrolyse ? - FAQ'
        description='Les points à savoir avant un traitement épilation définitive : nombre de séances, laser
        ou lumière pulsée, épilation laser prix, efficacité, douleur, contre-indications...'
        keywords='Épilation définitive; épilation laser; laser ou lumière pulsée; épilation laser prix'
      />
      <main className='relative z-10 mx-auto mb-12 w-screen bg-white pt-56 lg:mb-24 lg:pt-48'>
        <div className='absolute top-32 -left-48 hidden lg:block'>
          <Image
            alt='Circular shapes'
            src='/images/shapes/circles.svg'
            layout='fixed'
            width={600}
            height={600}
          />
        </div>
        <div className='mt-8 space-y-4 text-center lg:mt-16'>
          <p className='font-light text-primarydark'>FAQs</p>
          <h1 className='text-center font-normal uppercase xlheight:mt-0'>
            Foire aux questions
          </h1>
          <p>Vous avez des questions ? Nous sommes ici pour vous aider.</p>
        </div>
        <Faq />
      </main>
    </Layout>
  );
}
