import React, { useEffect } from "react";
import {
  Heading,
  Avatar,
  Box,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
  HStack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  LinkBox,
  LinkOverlay,
  Link,
  VStack,
  Grid,
  Center,
} from "@chakra-ui/react";
import { ReposList, UserSchema } from "../github.type";
import { BiBook, BiGitRepoForked, BiGroup, BiStar } from "react-icons/bi";
import useSWR from "swr";
import NextLink from "next/link";
import { FaEye, FaPeopleCarry } from "react-icons/fa";

export const UserCard = () => {
  const { data: userInfo } = useSWR<UserSchema, any>(
    "https://api.github.com/users/FinaritrAndrianiaina"
  );

  return (
    <LinkBox
      m={["1", "5"]}
      display="flex"
      h="full"
      flexDir="column"
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"xl"}
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
              <strong>{userInfo?.public_repos}</strong> repository
            </span>
          </HStack>
        </VStack>
      </Box>
    </LinkBox>
  );
};

const RepositoryCardList = ({ limit = 0 }) => {
  const { data: userRepos } = useSWR<ReposList, any>(
    "https://api.github.com/users/FinaritrAndrianiaina/repos?type=owner&sort=updated&direction=desc&per_page=100&page=1"
  );
  return (
    <Flex flexDirection={["column", "column", "column", "row"]} w="full">
      <Flex flexWrap="wrap" w="full">
        {userRepos
          ?.slice(0, limit === 0 ? userRepos.length : limit)
          .sort((b, a) => a.stargazers_count - b.stargazers_count)
          .map((v, index) => (
            <Stat
              minW="335px"
              as={LinkBox}
              key={index + "-repos"}
              p="5"
              borderWidth="thin"
              m="1"
              minH="100px"
              rounded="13px"
            >
              <NextLink href={v.html_url} passHref>
                <LinkOverlay isExternal as={Link}>
                  <StatLabel>
                    {v.full_name}
                    {v.archived ? (
                      <Badge ml="1" rounded="13px" variant="solid">
                        Archived
                      </Badge>
                    ) : null}
                  </StatLabel>
                </LinkOverlay>
              </NextLink>
              <StatNumber>
                <HStack w="full">
                  <HStack>
                    <Icon as={BiStar} />
                    <Text>{v.stargazers_count}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={BiGitRepoForked} />
                    <Text>{v.forks}</Text>
                  </HStack>
                  <HStack>
                    <Icon as={FaEye} />
                    <Text>{v.watchers_count}</Text>
                  </HStack>
                </HStack>
              </StatNumber>
              <StatHelpText>{v.description}</StatHelpText>
            </Stat>
          ))}
      </Flex>
    </Flex>
  );
};

export default RepositoryCardList;
