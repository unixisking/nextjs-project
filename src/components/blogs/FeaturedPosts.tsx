import React from 'react';

import Card from '@/components/shared/Card';

import { Post } from '@/types';

function FeaturedPosts({ featuredPosts }: { featuredPosts: Post[] }) {
  return (
    <div className='mx-auto mt-10 mb-10 px-6 pb-20 md:mt-24 lg:px-20'>
      <h2 className='mb-4 py-4 text-center text-[22px] leading-8 text-dark md:px-20 lg:ml-0 lg:text-[32px]'>
        Nos articles de blog les plus récents
      </h2>
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-16'>
        {featuredPosts &&
          featuredPosts.map((item, index) => (
            <Card.PageCard
              key={index}
              title={item.title}
              description={item.excerpt}
              to={`/blog/${item.slug}`}
              image={
                <img src={item.feature_image} alt={item.feature_image_alt} />
              }
            />
          ))}
      </div>
    </div>
  );
}

export default FeaturedPosts;
