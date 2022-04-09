import { Grid } from "@nextui-org/react";
import Head from "next/head";
import { Card1 } from "../src/components/Card1";
import { Card2 } from "../src/components/Card2";
import { Card3 } from "../src/components/Card3";
import { Card4 } from "../src/components/Card4";
import { Card5 } from "../src/components/Card5";
import ContentContainer from "../src/components/ContentContainer";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pick Hacks</title>
        <meta name="description" content="Pick Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
    </div>
  );
}
