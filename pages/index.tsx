import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import React from "react";
import { PostData, TimelineElement, Event } from "../blog.type";
import BlogCard from "../components/BlogCard";
import Markdown from "../components/Markdown";
import { Profile } from "../components/Profile";
import { RepositoryCardList } from "../components/RepositoryCardList";
import { loadBlogPosts, loadMarkdownFile } from "../loader";
import { BiCheckCircle } from "react-icons/bi";
import aboutme from "../about.me.json";
import parse from "html-react-parser";
import NextLink from "next/link";
import { UserInfo } from "../components/UserInfo";

const Header = () => {
  return (
    <>
      <Text
        fontSize={[16, 24]}
        textShadow="3px 1px 15px"
        textAlign="justify"
        textTransform="uppercase"
      >
        Bonjour tout le monde, je m'appelle Finaritra Andrianiaina
      </Text>
      <Heading
        size={"xl"}
        as="h1"
        textTransform="uppercase"
        textAlign="justify"
      >
        Je suis passionné de programmation 💻, de jeux vidéos 🎮 et de voyage
        🏃‍♂⛺.
      </Heading>
      <Text fontSize={["sm", "md"]} textAlign="center" pt={2}>
        Vous êtes sur mon site web personnel construit avec nextjs.
      </Text>
    </>
  );
};

const Timeline = ({ timelineItem }: { timelineItem: TimelineElement }) => {
  return (
    <>
      <Heading mt="3" size="md">
        {timelineItem.date}
      </Heading>
      <List mt="1" mb="3" spacing="5">
        {timelineItem.events.map((v: Event, index: any) => (
          <ListItem key={index + "events"}>
            <Flex>
              <Icon
                m="2"
                fontSize="1.5em"
                as={BiCheckCircle}
                color="green.500"
              />
              <Box>
                <Heading mb="1" size="md">
                  {v.title}
                </Heading>
                <Text textAlign="justify">{parse(v.description)}</Text>
              </Box>
            </Flex>
          </ListItem>
        ))}
      </List>
    </>
  );
};
const Home = (props: { introduction: any; posts: PostData[] }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center as="header" height="100vh">
        <Box maxW="container.md" p={[3, 0]}>
          <Header />
        </Box>
      </Center>
      <Divider />
      <Container maxW="container.lg">
        <Box mx={5}>
          <Markdown md={props.introduction} />
          <Heading mb="3">Timeline</Heading>
          <Box>
            {aboutme.timeline.map((timelineItem, index) => {
              if (index > 0) {
                return (
                  <React.Fragment key={index + "tl"}>
                    <Divider mt="3" />
                    <Timeline timelineItem={timelineItem} />
                  </React.Fragment>
                );
              }
              return (
                <React.Fragment key={index + "tl"}>
                  <Timeline timelineItem={timelineItem} />
                </React.Fragment>
              );
            })}
          </Box>
          <Heading my="15">Articles</Heading>
        </Box>
        <Box id="blog-list">
          {props.posts.map((v, index) => (
            <Box my="2" mx="2" key={index + "-card"}>
              <BlogCard {...v.meta} />
            </Box>
          ))}
        </Box>
        <Heading my="5" mx={["0", "1"]}>
          Github
        </Heading>
        <Stack direction={["column", "column", "row"]} spacing={["0", 5]}>
          <Profile />
          <Box w={["full", "50%"]}>
            <Heading py="5" size="md">
              Popular repository
            </Heading>
            <RepositoryCardList limit={4} />
            <NextLink passHref href="/aboutme">
              <Button as="a" variant="solid" w="full">
                Voir tout!!
              </Button>
            </NextLink>
          </Box>
        </Stack>
        <Box p="5">
          <UserInfo />
        </Box>
        <Box m="5">
          <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/album/270762122" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        </Box>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const { content } = await loadMarkdownFile("introduction.mdx");
  const posts = await loadBlogPosts();
  const introduction = await serialize(content);
  return { props: { introduction, posts: posts.slice(0, 3) } };
};

export default Home;
