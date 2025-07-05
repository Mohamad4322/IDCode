import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Fade In Animation
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  direction = "up", 
  distance = 50,
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

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

  const variants = {
    hidden: getDirectionVariants(),
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered Children Animation
export const StaggerContainer = ({ 
  children, 
  delay = 0, 
  staggerChildren = 0.1, 
  className = "",
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered Item
export const StaggerItem = ({ 
  children, 
  className = "",
  direction = "up",
  distance = 50,
  duration = 0.5
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
        duration: duration,
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

// Zoom Animation
export const ZoomIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "",
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Slide In Animation
export const SlideIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  direction = "left",
  distance = 100,
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const getDirectionVariants = () => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "up":
        return { y: -distance, opacity: 0 };
      case "down":
        return { y: distance, opacity: 0 };
      default:
        return { x: -distance, opacity: 0 };
    }
  };

  const variants = {
    hidden: getDirectionVariants(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Floating Animation
export const FloatingElement = ({ 
  children, 
  className = "",
  amplitude = 10,
  duration = 3
}) => {
  return (
    <motion.div
      animate={{ 
        y: [`-${amplitude}px`, `${amplitude}px`, `-${amplitude}px`] 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Rotating Animation
export const RotatingElement = ({ 
  children, 
  className = "",
  duration = 20,
  clockwise = true
}) => {
  return (
    <motion.div
      animate={{ 
        rotate: clockwise ? 360 : -360
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Pulse Animation
export const PulsingElement = ({ 
  children, 
  className = "",
  duration = 2,
  scale = 1.05
}) => {
  return (
    <motion.div
      animate={{ 
        scale: [1, scale, 1]
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Hover Animation
export const HoverElement = ({ 
  children, 
  className = "",
  scale = 1.05,
  rotate = 0
}) => {
  return (
    <motion.div
      whileHover={{ 
        scale: scale,
        rotate: rotate,
        transition: { duration: 0.3 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax Scroll
export const ParallaxElement = ({ 
  children, 
  className = "",
  speed = 0.5
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ y: useParallax(speed) }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Helper function for parallax effect
const useParallax = (speed = 0.5) => {
  const [scrollY, setScrollY] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollY * speed * -1;
};

// Card Flip Animation
export const FlipCard = ({ frontContent, backContent, className = "" }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  
  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {frontContent}
        </div>
        <div 
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

// Reveal Text Animation
export const RevealText = ({ 
  text, 
  className = "",
  delay = 0,
  duration = 0.5,
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay }
    })
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Animated Counter
export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  delay = 0,
  prefix = "",
  suffix = "",
  className = "",
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };
      
      setTimeout(() => {
        animationFrame = requestAnimationFrame(animate);
      }, delay * 1000);
      
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, end, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

// Animated Gradient Background
export const GradientBackground = ({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#ec4899"],
  duration = 10
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(60deg, ${colors.join(", ")})`,
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// Animated Typing Text
export const TypewriterText = ({
  text,
  className = "",
  speed = 50,
  delay = 0,
  once = true
}) => {
  const [displayText, setDisplayText] = React.useState("");
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      let currentIndex = 0;
      let timer;
      
      const type = () => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text.charAt(currentIndex));
          currentIndex++;
          timer = setTimeout(type, speed);
        }
      };
      
      setTimeout(() => {
        type();
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [inView, text, speed, delay]);

  return (
    <div ref={ref} className={className}>
      {displayText}
    </div>
  );
};

// Animated Scroll Indicator
export const ScrollIndicator = ({
  className = "",
  color = "#3b82f6"
}) => {
  return (
    <motion.div
      className={`w-6 h-10 border-2 rounded-full flex justify-center ${className}`}
      style={{ borderColor: color }}
    >
      <motion.div
        className="w-1 h-3 rounded-full mt-2"
        style={{ backgroundColor: color }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

// Animated Button
export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  type = "button"
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};

// Animated Card Slider
export const CardSlider = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.2}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Animated Progress Bar
export const ProgressBar = ({
  progress = 0,
  className = "",
  barClassName = "",
  duration = 1.5,
  delay = 0,
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <motion.div
        className={`h-2.5 rounded-full ${barClassName || 'bg-blue-600'}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration, delay, ease: "easeOut" }}
      />
    </div>
  );
};

// Animated Tabs
export const AnimatedTabs = ({ tabs, activeTab, setActiveTab, className = "" }) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {tabs.map((tab, index) => (
        <div key={index} className="relative">
          <button
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 relative z-10 ${activeTab === index ? 'text-white' : 'text-gray-700'}`}
          >
            {tab}
          </button>
          {activeTab === index && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-blue-600 rounded-md"
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

// Animated Image Carousel
export const ImageCarousel = ({ images, interval = 5000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex}`} 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

// Animated Number Counter
export const NumberCounter = ({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  className = "",
  once = true
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {prefix}
          <motion.span
            initial={{ count: 0 }}
            animate={{ count: end }}
            transition={{ duration }}
          >
            {({ count }) => Math.floor(count)}
          </motion.span>
          {suffix}
        </motion.span>
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </div>
  );
};

// Animated Accordion
export const Accordion = ({ title, children, className = "" }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50"
      >
        <span className="font-medium">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 bg-gray-50">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// Animated Card Grid
export const CardGrid = ({ children, className = "", stagger = 0.1 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Card Grid Item
export const CardGridItem = ({ children, className = "" }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
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

// Animated 3D Card
export const Card3D = ({ children, className = "", depth = 30 }) => {
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * depth * -1;
    const rotateYValue = ((x - centerX) / centerX) * depth;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Scroll Progress
export const ScrollProgress = ({ color = "#3b82f6", height = 4 }) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = document.documentElement.scrollTop;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: `${height}px` }}
    >
      <motion.div
        className="h-full"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: color
        }}
      />
    </motion.div>
  );
};

// Animated Cursor
export const AnimatedCursor = ({ size = 20, color = "#3b82f6", trailColor = "rgba(59, 130, 246, 0.2)" }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = React.useState({ x: 0, y: 0 });
  
  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          left: position.x - (size / 2),
          top: position.y - (size / 2)
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full"
        style={{
          width: `${size * 2}px`,
          height: `${size * 2}px`,
          backgroundColor: trailColor,
          left: trailPosition.x - size,
          top: trailPosition.y - size
        }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
};

// Animated Slider
export const Slider = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
    >
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        dragElastic={0.2}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

// Animated Scroll To Top Button
export const ScrollToTopButton = ({ className = "", size = 40 }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <motion.button
      className={`fixed bottom-6 right-6 bg-blue-600 text-white rounded-full flex items-center justify-center z-50 ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      ↑
    </motion.button>
  );
};

export default {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ZoomIn,
  SlideIn,
  FloatingElement,
  RotatingElement,
  PulsingElement,
  HoverElement,
  ParallaxElement,
  FlipCard,
  RevealText,
  AnimatedCounter,
  GradientBackground,
  TypewriterText,
  ScrollIndicator,
  AnimatedButton,
  CardSlider,
  ProgressBar,
  AnimatedTabs,
  ImageCarousel,
  NumberCounter,
  Accordion,
  CardGrid,
  CardGridItem,
  Card3D,
  ScrollProgress,
  AnimatedCursor,
  Slider,
  ScrollToTopButton
};