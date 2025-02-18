import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

interface iDialogModal {
  title: string | ReactNode;
  description: string | ReactNode;
  button: { cancel?: string | ReactNode; accepte?: string | ReactNode };
  icon: ReactNode;
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: any;
}

export default function DialogModal(props: iDialogModal) {
  const { isOpen, setIsOpen, icon, title, description, button } = props;

  function closeModal() {
    setIsOpen(false);
  }

  // eslint-disable-next-line unused-imports/no-unused-vars
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 w-2/3' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <div className='py-4'> {icon}</div>

                  <div className='mt-2'> {title}</div>

                  <div className='mt-2'>{description}</div>

                  <div className='mt-2 flex justify-evenly'>
                    {button.cancel}
                    {button.accepte}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
