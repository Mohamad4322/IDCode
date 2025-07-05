import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 40,
  onClick,
  type = 'button'
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    setPosition({
      x: distanceX / strength,
      y: distanceY / strength
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      animate={{
        x: position.x,
        y: position.y
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;