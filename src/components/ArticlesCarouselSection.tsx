import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Brain, Cloud, ShoppingCart, Building, Leaf } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const ArticlesCarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Map blog posts to articles with appropriate icons and styling
  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return Brain;
      case 'industry insights':
        return ShoppingCart;
      case 'company news':
        return Building;
      default:
        return Leaf;
    }
  };

  const getGradientForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return 'from-emerald-400 to-green-300';
      case 'industry insights':
        return 'from-teal-400 to-emerald-300';
      case 'company news':
        return 'from-green-400 to-teal-300';
      default:
        return 'from-lime-400 to-green-300';
    }
  };

  const getBgColorForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'technology':
        return 'rgba(52, 211, 153, 0.15)';
      case 'industry insights':
        return 'rgba(45, 212, 191, 0.15)';
      case 'company news':
        return 'rgba(74, 222, 128, 0.15)';
      default:
        return 'rgba(163, 230, 53, 0.15)';
    }
  };

  const articles = blogPosts.slice(0, 4).map(post => ({
    icon: getIconForCategory(post.category),
    title: post.title,
    description: post.excerpt,
    path: post.path,
    gradient: getGradientForCategory(post.category),
    bgColor: getBgColorForCategory(post.category),
    category: post.category,
    author: post.author,
    date: post.date
  }));

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  const cardWidth = isMobile ? containerWidth - 32 : 384; // 384px = w-96
  const cardGap = 24;
  const visibleCards = isMobile ? 1 : Math.min(3, Math.floor(containerWidth / (cardWidth + cardGap)));
  const maxIndex = Math.max(0, articles.length - visibleCards);

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= maxIndex;

  return (
    <section
      id="latest-articles"
      className="relative overflow-hidden"
      style={{ backgroundColor: '#E8F5E9' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* HEADER */}
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
    Latest Insights
  </h2>
  <p className="text-lg mb-8" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
    Explore our latest articles, case studies, and industry insights to stay ahead in the talent acquisition landscape.
  </p>
</div>

{/* Navigation Controls */}
<div className="flex justify-end mb-6 space-x-2">
  <button
    onClick={goToPrevious}
    disabled={isAtStart}
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
    style={{
      backgroundColor: isAtStart ? 'rgba(1, 5, 27, 0.05)' : 'rgba(1, 5, 27, 0.1)',
      border: '1px solid rgba(1, 5, 27, 0.2)',
      cursor: isAtStart ? 'not-allowed' : 'pointer'
    }}
  >
    <ChevronLeft className="h-5 w-5" style={{ 
      color: isAtStart ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
    }} />
  </button>
  <button
    onClick={goToNext}
    disabled={isAtEnd}
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
    style={{
      backgroundColor: isAtEnd ? 'rgba(1, 5, 27, 0.05)' : 'rgba(1, 5, 27, 0.1)',
      border: '1px solid rgba(1, 5, 27, 0.2)',
      cursor: isAtEnd ? 'not-allowed' : 'pointer'
    }}
  >
    <ChevronRight className="h-5 w-5" style={{ 
      color: isAtEnd ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
    }} />
  </button>
</div>
        

        {/* CAROUSEL */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ 
              x: -currentIndex * (cardWidth + cardGap)
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ gap: `${cardGap}px` }}
          >
            {articles.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0"
                style={{ width: `${cardWidth}px` }}
              >
                <div
                  className="rounded-2xl p-8 shadow-lg flex flex-col h-full transition-all duration-300 group relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, #ffffff 0%, #ffffff 50%, ${article.bgColor} 100%)`,
                    border: '1px solid rgba(1, 5, 27, 0.08)',
                    minHeight: '400px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.12)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${article.gradient} flex items-center justify-center mb-6`}
                    style={{ opacity: 0.9 }}
                  >
                    <article.icon className="h-8 w-8 text-white" /> 
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: '#01051B' }}>
                    {article.title}
                  </h3>
                  <p className="text-sm flex-grow mb-6" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                    {article.description}
                  </p>
                  <Link
                    to={article.path}
                    className="inline-flex items-center font-medium transition-colors group"
                    style={{ color: '#10b981' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0d9763'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#10b981'}
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile dots indicator */}
        {isMobile && (
          <div className="flex justify-center mt-8 space-x-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full transition-all"
                style={{
                  width: index === currentIndex ? '24px' : '8px',
                  backgroundColor: index === currentIndex ? '#01051B' : 'rgba(1, 5, 27, 0.2)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* View All Articles CTA */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 rounded-xl font-medium transition-all shadow-md"
            style={{ 
              backgroundColor: '#10b981',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0d9668';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#10b981';
            }}
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesCarouselSection;
