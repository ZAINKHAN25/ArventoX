import { Button, Card, Image, Link, Text } from "@chakra-ui/react"

const CardTemplate = ({ data }) => {
  
  return (
    <Card.Root maxW={400} overflow="hidden">

      <Image
        src={data.imagelink.src}
        alt="Green double couch with wooden legs"
        fit={"cover"}
      />

      <Card.Body gap="2">


        <Card.Title>{data.name}</Card.Title>

        <Card.Description>
          {data.description}
        </Card.Description>


      </Card.Body>
      <Card.Footer>

        <Link width={"100%"} variant={"solid"} href={data.link}>
          <Button width={"100%"} variant="solid">
            Buy now
          </Button>
        </Link>

      </Card.Footer>

    </Card.Root>
  )
}

export default CardTemplate;
