export interface PostProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  updatedAt: string;
}

export interface ListPostsProps {
  posts: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    updatedAt: string;
  }[];
}
