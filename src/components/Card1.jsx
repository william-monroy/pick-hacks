import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = () => (
  <Card cover>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://nextui.org/images/card-example-4.jpeg"
      height={340}
      width="100%"
      alt="Card image background"
    />
  </Card>
);
