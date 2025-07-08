import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { StaggerContainer, StaggerItem } from './AnimatedComponents';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  layout?: 'grid' | 'list';
  className?: string;
  animationType?: 'fade' | 'slide' | 'zoom' | 'stagger';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  subtitle,
  description,
  features,
  columns = 3,
  layout = 'grid',
  className = '',
  animationType = 'stagger'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'md:grid-cols-2';
      case 3:
        return 'md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'md:grid-cols-3';
    }
  };

  const getAnimation = (index: number) => {
    switch (animationType) {
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: inView ? { opacity: 1 } : { opacity: 0 },
          transition: { duration: 0.5, delay: index * 0.1 }
        };
      case 'slide':
        return {
          initial: { opacity: 0, y: 50 },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
          transition: { duration: 0.5, delay: index * 0.1 }
        };
      case 'zoom':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 },
          transition: { duration: 0.5, delay: index * 0.1 }
        };
      default:
        return {};
    }
  };

  return (
    <section ref={ref} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-blue-600 font-semibold mb-2"
            >
              {subtitle}
            </motion.div>
          )}
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {title}
          </motion.h2>
          
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}
        </div>

        {animationType === 'stagger' ? (
          <StaggerContainer staggerChildren={0.1} className={layout === 'grid' ? `grid ${getGridCols()} gap-8` : 'space-y-8'}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                {layout === 'grid' ? (
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ) : (
                  <div className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className={layout === 'grid' ? `grid ${getGridCols()} gap-8` : 'space-y-8'}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                {...getAnimation(index)}
              >
                {layout === 'grid' ? (
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ) : (
                  <div className="flex items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;