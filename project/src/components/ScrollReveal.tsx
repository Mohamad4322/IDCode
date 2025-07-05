import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'zoom' | 'rotate';
  delay?: number;
  duration?: number;
  distance?: number;
  rotate?: number;
  scale?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  distance = 50,
  rotate = 0,
  scale = 0.9
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: distance },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate },
          visible: { 
            opacity: 1, 
            rotate: 0,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { duration, delay, ease: 'easeOut' }
          }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getAnimationVariants()}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;