import { Button, Flex, Heading } from '@chakra-ui/react';

function LandingComponent() {
  return (
    <Flex
      width={"100vw"}
      h={
        {
          base: "max-content",
          lg: "60vh"
        }
      }
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      gap={
        { lg: 4, base: 1 }
      }
      bgGradient="to-l"
      gradientTo={"#667de8"}
      gradientFrom={"#7158b5"}
      color={"white"}
      px={5}
      py={"10vh"}
    >

      <Heading
        size={
          { lg: "6xl", base: "4xl" }
        }
      >
        🛍️ Premium Products
      </Heading>

      <Heading
        size={{
          lg: "3xl",
          base: "xl"
        }}
        mb={10}
      >Discover amazing products at unbeatable prices</Heading>

      <Flex flexDirection={"row"} gap={{ lg: 5, base: 2 }} flexWrap={"wrap"} justifyContent={"center"}>
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