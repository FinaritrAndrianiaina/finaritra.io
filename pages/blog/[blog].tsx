import React from "react";
import { loadPost } from "../../loader";
import { serialize } from "next-mdx-remote/serialize";
import Markdown from "../../components/Markdown";
import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { PostInfo } from "../../blog.type";
import { GetStaticPaths } from "next";
import { Avatar } from "@chakra-ui/avatar";
import { format } from "fecha";
import { Tags } from "../../components/Tags";

function Post(props: { meta: PostInfo; post: any; error: boolean }) {
  const { post, meta, error } = props;
  if (error) {
    return (
      <>
        <Center height="100vh">
          <Heading>404 | Not found</Heading>
        </Center>
      </>
    );
  }
  return (
    <>
      {meta.bannerPhoto ? (
        <Box
          width="full"
          height="310px"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(${meta.bannerPhoto})`}
        />
      ) : (
        <Box width="full" height="80px" />
      )}
      <Container maxW="container.lg">
        <VStack w="full" mt="5" spacing="5">
          <Box w="full">
            <Heading size="lg">{meta.title}</Heading>
            <Text my="2">{meta.description}</Text>
            <Tags tags={meta.tags} />
          </Box>
          <Stack direction={"row"} spacing={4} w="full">
            <Avatar src={meta.authorPhoto} name={meta.author} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{meta.author}</Text>
              <Text color={"gray.500"}>
                {format(new Date(meta.datePublished), "dddd MMMM D, YYYY")}
              </Text>
            </Stack>
          </Stack>
        </VStack>
        <Divider my="5" />
        <Markdown md={post} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<any> = async () => {
  return {
    paths: [],
    fallback: "unstable_blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  try {
    const { meta, content } = await loadPost(`blog/${params.blog}.mdx`);
    const post = await serialize(content);
    return { props: { post, meta, error: false } };
  } catch (error) {
    return { props: { error: true } };
  }
};

export default Post;
