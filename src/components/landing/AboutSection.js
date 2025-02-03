import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutSection() {
  return (
    <Flex minH="50vh" flexDir="column" overflow="hidden" align="center">
      <Text my="20">We are cool</Text>
      <Image maxW="100vw" src="./assets/images/community_bg.png" />
    </Flex>
  );
}

export default AboutSection;
