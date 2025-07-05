import React, { useEffect, useRef } from 'react';

interface WavyBackgroundProps {
  className?: string;
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  amplitude?: number;
  frequency?: number;
  children?: React.ReactNode;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({
  className = "",
  color1 = "#3b82f6",
  color2 = "#8b5cf6",
  color3 = "#ec4899",
  speed = 0.5,
  amplitude = 20,
  frequency = 0.01,
  children
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);

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

    // Draw wave
    const drawWave = (offset: number, color: string, amplitude: number, frequency: number, phase: number) => {
      if (!ctx || !canvas) return;
      
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

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update offset
      offsetRef.current += speed;
      
      // Draw waves
      drawWave(offsetRef.current, color3, amplitude * 1.2, frequency, 0);
      drawWave(offsetRef.current, color2, amplitude * 1.5, frequency * 1.2, Math.PI / 2);
      drawWave(offsetRef.current, color1, amplitude * 1.8, frequency * 0.8, Math.PI);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    animate();

    // Handle resize
    window.addEventListener('resize', setCanvasSize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [color1, color2, color3, speed, amplitude, frequency]);

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

export default WavyBackground;