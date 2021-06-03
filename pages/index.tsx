import Head from "next/head";
import { loadBlogPosts, loadMarkdownFile } from "../loader";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const Home = (props: {
  introduction: any;
  features: string;
  readme: string;
  posts: Array<any>;
}) => {
  return (
    <div className="content">
      <Head>
        <title>Introducing Devii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MDXRemote {...props.introduction} />

      <div className="section">
        <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{" "}
          <code>props.posts</code> array. These blog post "cards" are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p>
      </div>

      <div className="section">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            <em>Seems like it might be useful!</em>
          </p>
          <p>
            — Dan Abramov, taken{" "}
            <a
              href="https://github.com/colinhacks/devii/issues/2"
              target="_blank"
            >
              {" "}
              utterly out of context
            </a>
          </p>
        </blockquote>
      </div>

      {/* <div className="section">
        <h2>README.md</h2>
        <p>
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. You can also read the README on
          GitHub at{' '}
          <a href="https://github.com/colinhacks/devii">
            https://github.com/colinhacks/devii
          </a>
          .
        </p>
      </div> */}

      {/* <div className="section alternate">
        <div className="narrow">
          <Markdown source={props.readme} />
        </div>
      </div> */}

      <div className="section alternate">
        <h2 className="centered">Get started</h2>
        <a href="https://github.com/colinhacks/devii">
          <button className="fork-button">Go to README</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const _introduction = await loadMarkdownFile("introduction.md");
  const introduction = await serialize(_introduction.content);
  const posts = await loadBlogPosts();
  const props = {
    introduction: introduction,
  };

  return { props };
};
