import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const Card5 = ({ data, css, onClick }) => (
  <Card cover css={{ w: "100%", p: 0, css }} onClick={onClick}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
          {data.tags}
        </Text>
        <Text h3 color="white">
          {data.title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body>
      <Card.Image
        src={data.image}
        height={400}
        width="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
  </Card>
);
