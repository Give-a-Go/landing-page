"use client";
import { useEffect, useState } from "react";
import { Flex, Heading, Text, Spinner } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Bodi from "./madeComp/bodi";
import Luma from "./madeComp/luma";
import Cp from "./madeComp/CommunityProjects";
import { Provider } from "@/components/ui/provider";
import Footer from "./madeComp/footer";
import Loop from "./madeComp/loop";
import CommunityProjects from "./madeComp/CommunityProjects";
import Hero from "./madeComp/hero";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import Navbar from "@/components/navbar/nav";

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

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
    <Flex bg="#141414" minH="100vh">
      <Navbar></Navbar>
      Hello word
      <HeroSection />
      <AboutSection />
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 100,
          particles: {
            color: { value: "#FF0000" },
            links: { enable: true, color: "black", distance: 1 },
            move: { enable: true, speed: { min: 0, max: 10 } },
            number: { value: 10 },
            size: { value: { min: 0, max: 90 } },
            shadow: true,
          },
        }}
      /> */}
      {/* /particles */}
      {/* <div className="snapContainer">
        <div className="dummy snap-item">
          <Hero />
        </div>
        <div className="snap-items">
          <Luma />
        </div>
        <div className="snap-items">
          <Footer />
        </div>
        {/* <div className="snap-items"><Bodi /></div> */}
      {/* <div className="snap-items"><Loop /></div> */}
      {/* <div className="snap-items"><CommunityProjects /></div> */}
      {/* </div>  */}
    </Flex>
  );
}
