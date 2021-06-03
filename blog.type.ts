export type RawFile = { path: string; content: string };
export type PostInfo = {
  title: string;
  published: boolean;
  datePublished: number;
  description: string;
  author: string;
  tags: string[];
  authorPhoto: string;
  bannerPhoto: string;
  canonicalUrl: string;
};
export type PostData = {
  meta: PostInfo;
  content: string;
};
