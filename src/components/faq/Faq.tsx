import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';
import { TechnologyType } from '@/lib/types';

import { FAQ_ELECTROLYSE, FAQ_LASER } from '@/data/constants';

import Button from '@/components/buttons/Button';
import Accordion from '@/components/shared/Accordion';

export default function Faq() {
  const [techSelected, setTechSelected] = useState<TechnologyType>(
    TechnologyType.LASER
  );
  const [selectedQuestion, setSelectedQuestion] = useState<string | undefined>(
    undefined
  );
  return (
    <section className='faq-bg relative mx-auto mt-12 max-w-7xl rounded-3xl py-12'>
      <div className='mx-auto flex justify-center gap-x-4'>
        <Button
          onClick={() => setTechSelected(TechnologyType.LASER)}
          className={clsxm(
            'flex w-40 justify-center rounded-lg border-0 bg-white text-center shadow-sm hover:bg-[#181818] hover:text-white',
            techSelected === TechnologyType.LASER
              ? 'bg-[#181818] text-white'
              : 'bg-white'
          )}
        >
          Laser
        </Button>
        <Button
          onClick={() => setTechSelected(TechnologyType.ELECTROLYSE)}
          className={clsxm(
            'flex w-40 justify-center rounded-lg border-0 bg-white text-center shadow-sm hover:bg-[#181818] hover:text-white',
            techSelected === TechnologyType.ELECTROLYSE
              ? 'bg-[#181818] text-white'
              : 'bg-white'
          )}
        >
          Électrolyse
        </Button>
      </div>
      <div className='mx-8 mt-12 rounded-lg bg-white p-8 shadow-md lg:mx-16 lg:mt-24'>
        {(techSelected === TechnologyType.LASER
          ? FAQ_LASER
          : FAQ_ELECTROLYSE
        ).map((q) => (
          <Accordion.Controlled
            open={q.question === selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            title={q.question}
            content={q.answer}
            key={q.question}
          />
        ))}
      </div>
    </section>
  );
}
