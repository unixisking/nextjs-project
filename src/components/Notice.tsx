import React from 'react';
import { AiFillWarning } from 'react-icons/ai';

interface NoticeProps {
  title: string;
  description: string;
}

export default function Notice(props: NoticeProps) {
  const { title, description } = props;
  return (
    <div className='mx-auto max-w-4xl space-y-4 bg-primary/30 p-8 text-darker'>
      <h5 className='flex items-center font-secondary font-light'>
        <AiFillWarning className='h-8 w-8 text-primary ' />
        <span className='ml-2 mt-1'>{title}</span>
      </h5>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
