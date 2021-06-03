import {
  ChakraProvider,
  ColorModeProvider,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import {
  Navbar,
  NavLink,
  NavLinkWithChild,
  SubLink,
} from "../components/Navbar";
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";

const App: React.FC = ({ Component, pageProps }: any) => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <ChakraProvider>
        <Navbar
          mobileContent={<IconButton icon={<BiMenu />} aria-label="menu" />}
          brand={<Heading>Blog</Heading>}
        >
          <NavLink href="/">Home 🏠</NavLink>
          <IconButton
            icon={useColorModeValue(<BiMoon />, <BiSun />)}
            aria-label="colormode-btn"
            onClick={toggleColorMode}
          />
        </Navbar>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
