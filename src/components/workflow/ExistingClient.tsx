import React, { useCallback } from 'react';

import clsxm from '@/lib/clsxm';
import { useBookingData } from '@/lib/context';

export default function ExistingClient() {
  const { zoneSelection, setBookingData } = useBookingData();

  const setZoneSelection = useCallback(() => {
    setBookingData((prevState) => ({
      ...prevState,
      freeSession: false,
      zoneSelection: true,
    }));
  }, [setBookingData]);
  const setFreeSession = useCallback(() => {
    setBookingData((prevState) => ({
      ...prevState,
      freeSession: true,
      zoneSelection: false,
    }));
  }, [setBookingData]);

  return (
    <div className='mx-[65px] lg:mx-0'>
      <p className='mb-[60px] text-center'>Souhaitez-vous</p>
      <div className='mx-auto flex max-w-4xl flex-col justify-between gap-y-[20px] gap-x-8 lg:flex-row'>
        <button
          onClick={() => setZoneSelection()}
          className={clsxm(
            'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
            zoneSelection === true && 'bg-primary text-white'
          )}
        >
          Sélectionner vos zones en ligne
        </button>
        <button
          onClick={() => setFreeSession()}
          className={clsxm(
            'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
            zoneSelection === false && 'bg-primary text-white'
          )}
        >
          Demander conseil à nos spécialistes lors de la consultation gratuite
        </button>
      </div>
    </div>
  );
}
