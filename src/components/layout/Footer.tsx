import Link from 'next/link';

import { NAVIGATION } from '@/data/constants';

interface IFooter {
  FooterBackground: string;
}

export default function Footer({ FooterBackground }: IFooter) {
  return (
    <footer className={`${FooterBackground}`} aria-labelledby='footer-heading'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-[1360px] py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-24'>
          <div className='space-y-8 xl:col-span-1'>
            <img
              width={100}
              height={100}
              src='/svg/logo-black.svg'
              alt='Clinique Muller'
            />
            <p className='max-w-sm text-base'>
              Clinique Muller, spécialiste suisse de l&apos;épilation
              définitive, possède les équipements les plus avancés du marché,
              vous garantissant une expérience et des résultats exceptionnels.
            </p>
            <div className='flex space-x-6'>
              {NAVIGATION.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </a>
              ))}
            </div>
          </div>

          <div className='mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 xl:ml-32 '>
            <div className='w-fit md:grid md:grid-cols-3 md:gap-64'>
              <div className='w-fit'>
                <h3 className='w-64 text-xl font-bold text-primarydark'>
                  Épilation définitive
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {NAVIGATION.laser.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 w-fit md:ml-5 md:mt-0'>
                <h3 className='w-48 text-xl font-bold text-primarydark'>
                  Clinique Muller
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {NAVIGATION.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className='text-base hover:text-gray-900'
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-12 w-fit md:mt-0'>
                <h3 className='w-48 text-xl font-bold text-primarydark'>
                  Contacts
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {NAVIGATION.contact.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className='text-base hover:text-gray-900'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div className='space-y-8 md:mt-0'>
              <h3 className='text-xl font-bold text-primarydark'>
                Inscrivez-vous
              </h3>
              <p className='max-w-sm text-base'>
                Inscrivez-vous maintenant pour recevoir nos offres exclusives.
              </p>
              <form className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Email'
                  className='w-4/6 rounded-md border-none bg-[#E0DBD2]  '
                />
                <button className='w-1/3 rounded-md bg-[#FFD1A4]  py-2 '>
                  S&apos;abonner
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <div className='mt-12 border-t border-gray-200 pt-8'>
          <p className={`text-base text-primarydark xl:text-center  `}>
            &copy; 2022 Clinique Muller. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
