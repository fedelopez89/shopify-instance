"use client";
import Image from "next/image";
// Components
import Footer from "../components/Footer";
// Styles
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Center,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
// Constants
import * as CONST from "../lib/constants";
// Utils
import { useQuery } from "@tanstack/react-query";

const getProductDetail = async ({ productId }) => {
  const response = await fetch(`/api/product/${productId}`);
  const data = await response.json();
  return data?.product;
};

const ProductDetail = ({ productId }) => {
  const { data, isLoading, error } = useQuery([productId], () =>
    getProductDetail({ productId })
  );

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.50");

  if (isLoading) {
    return (
      <Center h="80vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert status="error" borderRadius="lg" my={4}>
        <AlertIcon />
        <AlertTitle mr={2}>{CONST.ERROR_OCCURRED}</AlertTitle>
        <AlertDescription>{error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <Box bg={bgColor} color={textColor} minH="100vh">
      <Flex direction="column" maxW="2xl" mx="auto" p={8} align="center">
        <Heading as="h1" size="2xl" mb={6} textAlign="center">
          {data?.title}
        </Heading>
        <Box
          bg={bgColor}
          borderWidth={1}
          p={6}
          borderRadius="lg"
          width="full"
          boxShadow="xl"
        >
          <Flex justify="center" mb={4}>
            {data?.image ? (
              <Image
                src={data?.image.src}
                alt={data?.image.alt || data?.title}
                width={300}
                height={300}
                objectFit="contain"
              />
            ) : (
              <Box
                width="300px"
                height="300px"
                bg="gray.300"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>{CONST.NO_IMAGE_AVAILABLE}</Text>
              </Box>
            )}
          </Flex>
          <Text fontSize="sm" color="gray.500" mb={2}>
            {`${CONST.PRODUCT_ID} ${data?.id}`}
          </Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            {`${CONST.PRODUCT_VENDOR} `}
            <Badge colorScheme="teal">{data?.vendor}</Badge>
          </Text>
          <Text
            fontSize="lg"
            mb={2}
            dangerouslySetInnerHTML={{ __html: data?.body_html }}
          />
          <Heading as="h4" size="md" mb={2}>
            {CONST.PRODUCT_VARIANTS}
          </Heading>
          <List spacing={2} styleType="disc">
            {data?.variants?.map((variant) => (
              <ListItem key={variant.id}>
                <Badge colorScheme="purple" mr={2}>
                  {variant.title}
                </Badge>
                - ${variant.price}
              </ListItem>
            ))}
          </List>
        </Box>
      </Flex>
      <Footer />
    </Box>
  );
};

export default ProductDetail;
