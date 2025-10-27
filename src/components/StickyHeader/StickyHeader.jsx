import { Box, Button } from '@chakra-ui/react';

function StickyHeader() {
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
                👕 Fashion
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
                🏠 Home & Garden
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
                💄 Health & Beauty  
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
                ⚽ Sports & Fitness  
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
                📚 Books  
            </Button>
        </Box>
    )
}

export default StickyHeader