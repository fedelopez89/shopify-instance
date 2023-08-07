"use client";
import Image from "next/image";
import Link from "next/link";
// Utils
import { convertTitleToHandle } from "./../lib/utils";
// Styles
import { Box, Text, VStack, Flex } from "@chakra-ui/react";

const Card = ({ title, description, image }) => {
  return (
    <Link href={`/product/${convertTitleToHandle(title)}`} passHref>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="white"
        boxShadow="sm"
        _hover={{ boxShadow: "md" }}
        transition="0.3s"
      >
        <Flex justify="center" pt={4}>
          {image ? (
            <Image
              src={image ?? ""}
              alt={title}
              width="200"
              height="200"
              fit="cover"
            />
          ) : (
            <Box
              width="200px"
              height="200px"
              bg="gray.200"
              display="flex"
              alignItems="center"
              justifyContent="center"
            />
          )}
        </Flex>
        <VStack p="6" align="start" spacing={2}>
          <Text fontSize="lg" fontWeight="semibold" color="gray.600">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
};

export default Card;
