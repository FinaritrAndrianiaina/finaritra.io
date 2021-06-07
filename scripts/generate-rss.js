const { promises: fs } = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generate() {
  const feed = new RSS({
    title: "Finaritra Andrianiaina",
    site_url: "https://finaritra.vercel.app",
    feed_url: "https://finaritra.vercel.app/feed.xml",
  });

  const posts = await fs.readdir(path.join(__dirname, "..", "md", "blog"));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, "..", "md", "blog", name)
      );
      const meta = matter(content).data;
      feed.item({
        author: meta.author,
        categories: meta.tags,
        title: meta.title,
        url: "https://finaritra.vercel.app/blog/" + name.replace(/\.mdx?/, ""),
        date: meta.datePublished,
        description: meta.description,
      });
    })
  );

  await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
