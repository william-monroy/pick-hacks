import { Button, Link, Text } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
import { getProfile } from "../utils/user";
import { useEffect, useState } from "react";
import { getPoints } from "../utils/points";
import LinkComp from "next/link";

const Nav = () => {
  const { status } = useSession();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [points, setPoints] = useState(0);

  useEffect(
    () => async () => {
      setUser(await getProfile());
      setPoints(await getPoints());
      setIsLoading(false);
    },
    []
  );

  return (
    <header className={styles.nav}>
      <Text
        onClick={() => router.push("/")}
        h2
        css={{
          textGradient: "45deg, $blue500 -20%, $pink500 50%",
          cursor: "pointer",
        }}
        weight="bold"
      >
        Our App
      </Text>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {status === "loading" && (
          <>
            <LinkComp href="/add" passHref>
              <Link>Add new content</Link>
            </LinkComp>
            {!isLoading && (
              <Text margin="16px">
                {user != {} ? `${user.name} - ${points} points` : "Not user"}
              </Text>
            )}
          </>
        )}
        <Button
          onClick={() =>
            status === "authenticated" ? signOut() : router.push("/auth")
          }
        >
          {status === "authenticated" ? "Log Out" : "Log In"}
        </Button>
      </nav>
    </header>
  );
};

export default Nav;
