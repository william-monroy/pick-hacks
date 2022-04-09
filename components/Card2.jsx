import { Card, Col, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card width="100%" cover>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Plant a tree
        </Text>
        <Text h4 color="white">
          Contribute to the planet
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-3.jpeg"
      height={340}
      width="100%"
      alt="Card image background"
    />
  </Card>
);
