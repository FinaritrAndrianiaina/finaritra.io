import { MDXRemote } from "next-mdx-remote";
import React from "react";
import componentsOverride from "./mdx.component.override";

const Markdown = ({ md }: any) => {
  return <MDXRemote {...md} components={componentsOverride} />;
};

export default Markdown;
