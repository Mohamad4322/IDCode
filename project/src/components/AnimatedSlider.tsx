import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Basic Card Slider
export const CardSlider = ({ 
  items, 
  renderItem, 
  className = "",
  slidesPerView = 3,
  spaceBetween = 30,
  loop = true,
  autoplay = true,
  effect = "slide", // slide, coverflow, fade, flip, cube
  centeredSlides = false
}) => {
  return (
    <div className={className}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        effect={effect}
        centeredSlides={centeredSlides}
        pagination={{ clickable: true }}
        navigation
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pb-12">
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// 3D Coverflow Slider
export const CoverflowSlider = ({ 
  items, 
  renderItem, 
  className = "",
  slidesPerView = 3,
  loop = true,
  autoplay = true
}) => {
  return (
    <div className={className}>
      <Swiper
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={slidesPerView}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={loop}
        autoplay={autoplay ? { delay: 3000, disableOnInteraction: false } : false}
        className="w-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="pb-12">
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Infinite Scroll Slider
export const InfiniteSlider = ({ 
  items, 
  renderItem, 
  className = "",
  speed = 20,
  direction = "left", // left or right
  pauseOnHover = true
}) => {
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  
  useEffect(() => {
    // Duplicate items to create seamless loop
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  const sliderVariants = {
    animate: {
      x: direction === "left" 
        ? [0, -100 * items.length] 
        : [-100 * items.length, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: items.length * speed,
          ease: "linear",
        },
      },
    },
    paused: {
      x: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex"
        variants={sliderVariants}
        animate="animate"
        whileHover={pauseOnHover ? "paused" : "animate"}
        style={{ width: `${duplicatedItems.length * 100}%` }}
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{ width: `${100 / duplicatedItems.length}%` }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Testimonial Slider
export const TestimonialSlider = ({ 
  testimonials, 
  className = "",
  autoplay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [testimonials.length, autoplay, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full flex justify-center space-x-2 z-10 p-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <motion.div
        className="flex flex-col items-center justify-center pt-12 pb-8 px-6"
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-lg text-gray-700 italic mb-6">"{testimonials[currentIndex].quote}"</p>
          <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
          <div className="text-gray-500 text-sm">{testimonials[currentIndex].position}</div>
        </div>
      </motion.div>
    </div>
  );
};

// Image Comparison Slider
export const ImageComparisonSlider = ({ 
  beforeImage, 
  afterImage, 
  className = "",
  beforeLabel = "Before",
  afterLabel = "After"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    
    setSliderPosition(percent);
  };
  
  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div 
      ref={sliderRef}
      className={`relative overflow-hidden cursor-ew-resize ${className}`}
      onMouseDown={handleMouseDown}
    >
      <div className="relative w-full h-full">
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <img src={afterImage} alt="After" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded text-sm font-medium">
            {afterLabel}
          </div>
        </div>
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded text-sm font-medium">
            {beforeLabel}
          </div>
        </div>
        
        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
            <div className="flex flex-col items-center">
              <div className="w-1 h-4 bg-gray-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Timeline
export const AnimatedTimeline = ({ 
  events, 
  className = "",
  lineColor = "#3b82f6",
  dotColor = "#3b82f6",
  dotSize = 16
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Vertical Line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ 
          left: `${dotSize / 2}px`,
          backgroundColor: lineColor
        }}
      />
      
      {/* Timeline Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 rounded-full"
              style={{ 
                width: `${dotSize}px`, 
                height: `${dotSize}px`, 
                backgroundColor: dotColor,
                transform: `translateX(-${dotSize / 2}px)`
              }}
            />
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default {
  CardSlider,
  CoverflowSlider,
  InfiniteSlider,
  TestimonialSlider,
  ImageComparisonSlider,
  AnimatedTimeline
};