"use client";

import Navbar from "@/components/navbar/nav";
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
import axios from "axios";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // WhatsApp number (optional)
    context: "", // Tell us about yourself
    email_notifications: false, // Email notifications preference
    whatsapp_notifications: false, // WhatsApp notifications preference
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({}); // Store field-specific errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate fields
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.context) {
      newErrors.context = "Tell us about yourself.";
    }

    if (!formData.email_notifications && !formData.whatsapp_notifications) {
      newErrors.notifications = "Please select at least one notification type.";
    }

    if (formData.whatsapp_notifications && !formData.phone) {
      newErrors.phone = "WhatsApp number is required.";
    }

    // If there are errors, stop submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare data to send
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      context: formData.context,
      email_notifications: formData.email_notifications,
      whatsapp_notifications: formData.whatsapp_notifications,
    };

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/submit", payload);
      console.log("API Response:", response.data);
      setIsSubmitted(true); // Show success message
    } catch (error) {
      console.error("Error sending data:", error);
      setErrors({ submit: "Failed to submit form. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <Flex w="100%" direction="column" minH="100vh">
      <Navbar />
      <Flex
        w="100%"
        minH="100vh"
        direction="column"
        bg="linear-gradient(135deg, #663399 0%, #4B0082 100%)"
        align="center"
        justify="center"
        p={6}
        position="relative"
        bgImage="linear-gradient(135deg, #663399 0%, #4B0082 100%), url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 10 10%22%3E%3Cpath d=%22M0 0h1v1h-1zM1 1h1v1h-1zM2 0h1v1h-1zM3 1h1v1h-1zM4 0h1v1h-1zM5 1h1v1h-1zM6 0h1v1h-1zM7 1h1v1h-1zM8 0h1v1h-1zM9 1h1v1h-1z%22/%3E%3C/svg%3E')"
        bgSize="10px 10px"
        bgPosition="0 0"
        bgRepeat="repeat"
      >
        <Box
          bg="white"
          p={8}
          mt={6}
          rounded="lg"
          shadow="xl"
          w="full"
          maxW="md"
          position="relative"
          zIndex="1"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={6} as="form" onSubmit={handleSubmit}>
                  <Text fontSize="2xl" fontWeight="bold" color="#4B0082">
                    Sign Up
                  </Text>

                  {/* Name */}
                  <VStack w="full" align="flex-start" spacing={2}>
                    <Text color="#4B0082" fontWeight="medium">
                      Name *
                    </Text>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      color="#4B0082"
                    />
                    {errors.name && (
                      <Text color="red.500" fontSize="sm">
                        {errors.name}
                      </Text>
                    )}
                  </VStack>

                  {/* Email (Mandatory) */}
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
                      placeholder="example@domain.com"
                      color="#4B0082"
                    />
                    {errors.email && (
                      <Text color="red.500" fontSize="sm">
                        {errors.email}
                      </Text>
                    )}
                  </VStack>

                  {/* Tell us about yourself */}
                  <VStack w="full" align="flex-start" spacing={2}>
                    <Text color="#4B0082" fontWeight="medium">
                      Tell us about yourself *
                    </Text>
                    <Textarea
                      name="context"
                      required
                      value={formData.context}
                      onChange={handleChange}
                      placeholder="I'm a student/developer/designer who loves building..."
                      color="#4B0082"
                    />
                    {errors.context && (
                      <Text color="red.500" fontSize="sm">
                        {errors.context}
                      </Text>
                    )}
                  </VStack>

                  {/* Notification Preferences */}
                  <VStack w="full" align="flex-start" spacing={2}>
                    <Text color="#4B0082" fontWeight="medium">
                      How would you like to receive updates? *
                    </Text>
                    <VStack align="start" spacing={2}>
                      {/* Email Notifications */}
                      <Checkbox
                        isChecked={formData.email_notifications}
                        onChange={() =>
                          handleCheckboxChange("email_notifications")
                        }
                        colorScheme="purple"
                        color="#4B0082"
                      >
                        Email
                      </Checkbox>
                      {/* WhatsApp Notifications */}
                      <Checkbox
                        isChecked={formData.whatsapp_notifications}
                        onChange={() =>
                          handleCheckboxChange("whatsapp_notifications")
                        }
                        colorScheme="purple"
                        color="#4B0082"
                      >
                        WhatsApp
                      </Checkbox>
                    </VStack>
                    {errors.notifications && (
                      <Text color="red.500" fontSize="sm">
                        {errors.notifications}
                      </Text>
                    )}
                  </VStack>

                  {/* WhatsApp Number (Conditional) */}
                  {formData.whatsapp_notifications && (
                    <VStack w="full" align="flex-start" spacing={2}>
                      <Text color="#4B0082" fontWeight="medium">
                        WhatsApp Number *
                      </Text>
                      <Input
                        name="phone"
                        type="tel"
                        required={formData.whatsapp_notifications}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+353 123 456 789"
                        color="#4B0082"
                      />
                      {errors.phone && (
                        <Text color="red.500" fontSize="sm">
                          {errors.phone}
                        </Text>
                      )}
                    </VStack>
                  )}

                  {/* Submit Button */}
                  <Button
                    mt="6"
                    type="submit"
                    bg="#4B0082"
                    color="white"
                    _hover={{ bg: "#663399" }}
                    w="full"
                    isLoading={isSubmitting} // Show loading spinner
                    loadingText="Submitting..." // Text to show while loading
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Join the Community"}
                  </Button>

                  {/* General Submission Error */}
                  {errors.submit && (
                    <Text color="red.500" fontSize="sm" textAlign="center">
                      {errors.submit}
                    </Text>
                  )}
                </VStack>
              </motion.div>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={6} align="center">
                  <Text fontSize="2xl" fontWeight="bold" color="#4B0082">
                    Welcome to the Community! 🎉
                  </Text>
                  <Text color="#4B0082" textAlign="center">
                    We're excited to have you with us at Give(a)Go! Can't wait
                    to see you at the next event—let's build something amazing
                    together!
                  </Text>
                  <Button bg="#4B0082" color="white" _hover={{ bg: "#663399" }}>
                    RSVP to next Event
                  </Button>
                </VStack>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Flex>
    </Flex>
  );
}
