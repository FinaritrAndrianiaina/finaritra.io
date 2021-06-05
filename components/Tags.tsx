import { HStack, Badge } from "@chakra-ui/react";
import React from "react";

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <HStack my="1" w="full" textTransform={"uppercase"} fontWeight={800}>
      {tags.map((v, index) => (
        <Badge variant="outline" key={index + "tags"}>
          {v}
        </Badge>
      ))}
    </HStack>
  );
};
