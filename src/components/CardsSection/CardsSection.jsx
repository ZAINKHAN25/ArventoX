import { Box } from '@chakra-ui/react';
import CardTemplate from "./CardTemplate.jsx";

import data from "../../DataFile/Data/data.js";

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
      {
        data.map((item) => (
          <CardTemplate key={item.id} data={item} />
        ))
      }
    </Box>
  )
}

export default CardsSection