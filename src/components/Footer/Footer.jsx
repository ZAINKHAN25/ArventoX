import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      bg={"#111827"}
      color={"white"}
      px={5}
      py={"10vh"}
    >
      <Heading
        size={"4xl"}
      >
        🛍️ Premium Products
      </Heading>

      <Heading
        size={"xl"}
        my={5}
        color={"gray.300"}
      >Discover amazing products at unbeatable prices</Heading>

      <Flex mt={10} flexDirection={"row"} gap={5} flexWrap={"wrap"} justifyContent={"center"}>
        <Button
          variant="outline"
          color={"white"}
          borderRadius={"3xl"}
          _hover={{
            bg: "white",
            color: "black"
          }}
        >
          ✨ Best Quality
        </Button>
        <Button
          variant="outline"
          color={"white"}
          borderRadius={"3xl"}
          _hover={{
            bg: "white",
            color: "black"
          }}
        >
          🚚 Fast Shipping
        </Button>
        <Button
          variant="outline"
          color={"white"}
          borderRadius={"3xl"}
          _hover={{
            bg: "white",
            color: "black"
          }}
        >
          💯 Trusted Brands
        </Button>
        </Flex>
    </Box>
  )
}

export default Footer