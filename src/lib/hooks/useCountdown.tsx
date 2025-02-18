import { useEffect, useState } from 'react';

export const useCountdown = ({ remainingDate }: { remainingDate: string }) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let timeInterval: ReturnType<typeof setInterval>;

    const getTimeRemaining = () => {
      const total = Date.parse(remainingDate) - +new Date();
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      if (total < 0) {
        clearInterval(timeInterval);
        return;
      }

      setRemainingTime({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    timeInterval = setInterval(getTimeRemaining, 1000);

    return () => {
      clearInterval(timeInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingTime]);

  return remainingTime;
};
