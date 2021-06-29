import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  VStack,
  Link,
} from "@chakra-ui/react";
import { format } from "fecha";
import React from "react";
import { PostInfo } from "../blog.type";
import NextLink from "next/link";
import { Tags } from "./Tags";

export default function BlogCard(props: React.PropsWithChildren<PostInfo>) {
  return (
    <LinkBox
      _hover={{ transform: "scale(1.01)" }}
      transition="ease .3s"
      as="article"
      display="flex"
      w="full"
      flexDirection="column"
      justifyContent="space-between"
      bg={useColorModeValue("white", "gray.900")}
      borderColor={useColorModeValue("gray.300", "gray.500")}
      borderWidth="thin"
      boxShadow="md"
      rounded={"md"}
      overflow={"hidden"}
    >
      <Stack flexDirection={["column", "row"]} w="full">
        {props.bannerPhoto && (
          <Box
            bg={"gray.100"}
            w={["full", "50%"]}
            h="200px"
            backgroundPosition="center"
            backgroundImage={`url(${props.bannerPhoto})`}
            backgroundSize="cover"
            pos={"relative"}
          />
        )}
        <VStack p="5" w="full">
          <VStack justifyContent="center" spacing="2" w="full">
            <Tags tags={props.tags} />
            <Heading
              w="full"
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              <NextLink href={props.canonicalUrl} passHref>
                <LinkOverlay as={Link}>{props.title}</LinkOverlay>
              </NextLink>
            </Heading>
            <Text w="full" color={"gray.500"}>
              {props.description}
            </Text>
          </VStack>
          <Stack direction={"row"} spacing={4} w="full">
            <Avatar src={props.authorPhoto} size="sm" name={props.author} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{props.author}</Text>
              <Text color={"gray.500"}>
                {format(new Date(props.datePublished), "dddd MMMM D, YYYY")}
              </Text>
            </Stack>
          </Stack>
        </VStack>
      </Stack>
    </LinkBox>
  );
}
