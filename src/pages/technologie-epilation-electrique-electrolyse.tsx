import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Card from '@/components/shared/Card';
import CtaBanner from '@/components/shared/CtaBanner';
import Note from '@/components/shared/Note';
import Section from '@/components/shared/Section';

export default function TechLaser() {
  return (
    <>
      <Layout>
        <Seo
          title='Notre technologie d’épilation électrique par électrolyse'
          description='Découvrez notre technologie d’épilation électrique par électrolyse 100% définitive
pour tous les types de poils chez Clinique Muller.'
          keywords='Épilation électrique électrolyse'
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
                className='xl:bottom- absolute bottom-20 right-0 hidden max-w-full lg:bottom-48 lg:right-0 lg:block lg:max-h-[80vh] lg:w-[50%]  xl:max-h-[80vh] 2xl:bottom-28'
                src='/images/technologie-laser/hero.webp'
                alt="CLINIQUE MULLER SPÉCIALISTE SUISSE DE L'ÉPILATION DÉFINITIVE"
              />
            }
            <div className='z-0 mx-auto mt-40 mb-12 max-w-5xl text-left sm:mt-48 lg:ml-8 xlheight:mt-[80%]'>
              <h1 className='text-2xl uppercase text-white lg:text-4xl xlheight:mt-0'>
                Épilation électrique par électrolyse SILHOUET-Tone
              </h1>
              <Note title='Vivez une expérience Unique' color='#F1B880' />
              <div className='mx-auto w-72 sm:w-96 lg:hidden'>
                <img
                  src='/images/technologie-laser/hero.webp'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  className='sm:h-72 sm:w-full'
                />
              </div>
              <p className='text-white'>
                Le système d&apos;épilation définitive par excellence qui
                combine efficacité maximale et confort ultime. Apprenez-en plus
                sur Silhouet-Tone, la technologie de référence en matière
                d&apos;électro-épilation qu&apos;utilise Clinique Muller pour
                assurer la qualité de ses traitements d&apos;épilation
                électrique par électrolyse.
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
              isImageRight
              title='Épilation définitive par électrolyse, l’incontournable technologie Silhouet-Tone'
              note={<Note title='Silhouet-Tone' />}
              description={
                <p>
                  Silhouet-Tone a révolutionné la méthode de l&apos;épilation
                  définitive par électrolyse grâce à ses modulations qui
                  permettent d&apos;adapter l&apos;intensité et la durée du
                  courant selon le type de peau et de poil à traiter. Elles sont
                  les plus rapides du marché, d&apos;une vitesse de deux
                  millièmes de seconde, et concilient à la fois
                  l&apos;efficacité des basses fréquences et le confort des
                  hautes fréquences.
                  <br />
                  <br />
                  Les derniers appareils Silhouet-Tone permettent d&apos;obtenir
                  des résultats optimaux avec moins de douleur et traitent en
                  toute sécurité tous les types de peau : blanche, mate et
                  noire.
                  <br />
                </p>
              }
              image={
                <img
                  src='/images/technologie-laser/decouvrez.webp'
                  alt='Découvrir notre technologie d’épilation laser diode'
                />
              }
              button={{
                label: "Découvrir l'épilation électrolyse",
                to: '/traitement-epilation-electrique-electrolyse',
              }}
            />
          </div>
        </div>
        <div className='relative lg:mt-[900px]'>
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

          {/* improve spacing on mobile */}
          <section className='mx-auto mt-12 max-w-5xl px-4 lg:mt-24'>
            <div className='space-y-6'>
              <h2 className='text-center font-normal uppercase'>
                En savoir plus sur notre système d&apos;épilation définitive
                Silhouet-Tone
              </h2>
              <Note title='Efficacité, confort et précision' />
            </div>
            <div className='mt-4 grid grid-cols-1 lg:mt-8 lg:grid-cols-2 lg:gap-y-8 lg:gap-x-16'>
              <div className='space-y-4'>
                <h4 className='font-light text-primarydark'>
                  Efficacité maximale et confort ultime
                </h4>
                <p className='text-center'>
                  Avec sa fréquence ultra-rapide, Silhouet-Tone assure une
                  élimination des poils ciblée et garantit un niveau de confort
                  exceptionnel lors de l&apos;épilation à l&apos;électrolyse. Sa
                  rapidité d&apos;exécution est telle que les sensations
                  d&apos;inconfort sont quasi inexistantes. Quelques millièmes
                  de seconde à peine suffisent pour que le poil soit
                  complètement détruit. Ainsi, Silhouet-Tone est la technologie
                  par excellence pour éliminer les poils de façon définitive et
                  confortable, et ce, sur tout le corps.
                </p>
              </div>
              <div className='mt-8 space-y-4 lg:mt-0'>
                <h4 className='font-light text-primarydark'>
                  Pour une épilation de haute précision
                </h4>
                <p className='text-center'>
                  Outre une technologie de pointe, le choix du filament affecte
                  fortement la qualité et le résultat de l&apos;épilation à
                  l&apos;électrolyse, ainsi que le confort des hôtes. Afin de
                  préserver la peau des brûlures, de garantir un meilleur
                  confort et de minimiser les effets indésirables
                  post-traitement, Clinique Muller n&apos;utilise que les
                  filaments les plus efficaces et les plus sûrs permettant une
                  haute précision dans la réalisation de ses traitements.
                </p>
              </div>
              <div className='mx-auto  mt-8 space-y-4 lg:col-span-2 lg:max-w-3xl lg:text-center'>
                <h4 className='font-light text-primarydark'>
                  Traitement pré et post-épilation (modes anaphorèse et
                  cataphorèse)
                </h4>

                <p className='text-center'>
                  Chez Clinique Muller, nous tenons à offrir à nos hôtes un
                  traitement d&apos;épilation à l&apos;électrolyse des plus
                  efficaces et confortables, c&apos;est pourquoi nous avons
                  choisi les appareils Silhouet-Tone qui sont équipés de
                  systèmes d&apos;anaphorèse et de cataphorèse.
                  <br />
                  Ce sont des traitements destinés à revitaliser la peau avant
                  et après l&apos;épilation électrique.
                  <br />
                  <ul className='mt-4 space-y-4'>
                    <li>
                      <strong>L&apos;anaphorèse</strong> est appliquée avant de
                      procéder à l&apos;épilation. Elle a pour effet de
                      provoquer la dilatation des follicules, facilitant ainsi
                      les insertions.
                    </li>
                    <li>
                      <strong>La cataphorèse</strong> s&apos;applique après
                      l&apos;épilation. Elle permet d&apos;atténuer les rougeurs
                      et les irritations provoquées par l&apos;électrolyse et
                      d&apos;accélérer ainsi la guérison de la peau.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <Link href='/epilation-laser-electrolyse-prix'>
              <Button
                className='mx-auto mt-[40px] flex rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Découvrir nos prix
              </Button>
            </Link>
          </section>
        </div>

        <Section
          isImageRight
          title='Pourquoi Silhouet-Tone ?'
          note={<Note title='Une technologie de pointe' />}
          description={
            <div>
              <ul className='ml-12 list-disc space-y-4 marker:text-2xl marker:text-[#A89D9D]'>
                <li>
                  Permet l&apos;élimination rapide et efficace de toutes les
                  cellules responsables de la croissance du poil.
                </li>
                <li>
                  Permet d&apos;obtenir des résultats rapides et définitifs.
                </li>
                <li>
                  Traite efficacement tout type de poil du plus fin au plus dur
                  et du plus clair au plus foncé.
                </li>
                <li>Élimine l&apos;apparition de poils incarnés.</li>
                <li>Ne nuit aucunement aux tissus environnants. </li>
                <li>
                  Ne provoque pas l&apos;hyperpigmentation et ne laisse pas de
                  cicatrices.
                </li>
                <li>
                  L&apos;appareil dispose d&apos;un système d&apos;anaphorèse et
                  de cataphorèse.
                </li>
                <li>Atténuation des rougeurs et des irritations.</li>
              </ul>
              <div className='mt-6 flex w-[80%] justify-between'>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    className='rounded-tl-3xl rounded-br-3xl'
                    variant='primary'
                  >
                    Réserver une séance
                  </Button>
                </Link>
                <Link href='/faq-epilation-definitive'>
                  <Button
                    className='rounded-tl-3xl rounded-br-3xl'
                    variant='primary'
                  >
                    Consulter la FAQ
                  </Button>
                </Link>
              </div>
            </div>
          }
          image={
            <img
              src='/images/traitement-epilation-laser/traitement-pour-phototype.webp'
              alt='Une technologie de pointe'
            />
          }
        />

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
            <Note title='Les pages les plus visitées' />
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
              title='Traitement électrolyse'
              description='Découvrez notre épilation définitive efficace à 100% sur les poils blonds, blanc, gris et roux grâce à notre technologie d’épilation électrique par électrolyse.'
              to='/traitement-epilation-electrique-electrolyse'
              image={
                <img
                  src='/images/technologie-electrolyse/traitement-electrolyse.webp'
                  alt='Technologie électrolyse'
                />
              }
            />
            <Card.PageCard
              title='Technologie laser'
              description="Notre technologie épilation laser Diode à trois longueurs d'onde. Innovante, rapide et sans danger pour une épilation définitive des poils."
              to='/technologie-epilation-laser-diode'
              image={
                <img
                  src='/images/traitement-electrolyse/traitement-laser.webp'
                  alt='Technologie laser'
                />
              }
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
