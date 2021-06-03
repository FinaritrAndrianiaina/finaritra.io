import { ChakraProvider, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import {
  Navbar,
  NavLink,
  NavLinkWithChild,
  SubLink,
} from "../components/Navbar";
import { BiMenu } from "react-icons/bi";

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <>
      <ChakraProvider>
        <Navbar
          mobileContent={<IconButton icon={<BiMenu />} aria-label="menu" />}
          brand={<Heading>Blog</Heading>}
        >
          <NavLink href="/">Home 🏠</NavLink>
          <NavLinkWithChild href="/" title="Blog 📰">
            <SubLink href="/" title="Titre" m="5">
              Lorem
            </SubLink>
          </NavLinkWithChild>
        </Navbar>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
