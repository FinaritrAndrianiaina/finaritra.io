import React from "react";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";
import { css } from "@emotion/react";

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight;

const CodeHighlight: React.FC = (props: any) => {
  return (
    <SyntaxHighlighter
      style={atomDark}
      showLineNumbers
      language={
        (props.className.split("-")[1] === "ts"
          ? "typescript"
          : props.className.split("-")[1]) || "typescript"
      }
    >
      {props.children}
    </SyntaxHighlighter>
  );
};
export default CodeHighlight;
