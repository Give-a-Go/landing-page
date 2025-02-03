"use client";

import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

const buttonStyles = {
  background: "green",
  padding: "5px",
  borderRadius: "10px",
  bg: "transparent",
  color: "white",
  _hover: { color: "black", bg: "white" },
};

const NavbarStyle = {
  width: "100vw",
  justifyContent: "center",
  position: "absolute",
  zIndex: 11,
  paddingTop: "20px",
};

const boxStyles = {
  width: "80%",
  padding: "20px",
  height: "50px",
  color: "white",
  justifyContent: "space-between",
  borderRadius: "20px",
  alignItems: "center",
  backdropFilter: "blur(10px)",
  background: "rgb(0,0,0,0.2)",
};

export default function Navbar() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <Flex {...NavbarStyle}>
      <Flex {...boxStyles}>
        <Link href="/">
          <Text fontFamily="Pixelify Sans" fontSize="1.5rem">
            Give(a)Go
          </Text>
        </Link>

        <Flex justifyContent="space-between" gap="20px">
          <Link href="/signup">
            <Button {...buttonStyles}>Sign Up</Button>
          </Link>

          <Button {...buttonStyles}>Log In</Button>

          <Button {...buttonStyles}>Blog</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
