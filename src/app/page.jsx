"use client";
import { Flex } from "@chakra-ui/react";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import Navbar from "@/components/navbar/nav";

export default function Home() {
  // HeroSection
  // -  Particle effect
  // -  Call to action
  //
  // About
  // -  Community photo
  // -  Who We Are / wht we do
  //
  // Luma embed
  // Footer

  return (
    <Flex bg="#141414" minH="100vh" flexDirection="column" align="center">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </Flex>
  );
}
