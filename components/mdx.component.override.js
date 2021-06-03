import withProps from "./withProps";
import * as ChakraComponent from "@chakra-ui/react";
import {
  Divider,
  Heading,
  Text,
  chakra,
  Link,
  Image,
  Code,
} from "@chakra-ui/react";
import CodeHighlight from "./CodeHighlight";

export default {
  ...ChakraComponent,
  h1: withProps(Heading, { as: "h1", size: "2xl", my: 2 }),
  h2: withProps(Heading, { as: "h2", size: "xl", my: 2 }),
  h3: withProps(Heading, { as: "h3", size: "lg", my: 2 }),
  h4: withProps(Heading, { as: "h4", size: "md", my: 2 }),
  h5: withProps(Heading, { as: "h5", size: "sm", my: 2 }),
  h6: withProps(Heading, { as: "h6", size: "xs", my: 2 }),
  Strong: withProps(chakra.span, { fontStyle: "bold" }),
  img: withProps(Image, {
    width: "80%",
    objectFit: "cover",
    mx: "auto",
    borderRadius: 10,
    shadow: "xl",
  }),
  code: CodeHighlight,
  p: withProps(Text, { fontSize: ["sm", "md"], my: 5 }),
  a: withProps(Link, {
    isExternal: true,
    color: "teal.500",
  }),
  ol: withProps(chakra.ol, {
    padding: ["revert", "initial"],
  }),
  ul: withProps(chakra.ul, {
    padding: ["revert", "initial"],
  }),
  inlineCode: withProps(Code, {
    py: 1,
    shadow: "sm",
  }),
  hr: withProps(Divider, { marginY: 5 }),
  blockquote: withProps(chakra.blockquote, {
    borderLeft: "0.5em solid",
    color: "whiteAlpha.800",
    borderColor: "gray.800",
    bg: "#55575a",
    py: 3,
    pl: 1,
    my: 5,
  }),
};
