import Link from 'next/link';
import React, { useState } from 'react';
import { RiAlertFill } from 'react-icons/ri';

import { HAIR_REMOVAL_METHOD, useBookingData } from '@/lib/context';

import Button from '@/components/buttons/Button';
import Card from '@/components/shared/Card';
import DialogModal from '@/components/shared/DialogModal';

export default function ChooseForumula() {
  const { method } = useBookingData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {method === HAIR_REMOVAL_METHOD.LASER ? (
        <div className='mx-auto grid gap-x-8 gap-y-8 lg:grid-cols-3'>
          <Card.PricingCard
            title='Séance unique'
            price={{ value: '39CHF' }}
            description="Les tarifs d'épilation laser chez Clinque Muller sont à partir de 39 CHF la séance."
            button={{
              label: 'Réserver maintenant',
              to: '',
            }}
          />
          <Card.PricingCard
            isHighlighted
            title='Pack de 5 séances'
            price={{ value: '33CHF' }}
            description="Vous pouvez réserver un pack de 5 séances d'épilation laser en une seule fois à partir de 33 CHF la séance."
            button={{
              label: 'Réserver maintenant',
              to: '',
            }}
            className='mt-0 lg:-mt-16'
          />

          <Card.PricingCard
            title='Forfait à vie'
            price={{ value: '298CHF' }}
            description="Choisissez un forfait d'épilation laser à vie et profitez d’un nombre illimité de séances et de retouches pour toujours."
            button={{
              label: 'Réserver maintenant',
              to: '',
            }}
          />
        </div>
      ) : (
        <div className='mx-auto grid max-w-4xl gap-x-8 gap-y-8 lg:grid-cols-2'>
          <Card.PricingCard
            isHighlighted
            title='Une séance de 30 min'
            price={{ value: '99.50CHF' }}
            description="Vous pouvez réserver une séance d'épilation électrolyse d'une 30 min à partir de 99.50 CHF la séance."
            button={{
              label: 'Réserver maintenant',
              onClick: () => {
                setIsOpen(true);
              },
            }}
            className='mt-0 lg:-mt-16'
          />

          <Card.PricingCard
            title='Une séance de 1 heure'
            price={{ value: '199CHF' }}
            description="Vous pouvez réserver une séance d'épilation électrolyse de 1 heure à partir de 199 CHF la séance."
            button={{
              label: 'Réserver maintenant',
              onClick: () => {
                setIsOpen(true);
              },
            }}
          />
        </div>
      )}
      <DialogModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icon={<RiAlertFill className='mx-auto' size='70px' color='#FBBC05' />}
        title={
          <h3 className='text-center font-secondary text-[32px] text-[#22201E] '>
            Veuillez noter
          </h3>
        }
        description={
          <p className='text-center font-secondary text-[#22201E] '>
            Les réservations pour l&apos;épilation à l&apos;électrolyse
            s&apos;effectuent en prenant rendez-vous par téléphone. Veuillez
            nous contacter sur notre numéro de téléphone officiel pour réserver
            une séance avec Clinique Muller. Nous vous en remercions.
          </p>
        }
        button={{
          cancel: (
            <Button
              variant='primary'
              className='mx-auto mt-4 flex rounded-tl-3xl rounded-br-3xl bg-[#EAE4DE]'
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Retourner
            </Button>
          ),
          accepte: (
            <Link href=''>
              <Button
                variant='primary'
                className='mx-auto mt-4 flex rounded-tl-3xl rounded-br-3xl '
              >
                Réserver
              </Button>
            </Link>
          ),
        }}
      />
    </>
  );
}
