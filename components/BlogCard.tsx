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
  VStack,
} from "@chakra-ui/react";
import { format } from "fecha";
import React from "react";
import { PostInfo } from "../blog.type";
import NextLink from "next/link";
import Link from "next/link";

export default function BlogCard(props: React.PropsWithChildren<PostInfo>) {
  return (
    <LinkBox
      _hover={{ transform: "scale(1.01)" }}
      transition="ease .3s"
      as="article"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="550px"
      maxW={"600px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="md"
      rounded={"md"}
      overflow={"hidden"}
    >
      <VStack w="full">
        <Box
          h={"210px"}
          bg={"gray.100"}
          w="full"
          mb={6}
          backgroundPosition="center"
          backgroundImage={`url(${props.bannerPhoto})`}
          backgroundSize="cover"
          pos={"relative"}
        />
        <Stack p="5" w="full">
          <HStack textTransform={"uppercase"} fontWeight={800}>
            {props.tags.map((v, index) => (
              <Badge variant="outline" key={index + "tags"}>
                {v}
              </Badge>
            ))}
          </HStack>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            <NextLink href={props.canonicalUrl} passHref>
              <LinkOverlay>{props.title}</LinkOverlay>
            </NextLink>
          </Heading>
          <Text color={"gray.500"}>{props.description}</Text>
        </Stack>
      </VStack>
      <Stack p="5" direction={"row"} spacing={4} align={"center"}>
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
