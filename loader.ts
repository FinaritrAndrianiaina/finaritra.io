import matter from "gray-matter";
import glob from "glob";
import { RawFile, PostData, PostInfo } from "./blog.type";

export const loadMarkdownFile = async (path: string): Promise<RawFile> => {
  const mdFile = await import(`./md/${path}`);
  return { path, content: mdFile.default };
};

export const formatMD = (file: RawFile): PostData => {
  const { data, content } = matter(file.content);
  console.log(`file.path`, file.path);
  if (!data.title) throw new Error(`Missing required field: title.`);
  if (!data.description && !data.subtitle)
    throw new Error(`Missing required field: description or subtitle.`);

  if (!content) throw new Error(`Missing required field: content.`);

  const meta: PostInfo = {
    title: data.title,
    published: Boolean(data.published),
    datePublished: data.datePublished,
    description: data.description || data.subtitle,
    author: data.author,
    tags: data.tags || [],
    authorPhoto: data.authorPhoto,
    bannerPhoto: data.bannerPhoto,
    canonicalUrl: `/${file.path.split(".")[0]}`,
  };

  return { meta, content };
};

export const loadMarkdownFiles = async (path: string): Promise<RawFile[]> => {
  const blogPaths = glob.sync(`./md/${path}`);
  const postDataList = await Promise.all(
    blogPaths.map((blogPath) => {
      const modPath = blogPath.slice(blogPath.indexOf(`md/`) + 3);
      return loadMarkdownFile(`${modPath}`);
    })
  );
  return postDataList;
};

export const loadPost = async (path: string): Promise<PostData> => {
  const file = await loadMarkdownFile(path);
  return formatMD(file);
};

export const loadBlogPosts = async (): Promise<PostData[]> => {
  return await (
    await loadMarkdownFiles(`blog/*.mdx`)
  )
    .map(formatMD)
    .filter((a) => a.meta.published)
    .sort((a, b) => (b.meta.datePublished || 0) - (a.meta.datePublished || 0));
};
