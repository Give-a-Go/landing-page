"use client";

import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      minH="100vh"
      bg="blue.300"
      flexDir="column"
      justify="center"
      align="center"
      color="black"
    >
      <Heading>Hello World</Heading>
      <Text>from Give(a)Go</Text>
    </Flex>
  );
}
