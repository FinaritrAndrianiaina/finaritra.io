import {
  ChakraProvider,
  ColorModeProvider,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  Navbar,
  NavLink,
  NavLinkWithChild,
  SubLink,
} from "../components/Navbar";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <>
      <ChakraProvider>
        <Navbar
          mobileContent={<IconButton icon={<BiMenu />} aria-label="menu" />}
          brand={<Heading>Blog</Heading>}
        >
          <NavLink href="/">Home 🏠</NavLink>
        </Navbar>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
