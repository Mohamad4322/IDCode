import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// 3D Tilt Card
export const TiltCard = ({ 
  children, 
  className = "", 
  tiltFactor = 10,
  perspective = 1000,
  glareOpacity = 0.1,
  glareColor = "white",
  scale = 1.05
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 0, glareY: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -tiltFactor;
    const rotateY = (mouseX / (rect.width / 2)) * tiltFactor;
    
    const glareX = (mouseX / rect.width) * 100;
    const glareY = (mouseY / rect.height) * 100;
    
    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovering ? scale : 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.5
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: `${perspective}px`
      }}
    >
      {/* Glare Effect */}
      {glareOpacity > 0 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, ${glareColor} 0%, transparent 80%)`,
            opacity: isHovering ? glareOpacity : 0
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Flip Card
export const FlipCard = ({ 
  frontContent, 
  backContent, 
  className = "",
  flipOnHover = true,
  flipOnClick = false
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleFlip = () => {
    if (flipOnClick) {
      setIsFlipped(!isFlipped);
    }
  };
  
  const handleHover = () => {
    if (flipOnHover) {
      setIsFlipped(true);
    }
  };
  
  const handleHoverEnd = () => {
    if (flipOnHover) {
      setIsFlipped(false);
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      onClick={handleFlip}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        {/* Front */}
        <motion.div 
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden"
          }}
        >
          {frontContent}
        </motion.div>
        
        {/* Back */}
        <motion.div 
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          {backContent}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Staggered Card Grid
export const StaggeredCardGrid = ({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  once = true
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`grid ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Staggered Card Item
export const StaggeredCardItem = ({ 
  children, 
  className = "",
  direction = "up",
  distance = 50
}) => {
  const getDirectionVariants = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const itemVariants = {
    hidden: getDirectionVariants(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover Card
export const HoverCard = ({ 
  children, 
  className = "",
  scale = 1.05,
  rotate = 0,
  shadow = "lg"
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        rotate,
        boxShadow: shadow === "none" ? "none" : shadow === "lg" ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Floating Card
export const FloatingCard = ({ 
  children, 
  className = "",
  amplitude = 10,
  duration = 3,
  delay = 0
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`] 
      }}
      transition={{ 
        duration,
        delay,
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Parallax Card
export const ParallaxCard = ({ 
  children, 
  className = "",
  backgroundImage,
  speed = 0.5
}) => {
  const [scrollY, setScrollY] = useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            y: scrollY * speed * -1
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default {
  TiltCard,
  FlipCard,
  StaggeredCardGrid,
  StaggeredCardItem,
  HoverCard,
  FloatingCard,
  ParallaxCard
};