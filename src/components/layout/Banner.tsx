import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

import { useCountdown } from '@/lib/hooks/useCountdown';

interface IBanner {
  message: string;
  remainingDate: string;
}

function Banner({ message, remainingDate }: IBanner) {
  const [currentOffer, setCurrentOffer] = useState('');
  const router = useRouter();
  const { days, hours, minutes, seconds } = useCountdown({ remainingDate });
  const prependZero = useCallback(
    (number: number) => ('0' + number).slice(-2),
    []
  );
  useEffect(() => {
    if (router.pathname == process.env.NEXT_PUBLIC_ACTUAL_OFFER) {
      setCurrentOffer('/reservez-laser-electrolyse');
    } else {
      setCurrentOffer(`${process.env.NEXT_PUBLIC_ACTUAL_OFFER}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {remainingDate && (
        <Link href={currentOffer}>
          <div className='w-full cursor-pointer bg-red-600 py-2 text-center text-white'>
            <Marquee gradient={false} speed={30}>
              <span className='md:hidden'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              {message} {prependZero(days)} jours {prependZero(hours)}{' '}
              heures&nbsp;
              {prependZero(minutes)} minutes {prependZero(seconds)} secondes
            </Marquee>
          </div>
        </Link>
      )}
    </>
  );
}

export default Banner;
