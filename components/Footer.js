import { Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer>
      <Text
        h4
        css={{
          textAlign: "center",
          margin: "10px",
        }}
      >{`Copyright © ${new Date().getFullYear()} Our App`}</Text>
    </footer>
  );
};

export default Footer;
