import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedComponents';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  image?: string;
  stats?: { number: string; label: string }[];
  backgroundType?: 'particles' | 'gradient' | 'waves' | 'none';
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  image,
  stats,
  backgroundType = 'particles',
  className = ''
}) => {
  // Split title into words for animation
  const titleWords = title.split(' ');
  
  return (
    <section className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background */}
      {backgroundType === 'particles' && (
        <ParticleBackground 
          particleCount={50}
          particleColor="#3b82f6"
          connectParticles={true}
        />
      )}
      {backgroundType === 'gradient' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>
      )}
      {backgroundType === 'waves' && (
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#3b82f6" 
              fillOpacity="0.1"
            />
            <motion.path 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#3b82f6" 
              fillOpacity="0.2"
            />
          </svg>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <StaggerContainer delay={0.2} staggerChildren={0.1} className="mb-6">
              {subtitle && (
                <StaggerItem>
                  <div className="text-blue-600 font-semibold mb-2">{subtitle}</div>
                </StaggerItem>
              )}
              
              <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                {titleWords.map((word, index) => (
                  <StaggerItem key={index} className="inline-block mr-2">
                    {word}
                  </StaggerItem>
                ))}
              </div>
              
              <StaggerItem>
                <p className="text-xl text-gray-600 mb-8">{description}</p>
              </StaggerItem>
            </StaggerContainer>
            
            <FadeIn delay={0.6} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to={primaryButtonLink}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center group"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              {secondaryButtonText && secondaryButtonLink && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to={secondaryButtonLink}
                    className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center"
                  >
                    {secondaryButtonText}
                  </Link>
                </motion.div>
              )}
            </FadeIn>
            
            {/* Stats */}
            {stats && (
              <StaggerContainer delay={0.8} staggerChildren={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StaggerItem key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
          
          {/* Image */}
          {image && (
            <FadeIn delay={0.4} direction="right">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <img 
                    src={image} 
                    alt="Hero" 
                    className="w-full h-auto"
                  />
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg"
                >
                  <div className="h-8 w-8 text-white">✨</div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg"
                >
                  <div className="h-8 w-8 text-white">🚀</div>
                </motion.div>
              </motion.div>
            </FadeIn>
          )}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;