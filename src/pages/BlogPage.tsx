import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, Search, ChevronRight, Globe, Filter, BookOpen, TrendingUp, MessageSquare, Users, ChevronLeft, Eye, Star, Clock, Building, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { caseStudies } from '../data/caseStudies';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRegularSlide, setCurrentRegularSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const regularContainerRef = useRef(null);

  // Combine blog posts and case studies - all are now featured
  const allPosts = [
    ...blogPosts.map(post => ({
      ...post,
      type: 'blog',
      readTime: `${Math.ceil(post.content.length / 2000)} min read`
    })),
    ...caseStudies.map(study => ({
      ...study,
      type: 'case-study',
      excerpt: study.challenge.substring(0, 150) + '...',
      category: 'Case Studies',
      date: 'June 2024',
      readTime: '10 min read'
    }))
  ];

  const categories = ['All', 'Technology', 'Case Studies', 'Industry Insights', 'Company News'];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Measure container width
  useEffect(() => {
    const measureWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (regularContainerRef.current) {
        setContainerWidth(regularContainerRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  // Filter posts based on active category and search query - all posts are now featured
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // No carousel logic needed - showing all cards in grid

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Wave background */}
        <div className="absolute inset-0" style={{ opacity: 0.15 }}>
          <img 
            src="/wave.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.8)',
              transform: 'scale(1.1)'
            }}
          />
        </div>
        
        {/* Lighter overlay for readability */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 14, 10, 0.3) 0%, rgba(10, 14, 10, 0.6) 100%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <BookOpen className="h-4 w-4 mr-2" />
              Insights & Expertise
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              <span className="block">Insights, Case Studies</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>& Industry Expertise</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl leading-relaxed" style={{ color: '#94D3A2' }}>
              Explore our latest insights, success stories, and industry expertise to help you navigate 
              the digital transformation landscape with confidence.
            </p>

            {/* Search Bar - Commented out as requested */}
            {/* 
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search articles and case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-full transition-all"
                style={{
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.2)',
                  color: '#E3FFEF'
                }}
              />
              <Search className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#94D3A2' }} />
            </div>
            */}
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-3" style={{ color: 'rgba(1, 5, 27, 0.6)' }} />
              <span style={{ color: '#01051B' }} className="font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'text-white shadow-md'
                      : 'hover:shadow-sm'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category ? '#10b981' : 'rgba(1, 5, 27, 0.05)',
                    color: activeCategory === category ? '#FFFFFF' : 'rgba(1, 5, 27, 0.7)',
                    border: '1px solid rgba(1, 5, 27, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                      e.currentTarget.style.color = '#10b981';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category) {
                      e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                      e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles & Case Studies - All Cards Grid */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Star className="h-4 w-4 mr-2" />
              Featured Content
            </div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Featured Articles & Case Studies
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Our comprehensive collection of insights, success stories, and industry expertise
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={post.path} className="block h-full">
                    <div 
                      className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 group"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(1, 5, 27, 0.08)',
                        minHeight: '450px'
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
                      <div className="relative h-56 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: post.type === 'case-study' ? 'rgba(34, 197, 94, 0.9)' : 'rgba(16, 185, 129, 0.9)',
                              color: '#FFFFFF'
                            }}
                          >
                            {post.type === 'case-study' ? 'Case Study' : 'Article'}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center text-xs" style={{ color: '#FFFFFF' }}>
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium" style={{ color: '#10b981' }}>
                            {post.category}
                          </span>
                          <div className="flex items-center text-sm" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 flex-grow" style={{ color: '#01051B' }}>
                          {post.title}
                        </h3>
                        
                        <p className="text-sm mb-4 flex-grow" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid rgba(1, 5, 27, 0.1)' }}>
                          <div className="flex items-center text-sm" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          
                          <div className="flex items-center font-medium transition-colors group" style={{ color: '#10b981' }}>
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <Search className="h-12 w-12" style={{ color: '#10b981' }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#01051B' }}>
                No articles found
              </h3>
              <p className="mb-6" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                We couldn't find any articles matching your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="inline-flex items-center px-6 py-3 rounded-xl font-medium transition-colors"
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
                Clear filters
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Background Image */}
        <img 
          alt=""
          loading="lazy"
          width="1560"
          height="1514"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.1, color: 'transparent' }}
          src="/AIAgents-bg.webp"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ 
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981'
                }}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Stay Updated
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
                Get the latest insights, case studies, and industry expertise delivered directly to your inbox. 
                Join thousands of tech professionals staying ahead of the curve.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
                <input
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-6 py-4 rounded-full transition-all"
                  style={{
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.2)',
                    color: '#E3FFEF'
                  }}
                /> 
                <button 
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center whitespace-nowrap"
                  style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D0F5E3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3FFEF';
                  }}
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
              
              <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.7 }}>
                We respect your privacy. Unsubscribe at any time. No spam, ever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
