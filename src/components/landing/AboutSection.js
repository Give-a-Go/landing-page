import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function AboutSection() {
  return (
    <Flex
      minH="100vh"
      w="100%"
      flexDir="column"
      overflow="hidden"
      align="center"
      bg="linear-gradient(180deg, #4B007D 0%, rgba(36,32,42,1) 40%, #141414 100%);"
    >
      <Text my="20" h="200px">
        We are cool
      </Text>
      <Image
        mt="100px"
        maxW="70vw"
        src="./assets/images/community_bg.png"
        transform="scale(1.5)"
      />
    </Flex>
  );
}

export default AboutSection;
