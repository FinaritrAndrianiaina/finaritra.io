import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { RepositoryCardList, UserCard } from "../components/Profile";

const AboutMe = () => {
  return (
    <Box w="full" minH="calc( 100vh - 209px )" pt="80px" px={["5", "10"]}>
      <Flex
        flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
      >
        <UserCard />
        <Box p={"5"} w="full">
          <Heading mb="5">A propos de moi</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            perspiciatis saepe, commodi in doloribus autem assumenda, aperiam
            neque repudiandae animi reprehenderit enim at cupiditate fugit rerum
            corporis ratione ad? Quis, ducimus nisi voluptatum facere qui ipsa
            sint quae cupiditate ipsum vitae. Expedita aliquam optio inventore.
            Nesciunt blanditiis assumenda tenetur animi quia ab est, modi
            quibusdam porro iste numquam rem. Dolorum iusto sint ut obcaecati.
          </Text>
        </Box>
      </Flex>
      <Divider my="5" />
      <RepositoryCardList />
    </Box>
  );
};

export default AboutMe;
