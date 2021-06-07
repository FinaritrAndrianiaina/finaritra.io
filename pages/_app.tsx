import {
  Center,
  chakra,
  ChakraProvider,
  Heading,
  Icon,
  IconButton,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar, NavLink } from "../components/Navbar";
import { BiHome, BiMenu, BiNews } from "react-icons/bi";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";
import { defaultSeoData } from "../globals";
import { FaHatWizard, FaHome } from "react-icons/fa";

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
      <DefaultSeo {...defaultSeoData} />
      <ChakraProvider>
        <Loading />

        <Navbar
          mobileContent={<IconButton icon={<BiMenu />} aria-label="menu" />}
          brand={<Heading>Blog</Heading>}
        >
          <NavLink leftIcon={<Icon color="green.500" as={FaHome} />} href="/">
            Acceuil
          </NavLink>
          <NavLink
            leftIcon={<Icon color="blue.500" as={FaHatWizard} />}
            href="/aboutme"
          >
            Moi
          </NavLink>
          <NavLink
            leftIcon={<Icon as={BiNews} color="facebook.500" />}
            href="/blog"
          >
            Blog
          </NavLink>
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
