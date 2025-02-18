import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { LAUNCH_DATE } from '@/data/constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Step from '@/components/offre-de-lancement/Step';
import Timer from '@/components/offre-de-lancement/Timer';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';
import CtaBanner from '@/components/shared/CtaBanner';
import Note from '@/components/shared/Note';
import Section from '@/components/shared/Section';

export default function OffreDeLancementLandingPage() {
  return (
    <Layout
      isNavbarHidden
      isBackgroundLight
      FooterBackground='background-light'
    >
      <div className='bg-[#FDF9F5]'>
        <Seo
          title='Offre d’épilation laser corps entier forfait à vie | Clinique Muller'
          description="Offre limitée - Lausanne l Profitez de notre réduction d’octobre: Des séances d’épilation laser illimitées corps entier à vie au prix de 5'999 CHF"
          keywords='Épilation laser; épilation laser lausanne'
          image='https://www.cliniquemuller.ch/images/offre-de-octobre/offre-octobre.webp'
        />

        <main className='offre-de-octobre-bg relative z-10 w-screen lg:h-[980px]'>
          <div>
            <div className='absolute top-32 -left-48 -z-10 hidden lg:block'>
              <Image
                alt='Circular shapes'
                src='/images/shapes/circles.svg'
                layout='fixed'
                width={600}
                height={600}
              />
            </div>
            <div className='mx-[45px] grid pt-56 lg:mx-[80px] lg:grid-cols-2 lg:pt-[140px]'>
              <div className='space-y-[20px] lg:pt-8'>
                <div className='hidden lg:block'>
                  <h2 className='font-secondary text-[12px] font-bold uppercase lg:text-[22px]'>
                    offre du mois d&apos;octobre
                  </h2>
                  <h1 className='max-w-sm text-2xl font-normal uppercase lg:text-4xl xlheight:mt-0'>
                    ÉPILATION LASER
                    <br />
                    <span className='font-bold text-[#C06936] underline'>
                      FORFAIT CORPS ENTIER
                    </span>{' '}
                    À VIE{' '}
                  </h1>
                </div>
                <img
                  src='/images/offre-de-octobre/hero.webp'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  // blurDataURL='data:image/webp;base64,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'
                  className='mx-auto w-full sm:w-[500px] lg:hidden'
                />
                {/* <div className='mx-auto w-72 sm:w-96 lg:hidden'>

                <Image
                  src='/images/offre-de-lancement/hero.webp'
                  width={285}
                  height={250}
                  layout='responsive'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  placeholder='blur'
                  priority
                  blurDataURL='data:image/webp;base64,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'
                />
              </div> */}
                <div className='lg:hidden'>
                  <h2 className='font-secondary text-[12px] font-bold uppercase lg:text-[22px]'>
                    offre du mois d&apos;octobre
                  </h2>
                  <h1 className='max-w-sm text-2xl font-normal uppercase lg:text-4xl xlheight:mt-0'>
                    ÉPILATION LASER
                    <br />
                    <span className='font-bold text-[#964F25] underline'>
                      FORFAIT CORPS ENTIER
                    </span>{' '}
                    À VIE{' '}
                  </h1>
                </div>
                <p>
                  Clinique Muller vous offre un forfait d&apos;épilation laser
                  pour corps entier au prix de 5&apos;999.- au lieu de
                  35&apos;665 CHF.
                  <br />
                  <strong>
                    Possibilité de paiement en 18 mensualités, sans intérêt.
                  </strong>
                </p>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    variant='primary'
                    className='mx-auto flex w-2/3 justify-center rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white lg:mx-0'
                  >
                    Profiter de l&apos;offre
                  </Button>
                </Link>
              </div>
              <img
                className='mr-48 hidden lg:-mt-12 lg:block lg:w-[580px]'
                src='/images/offre-de-octobre/hero.webp'
                alt='Offre de lancement'
              />
              {/* <div className='hidden h-[500px] w-[550px] lg:-mt-12 lg:mr-[120px] lg:block'>
              <Image
                src='/images/offre-de-lancement/hero.webp'
                layout='responsive'
                width={684}
                height={652}
                alt='Offre de lancement'
              />
            </div> */}
            </div>
            <div className='mx-[40px] grid grid-cols-2 gap-x-[40px] gap-y-[20px] pb-8 lg:mx-[80px] lg:mt-[60px] lg:grid-cols-4 lg:gap-x-24'>
              <Step
                color='#C06936'
                title='01'
                content='Payez 333 CHF/mois, grâce à nos possibilités de paiement en plusieurs mensualités, sans intérêt'
                isHighlighted
              />
              <Step
                title='02'
                content='Utilisation de machines laser Diode très performantes de dernière génération'
              />
              <Step
                title='03'
                content='Des résultats impressionnants et visibles dès la troisième séance'
              />
              <Step
                title='04'
                content='Standards de prise en charge de qualité'
              />
            </div>
          </div>
          <Timer remainingDate={LAUNCH_DATE} />
        </main>

        <section className='relative mx-[40px] mt-12  lg:mt-24'>
          <div className='grid-col-1 grid lg:grid-cols-2'>
            <div className='hidden lg:mx-auto lg:block'>
              <img
                src='/images/offre-de-octobre/info.webp'
                width={400}
                height={550}
                alt='Offre de octobre'
              />
            </div>
            <div className='mx-auto space-y-6 px-4 text-center lg:mr-16'>
              <h2 className='font-light uppercase'>
                Tout savoir sur l&apos;offre d&apos;octobre
              </h2>
              <div className='space-y-2'>
                <Accordion.UnControlled
                  title='J’ai commencé un traitement dans un autre institut, Clinique Muller fait-elle des
                reprises de contrats ?'
                  content="Vous avez commencé un traitement laser auprès d’un de nos concurrents depuis moins de
                six mois. Clinique Muller vous offre jusqu’à 500 CHF de réduction si vous décidez de
                souscrire à l'offre de forfait corps entier à vie. Pour plus d’information, contactez notre
                clinique."
                />
                <Accordion.UnControlled
                  title='C’est quoi le “forfait corps entier à vie” de Clinique Muller ?'
                  content='Le forfait à vie vous permet de payer un prix fixe, et de ne plus vous soucier du nombre de
sessions d’épilation laser ou de retouches nécessaires pour votre traitement.'
                />
                <Accordion.UnControlled
                  title='Puis-je payer le forfait en plusieurs fois ?'
                  content='Oui. Réservez dès maintenant cette offre et demandez le paiement en 18 fois lors
                de la séance d’information gratuite qui précède les séances d’épilation laser.'
                />
                <Accordion.UnControlled
                  title='Ce forfait est-il vraiment valable à vie  ?'
                  content='Oui, tous les forfaits de Clinique Muller sont valables à vie. <br/>
                Dès la fin du traitement, vous bénéficiez de retouches gratuites pendant 5 ans. À l’issue de cette période, nous organiserons une réévaluation par un de nos experts. Puis, si vous respectez toujours les conditions du forfait, vous aurez droit à 5 nouvelles années de retouches et ainsi de suite. 
                '
                />

                <Accordion.UnControlled
                  title='Puis-je traiter autant de zones que je le souhaite ?'
                  content={
                    <div className='space-y-2 text-left'>
                      <p>
                        Oui, vous pouvez choisir de traiter autant de zones de
                        votre corps que vous le souhaitez.
                      </p>
                    </div>
                  }
                />
                <Accordion.UnControlled
                  title='Ce qui est exclu des “forfaits à vie de clinique muller” ?'
                  content={
                    <div className='space-y-2 text-left'>
                      <p>
                        Dans certains cas, vous ne pouvez pas bénéficier des
                        avantages du forfait à vie, vous trouverez une liste
                        détaillée de toutes les exclusions dans nos conditions
                        générales de vente, mais voici les principales :
                      </p>
                      <ul className='list-disc'>
                        <li>
                          lors d&apos;une repousse due à une prise de
                          médicaments,
                        </li>
                        <li>
                          lors d&apos;une repousse de poils de type duvet fin et
                          clair, dans une zone préalablement traitée au laser.
                        </li>
                      </ul>
                    </div>
                  }
                />
              </div>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  className='mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white'
                  variant='primary'
                >
                  Profiter de l&apos;offre
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <CtaBanner
          title='Clinique Muller,
        la promesse de vivre une expérience unique et d’obtenir des résultats impressionnants.
        Essayez nos services et jugez par vous-même.'
          button={
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white'
                variant='primary'
              >
                Profiter de l&apos;offre
              </Button>
            </Link>
          }
        />

        <Section
          title="Chez Clinique Muller, l'épilation laser est accessible à tous"
          note={<Note title='Traitement inclusif' />}
          description="Chez Clinique Muller, tous nos hôtes, hommes comme femmes, peuvent bénéficier de nos
        traitements d'épilation au laser afin d’éliminer définitivement et en toute sécurité les poils
        indésirables sur l'ensemble du corps."
          image={
            <img
              src='/images/offre-de-octobre/epilation-accessible.webp'
              alt="Chez Clinique Muller, l'épilation laser est accessible à tous"
            />
          }
          button={{
            label: "Profiter de l'offre",
            to: '/reservez-laser-electrolyse',
            style:
              'mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white',
          }}
        />
        <Section
          isImageRight
          title="Obtenez une peau sublime et incroyablement lisse grâce à
        l'épilation laser"
          note={<Note title='Épilation Laser' />}
          description={
            <div>
              <p>
                Débarrassez vous des corvées de l&apos;épilation à la cire et au
                rasoir et optez pour les avantages extraordinaires que vous
                offre
                <br />
                l&apos;épilation laser :
              </p>
            </div>
          }
          image={
            <img
              src='/images/offre-de-octobre/peau-sublime.webp'
              alt="Obtenez une peau sublime et incroyablement lisse grâce à l'épilation laser"
            />
          }
          points={[
            "Des résultats durables avec un minimum d'entretien.",
            'Une peau sublime et ferme au toucher soyeux.',
            'Moins d’imperfections cutanées et de poils incarnés.',
            "Diminution conséquente d'odeurs corporelles dues à la transpiration, surtout au niveau des plis.",
            'Un gain de temps considérable.',
          ]}
        />
        <Section
          title='Des résultats spectaculaires'
          note={<Note title='Résultats Avant / Après' />}
          description="Dès la première séance d'épilation, vous remarquerez que votre peau devient plus lisse et
        plus douce. Au fur et à mesure des séances, les poils deviennent de plus en plus fins avant
        de disparaître définitivement. <br/><br/>Voici un petit aperçu avant et après un traitement d'épilation laser et les résultats
        exceptionnels que vous pouvez obtenir chez Clinique Muller."
          image={
            <img
              src='/images/offre-de-lancement/resultat-spectaculaire.webp'
              alt='Des résultats spectaculaires'
            />
          }
        />
        <section className='hide-scroll relative mt-12 overflow-x-scroll lg:mt-24'>
          <div className='absolute top-12 -left-28 -z-10 hidden w-full lg:block'>
            <Image
              alt='Circular shapes'
              src='/images/shapes/circles.svg'
              layout='fixed'
              width={600}
              height={600}
            />
          </div>
          <div className='mx-auto max-w-5xl space-y-6 px-4 text-center'>
            <h2 className='font-normal uppercase'>
              Les traitements proposés chez <br /> Clinique Muller
            </h2>
            <Note title='Pourquoi Choisir Clinique Muller' />

            <table id='offre-de-lancement-table' className='table-auto'>
              <thead>
                <tr>
                  <th className='-z-20 border-0 opacity-0' />
                  <th
                    colSpan={2}
                    className='bg-radial-light-theme py-2 px-4 text-base text-white'
                  >
                    Clinique Muller
                  </th>
                  <th colSpan={4}>Autre méthodes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='font-semibold'>Technologie</td>
                  <td className='bg-radial-light-theme text-white'>Laser</td>
                  <td className='bg-radial-light-theme text-white'>
                    Électrolyse
                  </td>
                  <td>Épilateur</td>
                  <td>rasoir</td>
                  <td>cire</td>
                  <td>lumière pulsée</td>
                </tr>
                <tr>
                  <td className='font-semibold'>Efficacité</td>
                  <td className='bg-radial-light-theme text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStarHalfAlt className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                  <td className='bg-radial-light-theme text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                  <td className='text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStarHalfAlt className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                  <td className='flex items-center gap-x-2 text-white'>
                    <FaStar className='h-5 w-5 text-yellow-500' />
                  </td>
                  <td className='text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                  <td className='text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStarHalfAlt className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className='font-semibold'>Séance</td>
                  <td className='bg-radial-light-theme text-white'>3-10</td>
                  <td className='bg-radial-light-theme text-white'>2-4</td>
                  <td>illimité</td>
                  <td>illimité</td>
                  <td>illimité</td>
                  <td>illimité</td>
                </tr>
                <tr>
                  <td className='font-semibold'>Douleur</td>
                  <td className='bg-radial-light-theme text-white'>
                    <Image
                      src='/images/icons/signal-2.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td className='bg-radial-light-theme text-white'>
                    <Image
                      src='/images/icons/signal-3.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td>
                    <Image
                      src='/images/icons/signal-5.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td>
                    <Image
                      src='/images/icons/signal-1.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td>
                    <Image
                      src='/images/icons/signal-5.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td>
                    <Image
                      src='/images/icons/signal-5.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='mx-auto'>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  className='mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white'
                  variant='primary'
                >
                  Profiter de l&apos;offre
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Section
          title="Prix de l'épilation laser"
          note={<Note title='Prix Compétitif' />}
          description="Clinique Muller s'engage à proposer un traitement d'épilation laser à la portée de tous à travers
        plusieurs moyens de financement adaptés, y compris les forfaits à vie."
          button={{
            label: "Profiter de l'offre",
            to: '/reservez-laser-electrolyse',
            style:
              'mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white',
          }}
          image={
            <img
              src='/images/offre-de-octobre/prix-epilation-laser.webp'
              alt="Prix de l'épilation laser"
            />
          }
        />
        <Section
          isImageRight
          title='Un service exceptionnel allié à une technologie de pointe'
          note={<Note title='Un Service De Haute Qualité' />}
          description="Vivez une expérience transformatrice unique mêlant les standards du luxe hôtelier suisse à
        la précision de nos machines dernière génération. Laissez-vous guider par notre équipe
        d'experts qui saura répondre à vos besoins esthétiques ou pratiques dans les moindres
        détails."
          image={
            <img
              src='/images/offre-de-octobre/service-exceptionnel.webp'
              alt='Un service exceptionnel allié à une technologie de pointe'
            />
          }
        />
        <section className='cta-banner background-light  mt-12 border-b-[.5px] border-primary bg-[#432E22] px-4 py-16 text-center lg:mt-24 lg:h-64'>
          <div className='mx-auto max-w-2xl space-y-4'>
            <p className='text-lg '>
              N&apos;attendez plus, réservez votre pack corps entier à vie dès
              maintenant.
            </p>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='mx-auto rounded-tl-3xl rounded-br-3xl bg-[#C06936] font-bold text-white'
                variant='primary'
              >
                Je réserve mon forfait corps entier
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
