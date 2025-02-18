import Link from 'next/link';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Fade } from 'react-slideshow-image';

import 'react-multi-carousel/lib/styles.css';
import 'react-slideshow-image/dist/styles.css';

import {
  FAQ_CH,
  FAQ_OFFRE_CH,
  FEEDBACKS,
  GIFTS,
  PRICES,
} from '@/lib/data/christmas-constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Rating from '@/components/Rating';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';
const properties = {
  indicators: true,
  prevArrow: (
    <button>
      <div className='bg-red flex h-[42px] w-[42px] items-center justify-center rounded-full'>
        <img
          src='/images/offre-de-christmas/icons/Arrow-Left.png'
          alt='previous'
          className='ml-10 h-[32px] w-[40px] '
        />
      </div>
    </button>
  ),
  nextArrow: (
    <button>
      <div className='bg-red flex h-[42px] w-[42px] items-center justify-center rounded-full'>
        <img
          src='/images/offre-de-christmas/icons/Arrow-Right.png'
          alt='previous'
          className='-ml-10 h-[32px] w-[40px] '
        />
      </div>
    </button>
  ),
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 450 },
    items: 2,
  },
  exyrasmall: {
    breakpoint: { max: 450, min: 0 },
    items: 1.5,
  },
};
const responsive_Gift_Section = {
  extrasuperLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1500 },
    items: 3,
  },
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1500, min: 1280 },
    items: 2.2,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1025 },
    items: 1.7,
  },
  tablet: {
    breakpoint: { max: 1025, min: 768 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 768, min: 580 },
    items: 1.5,
  },
  exyrasmall: {
    breakpoint: { max: 580, min: 0 },
    items: 1,
  },
};

function Christmas() {
  const [bodyPart, setBodyPart] = useState<BODYPARTS>(BODYPARTS.VISAGE);
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    undefined
  );
  return (
    <Layout isNavbarHidden isBackgroundLight FooterBackground='bg-[#EAEAEA]'>
      <Seo
        image='https://www.cliniquemuller.ch/images/offre-de-christmas/FacebookCover.webp'
        title='Offre de Noël : -20% sur les forfaits à vie d`épilation laser'
        description='Offre de Noël 2022 - Suisse, -20% sur les forfaits d’épilation laser à vie des zones combinées. Une offre promotionnelle pour un résultat exceptionnel à vie !'
      />
      <IceBackground right='-right-10' />
      <IceBackground top='top-96' left='-left-20' />
      <IceBackground top='top-[870px]' right='-right-20' />
      <div className='mx-10 mt-32 md:mx-20 2xl:mx-auto 2xl:max-w-[1400px]'>
        <main className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative'>
            <img
              src='/images/offre-de-christmas/redStar.webp'
              alt='clochette'
              className='absolute -top-10 w-16 lg:hidden'
            />
            <p className='text-center font-secondary font-bold text-[#D88F1A] lg:text-left 2xl:text-lg'>
              Pour Noêl, Faites Vous Doublement Plaisir !
            </p>
            <h1 className='text-center font-secondary text-4xl font-bold leading-[42px] text-[#2D2929] lg:text-left 2xl:text-5xl'>
              -20% sur les forfaits à vie zones combinées
            </h1>
            <p className='mt-8 text-center font-secondary text-[12px] leading-[14px] text-[#2D2929] lg:text-left 2xl:text-sm'>
              Avec nos forfaits d&apos;épilation laser à vie, vous êtes à jamais
              libre de vos poils. Notre offre de Noël vous fait gagner
              <span className='font-bold'>-20%</span> de réduction sur les
              forfaits à vie des zones combinées. Faites-vous plaisir !
              <br /> La première consultation est gratuite et sans engagement.
            </p>
            <div className='relative'>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  type='submit'
                  variant='primary'
                  className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[54px] py-[23px] font-secondary text-xs text-white lg:mx-0 2xl:text-sm'
                >
                  Profiter De L&apos;offre De Noël
                </Button>
              </Link>
              <img
                src='/images/offre-de-christmas/clochette.webp'
                alt='clochette'
                className='absolute -right-8 -top-5 w-16 lg:hidden'
              />
            </div>
            <div className='relative mt-8'>
              <img
                src='/images/offre-de-christmas/YellowBallon.webp'
                alt='clochette'
                className='absolute -top-10 w-16 lg:hidden'
              />
              <p className='font-secondary text-[#2D2929]'>
                + Plein de cadeaux à gagner
              </p>
              <Carousel
                keyBoardControl
                className='mt-[18px]'
                itemClass='carouselItem'
                responsive={responsive}
              >
                {GIFTS.map((gift, index) => {
                  return <GiftCard Gift={gift} key={index} />;
                })}
              </Carousel>
            </div>
          </div>
          <IceBackground left='left-[35%]' />
          <img
            src='/images/offre-de-christmas/hero.webp'
            alt='Christmas'
            className='hidden max-w-[561px] lg:block 2xl:-mt-16 2xl:max-w-[686px]'
          />
          <IceBackground top='top-[850px]' left='left-[20%]' />
        </main>
        <section className='relative mt-[104px] sm:mt-[90px] md:mt-[108px] lg:mt-[85px] xl:mt-[48px] 2xl:mt-[134px]'>
          <img
            src='/images/offre-de-christmas/star.webp'
            alt='star'
            className='absolute -right-10 -top-16 w-20 md:-top-36 md:w-24 lg:hidden'
          />
          <h2 className='text-center font-secondary text-[30px] font-bold leading-[35px] text-[#2D2929] sm:mt-[27px] 2xl:text-4xl'>
            Les Forfaits À Vie
          </h2>
          <div className='mt-[32px] grid grid-cols-1 gap-8 px-12 sm:grid-cols-2 md:gap-y-[52px] lg:grid-cols-4 lg:gap-x-8 xl:gap-x-[34px] 2xl:gap-16'>
            <div>
              <img
                src='/images/offre-de-christmas/icons/PriceIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-base font-bold leading-[18px] text-[#2D2929] 2xl:text-[18px]'>
                Prix fixe sans intérêt
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-[14px] text-[#2D2929] 2xl:text-sm'>
                Le forfait à vie vous permet de payer un prix fixe pour votre
                épilation laser et de ne plus jamais vous soucier de repayer
                pour plus de séances
              </p>
            </div>
            <div>
              <img
                src='/images/offre-de-christmas/icons/RetoucheIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-base font-bold leading-[18px] text-[#2D2929] 2xl:text-[18px]'>
                Séances d’épilation illimitées
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-[12px] text-[#2D2929] 2xl:text-sm'>
                Le forfait couvre un nombre illimité de séances d&apos;épilation
                laser sur une zone ou des zones combinées, à un prix attractif
                et pour la vie.
              </p>
            </div>

            <div>
              <img
                src='/images/offre-de-christmas/icons/EpilationIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-base font-bold leading-[18px] text-[#2D2929] 2xl:text-[18px]'>
                Séances de retouche gratuites à vie
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-[14px] text-[#2D2929] 2xl:text-sm'>
                Avec le forfait à vie, vous n&apos;aurez plus jamais besoin de
                payer pour des séances supplémentaires.
              </p>
            </div>
            <div>
              <img
                src='/images/offre-de-christmas/icons/ResultatIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-base font-bold leading-[18px] text-[#2D2929] 2xl:text-[18px]'>
                Résultats garantis à vie
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-[14px] text-[#2D2929] 2xl:text-sm'>
                Le forfait à vie garantit une épilation laser complète et des
                résultats à vie.
              </p>
            </div>
          </div>
        </section>
        <section className='mt-[104px]'>
          <h2 className='font-secondary text-[30px] font-bold uppercase leading-[35px] text-[#2D2929] md:text-center xl:hidden'>
            A Testé Pour Vous...
          </h2>
          <div className='flex flex-col md:flex-row md:items-start md:gap-x-16 lg:gap-x-[104px]'>
            <iframe
              className='mx-auto mt-8 w-[324px] px-3 md:w-1/2'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/tpgrYrEzbto'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            <div className='relative mt-8 md:w-1/2'>
              <h2 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] text-[#2D2929] xl:block 2xl:text-4xl'>
                A Testé Pour Vous...
              </h2>
              <p className='font-secondary text-[12px] leading-[14px] text-[#2D2929] 2xl:text-sm'>
                La joie et la bonne humeur étaient au rendez-vous après le
                passage de la ravissante Tanit chez Clinique Muller. Tanit a
                testé pour vous notre clinique et vous fait part de son
                expérience :
              </p>
              <div className='mt-4'>
                <img
                  src='/images/offre-de-christmas/CrochetRight.webp'
                  alt='a testé pour vous...'
                  className='w-[52]'
                />
                <p className='mx-[22px] mt-4 pb-[10px] text-justify font-secondary text-[12px] leading-[14px] text-[#2D2929] 2xl:text-sm'>
                  J’ai été agréablement surprise par l’accueil très chaleureux
                  et attentionné aussi bien des réceptionnistes que des
                  thérapeutes pleines de petites attentions ! La séance de
                  consultation gratuite m’a permis de mettre de côté mes
                  craintes concernant le laser, surtout par rapport à la douleur
                  en testant l’appareil sur une petite zone. On ne sent
                  pratiquement pas de douleur et le résultat sur les aisselles
                  est incroyable après seulement 2 séances
                </p>
                <div className='flex justify-end'>
                  <img
                    src='/images/offre-de-christmas/CrochetLeft.webp'
                    alt='a testé pour vous...'
                    className='flex w-[52] justify-end'
                  />
                </div>
                <p className='font-secondary text-[18px] font-bold leading-[21px] text-[#A52F2F]'>
                  Tanit
                </p>
              </div>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  type='submit'
                  variant='primary'
                  className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[23px] font-secondary text-xs text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                >
                  Profiter de l&apos;offre
                </Button>
              </Link>
              <IceBackground left='left-[40%]' top='top-[65%]' />
            </div>
          </div>
        </section>
        <section className='mt-[104px]' id='gift-section'>
          <div className='flex flex-col md:w-screen md:flex-row md:items-start md:gap-16 lg:gap-[124px] xl:gap-[104px]'>
            <div className='lg relative md:mt-[35px] md:w-2/5 lg:w-2/6'>
              <h2 className='font-secondary text-[30px] font-bold leading-[35px] text-[#2D2929] 2xl:text-4xl'>
                20.000 CHF <br /> En Cadeau
              </h2>
              <p className='mt-8 font-secondary text-[12px] font-medium leading-[14px] text-[#2D2929] 2xl:text-sm'>
                Clinique Muller vous fait remporter des prix exceptionnels
                d&apos;une valeur de 20’000CHF.
                <br /> Réservez un forfait à vie avant le 31 décembre et faites
                partie des 13 gagnants qui seront tirés au sort. Soyez prêts !
                <br />
                Tirage au sort le 31 janvier. Conditions de participation :
                avoir acheté un pack forfait à vie zones combinées entre le 1er
                et le 31 décembre et versé un acompte.
              </p>
              <div className='relative flex flex-col items-end xl:flex-row xl:items-center'>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red items mx-auto mt-8 hidden w-fit justify-center self-start rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-xs text-[12px] text-white md:mx-0 md:flex md:px-[40px] lg:mt-[55px] lg:text-[14px] xl:mt-8 2xl:text-sm'
                  >
                    Participer à notre tombola de Noël
                  </Button>
                </Link>
                <img
                  src='/images/offre-de-christmas/star.webp'
                  alt='star'
                  className='hidden w-28 md:block xl:mt-10 2xl:w-36'
                />
                <img
                  src='/images/offre-de-christmas/clochette.webp'
                  alt='clochette'
                  className='absolute top-[60%] left-24 hidden w-16 md:block 2xl:w-20'
                />
              </div>
              <IceBackground left='left-[50%]' top='top-[145%]' />
            </div>

            <Carousel
              className='mt-8 md:w-3/5 lg:w-4/6'
              responsive={responsive_Gift_Section}
              arrows={false}
            >
              {GIFTS.map((gift, index) => {
                return <DetailedGiftCard key={index} Gift={gift} />;
              })}
            </Carousel>
          </div>
          <Link href='/reservez-laser-electrolyse'>
            <Button
              type='submit'
              variant='primary'
              className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:hidden md:px-[40px] lg:mt-[55px] xl:mt-8'
            >
              Participer à notre tombola de Noël
            </Button>
          </Link>
        </section>
        <section className='mt-[104px]'>
          <h2 className='font-secondary text-[30px] font-bold leading-[42px] text-[#2D2929] 2xl:text-[36px]'>
            Profiter De La Réduction
          </h2>
          <div className='relative mt-8'>
            <div className='grid grid-cols-2 gap-4 sm:mx-[84px] sm:grid-cols-3 md:mx-[100px] lg:mx-0 lg:grid-cols-6 xl:gap-8 2xl:mx-[127px]'>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.VISAGE);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.VISAGE
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Visage
              </div>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.BRAS);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.BRAS
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Bras
              </div>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.TORSE);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.TORSE
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Torse
              </div>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.DOS);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.DOS
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Dos
              </div>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.MAILLOT);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.MAILLOT
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Maillot
              </div>
              <div
                onClick={() => {
                  setBodyPart(BODYPARTS.JAMBES);
                }}
                className={`flex h-[60px] w-[134px] cursor-pointer items-center justify-center justify-self-center rounded-[10px] border font-secondary text-[12px] leading-[14px] xl:w-[160px] xl:text-sm ${
                  bodyPart == BODYPARTS.JAMBES
                    ? 'red-shadow font-bold text-[#A52F2F]'
                    : 'border-[#2D2929] font-medium text-[#2D2929]'
                } `}
              >
                Jambes
              </div>
            </div>
            <div className='mx-1 mt-16 flex w-screen gap-8 overflow-x-auto sm:mx-auto sm:grid sm:w-fit sm:grid-cols-2 sm:overflow-hidden lg:grid-cols-3 xl:grid-cols-4'>
              {(bodyPart === BODYPARTS.VISAGE
                ? PRICES.VISAGE
                : bodyPart === BODYPARTS.BRAS
                ? PRICES.BRAS
                : bodyPart === BODYPARTS.TORSE
                ? PRICES.TORSE
                : bodyPart === BODYPARTS.DOS
                ? PRICES.DOS
                : bodyPart === BODYPARTS.MAILLOT
                ? PRICES.MAILLOT
                : PRICES.JAMBE
              ).map((element, index) => {
                return <PriceCard details={element} key={index} />;
              })}
            </div>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                type='submit'
                variant='primary'
                className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[130px] py-[16px] font-secondary text-sm text-white lg:mt-[55px] xl:mt-8'
              >
                Réserver
              </Button>
            </Link>
            <IceBackground left='left-[15%]' top='top-[100%]' />
          </div>
        </section>
        <section className='mt-[104px] flex flex-col items-center justify-between gap-12 lg:flex-row-reverse lg:gap-[102px] xl:items-start 2xl:gap-16'>
          <div className='w-full lg:w-1/2'>
            <h1 className='font-secondary text-[30px] font-semibold leading-[35px] md:text-center lg:text-left 2xl:text-4xl'>
              Tout Savoir Sur <br className='hidden md:block' />
              Sur l&apos;offre De Noël
            </h1>
            <div className='mt-8'>
              {FAQ_OFFRE_CH.map((q) => (
                <Accordion.Controlled
                  open={q.question === selectedQuestion}
                  setSelectedQuestion={setSelectedQuestion}
                  title={q.question}
                  content={q.answer}
                  key={q.question + ''}
                />
              ))}
            </div>
          </div>

          <img
            src='/images/offre-de-christmas/ToutSavoirSection.webp'
            alt='offre speciale'
            className='hidden md:block lg:w-[381px] xl:w-[509px] 2xl:w-[637px]'
          />
        </section>
        <section className='mt-[104px]'>
          <h1 className='mb-8 hidden font-secondary text-[30px] font-bold uppercase leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            le laser diode <br /> hybride, le nouveau 3-en-1
          </h1>
          <div className='relative grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 xl:items-center xl:gap-[104px]'>
            <div className='w-full justify-self-center'>
              <h1 className='font-secondary text-[30px] font-bold uppercase leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                le laser diode
                <br className='hidden lg:block' /> hybride, le nouveau 3-en-1
              </h1>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-christmas/TechnologieSection.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary text-[12px] font-medium leading-[14px] md:mt-0 xl:mt-8 2xl:text-sm'>
                  Notre laser Diode hybride combine les 3 longueurs d&apos;onde
                  des lasers Alexandrite 755, diode 808 et Nd-YAG 1064.
                  <br />
                  Une technologie de pointe ayant une capacité de pénétration à
                  différentes profondeurs détruisant efficacement les poils sur
                  <span className='font-bold '> tous les types de peau. </span>
                  Que vous ayez la peau claire, mate ou noire, nous avons ce
                  qu&apos;il vous faut !
                  <br /> <br />
                  Les lasers diodes hybrides sont utilisés pour tous nos
                  traitements d&apos;épilation laser afin de vous garantir des
                  résultats sûrs et efficaces.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Profiter de L&apos;offre de Noël
                  </Button>
                </Link>
              </div>
            </div>
            <IceBackground left='left-[35%]' top='top-[40%]' />
            <img
              src='/images/offre-de-christmas/TechnologieSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
          </div>
        </section>
        <section className='mt-[104px]'>
          <h1 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Combien de séances d&apos;épilation laser sont nécessaires ?
          </h1>
          <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-16 xl:gap-[104px]'>
            <img
              src='/images/offre-de-christmas/NumberSessionSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
            <div className='w-full justify-self-center'>
              <h1 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Combien de séances d&apos;épilation laser sont nécessaires ?
              </h1>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-christmas/NumberSessionSection.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary text-[12px] font-medium leading-[14px] md:mt-0 xl:mt-8 2xl:text-sm'>
                  Découvrez combien de séances d&apos;épilation laser par zone
                  sont recommandées par nos thérapeutes pour des résultats
                  optimaux.
                  <br />
                  Certains cas peuvent nécessiter un nombre de séances plus
                  élevé, car plusieurs facteurs biologiques peuvent avoir un
                  impact sur le nombre de séances nécessaires pour obtenir des
                  résultats satisfaisants :
                  <br />
                  <br />
                  <div className='ml-6'>
                    <ul className='list-disc'>
                      <li>personnes souffrant de SOPK,</li>
                      <li>personnes ayant un taux de testostérone élevé,</li>
                      <li>post-partum,</li>
                      <li>les zones hormono-dépendantes.</li>
                    </ul>
                  </div>
                  <br />
                  Près de 20% de la population observera une légère repousse des
                  poils, principalement due aux changements hormonaux, et ce,
                  indépendamment du traitement. De ce fait, celle-ci aura besoin
                  d&apos;effectuer une à deux retouches par an.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Profiter de L&apos;offre de Noël
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='mt-[104px]'>
          <h2 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Forfaits À vie = Séances Illimitées
          </h2>
          <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-16 xl:gap-[104px]'>
            <div className='w-full justify-self-center'>
              <h1 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Forfaits À vie = Séances Illimitées
              </h1>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-christmas/ForfaitAVieSection.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary text-[12px] font-medium leading-[14px] md:mt-0 xl:mt-8 2xl:text-sm'>
                  En optant pour le forfait à vie, vous bénéficiez d&apos;un
                  nombre illimité de séances d&apos;épilation laser. Vous ne
                  payez plus à la séance mais au résultat, avec la garantie
                  d&apos;un résultat optimal à vie sans frais supplémentaires.
                  <br />
                  Le forfait à vie comprend également un nombre de séances de
                  retouches illimitées et GRATUITES.
                  <br />
                  Cela en fait donc une offre exclusive, très avantageuse et
                  garantie à vie. Même au-delà de 5, 10 ou 15 ans, vous aurez
                  toujours accès à des retouches gratuites dans notre clinique.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Profiter de -20% sur votre forfait à vie
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src='/images/offre-de-christmas/ForfaitAVieSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
          </div>
        </section>
        <section className='mt-[104px] flex flex-col items-start gap-8 sm:flex-row md:flex-col lg:flex-row lg:gap-16 xl:gap-[169px] 2xl:gap-[221px]'>
          <div className='w-full'>
            <h2 className='font-secondary text-[30px] font-bold leading-[35px] md:text-center lg:text-left 2xl:text-4xl'>
              Pourquoi <br className='hidden md:block' /> Nous Choisir ?
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-8 px-[38px] md:grid-cols-4'>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Prix compétitifs
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-4 text-[#2D2929] 2xl:text-sm'>
                Des traitements d’épilation laser abordables et accessibles à
                tous.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Prise en charge d’exception
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-4 text-[#2D2929] 2xl:text-sm'>
                Une prise en charge d’exception et un personnel expérimenté.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Technologie innovante
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-4 text-[#2D2929] 2xl:text-sm'>
                Utilisation de machines d&apos;épilation laser diode 3 En 1 très
                puissantes et sûres pour tous les types de peau.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Résultats spectaculaires
              </h3>
              <p className='mt-4 font-secondary text-[12px] leading-4 text-[#2D2929] 2xl:text-sm'>
                Des résultats remarquables dès la 3ème séance d&apos;épilation
                laser.
              </p>
            </div>
          </div>
        </section>
        <section className='relative mx-auto mt-[104px] text-center'>
          <IceBackground right='-right-10' top='-top-16' />
          <a
            className='mb-10 inline-block'
            href='https://www.google.com/search?q=clinique+muller+lausanne&sxsrf=ALiCzsZorNDfWRbGSE6ve43VnT2eO1562A%3A1669028005092&ei=pVh7Y9OMBbKCkdUPhsigqAQ&ved=0ahUKEwiT8_Pqjb_7AhUyQaQEHQYkCEUQ4dUDCA8&uact=5&oq=clinique+muller+lausanne&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIFCAAQhgM6CwguEMcBENEDEJECOgUILhCRAjoFCC4QgAQ6BQgAEIAEOgsILhCABBDHARDRAzoICC4QgAQQ1AI6BAgAEEM6BQgAEJECOgoILhDHARDRAxBDOgsILhCABBDHARCvAToECC4QQzoQCC4QgAQQhwIQxwEQrwEQFDoLCC4QrwEQxwEQgAQ6CggAEIAEEIcCEBQ6BggAEBYQHkoECEEYAEoECEYYAFAAWMggYPQhaABwAXgAgAHCAogB5ySSAQgwLjE1LjcuMpgBAKABAcABAQ&sclient=gws-wiz-serp#lrd=0x478c2fa28a681a31:0x1de5efcfeb3918b3,1,,,'
          >
            <img
              width='150'
              height='150'
              src='/images/offre-de-christmas/google-reviews.png'
              alt='Google reviews'
            />
          </a>
          <Fade cssClass='-mt-4' {...properties}>
            {FEEDBACKS.map((feedback, index) => {
              return (
                <div
                  key={index}
                  className='each-slide mb-4 flex flex-col items-center px-32'
                >
                  <p className='font-secondary text-[22px] font-semibold text-[#2D2929]'>
                    {feedback.profile}
                  </p>
                  <Rating rating={feedback.rating} />
                  <p className='mt-8 text-center font-secondary text-[14px] text-[#2D2929] lg:text-[18px]'>
                    {feedback.comment}
                  </p>
                </div>
              );
            })}
          </Fade>
        </section>
        <section className='mt-[104px]'>
          <h2 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Le déroulement de l&apos;épilation laser chez Clinique Muller
          </h2>
          <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:grid-flow-dense xl:gap-[104px]'>
            <img
              src='/images/offre-de-christmas/DeroulementSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:w-full lg:block'
            />
            <div className='w-full justify-self-center'>
              <h2 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Le déroulement de l&apos;épilation laser chez Clinique Muller
              </h2>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-christmas/DeroulementSection.webp'
                  alt='offre speciale'
                  className='mx-auto sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary text-[12px] font-medium leading-[14px] md:mt-0 xl:mt-8 2xl:text-sm'>
                  Le protocole d&apos;épilation laser commence par une première
                  consultation gratuite offerte à tous nos nouveaux hôtes.
                  <br />
                  Au cours de cette séance, nous vous ferons découvrir comment
                  se déroulera votre traitement chez Clinique Muller. Vous
                  pourrez aussi nous poser toutes vos questions avant de
                  commencer le traitement en étant totalement rassuré.
                  <br />
                  Notre thérapeute évaluera votre type de peau et de poils et
                  effectuera un patch test afin de déterminer votre
                  compatibilité avec le traitement laser. Il élaborera ensuite
                  un plan de traitement personnalisé adapté à vos besoins
                  spécifiques.
                  <br />
                  Le praticien vous fournira une estimation de prix pour chaque
                  zone ou ensemble de zones que vous souhaitez traiter, ainsi
                  que le nombre de séances nécessaires selon votre type de peau,
                  de poils et la zone à traiter.
                  <br />
                  En profitant de notre offre de Noël, vous bénéficiez d’une
                  réduction de -20% sur les FORFAITS À VIE des zones combinées !
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Profiter de L’offre de Noël
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src='/images/offre-de-christmas/DeroulementSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full lg:hidden'
            />
          </div>
        </section>
      </div>
      <section className='faq-bg-sm relative mx-auto mt-[104px] mb-[120px] rounded-3xl py-12 sm:mx-10 sm:bg-[#EAEAEA] 2xl:mx-auto 2xl:max-w-[1400px]'>
        <div className='mx-auto flex justify-center gap-x-4'>
          <h2 className='text-center font-secondary text-[30px] font-bold leading-[35px] md:text-center 2xl:text-[36px]'>
            Tout savoir <br /> sur l&apos;épilation laser
          </h2>
        </div>
        <div className='mx-8 mt-10 rounded-lg bg-white p-8 shadow-md sm:mx-5 lg:mx-[57px] xl:mx-[76px] 2xl:mx-[94px]'>
          {FAQ_CH.map((q) => (
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
    </Layout>
  );
}

export default Christmas;

export const GiftCard = ({ Gift }: IGift) => {
  return (
    <Link href='#gift-section'>
      <div className='ml-4 h-64 w-[158px] cursor-pointer rounded-[10px] border border-[#C4C4C4] bg-white 2xl:w-[196px]'>
        <div className='relative h-[44%] bg-[#EAEAEA]'>
          <p className='pt-[11px] pl-5 text-[12px] font-bold text-[#A52F2F]'>
            {Gift.price}
          </p>
          <img src={Gift.image} alt='Gift' className='abosolute float-right' />
        </div>
        <div className='h-[56%] px-[14px]'>
          <p className='mt-6 font-secondary font-bold text-[#2D2929]'>
            {Gift.title}
          </p>
          <p className='mt-2 font-secondary text-[12px] leading-[14px] text-[#2D2929]'>
            {Gift.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const DetailedGiftCard = ({ Gift }: IGift) => {
  return (
    <div className='card relative h-[480px] w-[320px]'>
      <div id='card' className='z-10 h-full w-full hover:-z-30'>
        <img
          src={Gift.largeImage}
          alt='a testé pour vous...'
          className='h-full'
        />
        <div
          id='carddesc'
          className='absolute bottom-0 w-5/6 border border-[#EAEAEA] bg-white pl-[26px]'
        >
          <div className='flex items-center justify-end'>
            <div className='w-4/5'>
              <p className='mt-5 font-secondary text-[16px] font-bold leading-[18px] text-[#2D2929]'>
                {Gift.title}
              </p>
              <p className='mt-2 mb-[25px] pr-10 font-secondary text-[12px] font-medium leading-[14px] text-[#2D2929]'>
                {Gift.description}
              </p>
            </div>
            <button className='bg-red -mr-4 h-10 w-10 rounded-full text-3xl text-white'>
              &#8594;
            </button>
          </div>
        </div>
        <div
          id='carddetails'
          className='absolute top-0 -z-10 h-full w-full rounded-[10px] bg-[#2D2929] opacity-70 '
        >
          <p className='mt-8 pl-[21px] font-secondary text-[16px] font-bold leading-[18px] text-white'>
            {Gift.price}
          </p>
          <p className='mt-2 pl-[21px] font-secondary text-[30px] font-bold leading-[35px] text-white'>
            {Gift.title}
          </p>
          <p className='mt-[70%] pl-[21px] font-secondary text-[14px] font-medium leading-[16px] text-white'>
            {Gift.content}
          </p>
          <Link href=''>
            <div className='mt-[18px] pr-[19px] text-right text-white'>
              Savoir plus &#8594;
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export const PriceCard = ({ details }: IPriceCard) => {
  return (
    <div className='h-[200px] min-h-[200px] w-[220px] min-w-[220px] justify-self-center rounded-[20px] bg-[#EAEAEA]'>
      <h3 className='mx-6 pt-8 font-secondary text-base font-bold leading-[18px] text-[#A52F2F] 2xl:text-[18px]'>
        {details.title}
      </h3>
      <p className='mx-6 mt-4 font-secondary text-[30px] font-bold leading-[35px] text-[#2D2929] 2xl:text-[36px]'>
        {details.price}
      </p>
      <p
        style={{ textDecorationLine: 'line-through' }}
        className='mx-6 font-secondary font-medium leading-[19px] text-[#2D2929] 2xl:text-[20px]'
      >
        {details.oldPrice}
      </p>
    </div>
  );
};
const IceBackground = ({
  top,
  left,
  right,
}: {
  top?: string;
  left?: string;
  right?: string;
}) => {
  return (
    <div
      className={`absolute -z-20 hidden h-[280px] w-[322px] xl:block ${top} ${right} ${left}`}
    >
      <img
        src='/images/offre-de-christmas/Union.svg'
        alt='offre speciale'
        className=''
      />
    </div>
  );
};

export interface IGift {
  Gift: {
    title: string;
    description: string;
    price: string;
    image: string;
    content: string;
    largeImage: string;
  };
}
export interface IPriceCard {
  details: {
    title: string;
    oldPrice: string;
    price: string;
  };
}
export enum BODYPARTS {
  VISAGE,
  BRAS,
  TORSE,
  DOS,
  MAILLOT,
  JAMBES,
}
