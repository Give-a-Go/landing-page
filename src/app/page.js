"use client";
import "../css/page.css";
import { useEffect, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Home() {

  const [fontSize, setFontSize] = useState(40);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newFontSize = 40 + scrollY / 10;
    setFontSize(newFontSize > 100 ? 100 : newFontSize)
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ position: "relative", height: "100vh" }}>
        {/* Particle Background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "#808080" } },
            fpsLimit: 60,
            particles: {
              color: { value: "#000000" },
              links: { enable: true, color: "red", distance: 150 },
              move: { enable: true, speed: 2 },
              number: { value: 10 },
              size: { value: { min: 1, max: 10 } },
            },
          }}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />

        {/* Centered Content */}
        <div
          className="center-text"
          style={{
            position: "relative",
            zIndex: 1,
            color: "#fff",
            fontSize: `${fontSize}px`, // Dynamically set font size based on scroll
            textAlign: "center",
            transition: "font-size 0.2s", // Smooth transition for resizing
          }}
        >
          <h1>Give(a)Go</h1>
        </div>
      </div>
    </>
  );
}