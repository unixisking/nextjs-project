import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { IBlogCard } from '@/types';

function BlogCard({
  title,
  excerpt,
  created_at,
  feature_image,
  slug,
}: IBlogCard) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className='mb-10 flex h-fit w-full flex-col-reverse items-start justify-start gap-10 md:flex-row md:items-center md:justify-between 2xl:gap-16'>
        <div className='ml-5 hidden md:block md:h-1/2 md:w-1/2 lg:ml-0'>
          <Image
            width='100%'
            className='rounded-lg'
            height='70%'
            layout='responsive'
            src={feature_image}
            alt={title}
          />
        </div>
        <div className='mx-8 space-y-8 text-left md:w-1/2'>
          <div>
            <h2 className='text-3xl font-bold text-dark'>{title}</h2>
            <p className='mt-5 text-gray-200'>
              <span className='text-gray-400'>{created_at}</span>
            </p>
          </div>
          <p>{excerpt}</p>
          <div className='mr-5 block w-full md:hidden'>
            <Image
              width='100%'
              height='70%'
              layout='responsive'
              src={feature_image}
              alt={title}
            />
          </div>
          <div className='flex w-full items-center justify-end'>
            <Link href={`/blog/${slug}`}>
              <a className='text-dark hover:font-semibold'>Lire plus</a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default BlogCard;
