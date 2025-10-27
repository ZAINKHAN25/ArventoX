import { Button, Card, Image, Link, Text } from "@chakra-ui/react"

const CardTemplate = ({ data }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Green double couch with wooden legs"
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
