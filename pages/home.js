import { Grid, Modal, Text } from "@nextui-org/react";
import { Card1 } from "../components/Card1";
import { Card2 } from "../components/Card2";
import { Card3 } from "../components/Card3";
import { Card4 } from "../components/Card4";
import { Card5 } from "../components/Card5";
import { useState, useEffect } from "react";
import { getProfile } from "../utils/user";
import { getContent } from "../utils/content";
import { AddPoints } from "../utils/points";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [user, setUser] = useState({});
  const [content, setContent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (id) => {
    setContent(id);
    setIsOpen(!isOpen);
    AddPoints(100);
  };

  useEffect(() => async () => {
    setUser(await getProfile());
    setData(await getContent());
    setIsLoading(false);
  });

  return (
    <main>
      {!isLoading && (
        <>
          <Grid.Container gap={2} justify="center">
            <Grid xs={12} sm={4}>
              <Card1
                data={data[0]}
                onClick={() => handleModal(0)}
                css={{
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card2
                data={data[1]}
                onClick={() => handleModal(1)}
                css={{
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid xs={12} sm={4}>
              <Card3
                data={data[2]}
                onClick={() => handleModal(2)}
                css={{
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid xs={12} sm={5}>
              <Card4
                data={data[3]}
                onClick={() => handleModal(3)}
                css={{
                  cursor: "pointer",
                }}
              />
            </Grid>
            <Grid xs={12} sm={7}>
              <Card5
                data={data[4]}
                onClick={() => handleModal(4)}
                css={{
                  cursor: "pointer",
                }}
              />
            </Grid>
          </Grid.Container>
          <Modal
            width="600px"
            closeButton
            blur
            open={isOpen}
            onClose={() => handleModal(0)}
          >
            <Modal.Header>
              <Text size={18}>{data[content].title}</Text>
            </Modal.Header>
            <Modal.Body>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${data[content].url.replace(
                  "https://www.youtube.com/watch?v=",
                  ""
                )}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <Text>{data[content].description}</Text>
            </Modal.Body>
          </Modal>
        </>
      )}
    </main>
  );
}
