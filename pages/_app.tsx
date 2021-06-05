import {
  Box,
  Center,
  chakra,
  ChakraProvider,
  Heading,
  IconButton,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar, NavLink } from "../components/Navbar";
import { BiMenu } from "react-icons/bi";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const Loading = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
    return () => {
      router.events.off("routeChangeStart", () => {
        setLoading(true);
      });
      router.events.off("routeChangeComplete", () => {
        setLoading(false);
      });
    };
  }, []);
  return (
    loading && (
      <Center
        bg={useColorModeValue("white", "gray.800")}
        zIndex="1"
        position="fixed"
        top="0"
        width="full"
        height="100vh"
      >
        <Spinner size="xl" />
      </Center>
    )
  );
};

const App: React.FC = ({ Component, pageProps }: any) => {
  return (
    <>
      <ChakraProvider>
        <Loading />

        <Navbar
          mobileContent={<IconButton icon={<BiMenu />} aria-label="menu" />}
          brand={<Heading>Blog</Heading>}
        >
          <NavLink href="/">Home 🏠</NavLink>
          <NavLink href="/aboutme">About me 😎</NavLink>
          <NavLink href="/blog">Blog 📰</NavLink>
        </Navbar>
        <SWRConfig
          value={{ fetcher: (url) => fetch(url).then((data) => data.json()) }}
        >
          <chakra.main mb="10">
            <Component {...pageProps} />
          </chakra.main>
        </SWRConfig>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export default App;
