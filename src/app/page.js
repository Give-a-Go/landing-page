"use client";
import "../css/page.css";
import { useEffect, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Bodi from "./madeComp/bodi";
import Luma from "./madeComp/luma";

export default function Home() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
    {/* Particles */}
    <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: { value: "#808080" } },
            fpsLimit: 100,
            particles: {
              color: { value: "#000000" },
              links: { enable: true, color: "red", distance: 150 },
              move: { enable: true, speed: 2 },
              number: { value: 20 },
              size: { value: { min: 0, max: 30 } },
            },
          }}
        />
        {/* /particles */}
      <div className="snapBody">
        
        <div className="center-text item">
          <h1>Give(a)Go</h1>
        </div>

        <div className="bodi item"> <Bodi /> </div>
        <div className="luma item"> <Luma /> </div>
        

      </div>
    </>
  );
}