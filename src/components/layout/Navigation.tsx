import { Popover, Transition } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { ChevronUpIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

import clsxm from '@/lib/clsxm';

import { NAVIGATION as SOCIAL } from '@/data/constants';

import Button from '@/components/buttons/Button';

const NAVIGATION = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Traitements',
    href: '#',
    content: [
      {
        name: 'Épilation laser',
        href: '/traitement-epilation-laser',
      },
      {
        name: 'Épilation électrique par électrolyse',
        href: '/traitement-epilation-electrique-electrolyse',
      },
    ],
  },
  {
    name: 'Technologies',
    href: '#',
    content: [
      {
        name: 'Épilation définitive au Laser Diode',
        href: '/technologie-epilation-laser-diode',
      },
      {
        name: 'Épilation électrique par électrolyse  Silhouet-Tone',
        href: '/technologie-epilation-electrique-electrolyse',
      },
    ],
  },
  { name: 'Prix', href: '/epilation-laser-electrolyse-prix' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'FAQ', href: '/faq-epilation-definitive' },
  // { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation({
  isHidden = false,
  isBackgroundLight = false,
  isSocialHidden = true,
}: {
  isHidden: boolean;
  isBackgroundLight: boolean;
  isSocialHidden?: boolean;
}) {
  return (
    <Popover>
      <div className='absolute top-16 left-0 right-0 z-20 w-full max-w-7xl md:mx-20 2xl:mx-auto 2xl:max-w-[1400px]'>
        <nav
          className='relative flex items-center justify-between sm:h-10 md:justify-center'
          aria-label='Global'
        >
          <div className='flex flex-1 items-center md:absolute md:inset-y-0 md:left-0'>
            <div className='ml-[40px] flex w-full items-center justify-between md:ml-0 md:w-auto'>
              <Link href='/'>
                <div className='cursor-pointer'>
                  <span className='sr-only'>Clinique Muller</span>
                  <Image
                    width={100}
                    height={80}
                    className='h-8 w-auto sm:h-10'
                    src={`/svg/logo${isBackgroundLight ? '-black' : ''}.svg`}
                    alt='Clinique Muller'
                  />
                </div>
              </Link>
              {!isHidden && (
                <div className='flex items-center md:hidden'>
                  <Popover.Button className='inline-flex items-center justify-center rounded-md bg-primary p-2 text-white hover:text-primarydark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              )}
            </div>
          </div>
          {!isHidden && (
            <>
              <div className='hidden md:flex md:space-x-10'>
                {NAVIGATION.map((item, index) => {
                  if (!item.content) {
                    return (
                      <Link key={index} href={item.href}>
                        <a
                          className={clsxm(
                            isBackgroundLight ? 'text-darker' : 'text-white',
                            'nav-link text-sm font-medium leading-6 transition duration-150 ease-in-out hover:text-primary focus:outline-none'
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    );
                  } else {
                    return (
                      <FlyoutMenu
                        key={index}
                        title={item.name}
                        links={item.content}
                        isBackgroundLight={isBackgroundLight}
                      />
                    );
                  }
                })}
              </div>
              <div className='hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end'>
                <Link href='/reservez-laser-electrolyse'>
                  <Button
                    variant='primary'
                    className='rounded-tl-3xl rounded-br-3xl'
                  >
                    Réserver
                  </Button>
                </Link>
              </div>
            </>
          )}

          {!isSocialHidden && (
            <div className='absolute right-0  flex justify-between gap-5 '>
              {SOCIAL.social.map((item) => (
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
          )}
        </nav>
      </div>

      <Transition
        as={Fragment}
        enter='duration-150 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute inset-x-0 top-0 z-30 origin-top-right transform bg-[#5a4534] p-2 pb-8 transition md:hidden'
        >
          <div className='overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center justify-between px-5 pt-4'>
              <div>
                <Image
                  width={90}
                  height={50}
                  className='h-8 w-auto sm:h-10'
                  src='/svg/logo.svg'
                  alt=''
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center justify-center rounded-md bg-primary p-2 text-white hover:text-primarydark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='px-2 pt-4 pb-3'>
              {NAVIGATION.map((item) => {
                if (!item.content) {
                  return (
                    <Link key={item.name} href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className='nav-link block rounded-md p-3 text-sm font-medium text-white hover:text-primary'
                      >
                        {item.name}
                      </a>
                    </Link>
                  );
                }
                return (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-white hover:text-primary focus:outline-none ${
                            open ? 'text-primary' : ''
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronUpIcon
                            className={`${
                              !open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-primary`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                          {item.content?.map((subItem, index) => (
                            <Link key={index} href={subItem.href}>
                              <a className='nav-link block p-3 text-sm font-medium text-white hover:text-primary'>
                                {subItem.name}
                              </a>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                );
              })}
            </div>
            <Link href='/reservez-laser-electrolyse'>
              <a className='z-20 mx-auto mb-2 flex w-1/3 items-center justify-center rounded-md border border-transparent bg-primary px-4 py-3 text-sm font-medium hover:bg-secondary'>
                Réserver
              </a>
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

// TODO: isBackgroundLight should be in a global context
interface IFlyoutMenu {
  isBackgroundLight: boolean;
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const FlyoutMenu = ({ title, links, isBackgroundLight }: IFlyoutMenu) => {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={clsxm(
              'nav-link group inline-flex items-center rounded-md text-sm text-white hover:text-primary focus:outline-none',
              isBackgroundLight ? 'text-darker' : 'text-white',
              open && 'text-primary'
            )}
          >
            <span>{title}</span>
            <ChevronDownIcon
              className={`ml-2 h-5 w-5 ${open ? 'text-primary' : ''}`}
              aria-hidden='true'
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 mt-3 w-64 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div
                  className={clsxm(
                    isBackgroundLight === true ? 'bg-white' : 'dropdown-bg',
                    'relative last:border-b-0'
                  )}
                >
                  {links.map((item, index) => (
                    <div
                      key={index}
                      className='border-b-2 border-primary/25 last:border-b-0 hover:bg-primary/30'
                    >
                      <Link key={index} href={item.href} className=''>
                        <div className='flex cursor-pointer items-start rounded-lg px-6 py-6'>
                          <p
                            className={clsxm(
                              !isBackgroundLight && 'text-white',
                              'text-sm'
                            )}
                          >
                            {item.name}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
