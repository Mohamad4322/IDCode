import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating?: number;
  avatar?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  className?: string;
  autoplay?: boolean;
  interval?: number;
  style?: 'cards' | 'carousel' | 'quotes';
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials,
  className = '',
  autoplay = true,
  interval = 5000,
  style = 'cards'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [testimonials.length, autoplay, interval]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };

  const renderCardStyle = () => (
    <div className="relative">
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          {testimonials[currentIndex].rating && renderStars(testimonials[currentIndex].rating)}
          <p className="text-gray-600 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
          <div className="flex items-center">
            {testimonials[currentIndex].avatar && (
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
              <div className="text-gray-500 text-sm">{testimonials[currentIndex].position}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg"
      >
        ←
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg"
      >
        →
      </button>
    </div>
  );

  const renderCarouselStyle = () => (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full px-4"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                {testimonial.rating && renderStars(testimonial.rating)}
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  {testimonial.avatar && (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
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
    </div>
  );

  const renderQuotesStyle = () => (
    <div className="relative">
      <div className="text-6xl text-blue-200 absolute top-0 left-0">"</div>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="text-center px-12 pt-8"
        >
          <p className="text-xl text-gray-600 mb-8 italic">"{testimonials[currentIndex].quote}"</p>
          <div>
            {testimonials[currentIndex].avatar && (
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].author}</div>
            <div className="text-gray-500">{testimonials[currentIndex].position}</div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="text-6xl text-blue-200 absolute bottom-0 right-0">"</div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={className}>
      {style === 'cards' && renderCardStyle()}
      {style === 'carousel' && renderCarouselStyle()}
      {style === 'quotes' && renderQuotesStyle()}
    </div>
  );
};

export default TestimonialSlider;