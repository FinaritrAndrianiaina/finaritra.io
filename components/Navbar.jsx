import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Button,
  chakra,
  Flex,
  useBreakpointValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  HStack,
  Box,
  Stack,
  useColorModeValue,
  Text,
  Link,
  Icon,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import NextLink from "next/link";

const _NavLink = (
  { children, variant = "ghost", colorScheme = undefined, href, ...rest },
  ref
) => (
  <NextLink href={href}>
    <Button
      ref={ref}
      mx="1.5"
      as="a"
      variant={variant}
      colorScheme={colorScheme}
      {...rest}
    >
      {children}
    </Button>
  </NextLink>
);

export const NavLink = React.forwardRef(_NavLink);

export const NavLinkWithChild = ({ children, title, href, ...rest }) => {
  return (
    <Popover trigger="hover" placement="auto">
      <PopoverTrigger>
        <NavLink href={href}>{title}</NavLink>
      </PopoverTrigger>
      <PopoverContent
        bg={useColorModeValue("whiteAlpha.100", "blackAlpha.100")}
        {...rest}
      >
        <PopoverBody backdropFilter="blur(10px)">{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const SubLink = ({ children, title, href, ...rest }) => {
  return (
    <NextLink href={href}>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("blackAlpha.50", "gray.900") }}
        {...rest}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "red.500" }}
              fontWeight={500}
            >
              {title}
            </Text>
            <Text fontSize={"sm"}>{children}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"red.500"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

export const Navbar = ({ children, brand, mobileContent, w = "full" }) => {
  const navRef = useRef(null);
  const mobile = useBreakpointValue({ base: true, lg: false });
  return (
    <>
      <Box zIndex="1" position="fixed" boxShadow="sm" w={w}>
        <Flex
          ref={navRef}
          width="full"
          py={{ md: "15px", base: "10px" }}
          px={{ lg: "60px", md: "10px", base: "5px" }}
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          bg={useColorModeValue("whiteAlpha.100", "blackAlpha.100")}
          sx={{ backdropFilter: "blur(10px)" }}
        >
          <Flex flex={1} flexShrink={"initial"} mr="6">
            {brand}
          </Flex>
          <HStack spacing="5" hidden={mobile} width={"auto"}>
            {children}
          </HStack>
          {Boolean(mobileContent) && (
            <HStack spacing="4" hidden={!mobile} width={"auto"}>
              {mobileContent}
            </HStack>
          )}
        </Flex>
      </Box>
      <chakra.div zIndex="0" h={{ base: "60px", md: "73px" }} w="full" />
    </>
  );
};
