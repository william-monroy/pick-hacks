import { Container, NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../styles/globals.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Container className="layout">
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </NextUIProvider>
    </SessionProvider>
  );
};

export default App;
