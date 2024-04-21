import React from "react";
import { Flex, Box, Heading, IconButton, Link, Menu, MenuButton, MenuList, MenuItem, Button, HStack, useColorModeValue, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" p={5} bg="transparent" color="white" position="fixed" top={0} zIndex={10} boxShadow="sm" _after={{ content: '""', position: "absolute", width: "full", height: "full", bg: "black", opacity: "0.7", zIndex: "-1", transition: "opacity 300ms ease-in-out" }} _hover={{ _after: { opacity: "0.85" } }}>
      <IconButton size="md" icon={<FaBars />} aria-label="Open Menu" display={{ md: "none" }} onClick={onOpen} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Fitness</DrawerHeader>
          <DrawerBody>
            <Link href="/" p={2}>
              Home
            </Link>
            <Link href="/about" p={2}>
              About
            </Link>
            <Link href="/contact" p={2}>
              Contact
            </Link>
            <Menu>
              <MenuButton as={Button} rightIcon={<FaChevronDown />} p={2}>
                Services
              </MenuButton>
              <MenuList>
                <MenuItem>Personal Training</MenuItem>
                <MenuItem>Group Classes</MenuItem>
                <MenuItem>Nutrition Plans</MenuItem>
              </MenuList>
            </Menu>
            <Link href="/login" p={2}>
              Login
            </Link>
            <Link href="/register" p={2}>
              Register
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Fitness
        </Heading>
      </Flex>
      <HStack spacing={8} alignItems={"center"} display={{ base: "none", md: "flex" }}>
        <Link href="/" p={2}>
          Home
        </Link>
        <Link href="/about" p={2}>
          About
        </Link>
        <Link href="/contact" p={2}>
          Contact
        </Link>
        <Menu>
          <MenuButton as={Button} rightIcon={<FaChevronDown />} p={2}>
            Services
          </MenuButton>
          <MenuList>
            <MenuItem>Personal Training</MenuItem>
            <MenuItem>Group Classes</MenuItem>
            <MenuItem>Nutrition Plans</MenuItem>
          </MenuList>
        </Menu>
        <Link href="/login" p={2}>
          Login
        </Link>
        <Link href="/register" p={2}>
          Register
        </Link>
      </HStack>
    </Flex>
  );
};

export default Header;
