import React from "react";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";
import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { CopyIcon } from "@chakra-ui/icons";

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight;

const CodeHighlight: React.FC = (props: any) => {
  const { hasCopied, onCopy } = useClipboard(props.children);
  const language = props.className.split("-")[1];
  return (
    <VStack w="full" align="start" spacing="0">
      <HStack
        boxShadow="#252525 3px 11px 20px 0px"
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
        style={tomorrow}
        className={"prestyle"}
        showLineNumbers
        language={(language === "ts" ? "typescript" : language) || "typescript"}
      >
        {props.children}
      </SyntaxHighlighter>
    </VStack>
  );
};
export default CodeHighlight;
