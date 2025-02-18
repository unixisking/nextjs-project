import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

import { FAQ_OFFRE_NOV_MARKETING_LASER, LAUNCH_DATE } from '@/data/constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Timer from '@/components/offre-de-lancement/Timer';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';

export default function OffreDeLancementLandingPage() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    undefined
  );
  return (
    <Layout
      isNavbarHidden
      isBackgroundLight
      FooterBackground='background-light'
    >
      <div className='bg-[#FDF9F5]'>
        <Seo
          title='Épilation laser Lausanne - Offre -20% forfait à vie | Clinique Muller'
          description='Épilation laser Lausanne - Offre limitée l Profitez de 20% de réduction sur le prix du pack “aisselles + jambes + maillot” à partir de 447 CHF/séance'
          keywords='Épilation laser; épilation laser lausanne; épilation laser prix'
          robots='noindex'
        />

        <main className='offre-de-novembre-bg-sm lg:offre-de-novembre-bg relative z-10 mb-8 h-[1020px] w-screen sm:h-[980px] lg:mb-16 lg:h-[620px] '>
          <div>
            <div className='mx-[25px] grid pt-56 lg:mx-[80px] lg:grid-cols-2 lg:pt-[140px]'>
              <div className='space-y-[20px] lg:pt-8'>
                <div className='hidden lg:block'>
                  <h2 className='font-secondary text-[12px] font-bold uppercase text-[#A8755C] lg:text-[22px]'>
                    offre du mois de novembre
                  </h2>
                  <h1 className='py-4 font-philosopher text-2xl font-bold  uppercase leading-[4rem] text-[#A8755C] lg:text-[62px] xlheight:mt-0'>
                    <span className=' text-[#FC915B] '>-20%</span> SUR LE <br />
                    PRIX DE VOTRE ÉPILATION LASER
                  </h1>
                </div>
                <div className='relative lg:hidden'>
                  <h2 className='text-center font-secondary text-[16px] font-bold uppercase leading-4 text-[#A8755C] lg:text-[22px]'>
                    offre du mois DE NOVEMBRE
                  </h2>
                  <h1 className='text-center font-philosopher text-[34px] font-bold  uppercase leading-[3rem] text-[#A8755C] lg:py-4 lg:text-[62px] xlheight:mt-0'>
                    <span className=' text-[#FC915B] '>-20%</span> SUR LE PRIX
                    DE VOTRE ÉPILATION LASER
                  </h1>
                  <p className='py-10 text-center text-[18px] leading-6 text-[#A8755C]'>
                    <span className='font-secondary text-[20px] font-bold uppercase'>
                      OFFRE SPÉCIALE ZONES COMBINÉES{' '}
                    </span>{' '}
                    <br />
                    1er rendez-vous gratuit et sans engagement.
                  </p>
                  <Link href='/reservez-laser-electrolyse'>
                    <Button
                      variant='primary'
                      className='bg-ofr-novombre mx-auto flex w-2/3 justify-center rounded-tl-3xl rounded-br-3xl font-bold text-white lg:mx-0'
                    >
                      Profiter de l&apos;offre
                    </Button>
                  </Link>
                </div>
                <img
                  src='/images/offre-de-novembre/hero-sm.webp'
                  alt=' trois femmes souriant après leur séance d’épilation définitive au laser'
                  className='mx-auto w-full sm:w-[500px] lg:hidden'
                />

                <p className='hidden text-[30px] leading-8 text-[#A8755C] lg:block'>
                  <span className='font-secondary text-[32px] font-bold'>
                    OFFRE SPÉCIALE ZONES COMBINÉES{' '}
                  </span>{' '}
                  <br />
                  1er rendez-vous gratuit et sans engagement.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    variant='primary'
                    className='bg-ofr-novombre mx-auto hidden justify-center rounded-tl-3xl  rounded-br-3xl font-bold text-white md:w-2/3 lg:mx-0 lg:flex xl:w-1/3'
                  >
                    Profiter de l&apos;offre
                  </Button>
                </Link>
              </div>
              <img
                className=' absolute bottom-0 left-[49%] mr-48 hidden lg:-mt-12 lg:block lg:w-[680px] '
                src='/images/offre-de-novembre/hero.webp'
                alt=' trois femmes souriant après leur séance d’épilation définitive au laser'
              />
            </div>
          </div>
          <Timer remainingDate={LAUNCH_DATE} />
        </main>

        <section className='mx-auto max-w-7xl text-[#844025]'>
          <div className='mx-auto flex flex-col space-y-[28px] text-center'>
            <h2 className='font-philosopher'>
              Bénéficiez d’une réduction de 20% sur le prix de votre épilation
              laser
            </h2>
            <ul className='mx-auto space-y-1 text-center marker:text-2xl'>
              <li className='flex justify-center space-x-2'>
                <div className='mt-1.5 h-3 w-3 rounded-full bg-[#844025] ' />
                <p>1er rendez-vous gratuit</p>
              </li>
              <li className='flex justify-center space-x-2'>
                <div className='mt-1.5 h-3 w-3 rounded-full bg-[#844025] ' />
                <p>Forfait à vie : nombre de séances illimité</p>
              </li>
              <li className='flex justify-center space-x-2'>
                <div className='mt-1.5 h-3 w-3 rounded-full bg-[#844025] ' />
                <p>Paiement en 12x sans frais</p>
              </li>
            </ul>
          </div>

          <div className='mt-12 flex max-w-7xl flex-col justify-between gap-x-12 lg:mt-24 lg:flex-row'>
            <div className='space-y-[28px]'>
              <h3 className='text-center font-philosopher text-[#A8755C]'>
                Aisselles + maillot à choix + jambes complètes
              </h3>
              <img
                src='/images/offre-de-novembre/woman.webp'
                alt='femme montrant ses aisselles et jambes épilées au laser '
              />
            </div>
            <div className='mx-auto w-2/3 space-y-[32px] lg:w-1/2'>
              <PriceCardReduction
                title='Séance unique'
                oldPrice={647}
                newPrice={558}
              />
              <PriceCardReduction
                title='Pack de 5 séances'
                oldPrice={558}
                newPrice={447}
              />
              <PriceCardReduction
                title='Forfait à vie'
                oldPrice="4'740"
                newPrice='3’792'
                isHighlighted
              />
            </div>
          </div>

          <div className='mt-12 flex max-w-7xl flex-col-reverse justify-between gap-x-12 lg:mt-24 lg:flex-row'>
            <div className='mx-auto w-2/3 space-y-[32px] lg:w-1/2'>
              <PriceCardReduction
                title='Séance unique'
                oldPrice={905}
                newPrice={724}
              />
              <PriceCardReduction
                title='Pack de 5 séances'
                oldPrice={724}
                newPrice={579}
              />
              <PriceCardReduction
                title='Forfait à vie'
                oldPrice='6’154'
                newPrice='4’923'
                isHighlighted
              />
            </div>
            <div className='space-y-[28px]'>
              <h3 className='text-center font-philosopher text-[#A8755C]'>
                Aisselles + épaules + dos + torse et ventre (buste)
              </h3>
              <img
                src='/images/offre-de-novembre/man.webp'
                alt='homme montrant son torse, ses aisselles et son dos épilés au laser'
              />
            </div>
          </div>
        </section>

        <section className='mt-12 lg:mt-24'>
          <div className='mx-auto mb-8 flex flex-col space-y-[28px] text-center lg:mb-16'>
            <h2 className='font-philosopher text-[#A8755C]'>
              Profitez de notre offre d’épilation laser à Lausanne
            </h2>
          </div>
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-[32px] text-center text-[#844025] lg:grid-cols-2'>
            <div className='space-y-2'>
              <div className='light-radial-bg-novembre mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full py-2 font-philosopher text-3xl text-[#A8755C]'>
                01
              </div>
              <h5>
                Moins 20% sur le prix de votre séance d’épilation laser, packs
                de 5 séances et forfaits à vie
              </h5>
            </div>

            <div className='space-y-2'>
              <div className='light-radial-bg-novembre mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full py-2 font-philosopher text-3xl text-[#A8755C]'>
                02
              </div>
              <h5>
                Utilisation de machines d’épilation laser Diode très
                performantes de dernière génération.
              </h5>
            </div>
            <div className='space-y-2'>
              <div className='light-radial-bg-novembre mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full py-2 font-philosopher text-3xl text-[#A8755C]'>
                03
              </div>
              <h5>
                Des résultats impressionnants et visibles dès la troisième
                séance d’épilation définitive.
              </h5>
            </div>
            <div className='space-y-2'>
              <div className='light-radial-bg-novembre mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-full py-2 font-philosopher text-3xl text-[#A8755C]'>
                04
              </div>
              <h5>Une prise en charge de qualité.</h5>
            </div>
          </div>
        </section>
        <section className='relative mx-auto mt-12 max-w-7xl space-y-[40px] rounded-3xl bg-[#FCF1EC] py-12 lg:mt-24'>
          <div className='mx-auto flex flex-col text-center'>
            <h2 className='font-philosopher text-[#A8755C]'>
              Tout savoir sur l’offre de novembre
            </h2>
          </div>
          <div className='mx-8 mt-12 rounded-lg bg-white p-8 shadow-md lg:mx-16 lg:mt-24'>
            {FAQ_OFFRE_NOV_MARKETING_LASER.map((q) => (
              <Accordion.Controlled
                open={q.question === selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                title={q.question}
                content={q.answer}
                key={q.question}
              />
            ))}
          </div>
        </section>

        <section className='cta-banner background-light  mt-12 border-b-[.5px] border-primary bg-[#432E22] px-4 py-16 text-center lg:mt-24 lg:h-64'>
          <div className='mx-auto max-w-2xl space-y-4'>
            <p className='text-lg '>
              N’attendez plus réservez votre pack dès maintenant !
            </p>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white'
                variant='primary'
              >
                Je réserve mon forfait
              </Button>
            </Link>
          </div>

          {/* <PriceCardReduction
            title='Séance unique'
            oldPrice={647}
            newPrice={558}
          />
          <PriceCardReduction
            title='Séance unique'
            oldPrice={647}
            newPrice={558}
          /> */}
        </section>
      </div>
    </Layout>
  );
}

const PriceCardReduction = ({
  title,
  oldPrice,
  newPrice,
  isHighlighted,
}: {
  title: string;
  oldPrice: string | number;
  newPrice: string | number;
  isHighlighted?: boolean;
}) => (
  <div
    className={clsx(
      'mx-auto w-full space-y-[7px] rounded-[10px] py-[24px] px-2 text-center',
      isHighlighted
        ? 'bg-gradient-to-br from-[#DFA28B] to-[#A8755C] text-white'
        : 'bg-[#F5CBBB]/40 text-[#A8755C]'
    )}
  >
    <h4 className='font-philosopher'>{title}</h4>
    <div className='flex items-center justify-center gap-x-[18px]'>
      <div className='relative'>
        <p className='text-2xl'>
          <s className='pt-10 sm:pt-2 md:pt-0'>
            {oldPrice} <span className='text-sm'>CHF</span>
          </s>
        </p>
      </div>
      <img
        className='w-20'
        src={`/svg/arrow${isHighlighted ? '-dark' : ''}.svg`}
        alt=''
      />
      <div className='relative'>
        <img
          className='absolute -top-2 right-1'
          src={`/svg/circle${isHighlighted ? '-dark' : ''}.svg`}
          alt=''
        />
        <p className='text-2xl'>
          {newPrice} <span className='text-sm'>CHF</span>
        </p>
      </div>
    </div>

    <Link href='/reservez-laser-electrolyse'>
      <Button
        variant='primary'
        className={clsx(
          'rounded-tl-3xl rounded-br-3xl bg-gradient-to-br lg:mx-0',
          isHighlighted
            ? 'from-[#FCF1ED] to-[#F6CAB8] text-[#844025]'
            : 'from-[#DFA28B] to-[#A8755C] text-white'
        )}
      >
        Profiter de l&apos;offre
      </Button>
    </Link>
  </div>
);
