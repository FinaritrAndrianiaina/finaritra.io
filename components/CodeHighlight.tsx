import React from "react";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import gql from "react-syntax-highlighter/dist/cjs/languages/prism/graphql";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { CopyIcon } from "@chakra-ui/icons";

SyntaxHighlighter.registerLanguage("prisma", gql);

const CodeHighlight: React.FC = (props: any) => {
  const { hasCopied, onCopy } = useClipboard(props.children);
  const language = props.className.split("-")[1];
  return (
    <VStack w="full" align="start" spacing="0">
      <HStack
        bg="gray.600"
        color="white"
        borderTopRadius="13px"
        justifyContent="space-between"
        w="full"
      >
        <Heading p="2px" pl="15px" m="0" size="xs">
          {language}
        </Heading>
        <Button
          onClick={onCopy}
          leftIcon={<CopyIcon />}
          borderTopRightRadius="13px"
          colorScheme="whatsapp"
          borderLeftRadius="0"
          borderBottomRightRadius="0"
        >
          {!hasCopied ? "Copy" : "Copied"}
        </Button>
      </HStack>
      <SyntaxHighlighter
        customStyle={{
          width: "100%",
          marginTop: "0",
          borderBottomLeftRadius: "13px",
          borderBottomRightRadius: "13px",
        }}
        style={tomorrow}
        showLineNumbers
        language={(function (): string {
          switch (language) {
            case "ts":
              return "typescript";
            case "js":
              return "javascript";
            case "prisma":
              return "graphql";
            default:
              return language;
          }
        })()}
      >
        {props.children}
      </SyntaxHighlighter>
    </VStack>
  );
};
export default CodeHighlight;
