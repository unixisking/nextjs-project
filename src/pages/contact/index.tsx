import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
const schema = yup
  .object({
    name: yup.string().required('Veuillez fournir un nom'),
    email: yup.string().email().required('Veuillez fournir votre email'),
    phone: yup.string().required('Veuillez fournir votre numéro de téléphone'),
    message: yup.string(),
  })
  .required();

export default function Contact() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data: FormValues) => {
    try {
      await fetch('/api/contact', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      router.push('/contact/merci-de-nous-avoir-contactes');
    } catch (error) {
      /**
       * TODO:
       * Report contact form errors to Sentry
       */
      // eslint-disable-next-line no-console
      console.error('Error sending email data to server', error);
    }
  };
  return (
    <Layout isBackgroundLight>
      <Seo
        title='Informations et horaires | Clinique Muller'
        description="N’hésitez pas à nous contacter pour toute demande d’information, réclamation ou autre
au sujet de votre traitement d'épilation définitive."
        keywords='Épilation définitive'
      />
      <div className='lg:pt-54 mx-auto grid max-w-7xl gap-x-12 px-4 pt-64 lg:mt-20 lg:grid-cols-2'>
        <div className='mb-12 space-y-8 lg:mb-24'>
          <h1 className='max-w-sm text-2xl font-normal uppercase lg:text-4xl xlheight:mt-0'>
            découvrez-nous
            <br />
          </h1>
          <img
            src='https://res.cloudinary.com/dxm0sdgpv/image/upload/v1663439961/decouvrez-nous_lzepm5.webp'
            alt='découvrez-nous'
            className='mx-auto w-full rounded-xl  sm:w-[500px] lg:hidden'
          />
          <p>
            Clinique Muller vous garantit jusqu&apos;à 95% de réduction de vos
            poils de manière permanente. Nos méthodes d&apos;épilation
            définitive sont adaptées à tous les types de peaux et de poils.
          </p>
          <div className='space-y-2'>
            <h4 className='font-light'>Rendez-nous visite</h4>
            <a href='#' className='underline'></a>
          </div>
          <div className='space-y-2'>
            <h4 className='font-light'>Envoyez-nous un e-mail</h4>
            <p className='space-y-2 underline'>
              <a href='mailto:hello@sidahmed.engineer'>
                hello@sidahmed.engineer
              </a>
            </p>
          </div>
          <div className='space-y-2'>
            <h4 className='font-light'>Appelez-nous</h4>
            <p className='space-y-2 underline'>
              <a href='tel:+4111 11 111 11'>+41 11 111 11 11</a>
            </p>
          </div>
        </div>
        <div className='-mt-28 hidden lg:mr-12 lg:block'>
          <img
            src='https://res.cloudinary.com/dxm0sdgpv/image/upload/v1663439961/decouvrez-nous_lzepm5.webp'
            alt='Offre de lancement'
            className='rounded-xl'
          />
        </div>
      </div>
      <section className='bg-radial relative py-12 px-4 lg:py-24'>
        <div className='mx-auto grid max-w-7xl grid-cols-1 space-y-12 lg:grid-cols-2 '>
          <img
            className='absolute left-0 -top-2 w-2/3'
            src='/images/contact/contactez-nous.webp'
            alt=''
          />
          <img
            className='absolute left-16 -bottom-0 w-2/3'
            src='/images/contact/muller-bg.webp'
            alt=''
          />
          <div className='space-y-4 lg:mt-24'>
            <h2 className='font-light text-white'>
              Avez-vous des questions ? Parlons-en
            </h2>
            <p className='text-white'>
              Merci de prendre contact avec nous !<br />
              Veuillez remplir le formulaire, bonne journée !
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='z-10 space-y-4'>
            <div className='flex flex-col gap-y-2'>
              <label className='text-white'>Nom complet</label>
              <input
                className='contact-input border-2 border-[#FFDAB6]/30 bg-[#CCC4E1]/20 py-3 px-4'
                placeholder='Nom et Prénom'
                {...register('name')}
              />
              <p className='text-sm text-red-500'>{errors.name?.message}</p>
            </div>

            <div className='flex flex-col gap-y-2'>
              <label className='text-white'>Email</label>
              <input
                className='contact-input border-2 border-[#FFDAB6]/30 bg-[#CCC4E1]/20 py-3 px-4'
                placeholder='Entrer ici..'
                type='email'
                {...register('email')}
              />
              <p className='text-sm text-red-500'>{errors.email?.message}</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-white'>Numéro de téléphone</label>
              <input
                className='contact-input border-2 border-[#FFDAB6]/30 bg-[#CCC4E1]/20 py-3 px-4'
                placeholder='Entrer ici..'
                {...register('phone')}
              />
              <p className='text-sm text-red-500'>{errors.phone?.message}</p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <label className='text-white'>Message</label>
              <textarea
                className='contact-input border-2 border-[#FFDAB6]/30 bg-[#CCC4E1]/20 py-3 px-4'
                placeholder='Entrer ici..'
                rows={4}
                {...register('message')}
              />
              <p className='text-sm text-red-500'>{errors.message?.message}</p>
            </div>
            <Button
              type='submit'
              variant='primary'
              className='mx-auto flex rounded-tl-3xl rounded-br-3xl'
            >
              Envoyer
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
