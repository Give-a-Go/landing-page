"use client";

import Navbar from "@/components/navbar/nav";
import { Radio, RadioGroup } from "@/components/ui/radio";
import { Checkbox } from "@/components/ui/checkbox";
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
    notificationPreferences: {
      email: false,
      whatsapp: false,
    },
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

  const handlePreferenceChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      notificationPreferences: {
        ...prev.notificationPreferences,
        [type]: !prev.notificationPreferences[type],
      },
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
              Sign Up
            </Text>

            <VStack w="full" align="flex-start" spacing={2}>
              <Text color="#4B0082" fontWeight="medium">
                Name *
              </Text>
              <Input
                name="name"
                required
                value={formData.name}
                color="#4B0082"
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
                color="#4B0082"
                placeholder="I'm a student/developer/designer who loves building..."
              />
            </VStack>

            <VStack w="full" align="flex-start" spacing={2}>
              <Text color="#4B0082" fontWeight="medium">
                How would you like to receive updates? *
              </Text>
              <VStack align="start" spacing={2}>
                <Checkbox
                  checked={formData.notificationPreferences.email}
                  onCheckedChange={() => handlePreferenceChange("email")}
                  color="#4B0082"
                >
                  Email
                </Checkbox>
                <Checkbox
                  checked={formData.notificationPreferences.whatsapp}
                  onCheckedChange={() => handlePreferenceChange("whatsapp")}
                  color="#4B0082"
                >
                  WhatsApp
                </Checkbox>
              </VStack>
            </VStack>

            {formData.notificationPreferences.email && (
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="#4B0082" fontWeight="medium">
                  Email Address *
                </Text>
                <Input
                  name="email"
                  type="email"
                  required={formData.notificationPreferences.email}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@domain.com"
                  color="#4B0082"
                />
              </VStack>
            )}

            {formData.notificationPreferences.whatsapp && (
              <VStack w="full" align="flex-start" spacing={2}>
                <Text color="#4B0082" fontWeight="medium">
                  WhatsApp Number *
                </Text>
                <Input
                  name="whatsapp"
                  type="tel"
                  required={formData.notificationPreferences.whatsapp}
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="+353 123 456 789"
                  color="#4B0082"
                />
              </VStack>
            )}

            <Button
              mt="6"
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
