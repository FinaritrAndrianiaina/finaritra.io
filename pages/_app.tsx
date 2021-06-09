import {
  Center,
  chakra,
  ChakraProvider,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Icon,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Spinner,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Navbar, NavLink } from "../components/Navbar";
import { BiHome, BiMenu, BiNews } from "react-icons/bi";
import { Footer } from "../components/Footer";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { DefaultSeo } from "next-seo";
import { defaultSeoData } from "../globals";
import { FaHatWizard, FaHome, FaRegNewspaper } from "react-icons/fa";

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
const SwitchCL = () => {
  const { toggleColorMode } = useColorMode();
  return <Switch onChange={toggleColorMode} />;
};
const App: React.FC = ({ Component, pageProps }: any) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <DefaultSeo {...defaultSeoData} />
      <ChakraProvider>
        <Loading />

        <Navbar
          mobileContent={
            <IconButton
              onClick={onToggle}
              icon={<BiMenu />}
              aria-label="menu"
            />
          }
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
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerHeader>
                <Heading>F.</Heading>
                <DrawerCloseButton />
              </DrawerHeader>
              <Divider />
              <DrawerBody>
                <List spacing="2">
                  <ListItem as={NavLink} w="full" href="/">
                    <ListIcon as={FaHome} color="green.500" />
                    Home
                  </ListItem>
                  <ListItem as={NavLink} w="full" href="/aboutme">
                    <ListIcon as={FaHatWizard} color="blue.400" />
                    Me
                  </ListItem>
                  <ListItem as={NavLink} w="full" href="/blog">
                    <ListIcon color="facebook.500" as={FaRegNewspaper} />
                    Blog
                  </ListItem>
                </List>
              </DrawerBody>
              <Divider />
              <DrawerFooter>
                <SwitchCL />
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
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
