const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");
const { loadBlogPosts } = require("../loader");

async function generate() {
  const feed = new RSS({
    title: "Finaritra Andrianiaina",
    site_url: "https://finaritra.vercel.app",
    feed_url: "https://finaritra.vercel.app/feed.xml",
  });

  const posts = await loadBlogPosts();

  await Promise.all(
    posts.map((post) => {
      feed.item({
        title: post.meta.title,
        url:
          "https://finaritra.vercel.app/blog/" +
          post.path.replace(/\.mdx?/, ""),
        date: post.meta.datePublished,
        description: post.meta.description,
      });
    })
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
