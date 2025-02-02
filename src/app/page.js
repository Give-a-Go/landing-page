"use client";
import { Flex } from "@chakra-ui/react";
import { loadFull } from "tsparticles";
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
    <Flex bg="#141414" minH="100vh" flexDirection="column" align="center">
      <Navbar />
      Hello world
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
