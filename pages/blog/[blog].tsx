import React from "react";
import glob from "glob";
import { loadPost } from "../../loader";
import { serialize } from "next-mdx-remote/serialize";
import Markdown from "../../components/Markdown";
import { Container } from "@chakra-ui/layout";

function Post(props: any) {
  const { post } = props;
  return (
    <>
      <Container maxW="container.xl">
        <Markdown md={post} />
      </Container>
    </>
  );
}

export const getStaticPaths = () => {
  const blogs = glob.sync("./md/blog/*.mdx");
  const slugs = blogs.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -4).trim();
  });
  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const { meta, content } = await loadPost(`blog/${params.blog}.mdx`);
  const post = await serialize(content);
  return { props: { post } };
};

export default Post;
