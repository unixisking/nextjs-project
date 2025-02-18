import Link from 'next/link';
import { useState } from 'react';
import { Fade } from 'react-slideshow-image';

import 'react-multi-carousel/lib/styles.css';
import 'react-slideshow-image/dist/styles.css';

import { FAQ_CH, FEEDBACKS } from '@/lib/data/christmas-constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Rating from '@/components/Rating';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';

import { OfferCta } from '@/pages/offre-laser-femme/epilation-laser-lausanne';

export const FAQ_OFFRE_JANUARY = [
  {
    question: 'Qu’est-ce que le "forfait à vie" chez Clinique Muller ?',
    answer: (
      <p>
        Le forfait à vie vous permet de payer un prix fixe, sans vous préoccuper
        du nombre de séances d&apos;épilation laser ou de retouches à effectuer.
        <br />
        Dès la fin du traitement, vous bénéficierez de retouches gratuites
        pendant 5 ans. À l&apos;issue de cette période, nous organiserons une
        réévaluation par un de nos experts. Si vous respectez toujours les
        conditions du forfait épilation laser à vie, vous aurez droit à 5 autres
        années de retouches gratuites et ainsi de suite.
      </p>
    ),
  },
  {
    question: 'Quelles sont les conditions de validité de l’offre de janvier ?',
    answer: (
      <div>
        <p>
          Notre offre d’épilation laser de janvier s’applique uniquement si vous
          achetez le forfait combiné à vie jambes complètes+maillot complet
          avant le 31 janvier. Elle n’est pas cumulable avec d’autres offres ou
          réductions.
        </p>
      </div>
    ),
  },
  {
    question: 'Pourquoi devrais-je choisir un forfait à vie ?',
    answer: (
      <div>
        <p>
          Chaque corps étant différent, il n’est pas toujours facile de
          déterminer exactement combien de séances seront suffisantes pour
          obtenir des résultats durables. Le corps peut subir quelques
          changements dus à l’ âge ou aux hormones, pouvant donc stimuler la
          croissance des poils.
        </p>
        <p>
          En choisissant le forfait à vie, vous n’aurez plus jamais à repayer
          les séances d’épilation laser et vous obtiendrez une épilation
          complète garantie à vie !
        </p>
      </div>
    ),
  },
  {
    question: 'Puis-je commencer mon traitement à tout moment après janvier ?',
    answer:
      "Oui, l'offre reste active à condition que vous réserviez votre forfait combiné à vie avant le 31 janvier. Vous pouvez organiser vos séances d'épilation laser à votre convenance après cette date. Toutefois, si vous décidez d'annuler votre rendez-vous, l'offre ne vous sera plus accessible.",
  },
  {
    question: 'Puis-je payer les forfaits à vie en plusieurs fois ?',
    answer:
      'Oui, vous pouvez réserver votre forfait combiné à vie jambes complètes+maillot complet dès maintenant et demander le paiement en 12 fois sans frais lors de la séance d’information gratuite qui précède vos séances d’épilation laser',
  },

  {
    question:
      'J’ai commencé un traitement dans un autre centre d’épilation laser, Clinique Muller fait-elle des reprises de contrats ? ',
    answer:
      "Vous avez commencé un traitement laser chez un de nos concurrents depuis moins de six mois. Clinique Muller vous offre jusqu'à 500 CHF de réduction sur le prix de votre épilation laser si vous décidez de prendre un forfait à vie. Pour plus d'informations, contactez notre clinique.",
  },

  {
    question: 'Ce qui est exclu des “forfaits à vie” de Clinique Muller ?',
    answer: (
      <p>
        Dans certains cas, vous ne pouvez pas bénéficier des avantages du
        forfait d’épilation laser à vie, vous trouverez une liste détaillée de
        toutes les exclusions dans nos conditions générales de vente, mais voici
        les principales :
        <ul className='list-disc pl-4'>
          <li>lors d&apos;une repousse due à une prise de médicaments.</li>
          <li>
            lors d&apos;une repousse de poils de type duvet fin et clair, dans
            une zone préalablement traitée au laser.
          </li>
        </ul>
      </p>
    ),
  },
];

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

export default function Page() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    undefined
  );
  return (
    <Layout isNavbarHidden isBackgroundLight FooterBackground='bg-[#EAEAEA]'>
      <Seo
        title='ÉPILATION LASER HOMME : 1 FORFAIT À VIE ACHETÉ = 1 OFFERT'
        description="Économisez plus de 700 CHF sur votre épilation laser à Lausanne. 1 forfait à vie Épaules OFFERT à l'achat d'un forfait à vie Dos + Torse complet."
        image='https://www.cliniquemuller.ch/images/offre-de-janvier/meta-image-homme.webp'
      />

      <div className='mx-10 mt-32 md:mx-20 2xl:mx-auto 2xl:max-w-[1400px]'>
        <main className='grid grid-cols-1 gap-[106px] lg:grid-cols-2'>
          <div className='relative'>
            <p className='text-center font-secondary text-lg font-bold text-[#D88F1A] lg:text-left 2xl:text-xl'>
              Économisez plus de 700 CHF sur votre épilation laser
            </p>
            <h1 className='text-center font-secondary text-4xl font-bold leading-[42px] text-[#2D2929] lg:text-left 2xl:text-5xl'>
              1 forfait épilation laser à vie acheté = 1 forfait à vie offert !
            </h1>
            <div>
              <p className='mt-8 text-center font-secondary text-lg text-[#2D2929] lg:text-left 2xl:text-xl'>
                Pour l’achat d’un forfait d’épilation laser à vie “Dos + Torse”,
                nous vous offrons un forfait épilation laser à vie “Épaules”
              </p>
              <p className='mt-8 text-center font-secondary text-lg font-bold text-[#2D2929] lg:text-left 2xl:text-xl'>
                La première consultation est gratuite et sans engagement
              </p>
            </div>
            <div className='relative'>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  type='submit'
                  variant='primary'
                  className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[54px] py-[23px] font-secondary text-sm text-white lg:mx-0 2xl:text-base'
                >
                  Profiter d&apos;un forfait gratuit !
                </Button>
              </Link>
            </div>
          </div>
          <div className='mx-auto grid grid-cols-3 gap-y-4'>
            <div className='col-span-3 mx-auto xl:mx-0 '>
              <HeroCard
                title='Achetez'
                subTitle='1 Offre Dos + Torse'
                imagePath='/images/offre-de-janvier/hero-man-1.png'
              />
            </div>
            <img
              className='hidden xl:block'
              src='/images/offre-de-janvier/arrow.svg'
              alt='arrow'
            />
            <div className='col-span-3 mx-auto xl:col-span-2 xl:mx-auto'>
              <HeroCard
                title='Gagnez'
                subTitle='1 Offre Épaules'
                imagePath='/images/offre-de-janvier/hero-man-2.png'
              />
            </div>
          </div>
        </main>
        <section className='relative mt-[104px] sm:mt-[90px] md:mt-[108px] lg:mt-[85px] xl:mt-[48px] 2xl:mt-[134px]'>
          <h2 className='text-center font-secondary text-3xl font-bold leading-[35px] text-[#2D2929] sm:mt-[27px] 2xl:text-4xl'>
            Pourquoi souscrire aux forfaits à vie ?
          </h2>
          <div className='mt-[32px] grid grid-cols-1 gap-8 px-12 sm:grid-cols-2 md:gap-y-[52px] lg:grid-cols-4 lg:gap-x-8 xl:gap-x-[34px] 2xl:gap-16'>
            <div>
              <img
                src='/images/offre-de-christmas/icons/PriceIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-lg font-bold leading-[18px] text-[#2D2929] 2xl:text-xl'>
                Prix fixe
              </h3>
              <p className='mt-4 font-secondary text-sm text-[#2D2929] 2xl:text-base'>
                Le forfait à vie vous permet de payer un prix fixe pour votre
                épilation laser peu importe le nombre de séances nécessaires
                pour finir votre traitement.
              </p>
            </div>
            <div>
              <img
                src='/images/offre-de-christmas/icons/RetoucheIcon.webp'
                alt='Christmas'
                className='mt-5 h-10 w-10'
              />
              <h3 className='mt-4 font-secondary text-lg font-bold leading-[18px] text-[#2D2929] 2xl:text-xl'>
                Séances d’épilation illimitées
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
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
              <h3 className='mt-4 font-secondary text-lg font-bold leading-[18px] text-[#2D2929] 2xl:text-xl'>
                Séances de retouche gratuites à vie
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
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
              <h3 className='mt-4 font-secondary text-lg font-bold leading-[18px] text-[#2D2929] 2xl:text-xl'>
                Achetez maintenant, payez plus tard
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
                Payez votre forfait à vie jusqu&apos;en 12 fois sans frais.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className='mt-[104px] bg-[#EAEAEA]'>
        <div className='mx-10 max-w-4xl space-y-8 py-16 sm:mx-auto'>
          <div className='space-y-8 text-center'>
            <h2 className='text-center font-secondary text-3xl font-bold leading-[35px] text-[#2D2929] sm:mt-[27px] 2xl:text-4xl'>
              Notre Offre D’épilation Laser Pour Hommes
            </h2>
            <p className='text-center font-secondary text-lg font-bold text-[#D88F1A] 2xl:text-xl'>
              1 Forfait Épilation Laser Acheté = 1 Forfait Épilation Laser
              Offert
            </p>
            <p className='text-sm 2xl:text-base'>
              Débarrassez-vous définitivement des poils disgracieux et des
              irritations dues au rasage avec notre offre d’épilation laser à
              vie exclusive à Lausanne.
            </p>
            <p>
              Pour le prix d&apos;un forfait à vie combiné{' '}
              <strong>dos + torse</strong>, bénéficiez{' '}
              <strong>GRATUITEMENT</strong> d’un forfait à vie{' '}
              <strong>épaules</strong> !
            </p>
          </div>
          <div className='flex flex-col items-center gap-2 lg:flex-row'>
            <OfferCard title='dos, torse' price='4’066 CHF' />
            <span className='text-[40px] font-bold text-[#A52F2F]'>+</span>
            <OfferCard title='épaules' price='757 CHF' />
            <span className='text-[40px] font-bold text-[#A52F2F]'>=</span>
            <OfferCard
              title='dos, torse + épaules'
              price='4’000 CHF'
              oldPrice='4’796 CHF'
            />
          </div>
          <div className='text-center'>
            <p className='mb-4'>
              Et on arrondit même à 4’000 CHF, soit une économie de plus de 700
              CHF !
            </p>
            <Link href='/offre-laser-femme/epilation-laser-lausanne'>
              <a className='underline'>
                Pour découvrir notre offre d’épilation laser du mois pour
                femmes, cliquez ici
              </a>
            </Link>
          </div>
          <Link href='/reservez-laser-electrolyse'>
            <Button
              type='submit'
              variant='primary'
              className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[54px] py-[23px] font-secondary text-sm text-white 2xl:text-base'
            >
              Réservez votre forfait combiné à vie
            </Button>
          </Link>
        </div>
      </section>
      <div className='mx-10 mt-[104px] md:mx-20 2xl:mx-auto 2xl:max-w-[1400px]'>
        <section>
          <h2 className='font-secondary text-[30px] font-bold uppercase leading-[35px] text-[#2D2929] md:text-center xl:hidden'>
            A Testé Pour Vous...
          </h2>
          <div className='flex flex-col md:flex-row md:items-start md:gap-x-16 lg:gap-x-[104px]'>
            <div className='relative mt-8 md:w-1/2'>
              <h2 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] text-[#2D2929] xl:block 2xl:text-4xl'>
                A Testé Pour Vous...
              </h2>
              <p className='font-secondary text-[#2D2929]'>
                La joie et la bonne humeur étaient au rendez-vous après le
                passage de Daniel chez Clinique Muller. Daniel a testé pour vous
                notre clinique et vous fait part de son expérience :
              </p>
              <div className='mt-4'>
                <img
                  src='/images/offre-de-christmas/CrochetRight.webp'
                  alt='a testé pour vous...'
                  className='w-[52]'
                />
                <p className='mx-[22px] mt-4 pb-[10px] text-justify font-secondary text-[#2D2929]'>
                  Une expérience vraiment excellente, une équipe formidable.
                  <br />
                  Les machines utilisées chez Clinique Muller sont incroyables,
                  j’ai eu des résultats spectaculaires dès la première séance.
                  <br />
                  Je recommande fortement !
                </p>
                <div className='flex justify-end'>
                  <img
                    src='/images/offre-de-christmas/CrochetLeft.webp'
                    alt='a testé pour vous...'
                    className='flex w-[52] justify-end'
                  />
                </div>
                <p className='font-secondary text-[18px] font-bold leading-[21px] text-[#A52F2F]'>
                  Daniel
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
            </div>
            <iframe
              className='mx-auto mt-8 w-[324px] px-3 md:w-1/2'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/9_E94vQFnlU'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <section className='mt-[104px] flex flex-col items-center justify-between gap-12 lg:flex-row-reverse lg:gap-[102px] xl:items-start 2xl:gap-16'>
          <div className='w-full lg:w-1/2'>
            <h1 className='font-secondary text-[30px] font-semibold leading-[35px] md:text-center lg:text-left 2xl:text-4xl'>
              Tout Savoir Sur <br className='hidden md:block' />
              Sur l&apos;offre De Janvier
            </h1>
            <div className='mt-8'>
              {FAQ_OFFRE_JANUARY.map((q) => (
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
          <h1 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Le Laser Diode <br /> Hybride, Le Nouveau 3-en-1
          </h1>
          <div className='relative grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16 xl:items-center xl:gap-[104px]'>
            <div className='w-full justify-self-center'>
              <h1 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Le Laser Diode
                <br className='hidden lg:block' /> Hybride, Le Nouveau 3-en-1
              </h1>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-christmas/TechnologieSection.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary font-medium md:mt-0 xl:mt-8'>
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
                    Profiter de l&apos;offre de janvier
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src='/images/offre-de-christmas/TechnologieSection.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
          </div>
        </section>
        <section className='mt-[104px]'>
          <h1 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Combien De Séances D&apos;épilation Laser Sont Nécessaires ?
          </h1>
          <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-16 xl:gap-[104px]'>
            <img
              src='/images/offre-de-janvier/NumberSessionSectionMen.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
            <div className='w-full justify-self-center'>
              <h1 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Combien De Séances d&apos;épilation Laser Sont Nécessaires ?
              </h1>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-janvier/NumberSessionSectionMen.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary font-medium md:mt-0 xl:mt-8'>
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
                    Profiter de l&apos;offre de janvier
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
                  src='/images/offre-de-janvier/ForfaitAVieSectionMen.webp'
                  alt='offre speciale'
                  className='mx-auto px-2 sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary font-medium md:mt-0 xl:mt-8'>
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
                  toujours accès à des retouches gratuites dans notre clinique
                  d’épilation laser à Lausanne.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Obtenir un forfait épaules gratuit
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src='/images/offre-de-janvier/ForfaitAVieSectionMen.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:block md:w-full'
            />
          </div>
        </section>
        <section className='mt-[104px] flex flex-col items-start gap-8 sm:flex-row md:flex-col lg:flex-row lg:gap-16 xl:gap-[169px] 2xl:gap-[221px]'>
          <div className='w-full'>
            <h2 className='font-secondary text-[30px] font-bold leading-[35px] md:text-center lg:text-left 2xl:text-4xl'>
              Pourquoi Choisir Notre Clinique D’épilation Laser ?
            </h2>
          </div>
          <div className='grid grid-cols-2 gap-8 px-[38px] md:grid-cols-4'>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Prix compétitifs
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
                Des traitements d’épilation laser abordables et accessibles à
                tous.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Prise en charge d’exception
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
                Une prise en charge d’exception et un personnel expérimenté.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Technologie innovante
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
                Utilisation de machines d&apos;épilation laser diode 3 En 1 très
                puissantes et sûres pour tous les types de peau.
              </p>
            </div>
            <div>
              <h3 className='font-secondary text-base font-semibold leading-5 text-[#2D2929] 2xl:text-[18px]'>
                Résultats spectaculaires
              </h3>
              <p className='mt-4 font-secondary text-[#2D2929]'>
                Des résultats remarquables dès la 3ème séance d&apos;épilation
                laser.
              </p>
            </div>
          </div>
        </section>
        <section className='relative mx-auto mt-[104px] text-center'>
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
                  <p className='mt-8 text-center font-secondary text-[#2D2929] lg:text-[18px]'>
                    {feedback.comment}
                  </p>
                </div>
              );
            })}
          </Fade>
        </section>
        <section className='mt-[104px]'>
          <h2 className='mb-8 hidden font-secondary text-[30px] font-bold leading-[35px] md:block md:text-center lg:hidden lg:text-left xl:hidden 2xl:text-[36px]'>
            Le Déroulement De L&apos;épilation Laser Homme Chez Clinique Muller
          </h2>
          <div className='grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:items-center md:gap-16 lg:grid-flow-dense xl:gap-[104px]'>
            <img
              src='/images/offre-de-janvier/DeroulementSectionMen.webp'
              alt='offre speciale'
              className='hidden w-[272px] justify-self-center md:w-full lg:block'
            />
            <div className='w-full justify-self-center'>
              <h2 className='font-secondary text-[30px] font-bold leading-[35px] md:hidden md:text-center lg:block lg:text-left 2xl:text-[36px]'>
                Le déroulement de l&apos;épilation laser chez Clinique Muller
              </h2>
              <div className='pt-8 md:pt-0 lg:pt-8 xl:pt-0'>
                <img
                  src='/images/offre-de-janvier/DeroulementSectionMen.webp'
                  alt='offre speciale'
                  className='mx-auto sm:px-[73px] md:hidden'
                />
                <p className='mt-8 font-secondary font-medium md:mt-0 xl:mt-8'>
                  Le protocole d&apos;épilation laser commence par une première
                  consultation gratuite offerte à tous nos nouveaux hôtes.
                  <br />
                  <br />
                  Au cours de cette séance, nous vous ferons découvrir comment
                  se déroulera votre traitement chez Clinique Muller. Vous
                  pourrez aussi nous poser toutes vos questions avant de
                  commencer le traitement en étant totalement rassuré.
                  <br />
                  <br />
                  Notre thérapeute évaluera votre type de peau et de poils et
                  effectuera un patch test afin de déterminer votre
                  compatibilité avec le traitement laser. Il élaborera ensuite
                  un plan de traitement personnalisé adapté à vos besoins
                  spécifiques.
                  <br />
                  <br />
                  Le praticien vous fournira une estimation de prix pour chaque
                  zone ou ensemble de zones que vous souhaitez traiter, ainsi
                  que le nombre de séances nécessaires selon votre type de peau,
                  de poils et la zone à traiter.
                  <br />
                  <br />
                  En achetant le forfait combiné à vie dos+torse, vous
                  bénéficierez d’une forfait épaules à vie offert
                  <br />
                  <br />
                  C&apos;est le moment ou jamais de vous libérer définitivement
                  de vos poils indésirables.
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    type='submit'
                    variant='primary'
                    className='bg-red mx-auto mt-8 flex w-fit justify-center rounded-tl-3xl rounded-br-3xl px-[60px] py-[16px] font-secondary text-[12px] text-white md:mx-0 md:px-[40px] lg:mt-[55px] xl:mt-8 2xl:text-sm'
                  >
                    Profiter de l’offre de janvier
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
        <section className='faq-bg-sm relative mx-auto mt-[104px] mb-[120px] rounded-3xl py-12 sm:mx-10 sm:bg-[#EAEAEA] 2xl:mx-auto 2xl:max-w-[1400px]'>
          <div className='mx-auto flex justify-center gap-x-4'>
            <h2 className='text-center font-secondary text-[30px] font-bold leading-[35px] md:text-center 2xl:text-[36px]'>
              Tout Savoir <br /> Sur L&apos;épilation Laser Pour Hommes
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
      </div>
      <OfferCta
        message={
          <>
            Achetez le forfait à vie combiné et obtenez
            <br className='md:hidden' /> un forfait à vie GRATUIT pour les
            épaules !
          </>
        }
        button={{
          message: 'Profiter de l’offre',
          to: '/reservez-laser-electrolyse',
        }}
      />
    </Layout>
  );
}

export const HeroCard = ({
  title,
  subTitle,
  imagePath,
}: {
  title: string;
  subTitle: string;
  imagePath: string;
}) => {
  return (
    <div className='relative h-[200px] w-[298px] sm:h-[250px] sm:w-[375px]'>
      <img
        className='-z-1 absolute left-0 top-0 h-full w-full'
        src={imagePath}
        alt={subTitle}
      />
      <div className='absolute left-4 bottom-4 z-10 text-white'>
        <h3 className='font-secondary font-bold'>
          {title}
          <br />
          <span className='text-lg'>{subTitle}</span>
        </h3>
      </div>
      <div className='absolute top-0 right-0 rounded-bl-[20px] bg-[#D88F1A] py-2.5 px-5'>
        <p className='font-secondary text-base font-bold text-white 2xl:text-lg'>
          À Vie
        </p>
      </div>
    </div>
  );
};

export const OfferCard = ({
  title,
  price,
  oldPrice,
}: {
  title: string;
  price: string;
  oldPrice?: string;
}) => (
  <div className='flex h-[200px] w-[260px] flex-col justify-center space-y-4 rounded-[20px] bg-white px-[30px]'>
    <span className='text-left font-secondary font-bold uppercase text-[#A52F2F] 2xl:text-lg'>
      {title}
    </span>
    <p className='text-2xl font-bold 2xl:text-[28px]'>{price}</p>
    <p className='text-base line-through 2xl:text-xl'>{oldPrice}</p>
  </div>
);
