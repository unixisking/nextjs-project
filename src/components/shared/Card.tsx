import Link from 'next/link';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

interface PageCardProps {
  title: string;
  description: string;
  to: string;
  className?: string;
  image?: React.ReactNode | string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Card() {}

Card.PageCard = ({
  title,
  description,
  className,
  image,
  to,
  ...props
}: PageCardProps) => {
  return (
    <Link href={to}>
      <div
        className={clsxm(
          to && 'cursor-pointer',
          'page-card flex h-full w-full flex-col items-center justify-start space-y-2 rounded-lg p-1 py-4 px-6 text-center text-darker duration-300 ease-in hover:scale-105',
          className
        )}
        {...props}
      >
        {typeof image === 'string' ? (
          <img src={image} alt={title} className='w-full' />
        ) : (
          image
        )}
        <h5 className='font-bold'>{title}</h5>
        <p className='text-sm'>{description}</p>
      </div>
    </Link>
  );
};

Card.SimpleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className='card flex h-full w-full flex-col items-center justify-center space-y-2 rounded-lg border border-primary bg-white py-4 px-2 text-center text-darker shadow-xl hover:bg-[#181818]/60 hover:text-white'>
    <h5 className='font-bold'>{title}</h5>
    <p className='text-sm'>{description}</p>
  </div>
);

interface PricingCardProps {
  title: string;
  price: { value: string; className?: string };
  description: string;
  button?: {
    label: string;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };
  to?: string;
  isHighlighted?: boolean;
  className?: string;
  [x: string]: unknown;
}

const PricingCard = (props: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    title,
    price,
    description,
    button,
    isHighlighted,
    cardLink,
    className,
    ...rest
  } = props;
  return (
    <Link href={button?.to || cardLink || ''}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={clsxm(
          'card relative mx-auto h-[350px] w-[350px]  cursor-pointer space-y-6 rounded-br-3xl border border-primary bg-white pt-4 text-left text-darker shadow-xl hover:bg-primary',
          className
        )}
        {...rest}
      >
        <div className='space-y-12 px-4'>
          <h5
            className={clsxm(
              'text-2xl font-bold text-primary',
              isHovered ? 'text-white' : 'text-primary'
            )}
          >
            {title}
          </h5>
          <p className={`text-center text-3xl ${price.className}`}>
            Dès {price.value}
          </p>
          <p className='text-sm'>{description}</p>
        </div>
        {button && (
          <button
            onClick={button.onClick}
            className={clsxm(
              'absolute bottom-0 w-full rounded-br-3xl bg-[#E4D1D1] py-4',
              isHighlighted && 'bg-primary'
            )}
          >
            {button?.label}
          </button>
        )}
      </div>
    </Link>
  );
};

Card.PricingCard = PricingCard;
