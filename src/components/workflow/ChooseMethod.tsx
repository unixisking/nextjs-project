import React, { useCallback } from 'react';

import clsxm from '@/lib/clsxm';
import { HAIR_REMOVAL_METHOD, useBookingData } from '@/lib/context';

export default function ExistingClient() {
  const { setBookingData, method, freeSession } = useBookingData();

  const setMethod = useCallback(
    (method: HAIR_REMOVAL_METHOD) => {
      setBookingData((prevState) => ({
        ...prevState,
        method,
        freeSession: false,
      }));
    },
    [setBookingData]
  );

  const setFreeSession = useCallback(() => {
    setBookingData((prevState) => ({
      ...prevState,
      freeSession: true,
      method: undefined,
    }));
  }, [setBookingData]);
  return (
    <div className=''>
      <p className='text-center'>Choisissez la méthode d’épilation</p>
      <div className='mx-auto mt-12 flex max-w-4xl flex-col justify-between gap-y-[20px] gap-x-8 lg:flex-row'>
        <button
          onClick={() => setMethod(HAIR_REMOVAL_METHOD.LASER)}
          className={clsxm(
            'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
            method === HAIR_REMOVAL_METHOD.LASER && 'bg-primary text-white'
          )}
        >
          Épilation Laser
        </button>
        <button
          onClick={() => setMethod(HAIR_REMOVAL_METHOD.ELECTROLYSE)}
          className={clsxm(
            'mx-auto w-full rounded-lg border border-primary p-8 hover:bg-primary hover:text-white',
            method === HAIR_REMOVAL_METHOD.ELECTROLYSE &&
              'bg-primary text-white'
          )}
        >
          Épilation Électrolyse
        </button>
      </div>
      <button
        onClick={() => setFreeSession()}
        className={clsxm(
          'mt-[20px] flex w-full justify-center rounded-lg border border-primary p-8 text-center hover:bg-primary hover:text-white lg:mx-auto lg:mt-12 lg:w-1/3 lg:justify-center',
          freeSession === true && 'bg-primary text-white'
        )}
      >
        Je ne sais pas, je souhaite être conseillé
      </button>
    </div>
  );
}
