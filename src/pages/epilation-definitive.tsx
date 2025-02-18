import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import * as React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

import { WHY_US } from '@/data/constants';
import { HOMEPAGE_MARKUP } from '@/data/markup';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Card from '@/components/shared/Card';
import Note from '@/components/shared/Note';
import Section from '@/components/shared/Section';

export default function HomePage() {
  return (
    <Layout>
      <Script
        id='markup'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_MARKUP) }}
      />
      <Seo
        title='Clinique Muller, le spécialiste Suisse de l’épilation définitive'
        description='Profitez d’un savoir-faire inégalé et de technologies exclusives en matière d’épilation laser et électrique adaptées à toutes les peaux au meilleur prix.'
        keywords='Épilation définitive'
      />
      <main className='bg-radial relative w-screen'>
        <div className='absolute top-32 -left-48 hidden lg:block'>
          <Image
            alt='Circular shapes'
            src='/images/shapes/circles.svg'
            layout='fixed'
            width={600}
            height={600}
          />
        </div>
        <div className='grid gap-8 px-4 lg:grid-cols-2 lg:gap-32 lg:px-0'>
          <div className='hidden lg:block' />
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className='absolute bottom-20 hidden max-w-full lg:bottom-40 lg:block lg:max-h-[70%] lg:max-w-[70%] xl:bottom-20 xl:max-h-[80%] 2xl:left-8'
              src='/images/homepage/hero.webp'
              alt="CLINIQUE MULLER SPÉCIALISTE SUISSE DE L'ÉPILATION DÉFINITIVE"
            />
          }
          <div className='z-20  mx-[20px] mt-40  mb-12 space-y-6 text-left sm:mt-48 lg:ml-0 lg:mr-[80px] lg:mb-48 xlheight:mt-[80%]'>
            <h1 className='text-2xl uppercase text-white lg:text-4xl xlheight:mt-0'>
              <span className='font-extrabold'>Clinique Muller,</span>
              <br />
              <span className='font-normal'>
                {' '}
                le Spécialiste Suisse de l&apos;épilation définitive
              </span>
            </h1>
            <Note title='Vivez une expérience Unique' color='#F1B880' />
            <div className='mx-auto w-full lg:hidden'>
              <img
                src='/images/homepage/hero.webp'
                alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                className='w-full'
              />
            </div>
            <p className='text-white'>
              Clinique Muller vous garantit jusqu&apos;à 95% de réduction de vos
              poils de manière permanente. Nos méthodes d&apos;épilation
              définitive sont adaptées à tous les types de peaux et de poils.
            </p>
            <div className='grid grid-cols-3 gap-y-2 gap-x-4 text-sm font-light text-white lg:gap-x-8'>
              <h3 className='font-secondary text-base lg:text-lg'>
                Jusqu&apos;à 95%
              </h3>
              <h3 className='font-secondary text-base lg:text-lg'>Peau</h3>
              <h3 className='font-secondary text-base lg:text-lg'>Paiement</h3>
              <p className='text-sm lg:text-base'>De réduction de poils</p>
              <p className='text-sm lg:text-base'>
                Convient à tous les types de peaux
              </p>
              <p className='text-sm lg:text-base'>
                Paiement en 1 à 12 mensualités
              </p>
            </div>
            <div className='flex flex-col gap-y-4 md:w-2/3 md:flex-row md:justify-between lg:w-full'>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  variant='primary'
                  className='rounded-tl-3xl rounded-br-3xl'
                >
                  Réserver maintenant
                </Button>
              </Link>
              <Link href='/offre-laser-femme/epilation-laser-lausanne'>
                <Button
                  variant='outline'
                  className='rounded-tl-3xl rounded-br-3xl'
                >
                  Offre de Janvier
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <section className='relative h-full lg:float-right lg:w-[95%]'>
        <div className='banner grid w-full rounded-tl-3xl bg-white px-8 py-12 lg:absolute lg:-top-24 lg:mx-auto lg:py-16 lg:px-24'>
          <div className='max-w-3xl '>
            <h2 className='font-normal uppercase text-darker'>
              Un service et des expériences conçus sur mesure pour chacun de nos
              hôtes
            </h2>
            <Note title='Pourquoi choisir Clinique Muller' />
          </div>
          <div className='mt-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-4'>
            {WHY_US.map((item, index) => (
              <Card.SimpleCard
                title={item.title}
                description={item.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <div className='relative lg:mt-[500px]'>
        <Section
          title='Des prix compétitifs pour une prise en charge d’exception'
          note={<Note title='Prix Compétitif' />}
          description='Clinique Muller s’engage à proposer des services à la portée de tous, grâce à des prix compétitifs, des forfaits à vie et des moyens de financement exclusifs.'
          image={
            <img
              src='/images/homepage/prices.webp'
              alt='Liste des prix'
              className='w-full'
            />
          }
          button={{
            label: 'Liste des prix',
            to: '/epilation-laser-electrolyse-prix',
          }}
        />
      </div>
      <section className='hide-scroll relative mt-12 lg:mt-24'>
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
          <h2 className='font-normal uppercase'>RÉSULTATS SPECTACULAIRES</h2>
          <Note title='Résultats Dès 3 Séances' />
          <p className='text-left'>
            Nous proposons les deux méthodes d&apos;épilation définitive les
            plus efficaces et qui offrent d’excellents résultats :{' '}
            <Link href='/traitement-epilation-laser'>
              <a className='font-bold text-primarydark underline'>
                l&apos;épilation laser
              </a>
            </Link>{' '}
            ainsi que{' '}
            <Link href='/traitement-epilation-electrique-electrolyse'>
              <a className='font-bold text-primarydark underline'>
                l&apos;épilation à l&apos;électrolyse
              </a>
            </Link>
            . Nos hôtes peuvent choisir d&apos;utiliser une des deux méthodes ou
            combiner les deux. Clinique Muller vous garantit des résultats dès 3
            séances et rarement au-delà de 10 séances, en fonction de la zone,
            du type de peau et des poils à traiter.
          </p>
          <div className='overflow-x-scroll sm:overflow-hidden'>
            <table className='table-auto' id='prices-table'>
              <thead>
                <tr>
                  <th className='-z-20 border-0 opacity-0' />
                  <th
                    colSpan={2}
                    className='bg-radial py-2 px-4 text-base text-white'
                  >
                    Clinique Muller
                  </th>
                  <th colSpan={4}>Autre méthodes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='font-semibold'>Technologie</td>
                  <td className='bg-radial text-white'>Laser</td>
                  <td className='bg-radial text-white'>Électrolyse</td>
                  <td>Épilateur</td>
                  <td>rasoir</td>
                  <td>cire</td>
                  <td>lumière pulsée</td>
                </tr>
                <tr>
                  <td className='font-semibold'>Efficacité</td>
                  <td className='bg-radial text-white'>
                    <div className='flex items-center gap-x-2'>
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStar className='h-5 w-5 text-yellow-500' />
                      <FaStarHalfAlt className='h-5 w-5 text-yellow-500' />
                    </div>
                  </td>
                  <td className='bg-radial text-white'>
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
                  <td className='bg-radial text-white'>3-10</td>
                  <td className='bg-radial text-white'>2-4</td>
                  <td>illimité</td>
                  <td>illimité</td>
                  <td>illimité</td>
                  <td>illimité</td>
                </tr>
                <tr>
                  <td className='font-semibold'>Douleur</td>
                  <td className='bg-radial text-white'>
                    <Image
                      src='/images/icons/signal-2.svg'
                      alt=''
                      width={25}
                      height={25}
                    />
                  </td>
                  <td className='bg-radial text-white'>
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
          </div>
          <div className='mx-auto flex justify-between lg:w-1/2'>
            <Link href='/traitement-epilation-laser'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Épilation laser
              </Button>
            </Link>
            <Link href='/traitement-epilation-electrique-electrolyse'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Épilation électrolyse
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Section
        isImageRight
        title='PRISE EN CHARGE D’EXCEPTION'
        note={<Note title='Services Personnalisés' />}
        description="Notre personnel hautement qualifié, formé à l'accueil d'excellence, vous fera vivre une expérience transformatrice distinguée et vous fera découvrir une gamme sophistiquée de traitements, spécialement conçus pour répondre à vos besoins, qu’ils soient esthétiques, pratiques ou de recherche d’harmonie."
        button={{ label: 'À propos de clinique muller', to: '/a-propos' }}
        image={
          <img
            src='/images/homepage/prise-en-charge.webp'
            alt='PRISE EN CHARGE D’EXCEPTION'
          />
        }
      />
      <Section
        title='Optez pour l’épilation définitive'
        note={<Note title='Pourquoi l’épilation Définitive' />}
        description="L'épilation définitive est 5 à 10 fois moins chère sur le long terme que les autres méthodes classiques et ne nécessite que peu d'entretien. Nos techniques d’épilation définitive offrent également d'incroyables avantages par rapport aux autres méthodes :"
        image={
          <img
            src='/images/homepage/epilation-definitive.webp'
            alt='Optez pour l’épilation définitive'
          />
        }
        points={[
          'Une durabilité des résultats ne nécessitant que peu ou pas d’entretien.',
          'Une peau sublime, ferme et incroyablement lisse.',
          'Plus de poils incarnés et douloureux.',
          'Plus de rougeurs, boutons ou irritations.',
          'Diminution considérable des odeurs liées à la transpiration, en particulier au niveau des plis tels que les aisselles.',
        ]}
      />
      <section className='cta-banner bg-radial mt-12 py-16 text-center text-white lg:mt-24 lg:h-64'>
        <div className='mx-auto max-w-4xl space-y-4'>
          <p className='text-lg'>
            Clinique Muller,
            <br /> la promesse de vivre une expérience unique et d’obtenir des
            résultats impressionnants. Essayez nos services et jugez par
            vous-même.
          </p>
          <Link href='/reservez-laser-electrolyse'>
            <Button className='rounded-tl-3xl rounded-br-3xl' variant='primary'>
              Je réserve une séance d’information gratuite
            </Button>
          </Link>
        </div>
      </section>
      <section className='mx-auto my-12 max-w-5xl space-y-8 text-center lg:my-24'>
        <h3 className='font-normal uppercase'>
          Ces pages pourraient vous intéresser !
        </h3>
        <div className='ml-4'>
          <Note title='Les Pages Les Plus Visitées' />
        </div>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16'>
          <Card.PageCard
            title='Prix'
            description='Épilation laser et épilation électrique à des prix compétitifs. Profitez de nos forfaits à vie payables en 3, 6, ou 12 fois. Réservez votre première consultation gratuite !'
            to='/epilation-laser-electrolyse-prix'
            image={<img src='/images/homepage/page-prix.webp' alt='Prix' />}
          />
          <Card.PageCard
            title='Traitement électrolyse'
            description='Découvrez notre épilation définitive efficace à 100% sur les poils blonds, blanc, gris et roux grâce à notre technologie d’épilation électrique par électrolyse.'
            to='/traitement-epilation-electrique-electrolyse'
            image={
              <img
                src='/images/traitement-epilation-laser/traitement-electrolyse.webp'
                alt='Traitement éléctrolyse'
              />
            }
          />
          <Card.PageCard
            title='Technologie laser'
            description="Notre technologie épilation laser Diode à trois longueurs d'onde. Innovante, rapide et sans danger pour une épilation définitive des poils."
            to='/technologie-epilation-laser-diode'
            image={
              <img
                src='/images/homepage/page-technologie-laser.webp'
                alt='Technologie laser'
              />
            }
          />
        </div>
      </section>
    </Layout>
  );
}
