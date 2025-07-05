import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  separator?: string;
  once?: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  start = 0,
  duration = 2.5,
  delay = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  separator = ',',
  once = true
}) => {
  const [isCountingUp, setIsCountingUp] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !isCountingUp) {
      setIsCountingUp(true);
    }
  }, [inView, isCountingUp]);

  return (
    <div ref={ref} className={className}>
      {isCountingUp ? (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          delay={delay}
          prefix={prefix}
          suffix={suffix}
          decimals={decimals}
          separator={separator}
        />
      ) : (
        <span>{prefix}{start}{suffix}</span>
      )}
    </div>
  );
};

export default AnimatedCounter;