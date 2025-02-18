import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/Layout';
import SocialLinks from '@/components/layout/SocialLinks';
import Seo from '@/components/Seo';

export default function ThankyouPage() {
  return (
    <Layout isBackgroundLight>
      <Seo
        title='Merci de nous avoir contacté | Clinique Muller'
        description="Nous vous remercions de nous avoir contactés. Pour plus d'informations sur nos services d'épilation
        définitive, contactez-nous à info@cliniquemuller.ch"
      />

      <div className='mx-auto mt-48 mb-12 max-w-7xl space-y-6 text-center lg:mb-24'>
        <Image src='/images/merci/check.webp' width={195} height={165} alt='' />
        <div className='mx-auto max-w-3xl space-y-8'>
          <h3 className='font-secondary font-light'>
            Nous vous remercions d&apos;avoir pris contact avec nous
          </h3>
          <p>
            Nous avons bien reçu votre message et nous vous en remercions ! Nous
            examinons votre requête et nous vous contacterons dans les plus
            brefs délais.
            <br />
            <br />
            Ne manquez rien de l&apos;actualité de Clinique Muller et
            suivez-nous sur nos réseaux sociaux !
          </p>
          <div className='mx-auto mt-4 flex justify-center'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
}
