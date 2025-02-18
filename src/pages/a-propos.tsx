import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { OUR_VALUES } from '@/data/constants';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Card from '@/components/shared/Card';
import CtaBanner from '@/components/shared/CtaBanner';
import Note from '@/components/shared/Note';
import Section from '@/components/shared/Section';

export default function AboutPage() {
  return (
    <Layout isBackgroundLight>
      <Seo
        title='Centre expert de l’épilation définitive en Suisse | Clinique Muller'
        description='Unique de par son approche adaptée à chacun, nous combinons épilation laser et
épilation électrolyse pour garantir 100% d’efficacité pour toutes les peaux'
        keywords='épilation définitive, épilation laser, épilation électrolyse'
      />
      <main className='bg-linear-primary-light relative z-10 mx-auto w-screen pt-56 lg:h-screen lg:pt-72'>
        <div className='space-y-8'>
          <div className='absolute top-32 -left-48 -z-10 hidden w-full lg:block'>
            <Image
              alt='Circular shapes'
              src='/images/shapes/circles.svg'
              layout='fixed'
              width={600}
              height={600}
            />
          </div>
          <h1 className='text-center text-3xl font-normal uppercase lg:text-6xl xlheight:mt-0'>
            Un cadre majestueux
            <br /> et envoûtant
          </h1>
          {/* <img
            className='mx-auto'
            src='/images/a-propos/hero.webp'
            alt=''
            width={700}
            height={700}
          /> */}
        </div>
      </main>
      <Section
        title='Quand l’épilation définitive rencontre le savoir-faire Suisse'
        note={<Note title='Une Expertise Hors Pair' />}
        description="Notre but premier est de répondre à tous les besoins de nos hôtes qu’ils soient d'ordre esthétique, pratique ou de recherche d’harmonie. Chez Clinique Muller, cela se traduit par une volonté de toujours proposer une prise en charge sur mesure, des services exceptionnels et une expertise sans égal. <br/><br/>
        Nous avons créé pour nos hôtes, un cadre apaisant, une atmosphère chaleureuse et un niveau de confort très élevé que l'on retrouve dans chacune de nos cliniques.<br/><br/>
        Clinique Muller, c’est d’abord et surtout un mariage du savoir-faire suisse et des meilleures technologies d’épilation.<br />
        "
        button={{
          label: 'Réserver votre consultation gratuite',
          to: '/reservez-laser-electrolyse',
        }}
        image={
          <img
            // src='/images/a-propos/epilation-definitive.webp'
            src='/images/traitement-electrolyse/decouvrez-traitement-electrolyse.webp'
            alt='Quand l’épilation définitive rencontre le savoir faire Suisse'
            className='mx-auto w-[90%]'
          />
        }
      />
      <section className='relative mt-12 h-full lg:mt-24'>
        <div className='w-full bg-white px-8 py-12 text-center lg:mx-auto lg:py-16'>
          <h2 className='font-normal uppercase text-darker'>Nos valeurs</h2>
          <div className='mt-4 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-4'>
            {OUR_VALUES.map((item, index) => (
              <Card.SimpleCard
                title={item.title}
                description={item.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Section
        isImageRight
        title='Comment se passe un traitement chez Clinique Muller ?'
        note={<Note title='Prise En Charge Complète' />}
        description='De l’accueil au traitement, bénéficiez d’une prise en charge complète par nos experts, qui se tiennent à votre entière disposition avant, pendant et après vos séances.<br/><br/>Nous avons choisi pour vous des équipements dépilatoires de dernière génération, mondialement reconnus pour leur efficacité sur tous les types de peau et de poils, afin de vous garantir les résultats que vous désirez.<br/><br/>Un plan de soin est toujours élaboré spécialement pour vous lors de la première consultation offerte et est constamment revu en fonction de vos attentes et de vos envies.<br/><br/>Afin de lier l’utile à l’agréable, nous proposons à nos hôtes des services complémentaires gratuits tels que la mise à disposition de casques de réalité virtuelle, de peignoirs et de serviettes 100% coton biologique, de boissons personnalisées, d’une conciergerie et de nombreux autres avantages afin que votre séance soit un véritable moment de détente.'
        button={{
          label: 'Réserver votre consultation gratuite',
          to: '/reservez-laser-electrolyse',
        }}
        image={
          <img
            src='/images/a-propos/traitement-chez-clinique-muller.webp'
            alt='Comment se passe un traitement chez Clinique Muller ?'
          />
        }
      />
      <CtaBanner
        title='Chez clinique Muller, nous vous offrons un voyage transformateur vers la découverte de soi, jalonnés d’expériences authentiques réalisées sur mesure.'
        button={
          <Link href='/reservez-laser-electrolyse'>
            <Button
              className='mx-auto rounded-tl-3xl rounded-br-3xl'
              variant='primary'
            >
              Réserver votre consultation gratuite
            </Button>
          </Link>
        }
      />
      <section className='grid-col-1 mx-auto my-12 grid max-w-7xl px-4 lg:my-24 lg:grid-cols-2 lg:gap-x-4'>
        <div className='space-y-12'>
          <h2 className='font-normal uppercase text-darker'>découvrez-nous</h2>
          <p>
            Clinique Muller vous garantit jusqu&apos;à 95% de réduction de vos
            poils de manière permanente. Nos méthodes d&apos;épilation
            définitive sont adaptées à tous les types de peaux et de poils.
          </p>
          <div>
            <h3 className='font-normal uppercase text-darker'>
              Rendez-nous visite
            </h3>
            <a href='#' className='text-lg underline'>
              Rue du Lion d&apos;Or 4, 1003 Lausanne, Suisse
            </a>
          </div>
          <div>
            <h3 className='font-normal uppercase text-darker'>
              Envoyez-nous un e-mail
            </h3>
            <a href='mailto:contact@cliniquemuller.ch' className='mt-2'>
              info@cliniquemuller.ch
            </a>
          </div>
          <div>
            <h3 className='font-normal uppercase text-darker'>Appelez-nous</h3>
            <a href='tel:'>+41 21 311 84 95</a>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/dxm0sdgpv/image/upload/v1663439961/decouvrez-nous_lzepm5.webp'
          alt='découvrez-nous'
          className='rounded-xl'
        />
      </section>
    </Layout>
  );
}
