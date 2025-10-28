import { Box } from '@chakra-ui/react';
import CardTemplate from "./CardTemplate.jsx";

function CardsSection({ products }) {
  return (
    <Box
      width={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
      flexWrap={"wrap"}
      padding={
        {
          lg: 10, base: 5
        }
      }
    >
      {
        products.map(item => (
          <CardTemplate key={item.id} data={item} />
        ))
      }
    </Box>
  );
}

export default CardsSection;
