import React, { lazy, Suspense } from 'react';

// Lazy load framer-motion components
const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({ 
    default: module.motion.div 
  }))
);

const AnimatePresence = lazy(() => 
  import('framer-motion').then(module => ({ 
    default: module.AnimatePresence 
  }))
);

// Wrapper components for lazy-loaded animations
interface OptimizedMotionProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  variants?: any;
  [key: string]: any;
}

export const OptimizedMotion: React.FC<OptimizedMotionProps> = ({ children, ...props }) => {
  return (
    <Suspense fallback={<div className={props.className}>{children}</div>}>
      <MotionDiv {...props}>
        {children}
      </MotionDiv>
    </Suspense>
  );
};

interface OptimizedAnimatePresenceProps {
  children: React.ReactNode;
  mode?: 'wait' | 'sync' | 'popLayout';
  initial?: boolean;
}

export const OptimizedAnimatePresence: React.FC<OptimizedAnimatePresenceProps> = ({ children, ...props }) => {
  return (
    <Suspense fallback={<>{children}</>}>
      <AnimatePresence {...props}>
        {children}
      </AnimatePresence>
    </Suspense>
  );
};

// Hook for conditional animation loading
export const useOptimizedAnimations = () => {
  const [animationsLoaded, setAnimationsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Only load animations after initial render
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return animationsLoaded;
};
