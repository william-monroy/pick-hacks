import { Grid } from "@nextui-org/react";
import { Card1 } from "../components/Card1";
import { Card2 } from "../components/Card2";
import { Card3 } from "../components/Card3";
import { Card4 } from "../components/Card4";
import { Card5 } from "../components/Card5";

export default function Home() {
  return (
    <main>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Card1 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card2 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card3 />
        </Grid>
        <Grid xs={12} sm={5}>
          <Card4 />
        </Grid>
        <Grid xs={12} sm={7}>
          <Card5 />
        </Grid>
      </Grid.Container>
    </main>
  );
}
