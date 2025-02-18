import { StaticImageData } from 'next/image';

type Tag = { name: string }[];

export type Blog = {
  id: number;
  title: string;
  content: string;
  author?: string;
  tags?: Tag;
  date: string;
  image: StaticImageData;
  slug?: string;
};

export interface IBlog {
  posts: Blog[];
  plusPopulaire?: Blog[];
}

export type Post = {
  title: string;
  created_at: string;
  feature_image: string;
  feature_image_alt: string;
  excerpt: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  tags: { id: string; name: string }[];
  html: string;
  codeinjection_head?: string;
  codeinjection_foot?: string;
};

export interface IBlogDeatils {
  post: Blog;
  plusPopulaire?: Blog[];
}

export interface IBlogCard {
  title: string;
  excerpt: string;
  author?: { name: string };
  tag?: { name: string };
  created_at: string;
  feature_image: StaticImageData;
  slug: string;
}
