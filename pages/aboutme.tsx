import { Box, Divider, Flex, VStack } from "@chakra-ui/layout";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import React from "react";
import Markdown from "../components/Markdown";
import { Profile } from "../components/Profile";
import { RepositoryCardList } from "../components/RepositoryCardList";
import { loadMarkdownFile } from "../loader";
import { UserInfo } from "../components/UserInfo";

const AboutMe = ({ aboutme }: any) => {
  return (
    <>
      <NextSeo title="A propos de moi - finaritra.io" />
      <Box w="full" minH="calc( 100vh - 209px )" pt="80px" px={["5", "10"]}>
        <Flex
          flexDir={[
            "column-reverse",
            "column-reverse",
            "column-reverse",
            "row",
          ]}
        >
          <VStack spacing="2">
            <Profile />
            <UserInfo />
          </VStack>
          <Box p={"5"} w="full">
            <Markdown md={aboutme} />
          </Box>
        </Flex>
        <Divider my="5" />
        <RepositoryCardList />
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const aboutme = await loadMarkdownFile("aboutme.mdx");
  const data = await serialize(aboutme.content);
  return { props: { aboutme: data } };
};

export default AboutMe;
