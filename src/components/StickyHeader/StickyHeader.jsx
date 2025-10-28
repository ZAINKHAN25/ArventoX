import { Box, Button } from '@chakra-ui/react';
import PRODUCTS from "../../DataFile/Data/data.js";

function StickyHeader({ selectedCategory, setSelectedCategory }) {
  const categories = ["All Products", ...new Set(PRODUCTS.map(item => item.category.trim()))];

  return (
    <Box
      pos={"sticky"}
      top={0}
      w={"100vw"}
      bg={"white"}
      borderBottomWidth={1}
      borderBottomColor={"gray.200"}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      flexWrap={"wrap"}
      gap={3}
      p={3}
      zIndex={1000}
      borderTop={"1px solid #cccdcd"}
    >
      {categories.map((category, index) => (
        <Button
          key={index}
          onClick={() => setSelectedCategory(category)}
          bg={selectedCategory === category ? "#2563eb" : "#e5e7e9"}
          color={selectedCategory === category ? "white" : "black"}
          borderRadius="3xl"
          _hover={{
            bg: selectedCategory === category ? "#1d4ed8" : "#d1d5db",
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}

export default StickyHeader;
