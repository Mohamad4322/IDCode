import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  type?: 'particles' | 'waves' | 'gradient' | 'grid';
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  density?: number;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  type = "particles",
  color1 = "#3b82f6",
  color2 = "#8b5cf6",
  color3 = "#ec4899",
  speed = 1,
  density = 50,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Animation variables
    let particles: any[] = [];
    let waveOffset = 0;
    let gradientAngle = 0;
    let gridOffset = 0;

    // Initialize based on type
    const initialize = () => {
      if (type === 'particles') {
        initParticles();
      }
    };

    // Particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / (10000 / density));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          color: [color1, color2, color3][Math.floor(Math.random() * 3)],
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Connect particles
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${hexToRgb(particle.color)}, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };

    // Waves
    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw waves
      drawWave(waveOffset, color3, 20, 0.01, 0);
      drawWave(waveOffset, color2, 25, 0.012, Math.PI / 2);
      drawWave(waveOffset, color1, 30, 0.008, Math.PI);
      
      waveOffset += speed * 0.02;
    };

    const drawWave = (offset: number, color: string, amplitude: number, frequency: number, phase: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin(x * frequency + offset + phase) * amplitude + canvas.height / 2;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    };

    // Gradient
    const drawGradient = () => {
      gradientAngle += speed * 0.005;
      
      const gradient = ctx.createLinearGradient(
        canvas.width / 2 + Math.cos(gradientAngle) * canvas.width,
        canvas.height / 2 + Math.sin(gradientAngle) * canvas.height,
        canvas.width / 2 + Math.cos(gradientAngle + Math.PI) * canvas.width,
        canvas.height / 2 + Math.sin(gradientAngle + Math.PI) * canvas.height
      );
      
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.5, color2);
      gradient.addColorStop(1, color3);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 30;
      gridOffset += speed * 0.5;
      
      // Draw vertical lines
      for (let x = gridOffset % gridSize; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.strokeStyle = `rgba(${hexToRgb(color1)}, 0.2)`;
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = gridOffset % gridSize; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(${hexToRgb(color1)}, 0.2)`;
        ctx.stroke();
      }
      
      // Draw moving dots at intersections
      for (let x = gridOffset % gridSize; x < canvas.width; x += gridSize) {
        for (let y = gridOffset % gridSize; y < canvas.height; y += gridSize) {
          const pulseSize = Math.sin(Date.now() * 0.003 + x * 0.1 + y * 0.1) * 2 + 3;
          
          ctx.beginPath();
          ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = color2;
          ctx.fill();
        }
      }
    };

    // Helper function to convert hex to rgb
    const hexToRgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `${r}, ${g}, ${b}`;
    };

    // Animation loop
    const animate = () => {
      switch (type) {
        case 'particles':
          drawParticles();
          break;
        case 'waves':
          drawWaves();
          break;
        case 'gradient':
          drawGradient();
          break;
        case 'grid':
          drawGrid();
          break;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initialize();
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [type, color1, color2, color3, speed, density]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;