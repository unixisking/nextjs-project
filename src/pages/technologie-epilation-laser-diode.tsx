import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { FAQ_LASER_TECH } from '@/data/constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Accordion from '@/components/shared/Accordion';
import Card from '@/components/shared/Card';
import CtaBanner from '@/components/shared/CtaBanner';
import Note from '@/components/shared/Note';
import Section from '@/components/shared/Section';

export default function TechLaser() {
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    undefined
  );
  return (
    <>
      <Layout>
        <Seo
          title='Notre technologie épilation Laser Diode | Clinique Muller'
          description='Notre technologie épilation laser Diode à trois longueurs d’onde. Innovante, rapide et
sans danger pour une épilation définitive des poils.'
          keywords='Épilation laser Diode'
        />
        <main className='bg-radial relative w-screen lg:h-screen'>
          <div className='absolute top-32 -left-48 hidden lg:block'>
            <Image
              alt='Circular shapes'
              src='/images/shapes/circles.svg'
              layout='fixed'
              width={600}
              height={600}
            />
          </div>
          <div className='mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:gap-0 lg:px-0'>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                style={{ right: '24px' }}
                className='absolute bottom-20 right-0 hidden max-w-full lg:right-0 lg:block lg:max-h-[80vh] xl:max-h-[80vh]'
                src='/images/technologie-laser/hero1.webp'
                alt="CLINIQUE MULLER SPÉCIALISTE SUISSE DE L'ÉPILATION DÉFINITIVE"
              />
            }
            <div className='z-0 mx-auto mt-40 mb-12 max-w-5xl text-left sm:mt-48 lg:ml-8 xlheight:mt-[80%]'>
              <h1 className='text-2xl uppercase text-white lg:text-4xl xlheight:mt-0'>
                Épilation Définitive au Laser Diode
              </h1>
              <Note title='Vivez une expérience Unique' color='#F1B880' />
              <div className='mx-auto w-72 sm:w-96 lg:hidden'>
                <Image
                  src='/images/technologie-laser/hero1.webp'
                  width={450}
                  height={350}
                  layout='responsive'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  placeholder='blur'
                  priority
                  blurDataURL='data:image/webp;base64,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'
                />
              </div>
              <p className='text-white'>
                Chez Clinique Muller, nous utilisons les lasers à Diode, une
                technologie de pointe hautement performante,{' '}
                <span className='font-bold '>alliant efficacité </span>
                et
                <span className='font-bold '> durabilité des résultats ,</span>
                pour une{' '}
                <span className='font-bold '> épilation indolore </span>, et qui
                assure le{' '}
                <span className='font-bold '>
                  {' '}
                  confort et le bien-être de nos hôtes.
                </span>
              </p>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  variant='primary'
                  className='mt-6 rounded-tl-3xl rounded-br-3xl'
                >
                  Prendre rendez-vous 1ère consultation gratuite
                </Button>
              </Link>
            </div>
            <div className='hidden lg:block' />
          </div>
        </main>
        <div className='relative h-full lg:float-right lg:w-[95%]'>
          <div className='banner grid w-full bg-white py-12 px-4 lg:absolute lg:-top-24 lg:mx-auto lg:rounded-tl-3xl lg:py-16 lg:px-24'>
            <Section
              title='Découvrir notre technologie d’épilation laser diode'
              note={<Note title='Technologie Laser Diode' />}
              description={
                <p>
                  La technologie du laser Diode constitue une des dernières
                  avancées qui a fait révolutionner les méthodes
                  d&apos;épilation au laser. Les Diodes présentent des niveaux
                  de pénétration élevés permettant de traiter efficacement tous
                  les types de peau, même les plus foncées.
                  <br />
                  <br />
                  Le laser Diode traite toutes les tailles de poils, des plus
                  fins aux plus denses, offrant ainsi une épilation efficace et
                  complète sur toutes les zones du corps.
                  <br />
                  <br />
                  Au-delà de sa polyvalence et de son efficacité, nos lasers
                  Diode sont conçus avec un système de refroidissement ultra
                  performant permettant de rendre son utilisation indolore et
                  confortable pour les hôtes.
                  <br />
                </p>
              }
              image={
                <img
                  src='/images/technologie-laser/decouvrez1.webp'
                  alt='Découvrir notre technologie d’épilation laser diode'
                />
              }
              button={{
                label: 'En savoir plus sur nos traitements',
                to: '/traitement-epilation-laser',
              }}
            />
          </div>
        </div>
        <div className='relative lg:mt-[1000px]'>
          {/* improve spacing on mobile */}
          <section className='mx-auto max-w-5xl px-4'>
            <div className='space-y-6'>
              <h2 className='text-center font-normal uppercase'>
                Notre solution dépilatoire complète pour tout type de peau
              </h2>
              <Note title='Une Solution Complète' />
              <p className='text-center'>
                Chez Clinque Muller, nous utilisons les lasers Diode à trois
                longueurs d’onde, une technologie des plus performantes et
                évolutives combinant les niveaux d&apos;absorption et de
                pénétration de l&apos;Alexandrite 755, de la Diode 808 et du
                ND:YAG 1064 en un seul appareil. Une solution dépilatoire
                complète répondant à tout type de peau.
              </p>
            </div>
            <div className='mt-12 space-y-4 lg:mt-16'>
              <div className='flex flex-col justify-between gap-x-8 border border-primary p-8 md:flex-row'>
                <img
                  className='mx-auto mb-4 w-72 md:mb-0'
                  src='/images/technologie-laser/755nm.webp'
                  width={600}
                  height={400}
                  alt=''
                />
                <div className='space-y-4 text-center md:text-left'>
                  <h4>755nm - idéal pour peau claire</h4>
                  <p>
                    Cette longueur d&apos;onde présente une plus grande
                    absorption de la mélanine, la rendant adaptée aux peaux
                    claires et aux poils foncés. Elle a une forte capacité de
                    pénétration, en particulier pour les poils du visage,
                    notamment les sourcils et la lèvre supérieure.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-between gap-x-8 border border-primary p-8 md:flex-row'>
                <img
                  className='mx-auto mb-4 w-72 md:mb-0'
                  src='/images/technologie-laser/808nm.webp'
                  alt=''
                />
                <div className='space-y-4 text-center md:text-left'>
                  <h4>808nm - idéal pour peau foncée</h4>
                  <p>
                    Celle-ci offre une pénétration en profondeur du follicule
                    avec une énergie d&apos;absorption moyenne la rendant
                    adaptée pour tous les types de peau, même les plus foncées.
                    Sa profondeur lui permet de traiter les parties du corps
                    suivantes : les joues, la barbe, le décolleté, les bras et
                    les jambes.
                  </p>
                </div>
              </div>

              <div className='flex flex-col justify-between gap-x-8 border border-primary p-8 md:flex-row'>
                <img
                  className='mx-auto mb-4 w-72 md:mb-0'
                  src='/images/technologie-laser/1064nm.webp'
                  alt=''
                />
                <div className='space-y-4 text-center md:text-left'>
                  <h4>1064nm- idéal pour peau noire</h4>
                  <p>
                    Adaptée aux peaux noires et très foncées, la longueur
                    d&apos;onde présente une énergie d&apos;absorption
                    inférieure et assure une plus grande pénétration, ce qui en
                    fait une solution efficace pour les poils profondément
                    ancrés notamment dans le cuir chevelu, les aisselles et les
                    zones pubiennes.
                  </p>
                </div>
              </div>
            </div>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Réserver une 1ère consultation gratuite
              </Button>
            </Link>
          </section>
          <div className='overflow-x-scroll lg:overflow-x-hidden'>
            <section className='mx-auto px-4 lg:my-16 lg:max-w-7xl lg:px-6'>
              <div className='grid  grid-cols-1 lg:grid-cols-2 lg:gap-24'>
                <div className='mx-auto space-y-[40px]'>
                  <div>
                    <h2 className='font-normal uppercase text-darker'>
                      Pourquoi nous avons choisi la technologie du laser diode ?
                    </h2>
                    <Note title='une technologie de pointe' />
                  </div>
                  <div className='mx-auto mt-4 w-full sm:w-96 lg:hidden'></div>
                  Selon une étude de l&apos;Agence nationale de sécurité
                  sanitaire de l&apos;alimentation, de l&apos;environnement et
                  du travail (Anses), la technologie Diode apporte de meilleurs
                  résultats. Le laser Diode permet une épilation permanente,
                  efficace et sans douleur. Voici un tableau montrant
                  l&apos;efficacité du laser Diode sur les poils :
                  <Link href='/reservez-laser-electrolyse'>
                    <Button
                      className={`hidden rounded-tl-3xl rounded-br-3xl lg:block `}
                      variant='primary'
                    >
                      Réserver une 1ère consultation gratuite
                    </Button>
                  </Link>
                </div>
                <div className='  lg:block'>
                  {' '}
                  <table
                    id='offre-de-lancement-table'
                    className='laser-table table-fixed'
                  >
                    <thead>
                      <tr>
                        <th>Méthode</th>
                        <th>Réduction de la pilosité</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Laser diode (utilisé par Clinique Muller)</td>
                        <td>jusqu&apos;à 90%</td>
                      </tr>
                      <tr>
                        <td>laser alexandrite</td>
                        <td>jusqu’à 85%</td>
                      </tr>
                      <tr>
                        <td>Lumière pulsée (1990)</td>
                        <td>jusqu’à 84%</td>
                      </tr>
                      <tr>
                        <td>Laser rubis (1996 FDA)</td>
                        <td>jusqu’à 75%</td>
                      </tr>
                      <tr>
                        <td>Laser Nd:YAG</td>
                        <td>jusqu’à 67%</td>
                      </tr>
                    </tbody>
                  </table>
                  <Link href='/reservez-laser-electrolyse'>
                    <Button
                      className='mb-5 rounded-tl-3xl rounded-br-3xl py-4 lg:hidden'
                      variant='primary'
                    >
                      Réserver une 1ère consultation gratuite
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          </div>

          <CtaBanner
            title="Clinique Muller,
					la rencontre du savoir-faire suisse et de l'épilation définitive.
					Essayez nos services et jugez par vous-même."
            button={
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  className='mx-auto rounded-tl-3xl rounded-br-3xl'
                  variant='primary'
                >
                  Je réserve une séance d&apos;information gratuite
                </Button>
              </Link>
            }
          />
        </div>

        <Section
          title='Puissance, rapidité et polyvalence pour de meilleurs résultats'
          note={<Note title='Rapidité Et Efficacité' />}
          description="La grande taille du spot, le temps d'impulsion réduit et la grande puissance de notre machine laser Diode à trois longueurs d'onde permettent à nos experts de réaliser des traitements d'épilation au laser sur de grandes zones en un temps relativement court sans affecter l'efficacité du traitement."
          image={
            <img
              src='/images/technologie-laser/puissance.webp'
              alt='Puissance, rapidité et polyvalence pour de meilleurs résultats'
            />
          }
          button={{
            label: 'Réserver une 1ère consultation gratuite',
            to: '/reservez-laser-electrolyse',
          }}
        />
        <section className='faq-bg relative mx-auto mt-12 max-w-7xl space-y-[40px] rounded-3xl py-12'>
          <div className='mx-auto flex justify-center gap-x-4'>
            <h2 className='max-w-xl text-center font-light'>
              En savoir plus sur l’épilation laser diode
            </h2>
          </div>
          <div className='mx-8 rounded-lg bg-white p-8 shadow-md lg:mx-16'>
            {FAQ_LASER_TECH.map((q) => (
              <Accordion.Controlled
                open={q.question === selectedQuestion}
                setSelectedQuestion={setSelectedQuestion}
                title={q.question}
                content={q.answer}
                key={q.question}
              />
            ))}
          </div>

          <div className='mx-auto flex justify-between lg:w-1/2'>
            <Link href='/faq-epilation-definitive'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Consulter la FAQ
              </Button>
            </Link>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Réserver une séance
              </Button>
            </Link>
          </div>
        </section>

        <section className='cta-banner bg-radial mt-12 py-16 text-center text-white lg:mt-24 lg:h-64'>
          <div className='mx-auto max-w-2xl space-y-4'>
            <p className='mx-auto w-72 text-base lg:w-full lg:text-lg'>
              Clinique Muller vous place en premier ! Essayez nos services et
              jugez par vous-même, obtenez votre première session maintenant !
            </p>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </section>
        <section className='mx-auto my-12 max-w-5xl space-y-8 px-4 text-center lg:my-24'>
          <h3 className='font-normal uppercase'>
            Ces pages pourraient vous intéresser !
          </h3>
          <div className='ml-4'>
            <Note title='Les Pages Les Plus Visitées' />
          </div>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-16'>
            <Card.PageCard
              title='Accueil'
              description='Profitez d’un savoir-faire inégalé et de technologies exclusives en matière d’épilation laser et électrique adaptées à toutes les peaux au meilleur prix.'
              to='/'
              image={
                <img
                  src='/images/traitement-epilation-laser/accueil.webp'
                  alt='Accueil'
                />
              }
            />
            <Card.PageCard
              title='Traitement laser'
              description="Épilation laser pour femmes et hommes. Résultats dès la 3ème séance. Première consultation gratuite. Réservez dès aujourd'hui."
              to='/traitement-epilation-laser'
              image={
                <img
                  src='/images/traitement-electrolyse/traitement-laser.webp'
                  alt='Traitement laser'
                />
              }
            />
            <Card.PageCard
              title='Technologie électrolyse'
              description='Découvrez notre technologie d’épilation électrique par électrolyse 100% définitive pour tous les types de poils chez Clinique Muller.'
              to='/technologie-epilation-electrique-electrolyse'
              image={
                <img
                  src='/images/traitement-electrolyse/technologie-electrolyse.webp'
                  alt='Technologie électrolyse'
                />
              }
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
