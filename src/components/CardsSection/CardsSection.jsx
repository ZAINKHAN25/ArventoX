import { Box } from '@chakra-ui/react';
import CardTemplate from "./CardTemplate.jsx";

function CardsSection() {
  return (
    <Box
        width={"100vw"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={5}
        flexWrap={"wrap"}
        padding={10}
    >
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
        <CardTemplate data={"data"} />
    </Box>
  )
}

export default CardsSection