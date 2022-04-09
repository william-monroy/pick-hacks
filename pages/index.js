import { Button, Text, Loading, Grid } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getProfile } from "../utils/user";

const LoadingButton = () => {
  return (
    <Button
      disabled
      auto
      bordered
      color="secondary"
      css={{ px: "$13" }}
      size="xl"
    >
      <Loading type="spinner" color="currentColor" size="sm" />
    </Button>
  );
};

const Home = () => {
  const { status } = useSession();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(getProfile());
    setIsLoading(false);
  }, []);

  return (
    <section>
      <Text
        h1
        size="5rem"
        css={{
          textGradient: "45deg, $yellow500 -20%, $red500 100%",
          textAlign: "center",
        }}
      >
        The world&apos;s healthiest platform
      </Text>
      <Text
        h2
        css={{
          textAlign: "center",
        }}
      >
        Fill out your profile, develop better habits, measure your progress.
      </Text>
      <Grid.Container gap={2} justify="space-evenly" alignItems="center">
        <Grid>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button
              size="xl"
              onClick={() => {
                !status == "authenticated"
                  ? router.push("/auth")
                  : !user.name
                  ? router.push("/quiz")
                  : router.push("/home");
              }}
            >
              {!status == "authenticated"
                ? "Log In"
                : !user.name
                ? "Complete your profile"
                : "Go to the dashboard"}
            </Button>
          )}
        </Grid>
        <Grid>
          <Button color="success" size="xl">
            Learn more
          </Button>
        </Grid>
      </Grid.Container>
    </section>
  );
};

export default Home;
