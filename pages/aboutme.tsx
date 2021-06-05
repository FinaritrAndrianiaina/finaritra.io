import { Box, Container, Divider } from "@chakra-ui/layout";
import React from "react";
import RepositoryCardList, { UserCard } from "../components/Profile";

const AboutMe = () => {
  return (
    <Box w="full" minH="calc( 100vh - 209px )" p="5" pt="80px">
      <UserCard />
      <Divider my="5" />
      <RepositoryCardList />
    </Box>
  );
};

export default AboutMe;
