import { Box, Button } from '@chakra-ui/react';
import PRODUCTS  from "../../DataFile/Data/data.js";

function StickyHeader() {
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
        >
            {/* {
                // Data.
            }
            <Button
                bg={"#2563eb"}
                variant="outline"
                color={"white"}
                borderRadius={"3xl"}
                _hover={{
                    bg: "#1d4ed8",
                }}
            >
                All Products
            </Button>
            <Button
                bg={"#e5e7e9"}
                variant="outline"
                color={"black"}
                borderRadius={"3xl"}
                _hover={{
                    bg: "#d1d5db",
                }}
            >
                📱 Electronics
            </Button> */}
            {categories.map((category, index) => (
                <Button
                    key={index}
                    bg={category === "All Products" ? "#2563eb" : "#e5e7e9"}
                    color={category === "All Products" ? "white" : "black"}
                    borderRadius="3xl"
                    _hover={{
                        bg: category === "All Products" ? "#1d4ed8" : "#d1d5db",
                    }}
                >
                    {category}
                </Button>
            ))}
        </Box>
    )
}

export default StickyHeader