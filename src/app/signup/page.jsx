"use client";

import Navbar from "@/components/navbar/nav";
import { Radio, RadioGroup } from "@/components/ui/radio";
import {
  Flex,
  Box,
  Input,
  VStack,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    background: "",
    notificationPreference: "email",
    email: "",
    whatsapp: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Flex w="100%" direction="column">
      <Navbar />
      <Flex
        minH="100vh"
        bg="linear-gradient(135deg, #663399 0%, #4B0082 100%)"
        align="center"
        justify="center"
        p={6}
      >
        <Box bg="white" p={8} rounded="lg" shadow="xl" w="full" maxW="md">
          <VStack spacing={6} as="form" onSubmit={handleSubmit}>
            <Text fontSize="2xl" fontWeight="bold" color="#4B0082">
              Join Give(a)Go
            </Text>

            <VStack w="full" align="flex-start" spacing={2}>
              <Text color="#4B0082" fontWeight="medium">
                Name *
              </Text>
              <Input
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </VStack>

            <VStack w="full" align="flex-start" spacing={2}>
              <Text color="#4B0082" fontWeight="medium">
                Tell us about yourself *
              </Text>
              <Textarea
                name="background"
                required
                value={formData.background}
                onChange={handleChange}
                placeholder="I'm a student/developer/designer who loves building..."
              />
            </VStack>

            <VStack w="full" align="flex-start" spacing={2}>
              <Text color="#4B0082" fontWeight="medium">
                How would you like to receive updates? *
              </Text>
              <RadioGroup
                value={formData.notificationPreference}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    notificationPreference: value,
                  }))
                }
              >
                <VStack align="start" spacing={2}>
                  <Radio value="email" colorScheme="purple">
                    Email
                  </Radio>
                  <Radio value="whatsapp" colorScheme="purple">
                    WhatsApp
                  </Radio>
                </VStack>
              </RadioGroup>
            </VStack>

            {formData.notificationPreference === "email" && (
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="#4B0082" fontWeight="medium">
                  Email Address *
                </Text>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  // focusBorderColor="#4B0082"
                />
              </VStack>
            )}

            {formData.notificationPreference === "whatsapp" && (
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="#4B0082" fontWeight="medium">
                  WhatsApp Number *
                </Text>
                <Input
                  name="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  // focusBorderColor="#4B0082"
                />
              </VStack>
            )}

            <Button
              type="submit"
              bg="#4B0082"
              color="white"
              _hover={{ bg: "#663399" }}
              w="full"
            >
              Join Community
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Flex>
  );
}
