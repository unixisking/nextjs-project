import Image from 'next/image';
import React, { useCallback } from 'react';

import clsxm from '@/lib/clsxm';
import { useBookingData } from '@/lib/context';

import Button from '@/components/buttons/Button';
import Notice from '@/components/Notice';
import ChooseForumula from '@/components/workflow/ChooseForumula';
import ChooseMethod from '@/components/workflow/ChooseMethod';
import ExistingClient from '@/components/workflow/ExistingClient';

export default function BookingWorkflow() {
  const { isClient, setBookingData, handleNext, handlePrev, step, method } =
    useBookingData();

  const setIsClient = useCallback(
    (isClient: boolean) => {
      setBookingData((prevState) => ({
        ...prevState,
        isClient,
        step: 2,
      }));
    },
    [setBookingData]
  );

  return (
    <main className='relative mb-12 w-screen'>
      <div className='absolute top-32 -left-48 hidden lg:block'>
        <Image
          alt='Circular shapes'
          src='/images/shapes/circles.svg'
          layout='fixed'
          width={600}
          height={600}
        />
      </div>
      <div className='mx-auto mt-48 max-w-7xl'>
        <h1 className='mx-4 font-light uppercase'>
          faire une réservation maintenant
        </h1>
        <div className='mt-12 lg:mt-24'>
          {step < 3 && (
            <div className='mx-[65px] mb-[60px] lg:mx-0'>
              <p className='mb-[60px] text-center'>
                Êtes-vous déjà client(e) chez Clinique Muller ?
              </p>
              <div className='mx-auto flex max-w-4xl flex-col justify-between gap-y-[20px] gap-x-8 lg:flex-row'>
                <button
                  onClick={() => setIsClient(true)}
                  className={clsxm(
                    'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
                    isClient === true && 'bg-primary text-white'
                  )}
                >
                  Oui, je suis client(e)
                </button>
                <button
                  onClick={() => setIsClient(false)}
                  className={clsxm(
                    'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
                    isClient === false && 'bg-primary text-white'
                  )}
                >
                  Non, je suis un nouveau client
                </button>
              </div>
            </div>
          )}
          <div className='mx-[65px] lg:mx-0'>
            {isClient === false && (
              <Notice
                title='Important'
                description="Avant de pouvoir bénéficier de nos offres d'épilation définitive, une séance d'information gratuite est obligatoire pour tous nos nouveaux clients. <br/><br/>
                Chez Clinique Muller, nous jugeons qu'il est important de donner les informations complètes sur le processus d'épilation définitive, c'est pourquoi nous offrons une séance d'information gratuite et obligatoire à tous nos nouveaux clients.<br/><br/>
                Lors de cette séance, vous serez renseignés sur les avantages et les inconvénients de chaque traitement ainsi que les technologies que nous utilisons. Vous pourrez également poser toutes vos questions à nos thérapeutes."
              />
            )}
            {isClient === true && step == 2 && <ExistingClient />}
            {isClient === true && step == 3 && <ChooseMethod />}
            {isClient === true && step == 4 && method !== undefined && (
              <ChooseForumula />
            )}
          </div>
          <div className='mx-auto mt-12 flex max-w-sm justify-between'>
            {isClient !== undefined && step > 1 && step <= 4 && (
              <Button
                onClick={() => handlePrev()}
                variant='light'
                className='rounded-tl-3xl rounded-br-3xl'
              >
                Retourner
              </Button>
            )}
            {isClient !== undefined && step > 1 && step < 4 && (
              <Button
                onClick={() => handleNext()}
                variant='primary'
                className='rounded-tl-3xl rounded-br-3xl'
              >
                Suivant
              </Button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
