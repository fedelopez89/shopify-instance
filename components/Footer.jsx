"use client";
import React from "react";
import { Center, Box } from "@chakra-ui/react";
import * as CONST from "../lib/constants";

const Footer = () => {
  return (
    <Center py={6}>
      <Box
        as="a"
        href="/"
        p={2}
        borderWidth={2}
        borderRadius="md"
        backgroundColor="blue.500"
        color="white"
        _hover={{ backgroundColor: "blue.600", textDecoration: "none" }}
      >
        {CONST.RETURN_MAIN_MENU}
      </Box>
    </Center>
  );
};

export default Footer;
