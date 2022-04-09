import { Button, Text } from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  const { status } = useSession();
  const router = useRouter();

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
      <nav>
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
