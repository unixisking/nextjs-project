import React, { FormEvent, MutableRefObject, useRef, useState } from 'react';

import Button from '@/components/buttons/Button';

export default function Subscribe({ campaign }: { campaign: string }) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(
    null
  ) as MutableRefObject<HTMLInputElement>;

  const subscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputRef.current.value,
        campaign,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();

    if (error) {
      setMessage(error);
      return;
    }

    inputRef.current.value = '';
    setMessage('Succès ! 🎉 Vous êtes maintenant inscrit à la newsletter.');
  };
  return (
    <div>
      <form
        onSubmit={subscribe}
        className='lg:w-8/9 mx-auto my-5 flex w-4/5  max-w-5xl flex-col items-center gap-8 md:flex-row'
      >
        <input
          ref={inputRef}
          placeholder='Email'
          className='input-shadow h-[60px] w-full rounded-[10px]  border  border-[#2D2929] bg-[#D1D1D1] bg-opacity-30 px-5 md:w-3/5'
          required
        />
        <Button
          type='submit'
          variant='primary'
          className='bg-red mx-auto flex h-[60px] w-3/5 justify-center rounded-tl-3xl rounded-br-3xl px-4 py-2  text-center font-secondary text-[18px] text-white md:w-fit lg:w-2/5 xl:w-2/6 '
        >
          Me tenir informé
        </Button>
      </form>

      <div>
        {/** message
          ? JSON.stringify(message)
          : "Nous n'enverrons des e-mails que lorsque du nouveau contenu sera publié. Pas de spam."  */}
      </div>
    </div>
  );
}
