import React from 'react';

import { BookingProvider } from '@/lib/context';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import BookingWorkflow from '@/components/workflow';

export default function WorkflowPage() {
  return (
    <Layout isBackgroundLight>
      <Seo
        title='Réserver votre séance dès maintenant l Clinique Muller (54c)'
        description="Réservez dès aujourd'hui votre première consultation gratuite d'épilation laser ou
d'électrolyse pour en savoir plus sur nos traitements !"
        keywords='Réserver'
      />
      <BookingProvider>
        <BookingWorkflow />
      </BookingProvider>
    </Layout>
  );
}
