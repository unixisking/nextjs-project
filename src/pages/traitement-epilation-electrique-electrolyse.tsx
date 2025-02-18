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

export default function LazerTreatmentPage() {
  return (
    <>
      <Layout>
        <Seo
          title='Épilation électrique électrolyse 100% définitive | Clinique Muller'
          description='Découvrez notre épilation définitive efficace à 100% sur les poils blonds, blanc, gris et
roux grâce à notre technologie d’épilation électrique par électrolyse.'
          keywords='Épilation électrique électrolyse; Épilation définitive'
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
                className='absolute bottom-0 right-0 hidden max-w-full lg:right-0 lg:block lg:max-h-[70%] xl:max-h-[90vh]'
                src='/images/traitement-electrolyse/hero.webp'
                alt="CLINIQUE MULLER SPÉCIALISTE SUISSE DE L'ÉPILATION DÉFINITIVE"
              />
            }
            <div className='z-0 mx-auto mt-40 mb-12 max-w-5xl text-left sm:mt-48 lg:ml-8 xlheight:mt-[80%]'>
              <h1 className='text-2xl uppercase text-white lg:text-4xl xlheight:mt-0'>
                épilation électrique par électrolyse pour une peau parfaite sans
                poils
              </h1>
              <Note title='Vivez une expérience Unique' color='#F1B880' />
              <div className='mx-auto  lg:hidden'>
                <img
                  src='/images/traitement-electrolyse/hero.webp'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  className='mx-auto sm:w-full sm:max-w-3xl'
                />
              </div>
              <p className='text-white'>
                L&apos;électrolyse offre des résultats exceptionnels et 100%
                définitifs. Découvrez notre solution d&apos;épilation électrique
                chez Clinique Muller. Une méthode exclusive et efficace sur tous
                les types de poils.
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
              title='Découvrez l’épilation électrique par électrolyse'
              note={<Note title='épilation Par électrolyse' />}
              description={
                <p>
                  L&apos;épilation par électrolyse est considérée comme la seule
                  méthode d&apos;épilation 100% définitive. Elle s&apos;effectue
                  en envoyant une impulsion électrique directement dans le
                  follicule pileux à l&apos;aide d&apos;une fine aiguille ou
                  d&apos;un microfilament. Cette décharge électrique crée une
                  réaction chimique provoquant ainsi la désintégration
                  définitive du poil. Le thérapeute procède ensuite à
                  l&apos;extraction de chaque poil à l&apos;aide d&apos;une
                  pince à épiler, ce qui démontre la précision et
                  l&apos;efficacité de cette technique.
                  <br />
                  <br />
                  Plusieurs séances sont nécessaires pour éliminer efficacement
                  tous les poils compte tenu du cycle pilaire. Il est à noter
                  que l&apos;opération n&apos;est efficace que durant la phase
                  de croissance du poil (anagène).
                  <br />
                  <br />
                  L&apos;électrolyse peut s&apos;effectuer seule ou en
                  complément à d&apos;autres traitements d&apos;épilation,
                  notamment l&apos;épilation au laser.
                  <br />
                  <br />
                  Efficace et adaptée à tous les types de peau et de poils, elle
                  peut être pratiquée tout au long de l&apos;année,
                  contrairement à l&apos;épilation laser qui est contre-indiquée
                  en été.
                </p>
              }
              image={
                <img
                  src='/images/traitement-electrolyse/decouvrez-traitement-electrolyse.webp'
                  alt=''
                />
              }
              button={{
                label: 'En savoir plus sur nos technologies',
                to: '/technologie-epilation-electrique-electrolyse',
              }}
            />
          </div>
        </div>
        <div className='relative lg:mt-[1200px] xl:mt-[950px]'>
          {/* improve spacing on mobile */}

          <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 text-left lg:mt-24'>
            <div className='space-y-6'>
              <h2 className='max-w-3xl font-normal uppercase'>
                UNE TECHNIQUE EFFICACE AVEC DES RÉSULTATS INCONTESTABLES
              </h2>
              <div className='max-w-2xl'>
                <Note title='Des Résultats Incontestables' />
              </div>
            </div>
            <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
              <div>
                <img
                  alt=''
                  src='/images/traitement-electrolyse/solution-definitive2.webp'
                  className='mx-auto max-w-[90%]  sm:w-[70%]'
                />

                <h4 className='font-light text-primarydark'>
                  L&apos;épilation électrique est une solution définitive pour
                  tout type de poil
                </h4>
                <p className='ml-8 mt-4'>
                  Le plus grand avantage de l&apos;électrolyse est qu&apos;elle
                  convient à tous les types et couleurs de poils, notamment les
                  poils clairs récalcitrants au laser, comme les poils blancs,
                  gris, roux ou blonds.
                  <br />
                  De plus, avec l&apos;épilation par électrolyse, les zones
                  sensibles aux hormones ne sont pas stimulées et aucun risque
                  de repousse paradoxale n&apos;est à craindre.
                </p>
              </div>
              <div className='lg:-mt-28'>
                <img
                  alt=''
                  src='/images/traitement-electrolyse/solution-definitive.webp'
                  className='mx-auto max-w-[90%]  sm:w-[70%] '
                />

                <h4 className='font-light text-primarydark'>
                  L’épilation à l&apos;électrolyse est un complément parfait à
                  la méthode d’épilation laser
                </h4>
                <p className='ml-8 mt-4'>
                  Pour parfaire les résultats, l&apos;épilation par électrolyse
                  peut compléter un traitement d&apos;épilation au laser afin de
                  se débarrasser définitivement des poils résiduels qui seraient
                  plus réfractaires, notamment les poils extrêmement fins.
                  <br />
                  L&apos;électrolyse traite également des zones contre-indiquées
                  à l&apos;épilation au laser, en particulier les zones
                  hormonodépendantes : la ligne blanche, la ligne ombilicale, la
                  poitrine, le thorax, les joues et le menton.
                </p>
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
        <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 text-center lg:mt-24'>
          <div className='mx-auto max-w-5xl space-y-6'>
            <h2 className='font-normal uppercase'>
              Traitement et résultats : le déroulement des séances
            </h2>
            <Note title='Le Déroulement Des Séances' />
            <p className='text-center'></p>
          </div>
          <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                1ère consultation gratuite et sans engagement
              </h4>
              <p>
                Une première consultation gratuite avec un de nos thérapeutes
                est obligatoire afin de réaliser un diagnostic complet de votre
                peau et vos poils. Le but est d&apos;évaluer la faisabilité du
                traitement sur les zones à traiter. À l&apos;issue de la séance,
                le thérapeute établira un plan de traitement personnalisé et
                pensé selon vos besoins.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Avant le début de l&apos;épilation
              </h4>
              <p>
                Dans le but de rendre vos séances les plus agréables possibles,
                vous avez la possibilité de voir des films sur nos casques de
                réalité virtuelle ou d&apos;écouter de la musique sur un de nos
                luxueux casques Bang & Olufsen.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Durant les séances d&apos;épilation
              </h4>

              <p>
                Le thérapeute commence l&apos;épilation en désinfectant la zone
                à épiler, puis ajuste les paramètres de son appareil et
                détermine le type de filament à utiliser. Une fois cela fait, il
                peut procéder à l&apos;épilation.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Après chaque séance d&apos;épilation
              </h4>
              <p>
                Quelques enflures, de légères croûtes et des rougeurs peuvent
                apparaître après les séances. Celles-ci disparaissent
                généralement dans les 24 heures à 48 heures qui suivent la
                séance. Il est important de ne pas s&apos;exposer au soleil, ni
                frotter ou toucher la zone traitée durant ce laps de temps, car
                la période post-traitement est très importante pour favoriser le
                processus de régénération de la peau.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Résultats à la fin du traitement
              </h4>
              <p>
                Chez Clinique Muller, nous vous garantissons une élimination des
                poils jusqu&apos;à 95%. L&apos;épilation électrique par
                électrolyse nécessite moins de séances et l&apos;intervalle
                entre les séances est souvent plus court que l&apos;épilation
                laser.
              </p>
            </div>
            {/* TODO: FIX THIS BUTTON AND CONTINUE */}
            <div className='space-y-4'>
              <div className='h-6' />
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
                  variant='primary'
                >
                  Réserver maintenant
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 pt-12 text-left lg:mt-24'>
          <div className='space-y-6'>
            <h2 className='font-normal uppercase'>
              L&apos;épilation à l’électrolyse : un traitement de référence pour
              des résultats optimaux
            </h2>
            <Note title="Pourquoi l'épilation à l’électrolyse" />
          </div>
          <div className='grid gap-y-8 lg:grid-cols-3 lg:gap-x-16'>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Une peau douce et merveilleusement lisse
              </h4>
              <p>
                L&apos;épilation par électrolyse rend votre peau douce et
                agréable au toucher.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Empêche les repousses paradoxales
              </h4>
              <p>
                En traitant les poils en phase de repousse, le risque de
                repousse paradoxale est inexistant.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                100% efficace pour tous les types de poils
              </h4>
              <p>
                Tous les poils seront éliminés, y compris les poils clairs et
                foncés ainsi que les poils fins et denses.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Une peau sans dommages
              </h4>
              <p>
                Avec l&apos;épilation par électrolyse, vous obtiendrez une peau
                nettement moins abîmée.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Diminution de la sudation
              </h4>
              <p>Diminuer les problèmes de transpiration abondante.</p>
            </div>
            <div className='space-y-4'>
              <div className='h-6' />
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
                  variant='primary'
                >
                  Réserver maintenant
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className='mx-auto mt-12 max-w-4xl space-y-12 px-4 text-left lg:mt-24'>
          <h2 className='mb-12 text-center font-normal uppercase lg:mb-24'>
            Nos offres
          </h2>
          <div className='mx-auto grid gap-x-8 gap-y-8 lg:grid-cols-2'>
            <Card.PricingCard
              isHighlighted
              title='Une séance de 30 min'
              price={{ value: '99.50CHF' }}
              description="Vous pouvez réserver une séance d'épilation électrolyse d'une 30 min à partir de 99.50 CHF la séance."
              button={{
                label: 'Réserver maintenant',
                to: '/reservez-laser-electrolyse',
              }}
              className='mt-0 lg:-mt-16'
            />

            <Card.PricingCard
              title='Une séance de 1 heure'
              price={{ value: '199CHF' }}
              description="Vous pouvez réserver une séance d'épilation électrolyse de 1 heure à partir de 199 CHF la séance."
              button={{
                label: 'Réserver maintenant',
                to: '/reservez-laser-electrolyse',
              }}
            />
          </div>
          <Link href='/reservez-laser-electrolyse'>
            <Button
              className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
              variant='primary'
            >
              Réserver une séance d&apos;électrolyse maintenant
            </Button>
          </Link>
        </section>

        <Section
          title='Précautions & contre-indications '
          note={<Note title='Épilation par Électrolyse' />}
          description={
            <div>
              <p>
                La technique d&apos;épilation par électrolyse est déconseillée
                aux :
                <ul className='ml-8 mt-4 list-disc space-y-6 marker:text-2xl marker:text-[#A89D9D]'>
                  <li>femmes enceintes et allaitantes,</li>
                  <li>personnes atteintes de troubles de la coagulation,</li>

                  <li>
                    personnes suivant une radiothérapie ou une chimiothérapie,
                  </li>
                  <li>diabétiques et les personnes cardiaques,</li>
                  <li>
                    personnes sous traitement immunosuppresseur et contre
                    l&apos;acné,
                  </li>
                  <li>
                    personnes souffrant de maladies auto-immunes et maladies
                    cutanées actives telles que l&apos;eczéma dans les zones à
                    traiter.
                  </li>
                  <li>
                    personnes présentant des troubles de la cicatrisation,
                  </li>
                  <li>
                    personnes ayant été exposées au soleil et aux UV 24 heures
                    avant la séance.
                  </li>
                </ul>
              </p>
            </div>
          }
          button={{
            label: 'Prendre rendez-vous 1ère consultation gratuite',
            to: '/reservez-laser-electrolyse',
          }}
          image={
            <img
              src='/images/traitement-electrolyse/precautions.webp'
              alt='Précautions & contre-indications '
            />
          }
        />
        <Section
          isImageRight
          title='Questions et réponses'
          note={<Note title='Foire Aux Questions' />}
          description={
            <div>
              <p>
                Vous trouverez ici les réponses à toutes vos questions sur
                l&apos;épilation à l&apos;électrolyse.
                <ul className='ml-8 mt-4 list-disc space-y-6 marker:text-2xl marker:text-[#A89D9D]'>
                  <li>
                    Comment fonctionne l&apos;épilation par électrolyse ou
                    l&apos;épilation électrique ?
                  </li>
                  <li>Qui peut faire l&apos;épilation par électrolyse ?</li>
                  <li>
                    Combien de séances d&apos;épilation électrolyse faut-il
                    faire ?
                  </li>
                </ul>
              </p>
            </div>
          }
          image={
            <img
              src='/images/traitement-electrolyse/questions-reponses.webp'
              alt=''
            />
          }
          button={{
            label: 'Toutes les questions',
            to: '/faq-epilation-definitive',
          }}
        />
        <section className='cta-banner bg-radial mt-12 py-16 text-center text-white lg:mt-24 lg:h-64'>
          <div className='mx-auto max-w-2xl space-y-4'>
            <p className='mx-auto w-72 text-base lg:w-full lg:text-lg'>
              N’attendez plus. Essayez nos services, la première séance est
              gratuite.
            </p>
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Je réserve une séance d&apos;information gratuite
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
              description="Profitez d'un savoir-faire inégalé et de technologies exclusives en matière d’épilation laser et électrique adaptées à toutes les peaux au meilleur prix."
              to='/'
              image={
                <img
                  src='/images/traitement-epilation-laser/accueil.webp'
                  alt='Accueil'
                />
              }
            />
            <Card.PageCard
              title='Technologie électrolyse'
              description='Découvrez notre technologie d’épilation électrique par électrolyse 100% définitive pour tous les types de poils chez Clinique Muller. '
              to='/technologie-epilation-electrique-electrolyse'
              image={
                <img
                  src='/images/traitement-electrolyse/technologie-electrolyse.webp'
                  alt='Technologie électrolyse'
                />
              }
            />
            <Card.PageCard
              title='Traitement laser'
              description="Épilation laser pour femmes et hommes. Résultats dès la 3ème séance. Première consultation gratuite. Réservez dès aujourd'hui."
              to=''
              image={
                <img
                  src='/images/traitement-electrolyse/traitement-laser.webp'
                  alt='Traitement laser'
                />
              }
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
