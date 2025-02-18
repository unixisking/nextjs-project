import GhostContentAPI from '@tryghost/content-api';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_API_URL || '',
  key: process.env.NEXT_PUBLIC_CONTENT_API_KEY || '',
  version: 'v5.0',
});

export async function getPosts(limit = 1000) {
  return await api.posts
    .browse({
      include: ['tags', 'authors'],
      limit: limit + 200,
    })
    .catch((error: Error) => {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return message;
    });
}

export async function getFeaturedPosts(limit = 4) {
  return await api.posts
    .browse({
      include: ['tags', 'authors'],
      limit,
    })
    .catch((error: Error) => {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return message;
    });
}

export async function getSinglePost(postSlug: string) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      {
        include: ['tags', 'authors'],
      }
    )
    .catch((error: Error) => {
      let message = 'Unknown Error';
      if (error instanceof Error) message = error.message;
      return message;
    });
}
