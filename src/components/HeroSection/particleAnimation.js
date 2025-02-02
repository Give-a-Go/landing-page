// particleAnimation.js
export class Particle {
  constructor(canvas) {
    this.position = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    };
    this.velocity = {
      x: Math.random() * 0.2 - 0.1,
      y: Math.random() * 0.2 - 0.1,
    };
    this.size = Math.random() * 2 + 2;
    this.canvas = canvas;
  }

  update() {
    // Get center point and calculate distance
    const centerX = this.canvas.width / 2;
    const centerY = this.canvas.height / 2;
    const dx = this.position.x - centerX;
    const dy = this.position.y - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Define repulsion zone (adjust these values to change the effect)
    const repulsionRadius = 150; // Size of repulsion zone
    const repulsionStrength = 0.3; // Strength of repulsion

    // Apply repulsion if particle is within the zone
    if (distance < repulsionRadius) {
      // Calculate repulsion direction (normalized vector from center)
      const angle = Math.atan2(dy, dx);
      const repulsionX = Math.cos(angle) * repulsionStrength;
      const repulsionY = Math.sin(angle) * repulsionStrength;

      // Add repulsion to velocity
      this.velocity.x += repulsionX * (1 - distance / repulsionRadius);
      this.velocity.y += repulsionY * (1 - distance / repulsionRadius);
    }

    // Update position
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // Apply slight friction to prevent excessive speeds
    this.velocity.x *= 0.99;
    this.velocity.y *= 0.99;

    // Wrap around edges
    if (this.position.x > this.canvas.width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = this.canvas.width;
    if (this.position.y > this.canvas.height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = this.canvas.height;
  }
}

export function drawParticles(ctx, particles) {
  ctx.fillStyle = "rgba(75, 0, 130, 0.1)";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  particles.forEach((particle, index) => {
    particle.update();

    // Draw particle
    ctx.beginPath();
    ctx.arc(
      particle.position.x,
      particle.position.y,
      particle.size,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx.fill();

    // Draw connections
    particles.slice(index + 1).forEach((other) => {
      const dx = particle.position.x - other.position.x;
      const dy = particle.position.y - other.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 60) {
        ctx.beginPath();
        ctx.moveTo(particle.position.x, particle.position.y);
        ctx.lineTo(other.position.x, other.position.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - distance / 60)})`;
        ctx.stroke();
      }
    });
  });
}
