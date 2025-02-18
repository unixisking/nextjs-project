import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React, { useState } from 'react';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';
import { SexType, TechnologyType } from '@/lib/types';

import {
  FEMALE_COMBINED_ZONES_PRICES,
  FEMALE_ZONES,
  MALE_COMBINED_ZONES_PRICES,
  MALE_ZONES,
} from '@/data/constants';
import { PRICING_MARKUP } from '@/data/markup';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';
import Card from '@/components/shared/Card';

export default function PricePage() {
  const [type, setType] = useState<SexType>(SexType.FEMALE);
  const [epilationType, setEpilationType] = useState<TechnologyType>(
    TechnologyType.LASER
  );
  return (
    <Layout isBackgroundLight>
      <Script
        id='markup'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_MARKUP) }}
      />
      <Seo
        title='Prix épilation laser et électrolyse l Clinique Muller'
        description='Épilation laser et épilation électrique à des prix compétitifs. Profitez de nos
        forfaits à vie payables en 3, 6, ou 12 fois. Réservez votre première consultation gratuite !
        Keyword : Épilation laser prix'
        keywords='Épilation, laser, prix'
      />
      <main className='relative z-10 w-screen bg-[#EFEAE0]'>
        <div className=''>
          <div className='absolute top-32 -left-48 -z-10 hidden lg:block'>
            <Image
              alt='Circular shapes'
              src='/images/shapes/circles.svg'
              layout='fixed'
              width={600}
              height={600}
            />
          </div>
          <div className='flex flex-col justify-between gap-y-12 pt-56 lg:flex-row lg:pt-48'>
            <div className='flex justify-between rounded-tr-[160px] bg-[#ECE3DE] px-12 py-4 lg:w-[65%] lg:px-24 lg:py-8'>
              <div className='flex flex-col'>
                <button
                  className='flex h-24 items-center gap-x-4'
                  onClick={() => setType(SexType.FEMALE)}
                >
                  <div
                    className={clsxm(
                      type === SexType.FEMALE &&
                        'rounded-full bg-white py-3 px-3'
                    )}
                  >
                    <BsGenderFemale className='h-6 w-6 rounded-full text-black' />
                  </div>
                  <span>Femme</span>
                </button>
                <button
                  className='flex h-24 items-center gap-x-4'
                  onClick={() => setType(SexType.MALE)}
                >
                  <div
                    className={clsxm(
                      type === SexType.MALE && 'rounded-full bg-white py-3 px-3'
                    )}
                  >
                    <BsGenderMale className='h-6 w-6 text-black' />
                  </div>
                  <span>Homme</span>
                </button>
              </div>
              <div>
                {type === SexType.FEMALE ? (
                  <img
                    src='/images/prices/woman.webp'
                    width={300}
                    height={500}
                    alt=''
                  />
                ) : (
                  <img
                    src='/images/prices/man.webp'
                    width={300}
                    height={500}
                    alt=''
                  />
                )}
              </div>
            </div>
            <div className='mb-12 w-full px-8 lg:mr-24 lg:px-0'>
              <div className='flex justify-between'>
                <h1 className='font-normal uppercase'>prix par zone</h1>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    variant='primary'
                    className='rounded-tl-3xl rounded-br-3xl'
                  >
                    Profiter de l&apos;offre
                  </Button>
                </Link>
              </div>
              <div className='flex items-center gap-4 py-7'>
                <div
                  className={`w-1/2 cursor-pointer border-2 border-primary py-3 text-center font-secondary text-[10px] md:text-[18px] ${
                    epilationType == TechnologyType.LASER
                      ? ' bg-primary font-bold text-white'
                      : ''
                  } `}
                  onClick={() => {
                    setEpilationType(TechnologyType.LASER);
                  }}
                >
                  Épilation Laser
                </div>
                <div
                  className={`w-1/2 cursor-pointer border-2 border-primary py-3 text-center font-secondary text-[10px] md:text-[18px] ${
                    epilationType == TechnologyType.ELECTROLYSE
                      ? ' bg-primary font-bold text-white'
                      : ''
                  } `}
                  onClick={() => {
                    setEpilationType(TechnologyType.ELECTROLYSE);
                  }}
                >
                  Épilation Électrolyse
                </div>
              </div>
              {epilationType == TechnologyType.LASER ? (
                <>
                  {' '}
                  <div className='mt-4 overflow-x-scroll lg:overflow-x-hidden'>
                    <>
                      {(type === SexType.FEMALE
                        ? FEMALE_ZONES
                        : MALE_ZONES
                      ).map((zone) => (
                        <Accordion.Pricing
                          key={zone.name}
                          title={zone.name}
                          content={
                            <table
                              key={zone.name}
                              id='prices-table'
                              className='table-auto'
                            >
                              <thead>
                                <tr>
                                  <th className='text-primarydark'>
                                    Zones du corps
                                  </th>
                                  <th className='text-primarydark'>
                                    1 séance Prix CHF / séance
                                  </th>
                                  <th className='text-primarydark'>
                                    Paquet 5 séances Prix CHF / séance
                                  </th>
                                  <th className='text-primarydark'>
                                    Paquet forfait à vie Prix CHF
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {zone.subZones.map((subZ) => (
                                  <tr key={subZ.name}>
                                    <td>{subZ.name}</td>
                                    {subZ.elements.map((element) => (
                                      <td
                                        style={{ backdropFilter: 'blur(30px)' }}
                                        key={element}
                                      >
                                        {element}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          }
                        />
                      ))}
                    </>
                  </div>
                  <div className='mt-4 ml-2 overflow-x-scroll lg:overflow-x-hidden'>
                    <h2 className='font-normal uppercase'>
                      prix par zones combinées
                    </h2>
                    <table id='prices-table' className='mt-4 table-auto'>
                      <thead>
                        <tr>
                          <th className='text-primarydark'>Zones du corps</th>
                          <th className='text-primarydark'>
                            1 séance Prix CHF / séance
                          </th>
                          <th className='text-primarydark'>
                            Paquet 5 séances Prix CHF / séance
                          </th>
                          <th className='text-primarydark'>
                            Paquet forfait à vie Prix CHF
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {(type === SexType.FEMALE
                          ? FEMALE_COMBINED_ZONES_PRICES
                          : MALE_COMBINED_ZONES_PRICES
                        ).map((zone) => (
                          <tr key={zone.name}>
                            <td>{zone.name}</td>
                            {zone.elements.map((element) => (
                              <td key={element}>{element}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <Link href='/reservez-laser-electrolyse'>
                      <Button
                        variant='primary'
                        className='mx-auto mt-4 flex rounded-tl-3xl rounded-br-3xl'
                      >
                        Prendre rendez-vous
                      </Button>
                    </Link>
                  </div>{' '}
                </>
              ) : (
                <div className='mx-auto w-full'>
                  <div className='mx-auto flex flex-col justify-between gap-6 lg:flex-row '>
                    <Card.PricingCard
                      className='w-[300px] rounded-tl-[5rem] rounded-br-[5rem] py-10  sm:w-[350px] sm:px-5 '
                      title='Une séance de 30 min'
                      price={{ value: '99.50CHF', className: 'font-semibold' }}
                      cardLink='/reservez-laser-electrolyse'
                      description="Vous pouvez réserver une séance d'épilation électrolyse d'une 30 min à partir de 99.50 CHF la séance."
                    />
                    <Card.PricingCard
                      className='w-[300px] rounded-tl-[5rem] rounded-br-[5rem] py-10 sm:w-[350px] sm:px-5 lg:mt-20 '
                      title='Une séance de 1 heure'
                      price={{ value: '199CHF', className: 'font-semibold' }}
                      cardLink='/reservez-laser-electrolyse'
                      description="Vous pouvez réserver une séance d'épilation électrolyse de 1 heure à partir de 199 CHF la séance."
                    />
                  </div>
                  <p className='ml-7 py-10 text-[14px] text-[#959595] md:ml-20 md:text-base '>
                    Note : nous prenons les réservations par téléphone et non
                    pas en ligne.
                  </p>
                  <div className='flex justify-center'>
                    {' '}
                    <Link href='/reservez-laser-electrolyse'>
                      <Button
                        variant='primary'
                        className='flex w-2/3 justify-center rounded-tl-3xl rounded-br-3xl md:w-1/3'
                      >
                        Prendre rendez-vous
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
