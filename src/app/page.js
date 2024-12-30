"use client";
import "../css/page.css";
import { useEffect, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Bodi from "./madeComp/bodi";
import Luma from "./madeComp/luma";
import Cp from "./madeComp/cp";
import { Provider } from "@/components/ui/provider";

export default function Home() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Provider>
    {/* Particles */}
    <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 100,
            particles: {
              color: { value: "#FF0000" },
              links: { enable: true, color: "black", distance: 1000 },
              move: { enable: true, speed: 2 },
              number: { value: 20 },
              size: { value: { min: 0, max: 30 } },
            },
          }}
    />

    {/* /particles */}

      <div className="background">

        <h1>Give(a)Go</h1>

      </div>

      <div className="dummy"></div>
      
      <Bodi />
      <Luma />

    </Provider>
  );
}