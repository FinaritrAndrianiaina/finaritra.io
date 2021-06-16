import React from "react";
import {
  Badge,
  Text,
  HStack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  LinkBox,
  LinkOverlay,
  Link,
} from "@chakra-ui/react";
import { ReposList } from "../github.type";
import { BiGitRepoForked, BiStar } from "react-icons/bi";
import useSWR from "swr";
import NextLink from "next/link";

export const RepositoryCardList = ({ limit = 0 }) => {
  const { data: userRepos } = useSWR<ReposList, any>(
    "https://api.github.com/users/FinaritrAndrianiaina/repos?type=owner&sort=updated&direction=desc&per_page=100&page=1"
  );
  return (
    <Flex flexDirection={["column", "column", "column", "row"]} w="full">
      <Flex flexWrap="wrap" w="full">
        {userRepos
          ?.slice(0, limit === 0 ? userRepos.length : limit)
          .filter((repo) => !repo.fork)
          .sort((b, a) => a.stargazers_count - b.stargazers_count)
          .map((v, index) => (
            <Stat
              minW="300px"
              as={LinkBox}
              key={index + "-repos"}
              p="5"
              my="1"
              mx={["0", "1"]}
              borderWidth="thin"
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
                </HStack>
              </StatNumber>
              <StatHelpText>{v.description}</StatHelpText>
            </Stat>
          ))}
      </Flex>
    </Flex>
  );
};
