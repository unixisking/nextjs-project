import Image from 'next/image';
import React from 'react';

import Layout from '@/components/layout/Layout';
import SocialLinks from '@/components/layout/SocialLinks';
import Seo from '@/components/Seo';

export default function ThankyouPage() {
  return (
    <Layout isBackgroundLight>
      <Seo
        title="Merci d'avoir réservé avec nous l Clinique Muller"
        description="Merci d'avoir choisi Clinique Muller pour effectuer votre épilation définitive. Nous sommes impatients
de vous accueillir dans notre clinique."
      />

      <div className='mx-auto mt-48 mb-12 max-w-7xl space-y-6 text-center lg:mb-24'>
        <Image src='/images/merci/check.webp' width={195} height={165} alt='' />
        <div className='mx-auto max-w-3xl space-y-8'>
          <h3 className='font-secondary font-light'>
            Merci d&apos;avoir choisi Clinique Muller
          </h3>
          <p>
            Votre réservation a été effectuée avec succès. Vous recevrez un
            e-mail de confirmation dans quelques instants.
            <br />
            <br />
            Suivez-nous sur nos réseaux sociaux
          </p>
          <div className='mx-auto mt-4 flex justify-center'>
            <SocialLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
}
