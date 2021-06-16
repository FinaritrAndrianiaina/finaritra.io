import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Badge,
  Text,
  Stack,
  useColorModeValue,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Link,
  VStack,
} from "@chakra-ui/react";
import { UserSchema } from "../github.type";
import { BiBook, BiGroup } from "react-icons/bi";
import useSWR from "swr";
import NextLink from "next/link";

export const Profile = () => {
  const { data: userInfo } = useSWR<UserSchema, any>(
    "https://api.github.com/users/FinaritrAndrianiaina"
  );

  return (
    <LinkBox
      w="inherit"
      display="flex"
      flexDir="column"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"md"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Box>
        <Avatar
          size={"xl"}
          src={userInfo?.avatar_url}
          name="FinaritrAndrianiaina"
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          ANDRIANIAINA Finaritra Haritiana
        </Heading>
        <NextLink href={userInfo ? userInfo.html_url : "#"} passHref>
          <LinkOverlay isExternal as={Link}>
            <Text fontWeight={600} color={"gray.500"} mb={4}>
              FinaritrAndrianiaina
            </Text>
          </LinkOverlay>
        </NextLink>
      </Box>
      <Box>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {userInfo?.bio}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            NEXTJS
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            PRISMA
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            NESTJS
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            WEB3
          </Badge>
        </Stack>

        <VStack mt="4" justifyContent="center" direction={"row"} spacing={4}>
          <HStack>
            <Icon as={BiGroup} />
            <span>
              <strong>{userInfo?.followers}</strong> followers -{" "}
              <strong>{userInfo?.following}</strong> following
            </span>
          </HStack>
          <HStack>
            <Icon as={BiBook} />
            <span>
              <strong>{userInfo?.public_repos}</strong> public repository
              repository
            </span>
          </HStack>
        </VStack>
      </Box>
    </LinkBox>
  );
};
