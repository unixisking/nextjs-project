import React from 'react';

import clsxm from '@/lib/clsxm';
import { Color } from '@/lib/types';

export default function Step({
  color = '#1D1D1D',
  title,
  content,
  isHighlighted,
}: {
  color?: Color;
  title: string;
  content: string;
  isHighlighted?: boolean;
}) {
  return (
    <div
      className={clsxm(
        'space-y-4',
        isHighlighted && 'font-bold text-primarydark'
      )}
    >
      <div className='mt-4 flex w-full items-center'>
        <hr
          style={{ borderColor: color }}
          className='mt-0.5  h-0.5 w-full lg:block'
        />
        <h3 className={clsxm('ml-4', isHighlighted && 'font-bold')}>{title}</h3>
      </div>
      <p>{content}</p>
    </div>
  );
}
