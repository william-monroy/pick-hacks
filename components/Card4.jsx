import { Button, Card, Col, Row, Text } from "@nextui-org/react";

export const Card4 = ({ data, css, onClick }) => (
  <Card cover css={{ w: "100%", css }} onClick={onClick}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {data.tags}
        </Text>
        <Text h3 color="black">
          {data.title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={data.image}
        height={400}
        width="100%"
        alt="Card example background"
      />
    </Card.Body>
  </Card>
);
