// HeroSection.jsx
"use client";

import React, { useEffect, useRef } from "react";
import { Particle, drawParticles } from "./particleAnimation";
import "./HeroSection.css";
import { Flex } from "@chakra-ui/react";

function HeroSection() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef();
  const particlesRef = useRef([]);

  // Responsive font sizes using Chakra's useBreakpointValue
  const titleSize = useBreakpointValue({
    base: "3rem",    // Mobile
    sm: "4rem",      // Small tablets
    md: "5rem",      // Tablets
    lg: "6rem",      // Desktop
  });

  const subtitleSize = useBreakpointValue({
    base: "1rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.5rem",
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Initialize particles
      const newParticles = [];
      for (let i = 0; i < 150; i++) {
        // Reduced number of particles
        newParticles.push(new Particle(canvas));
      }
      particlesRef.current = newParticles;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      drawParticles(ctx, particlesRef.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <Flex
      position="relative"
      width="100%"
      height="100vh"
      bg="rgb(75, 0, 130)"
      overflow="hidden"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <Flex
        position="relative"
        zIndex="10"
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          align="center"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            fontFamily="'IBM Plex Serif', serif"
            fontSize={titleSize}
            fontWeight="700"
            color="white"
            textShadow="0 0 10px rgba(255, 255, 255, 0.5)"
            textAlign="center"
            animation="float 6s ease-in-out infinite"
            mb={{ base: 2, md: 4 }}
          >
            Give(a)Go
          </Heading>
          
          <Text
            fontSize={subtitleSize}
            color="rgba(255, 255, 255, 0.9)"
            mb={{ base: 6, md: 8 }}
            textAlign="center"
          >
            We build cool sh*t
          </Text>
          
          <Flex
            gap={{ base: 3, md: 4 }}
            flexDirection={{ base: "column", sm: "row" }}
            width={{ base: "100%", sm: "auto" }}
          >
            <Button
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              bg="white"
              color="rgb(75, 0, 130)"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
              }}
              transition="all 0.2s ease"
              width={{ base: "100%", sm: "auto" }}
            >
              Join next event
            </Button>
            <Button
              size={{ base: "md", md: "lg" }}
              borderRadius="full"
              variant="outline"
              color="white"
              borderColor="white"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
              }}
              transition="all 0.2s ease"
              width={{ base: "100%", sm: "auto" }}
            >
              Join community
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </Flex>
  );
}

export default HeroSection;
