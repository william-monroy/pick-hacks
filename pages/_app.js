import { Container, NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ContentContainer from "../src/components/ContentContainer";
import Sidebar from "../src/components/Sidebar";
import "../styles/globals.css";
import styles from "../styles/App.module.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        {/* <Container className="layout"> */}
        {/* {session ? (
          <div className={styles.main}>
            <Nav />
            <Sidebar />
            <ContentContainer>
              <Component {...pageProps} />
              <Footer />
            </ContentContainer>
          </div>
          ) : (
            <>
            <Nav />
            <Component {...pageProps} />
            <Footer />
            </>
          )} */}
          <div className={styles.main}>
            <Nav />
            <Sidebar />
            <ContentContainer>
              <Component {...pageProps} />
              <Footer />
            </ContentContainer>
          </div>
        {/* </Container> */}
      </NextUIProvider>
    </SessionProvider>
  );
};

export default App;
