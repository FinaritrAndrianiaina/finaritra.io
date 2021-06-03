import {
  Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  HStack,
  Badge,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { format } from "fecha";
import React from "react";
import { PostInfo } from "../blog.type";
import NextLink from "next/link";

export default function BlogCard(props: React.PropsWithChildren<PostInfo>) {
  return (
    <LinkBox
      as="article"
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box
        h={"210px"}
        bg={"gray.100"}
        mt={-6}
        mx={-6}
        mb={6}
        backgroundPosition="center"
        backgroundImage={`url(${props.bannerPhoto})`}
        backgroundSize="cover"
        pos={"relative"}
      />
      <Stack>
        <HStack textTransform={"uppercase"} fontWeight={800}>
          {props.tags.map((v, index) => (
            <Badge variant="outline" key={index + "tags"}>
              {v}
            </Badge>
          ))}
        </HStack>
        <NextLink href={props.canonicalUrl} passHref>
          <LinkOverlay>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.title}
            </Heading>
          </LinkOverlay>
        </NextLink>
        <Text color={"gray.500"}>{props.description}</Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar src={props.authorPhoto} name={props.author} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{props.author}</Text>
          <Text color={"gray.500"}>
            {format(new Date(props.datePublished), "dddd MMMM D, YYYY")}
          </Text>
        </Stack>
      </Stack>
    </LinkBox>
  );
}
