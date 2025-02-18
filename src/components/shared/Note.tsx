import React from 'react';

import clsxm from '@/lib/clsxm';
import { Color } from '@/lib/types';

const PRIMARY_NOTE_COLOR = '#995B1D';

interface NoteProps {
  title: string;
  color?: Color;
}

export default function Note({
  title,
  color = PRIMARY_NOTE_COLOR,
  ...props
}: NoteProps) {
  return (
    <div className='my-[30px] flex items-center' {...props}>
      <div style={{ color }} className='w-full max-w-fit text-sm capitalize'>
        {title}
      </div>
      <hr
        style={{ borderColor: color }}
        className={clsxm('ml-[10px] mt-0.5 h-0.5 w-full lg:block lg:w-full')}
      />
    </div>
  );
}
