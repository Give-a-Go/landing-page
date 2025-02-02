// particleAnimation.js
export class Particle {
  constructor(canvas, x, y) {
    this.position = {
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
    };
    this.velocity = {
      x: Math.random() * 1 - 0.5,
      y: Math.random() * 1 - 0.5,
    };
    this.size = Math.random() * 2 + 2;
    this.canvas = canvas;
  }

  update() {
    // Minimal position update
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

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
    