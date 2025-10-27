import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react'

function LandingComponent() {
  return (
    <Flex
      width={"100vw"}
      minH={"60vh"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={4}
      bgGradient="to-r"
      gradientFrom="#3b82f680"
      gradientTo="purple.700"
      color={"white"}
      padding={5}
    >

      <Heading
        size={"6xl"}
      >
        🛍️ Premium Products
      </Heading>

      <Heading
        size={"3xl"}
        mb={10}
      >Discover amazing products at unbeatable prices</Heading>

      <Flex flexDirection={"row"} gap={5} flexWrap={"wrap"} justifyContent={"center"}> 
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

    </Flex>
  )
}

export default LandingComponent;