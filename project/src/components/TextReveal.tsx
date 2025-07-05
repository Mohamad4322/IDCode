import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextRevealProps {
  text: string;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  type?: 'words' | 'letters' | 'lines';
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.1,
  type = 'words'
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  const splitText = () => {
    switch (type) {
      case 'words':
        return text.split(' ').map((word, index) => (
          <span key={index} className="inline-block">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration, ease: 'easeOut' }}
            >
              {word}
            </motion.span>
            <span className="inline-block">&nbsp;</span>
          </span>
        ));
      case 'letters':
        return text.split('').map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            transition={{ duration, ease: 'easeOut' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ));
      case 'lines':
        return text.split('\n').map((line, index) => (
          <motion.div
            key={index}
            className="overflow-hidden"
            variants={{
              hidden: { opacity: 1 },
              visible: { opacity: 1 }
            }}
          >
            <motion.div
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              transition={{ duration, ease: 'easeOut' }}
            >
              {line}
            </motion.div>
          </motion.div>
        ));
      default:
        return text;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delay
          }
        }
      }}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {splitText()}
    </motion.div>
  );
};

export default TextReveal;