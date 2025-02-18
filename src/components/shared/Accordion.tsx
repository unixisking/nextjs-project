import { Transition } from '@headlessui/react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { ReactNode } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import clsxm from '@/lib/clsxm';

interface AccordionProps {
  title: string;
  content: string | ReactNode;
  open: boolean;
  setSelectedQuestion: (value: string | undefined) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Accordion() {}

Accordion.Controlled = function ({
  title,
  content,
  open,
  setSelectedQuestion,
}: AccordionProps) {
  return (
    <div className='w-full'>
      <div className='w-full p-2'>
        <div>
          <>
            <button
              onClick={() => {
                open
                  ? setSelectedQuestion(undefined)
                  : setSelectedQuestion(title);
              }}
              className='flex w-full items-start justify-between rounded-lg py-2 text-left hover:text-primarydark focus:outline-none focus-visible:ring focus-visible:ring-primarydark focus-visible:ring-opacity-75'
            >
              <h3
                className={clsxm(
                  'accordion-title max-w-5xl font-secondary font-light',
                  open && 'text-primarydark'
                )}
              >
                {title}
              </h3>
              <div className='flex h-5 w-5 items-center justify-center lg:h-6 lg:w-6'>
                {open ? (
                  <AiOutlineMinus className='h-5 w-5 text-primarydark lg:h-6 lg:w-6' />
                ) : (
                  <AiOutlinePlus className='h-5 w-5 lg:h-6 lg:w-6' />
                )}
              </div>
            </button>
            <Transition
              enter='transition duration-500 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-500 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
              show={open}
            >
              <div className='max-w-5xl pt-4 pb-2'>
                {typeof content === 'string' ? (
                  <p
                    className='accordion-content text-left'
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ) : (
                  content
                )}
              </div>
            </Transition>
          </>
        </div>
      </div>
    </div>
  );
};

Accordion.UnControlled = ({
  title,
  content,
}: {
  title: string;
  content: string | ReactNode;
}) => {
  return (
    <div className='w-full'>
      <div className='w-full p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg py-2 text-left hover:text-primarydark focus:outline-none focus-visible:ring focus-visible:ring-primarydark focus-visible:ring-opacity-75'>
                <h4
                  className={clsxm(
                    'accordion-title max-w-5xl font-secondary font-light',
                    open && 'text-primarydark'
                  )}
                >
                  {title}
                </h4>
                <div className='ml-10'>
                  {open ? (
                    <AiOutlineMinus className='h-5 w-5 text-primarydark lg:h-6 lg:w-6' />
                  ) : (
                    <AiOutlinePlus className='h-5 w-5 lg:h-6 lg:w-6' />
                  )}
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className='max-w-5xl pt-4 pb-2'>
                {typeof content === 'string' ? (
                  <p
                    className='accordion-content text-left'
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ) : (
                  content
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

Accordion.Pricing = ({
  title,
  content,
}: {
  title: string;
  content: string | ReactNode;
}) => {
  return (
    <div className='w-full'>
      <div className='w-full p-2'>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className='flex w-full justify-between rounded-lg bg-[#181818]/20 py-3 px-6 text-left focus:outline-none focus-visible:ring focus-visible:ring-primarydark focus-visible:ring-opacity-75'>
                <p>{title}</p>
                {open ? (
                  <ChevronUpIcon className='h-6 w-6' />
                ) : (
                  <ChevronDownIcon className='h-6 w-6' />
                )}
              </Disclosure.Button>
              <Disclosure.Panel className='pt-4 pb-2'>
                {typeof content === 'string' ? (
                  <p dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  content
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};
