// HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { Particle, drawParticles } from './particleAnimation';
import './HeroSection.css';
import { Flex } from '@chakra-ui/react';

function HeroSection() {
  const canvasRef = useRef(null);
  const animationFrameId = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize particles
      const newParticles = [];
      for (let i = 0; i < 150; i++) { // Reduced number of particles
        newParticles.push(new Particle(canvas));
      }
      particlesRef.current = newParticles;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      drawParticles(ctx, particlesRef.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Give(a)Go</h1>
          <p className="hero-subtitle">We build cool sh*t</p>
          <div className="hero-buttons">
            <button className="hero-button primary">Join next event</button>
            <button className="hero-button secondary">Join community</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;