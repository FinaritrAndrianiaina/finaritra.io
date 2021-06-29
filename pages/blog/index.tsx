import {
  Box,
  Container,
  Divider,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/layout";
import React from "react";
import { PostData } from "../../blog.type";
import BlogCard from "../../components/BlogCard";
import { loadBlogPosts } from "../../loader";

const Blog = ({ posts }: { posts: PostData[] }) => {
  return (
    <>
      <Box h="80px" w="full" />
      <Container maxW="container.lg">
        <Heading>Blog</Heading>
        <Text mt="5">
          Ici c'est l'endroit où vous devriez voir des articles si jamais je
          trouve des idées. Je pourrais parler de tech ou de moi ou de truc cool
          que je trouverais.
        </Text>
        <Divider my="5" />
        <VStack spacing="5" w="full" id="blog-list">
          {posts.map((v, index) => (
            <BlogCard key={"blog-card-" + index} {...v.meta} />
          ))}
        </VStack>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
