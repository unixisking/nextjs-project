import Link from 'next/link';
import React, { ReactNode } from 'react';

import Button from '@/components/buttons/Button';

interface ISection {
  headline?: string;
  title?: string;
  note: ReactNode;
  description: string | ReactNode;
  points?: string[];
  isImageRight?: boolean;
  image: ReactNode;
  button?: { label: string; to: string; style?: string };
}

export default function Section(props: ISection) {
  return (
    <div className='relative mt-12 lg:mt-24'>
      {props.isImageRight === true ? (
        <section className='mx-auto px-4 lg:max-w-7xl lg:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-24'>
            <div className='-mt-8 hidden lg:block'>{props.image}</div>
            <div className='mx-auto space-y-[40px]'>
              <div>
                {props.title && (
                  <h2 className='font-normal uppercase text-darker'>
                    {props.title}
                  </h2>
                )}
                {props.note && props.note}
              </div>
              <div className='mx-auto w-full sm:w-96 lg:hidden'>
                {props.image}
              </div>
              {typeof props.description === 'string' ? (
                <p
                  dangerouslySetInnerHTML={{ __html: props.description }}
                  className='text-grey text-base'
                />
              ) : (
                props.description
              )}

              {props.points && (
                <ul className='mt-4 list-disc space-y-4 pl-4 marker:text-2xl marker:text-primary'>
                  {props.points.map((point, index) => (
                    <li key={index} className='text-grey text-base'>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {props.button && (
                <Link href={props.button.to}>
                  <Button
                    className='rounded-tl-3xl rounded-br-3xl'
                    variant='primary'
                  >
                    {props.button.label}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className='mx-auto px-4 lg:max-w-7xl lg:px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-24'>
            <div className='mx-auto space-y-[40px]'>
              <div>
                <h2 className='font-normal uppercase text-darker'>
                  {props.title}
                </h2>
                {props.note && props.note}
              </div>
              <div className='mx-auto mt-4 w-full sm:w-96 lg:hidden'>
                {props.image}
              </div>
              {typeof props.description === 'string' ? (
                <p
                  dangerouslySetInnerHTML={{ __html: props.description }}
                  className='text-grey text-base'
                />
              ) : (
                props.description
              )}

              {props.points && (
                <ul className='mt-4 list-disc space-y-4 pl-4 marker:text-2xl marker:text-primary'>
                  {props.points.map((point, index) => (
                    <li key={index} className='text-grey text-base'>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {props.button && (
                <Link href={props.button.to}>
                  <Button
                    className={
                      `rounded-tl-3xl rounded-br-3xl ` + props.button.style
                    }
                    variant='primary'
                  >
                    {props.button.label}
                  </Button>
                </Link>
              )}
            </div>
            <div className='-mt-8 hidden lg:block'>{props.image}</div>
          </div>
        </section>
      )}
    </div>
  );
}
