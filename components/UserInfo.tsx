import { useColorModeValue } from "@chakra-ui/color-mode";
import {
  Box,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/layout";
import React from "react";
import { BiCurrentLocation, BiEnvelope, BiPhone } from "react-icons/bi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export const UserInfo = () => {
  return (
    <Box
      p="15"
      bg={useColorModeValue("white", "gray.900")}
      width="full"
      borderRadius="13px"
      shadow="md"
    >
      <Heading size="lg" textAlign="center">
        Infos
      </Heading>
      <List spacing="2">
        <ListItem>
          <ListIcon as={BiCurrentLocation} />
          <strong>Location:</strong> Antananarivo, Madagascar
        </ListItem>
        <ListItem>
          <ListIcon as={FaGithub} color="purple.500" />
          <strong>Github:</strong>{" "}
          <Link href="https://github.com/FinaritrAndrianiaina" isExternal>
            FinaritrAndrianiaina
          </Link>
        </ListItem>
        <ListItem>
          <ListIcon as={BiEnvelope} color="telegram.500" />
          <strong>Mail:</strong>
          <Link href="mailto:finaritrandrianiaina@gmail.com">
            {" "}
            finaritrandrianiaina@gmail.com
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
