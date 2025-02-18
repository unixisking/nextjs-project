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
          title='Épilation laser pour femmes et hommes | Clinique Muller'
          description="Épilation laser pour femmes et hommes. Résultats dès la 3ème séance. Première
consultation gratuite. Réservez dès aujourd'hui."
          keywords='Épilation laser'
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
                className='absolute  right-0 top-16 hidden max-w-full lg:top-32 lg:block  lg:max-h-[65%] xl:top-16 xl:max-h-[82%] '
                src='/images/traitement-epilation-laser/hero1.webp'
                alt="CLINIQUE MULLER SPÉCIALISTE SUISSE DE L'ÉPILATION DÉFINITIVE"
              />
            }
            <div className='z-0 mx-auto mt-40 mb-12 max-w-5xl text-left sm:mt-48 lg:ml-8 xlheight:mt-[80%]'>
              <h1 className='text-2xl uppercase text-white lg:text-4xl xlheight:mt-0'>
                Épilation laser, pour une peau lisse et sans défaut
              </h1>
              <Note title='Vivez une expérience Unique' color='#F1B880' />
              <div className='mx-auto   lg:hidden'>
                <img
                  src='/images/traitement-epilation-laser/hero1.webp'
                  alt="Clinique Muller, spécialiste suisse de l'épilation définitive"
                  className='mx-auto sm:w-full sm:max-w-3xl'
                />
              </div>
              <p className='text-white'>
                L’épilation au laser est le traitement par excellence pour une
                épilation permanente, indolore et adaptée aux femmes, aux hommes
                et à tous les types de peau. Nous associons notre service client
                exceptionnel à des technologies de pointe, des spécialistes
                hautement qualifiés et des soins personnalisés pour nos hôtes au
                goût exigeant.
              </p>
              <Link href='/reservez-laser-electrolyse'>
                <Button
                  variant='primary'
                  className='mt-6 rounded-tl-3xl rounded-br-3xl'
                >
                  Prendre rendez-vous 1ère consultation gratuite
                </Button>
              </Link>
              <p className='mt-2 text-sm text-white'>
                1ère séance gratuite et sans engagement
              </p>
            </div>
            <div className='hidden lg:block' />
          </div>
        </main>
        <div className='relative h-full lg:float-right lg:w-[95%]'>
          <div className='banner grid w-full bg-white py-12 px-4 lg:absolute lg:-top-24 lg:mx-auto lg:rounded-tl-3xl lg:py-16 lg:px-24'>
            <Section
              isImageRight
              title='Découvrez l’épilation laser chez Clinique Muller'
              note={<Note title='Épilation laser' />}
              description="L'épilation laser est une technique très efficace qui permet d'éliminer complètement les poils de manière permanente sans endommager la peau.<br/><br/>
            Le principe est simple : un faisceau lumineux, ultra concentré et d'une longueur d'onde précise, est diffusé par le laser en direction du poil et pénètre ensuite dans la peau. Dès lors qu'il est pénétré, ce faisceau se transforme en une forte chaleur qui va venir chauffer et détruire le bulbe responsable de la repousse du poil.<br/><br/>
            En moyenne, trois à dix séances d'épilation au laser espacées de quatre à six semaines sont recommandées pour des résultats optimums.<br/><br/>
            Afin d'offrir une expérience d'épilation au laser rapide, efficace et indolore, Clinique Muller utilise les lasers Diode, une technologie haut de gamme qui convient à tous les types de peau."
              image={
                <img
                  src='/images/traitement-epilation-laser/decouvrez-epilation-laser.webp'
                  alt='Découvrez l’épilation laser chez Clinique Muller'
                />
              }
              button={{
                label: 'En savoir plus sur nos technologies',
                to: '/technologie-epilation-laser-diode',
              }}
            />
          </div>
        </div>
        <div className='relative lg:mt-[1000px]'>
          <Section
            title='Un traitement millimétré pour votre phototype'
            note={<Note title='Phototype de peau' />}
            description="Le phototype de peau est un indicateur permettant aux thérapeutes de déterminer le type de technologie ou de méthode d'épilation définitive à utiliser pour vous en fonction de votre couleur de poils et de peau, ainsi que de la réaction de celle-ci lorsqu'elle est exposée au soleil.<br/><br/>
            En cas de repousses dues à des changements hormonaux ou une repousse paradoxale lors d'un traitement au laser, vous  pouvez avoir recours à l'épilation électrique (électrolyse) en complément d'un traitement au laser. Clinique Muller propose une méthode 100% définitive adaptée à tous les types de peau et de poils."
            image={
              <img
                src='/images/traitement-epilation-laser/traitement-pour-phototype2.webp'
                alt='Un traitement millimétré pour votre phototype'
              />
            }
            button={{
              label: 'Découvrir l’épilation électrolyse',
              to: '/traitement-epilation-electrique-electrolyse',
            }}
          />
        </div>
        <section className='relative mt-12 overflow-x-scroll sm:overflow-hidden lg:mt-24'>
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
              Notre solution dépilatoire complète pour tout type de peau
            </h2>
            <Note title='Une solution complète' />
            <p className='text-center'>
              En fonction de votre type de peau, comme indiqué ci-dessous, vous
              pourrez recourir à l&apos;épilation au laser :
            </p>
            <table id='prices-table' className='table-fixed'>
              <thead>
                <tr>
                  <th>PHOTOTYPE</th>
                  <th>TYPE DE PEAU</th>
                  <th>SENSIBILITÉ AU SOLEIL</th>
                  <th>TYPE DES POILS</th>
                  <th>MÉTHODE D&apos;ÉPILATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Type I
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#F4E5C8]' />
                  </td>
                  <td>Peau très blanche ou laiteuse</td>
                  <td>Elevée</td>
                  <td>
                    Clairs (rouges, blonds, gris/blancs) Foncés (noirs, bruns)
                  </td>
                  <td>
                    Épilation électrique (électrolyse) Épilation au laser (type
                    diode)
                  </td>
                </tr>
                <tr>
                  <td>
                    Type II
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#FFD1A4]' />
                  </td>
                  <td>Peau très claire</td>
                  <td>Elevée</td>
                  <td>
                    Clairs (rouges, blonds, gris/blancs) Foncés (noirs, bruns)
                  </td>
                  <td>
                    Épilation électrique (électrolyse) Épilation au laser (type
                    diode)
                  </td>
                </tr>
                <tr>
                  <td>
                    Type III
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#FFD1A4]' />
                  </td>
                  <td>Peau claire à mate</td>
                  <td>Modérée</td>
                  <td>
                    Clairs (rouges, blonds, gris/blancs) Foncés (noirs, bruns)
                  </td>
                  <td>
                    Épilation électrique (électrolyse) Épilation au laser (type
                    diode)
                  </td>
                </tr>
                <tr>
                  <td>
                    Type IV
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#BB9065]' />
                  </td>
                  <td>Peau mate</td>
                  <td>Très faible</td>
                  <td>
                    Clairs (rouges, blonds, gris/blancs) Foncés (noirs, bruns)
                  </td>
                  <td>
                    Épilation électrique (électrolyse) Épilation au laser (type
                    diode)
                  </td>
                </tr>
                <tr>
                  <td>
                    Type V
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#8E522D]' />
                  </td>
                  <td>Peau foncée</td>
                  <td>Très faible</td>
                  <td>Foncés (noirs, bruns)</td>
                  <td>Épilation au laser (type diode)</td>
                </tr>

                <tr>
                  <td>
                    Type VI
                    <div className='mx-auto mt-[10px] h-12 w-12 rounded-full bg-[#4C393F]' />
                  </td>
                  <td>Peau noire</td>
                  <td>Pas sensible</td>
                  <td>Foncés (noirs, bruns)</td>
                  <td>Épilation au laser (type diode)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <CtaBanner
          title='Clinique Muller vous place en premier !
Essayez nos services et jugez par vous-même,
obtenez votre première session maintenant !'
          button={
            <Link href='/reservez-laser-electrolyse'>
              <Button
                className='mx-auto rounded-tl-3xl rounded-br-3xl'
                variant='primary'
              >
                Je réserve une séance d’information gratuite
              </Button>
            </Link>
          }
        />
        <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 text-center lg:mt-24'>
          <div className='mx-auto max-w-5xl space-y-6'>
            <h2 className='font-normal uppercase'>
              Comment se déroule l&apos;épilation laser chez Clinique Muller?
            </h2>
            <Note title="Déroulement de l'épilation laser" />
          </div>
          <div className='grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                La première consultation (gratuite)
              </h4>
              <p>
                Nous proposons une séance d&apos;information gratuite et sans
                engagement, car nous jugeons qu&apos;il est très important que
                vous soyez bien renseigné sur le processus d&apos;épilation au
                laser et sur les dernières avancées en matière de technologies
                laser. Durant cette même séance, nous procédons à
                l&apos;évaluation de votre type de peau et de poils puis nous
                créons un plan de traitement personnalisé conçu pour vos besoins
                spécifiques.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Déroulement de la séance
              </h4>
              <p>
                Nos thérapeutes vous guideront vers un voyage transformateur
                tout au long de vos séances, en mettant à votre disposition des
                casques de réalité virtuelle haut de gamme avec une sélection de
                films et playlists personnalisées. Mais également une attention
                particulière à vos moindres besoins afin de vous offrir un pur
                moment de détente. Les machines sont recalibrées à chaque séance
                en fonction de l&apos;évolution du traitement afin de maximiser
                leur efficacité.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>Résultats</h4>
              <p>
                Redécouvrez votre corps après chaque séance, et profitez
                d&apos;une peau progressivement plus lumineuse, plus douce et
                sans poils. En moyenne, nos hôtes effectuent 3 à 10 séances de
                laser pour éradiquer jusqu&apos;à 90% des poils. Grâce à nos
                technologies de pointe, vous obtenez des résultats
                spectaculaires et durables.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-light text-primarydark'>
                Post-traitement épilation laser
              </h4>
              <p>
                Nous avons créé les forfaits à vie pour vous faire bénéficier
                gratuitement d&apos;autant de séances de retouches que vous le
                souhaitez durant toute votre vie. Dans certains cas, compléter
                le traitement laser par quelques séances d’épilation à
                l&apos;électrolyse permet d&apos;éradiquer les poils les plus
                tenaces. Clinique Muller vous assure également un suivi à
                distance et se tient à votre disposition pour toute question.
              </p>
            </div>
          </div>
          <Link href='/reservez-laser-electrolyse'>
            <Button
              className='mx-auto rounded-tl-3xl rounded-br-3xl'
              variant='primary'
            >
              Réserver maintenant
            </Button>
          </Link>
        </section>
        <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 text-left lg:mt-24'>
          <div className='space-y-6'>
            <h2 className='font-normal uppercase'>
              Épilation laser : Un soin emblématique pour des résultats
              incomparables
            </h2>
            <Note title='Des Résultats spectaculaires' />
          </div>
          <div className='grid gap-y-8 lg:grid-cols-3 lg:gap-x-16'>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Pratique et rentable, 5 à 10 fois moins chère
              </h4>
              <p>
                L&apos;épilation au laser est 5 à 10 fois moins chère sur le
                long terme que les autres méthodes classiques, car elle ne
                nécessite que peu d&apos;entretien.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Eradication des poils
              </h4>
              <p>
                L&apos;épilation au laser garantit une élimination des poils
                rapide, sûre et durable.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Élimination des poils incarnés et des irritations
              </h4>
              <p>
                Fini les poils incarnés et d&apos;autres irritations de la peau
                (boutons, brûlures et rougeurs.).
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Peau lisse, douce et ferme
              </h4>
              <p>
                L&apos;épilation au laser améliore la qualité de la peau en la
                rendant lisse, douce et ferme.
              </p>
            </div>
            <div className='space-y-4'>
              <h4 className='font-secondary text-xl font-bold'>
                Diminution considérable d&apos;odeurs
              </h4>
              <p>
                Diminution d’odeurs liées à la transpiration en particulier au
                niveau des plis.
              </p>
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
        <section className='mx-auto mt-12 max-w-7xl space-y-12 px-4 text-left lg:mt-24'>
          <h2 className='mb-12 text-center font-normal uppercase lg:mb-24'>
            Nos offres
          </h2>
          <div className='mx-auto grid gap-x-8 gap-y-8 lg:grid-cols-3'>
            <Card.PricingCard
              title='Séance unique'
              price={{ value: '39CHF' }}
              description="Les tarifs d'épilation laser chez Clinque Muller sont à partir de 39 CHF la séance."
              button={{
                label: 'Réserver maintenant',
                to: '/reservez-laser-electrolyse',
              }}
            />
            <Card.PricingCard
              isHighlighted
              title='Pack de 5 séances '
              price={{ value: '33CHF' }}
              description="Vous pouvez réserver un pack de 5 séances d'épilation laser en une seule fois à partir de 33 CHF la séance."
              button={{
                label: 'Réserver maintenant',
                to: '/reservez-laser-electrolyse',
              }}
              className='mt-0 lg:-mt-16'
            />

            <Card.PricingCard
              title='Forfait à vie'
              price={{ value: '298CHF' }}
              description="Choisissez un forfait d'épilation laser à vie et profitez d’un nombre illimité de séances et de retouches pour toujours."
              button={{
                label: 'Réserver maintenant',
                to: '/reservez-laser-electrolyse',
              }}
            />
          </div>
          <Link href='/epilation-laser-electrolyse-prix'>
            <Button
              className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
              variant='primary'
            >
              Découvrir les prix
            </Button>
          </Link>
        </section>

        <Section
          title='Précautions & contre-indications '
          note={<Note title='épilation laser' />}
          description={
            <div>
              <p>
                Afin d&apos;assurer un traitement efficace et sans risque,
                veuillez éviter :
                <ul className='ml-8 mt-4 list-disc space-y-6 marker:text-2xl marker:text-[#A89D9D]'>
                  <li>
                    l’exposition au soleil pendant au moins 2 semaines avant et
                    après le traitement,
                  </li>
                  <li>
                    l’application de parfum, déodorant juste avant la séance et
                    d’autobronzants avant les deux semaines du traitement,
                  </li>
                  <li>
                    la prise de médicaments photosensibilisants : antibiotiques,
                    les médicaments hormonaux et le roaccutane,
                  </li>
                  <li>
                    l’épilation à la cire, au fil ou à la pince à épiler durant
                    au moins 4 semaines avant le traitement afin de préserver la
                    racine,
                  </li>
                  <li>
                    l’application de fillers naturels et les injections de botox
                    pendant 2 à 6 semaines avant le traitement,
                  </li>
                  <li>
                    les femmes enceintes ou allaitantes ne peuvent pas avoir
                    recours à l&apos;épilation au laser.
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
              src='/images/traitement-epilation-laser/precautions.webp'
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
                l&apos;épilation laser.
                <ul className='ml-8 mt-4 list-disc space-y-6 marker:text-2xl marker:text-[#A89D9D]'>
                  <li>
                    L&apos;épilation définitive au laser est-elle sans danger ?
                  </li>
                  <li>
                    L&apos;épilation définitive au laser est-t-elle indolore ?
                  </li>
                  <li>
                    L&apos;épilation au laser ou lumière pulsée, laquelle est la
                    plus efficace ?
                  </li>
                </ul>
              </p>
            </div>
          }
          image={
            <img
              src='/images/traitement-epilation-laser/questions-reponses.webp'
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
              title='Traitement électrolyse'
              description="Découvrez notre épilation définitive efficace à 100% sur les poils blonds, blanc, gris et roux grâce à notre technologie d'épilation électrique par électrolyse."
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
                  src='/images/traitement-epilation-laser/technologie-laser.webp'
                  alt=''
                />
              }
            />
          </div>
        </section>
      </Layout>
    </>
  );
}
