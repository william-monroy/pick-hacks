import { Card, Col, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card cover css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Supercharged
        </Text>
        <Text h4 color="white">
          Creates beauty like a beast
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-2.jpeg"
      height={340}
      width="100%"
      alt="Card image background"
    />
  </Card>
);
