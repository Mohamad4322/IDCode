import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  to?: string;
  via?: string;
  animate?: boolean;
  duration?: number;
  delay?: number;
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  className = "",
  from = "blue-600",
  to = "purple-600",
  via,
  animate = false,
  duration = 3,
  delay = 0
}) => {
  const gradientClass = via 
    ? `bg-gradient-to-r from-${from} via-${via} to-${to}` 
    : `bg-gradient-to-r from-${from} to-${to}`;

  if (!animate) {
    return (
      <span className={`${gradientClass} text-transparent bg-clip-text ${className}`}>
        {text}
      </span>
    );
  }

  // Split text into words for animation
  const words = text.split(" ");

  return (
    <motion.span
      className={`${gradientClass} text-transparent bg-clip-text ${className}`}
      style={{
        backgroundSize: "200% 200%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
};

export default GradientText;