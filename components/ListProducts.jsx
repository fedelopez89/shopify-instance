"use client";
import { useColorModeValue } from "@chakra-ui/react";
// Components
import Card from "./Card";
// Utils
import { useQuery } from "@tanstack/react-query";
// Constants
import * as CONST from "../lib/constants";
// Styles
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Center,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const getListProductsClient = async () => {
  const response = await fetch("/api/products");
  const data = await response.json();
  return data?.products;
};

const ListProducts = () => {
  const { data, isLoading, error } = useQuery(["products"], () =>
    getListProductsClient()
  );

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "white");

  if (isLoading) {
    return (
      <Center height="80vh">
        <Spinner size="xl" thickness="4px" color="blue.500" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" borderRadius="md" m={4}>
        <AlertIcon />
        <AlertTitle mr={2}>An error occurred:</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box bg={bgColor} color={textColor} p={10}>
      <Center>
        <Text
          fontSize="4xl"
          mb={5}
          bgGradient="linear(to-l, blue.500, purple.500)"
          bgClip="text"
        >
          {CONST.LIST_PRODUCTS}
        </Text>
      </Center>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {data.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product?.image?.src ?? ""}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ListProducts;
