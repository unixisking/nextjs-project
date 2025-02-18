import React, { useCallback } from 'react';

import { useCountdown } from '@/lib/hooks/useCountdown';

// TODO: Get the diff date and store it in state as a counter

interface ITimer {
  flexDirectionLG?: string;
  color?: string;
  center?: boolean;
  textSize?: string;
  remainingDate: string;
}

export default function Timer({
  flexDirectionLG = 'lg:flex-col',
  color = '#A8755C',
  center = false,
  textSize = '5xl',
  remainingDate,
}: ITimer) {
  const { days, hours, minutes, seconds } = useCountdown({ remainingDate });
  const prependZero = useCallback(
    (number: number) => ('0' + number).slice(-2),
    []
  );
  return (
    <div
      className={`mt-10 ${
        center ? 'left-0 right-0 w-[400px]' : 'left-0 lg:left-auto '
      }  right-0 mx-auto  font-secondary text-[${color}] lg:right-[40px] lg:top-44 lg:w-auto`}
    >
      <div
        className={`mx-auto flex w-4/5 max-w-5xl px-2 sm:w-3/5 md:w-4/5 ${flexDirectionLG}  ${
          center ? 'justify-center gap-x-10' : 'justify-between gap-x-[20px]'
        }   gap-y-4 uppercase `}
      >
        <div className='space-y-2'>
          <h3
            className={`font-secondary text-5xl font-bold 2xl:text-6xl lg:text-${textSize}`}
          >
            {prependZero(days)}
          </h3>
          <p className='lg:text-md text-sm'>JOURS</p>
        </div>
        <p className='hidden text-6xl text-[#2D2929] sm:block'>:</p>
        <div className='space-y-2'>
          <h4
            className={`font-secondary text-5xl font-bold 2xl:text-6xl lg:text-${textSize}`}
          >
            {prependZero(hours)}
          </h4>
          <p className='lg:text-md text-sm'>HEURES</p>
        </div>
        <p className='hidden text-6xl  text-[#2D2929] sm:block'>:</p>
        <div className='space-y-2'>
          <h4
            className={`font-secondary text-5xl font-bold 2xl:text-6xl lg:text-${textSize}`}
          >
            {prependZero(minutes)}
          </h4>
          <p className='lg:text-md text-sm'>MINUTES</p>
        </div>
        <p className='hidden text-6xl text-[#2D2929] sm:block'>:</p>
        <div className='space-y-2'>
          <h4
            className={`font-secondary text-5xl font-bold 2xl:text-6xl lg:text-${textSize}`}
          >
            {prependZero(seconds)}
          </h4>
          <p className='lg:text-md text-sm'>SECONDES</p>
        </div>
      </div>
    </div>
  );
}
