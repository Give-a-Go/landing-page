import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutSection() {
  return (
    <Flex minH="50vh" flexDir="column">
      <Text my="20">We are cool</Text>
      <Image h="400px" src="./assets/images/community_bg.png" />
    </Flex>
  );
}

export default AboutSection;
