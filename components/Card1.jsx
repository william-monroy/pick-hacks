import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = ({ data, onClick, css }) => (
  <Card cover css={css} onClick={() => onClick()}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          {data.tags}
        </Text>
        <Text h4 color="white">
          {data.title}
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src={data.image}
      height={340}
      width="100%"
      alt="Card image background"
    />
  </Card>
);
