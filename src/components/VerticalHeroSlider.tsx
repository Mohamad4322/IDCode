import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Star, Award, Users, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);

  const cards = [
    {
      id: 1,
      label: "IDCode overview",
      img: "/2card-IDcode-img-2048x1212.jpg",
      title: "Your trusted partner for guaranteed software delivery",
      description: "Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.",
      type: "overview",
      stats: [
        { number: "500+", label: "Projects Delivered" },
        { number: "150+", label: "Happy Clients" },
        { number: "10+", label: "Years Experience" }
      ]
    },
    {
      id: 2,
      label: "Data & AI",
      img: "/card-data-ai-img-2048x1212.jpg",
      title: "Turn data into opportunity with AI-powered insights",
      description: "We help you unlock the full potential of your data by building AI-driven platforms that enable predictive analytics, intelligent automation, and strategic decision-making.",
      type: "service",
      button: { text: "View service", link: "/ai-advisor" },
      services: [
        { name: "Business intelligence", link: "/data-analytics" },
        { name: "Artificial intelligence", link: "/ai-advisor" },
        { name: "Machine learning", link: "/data-analytics#machine-learning" },
        { name: "Data strategy", link: "/data-analytics#data-strategy" },
        { name: "Intelligent automation", link: "/digital-transformation#intelligent-automation" },
        { name: "MLOps", link: "/data-analytics#mlops" }
      ]
    },
    {
      id: 3,
      label: "Energy",
      img: "/card-insurance-img-2048x1212.jpg",
      title: "Empowering energy transformation through software",
      description: "From grid modernization to energy trading platforms, we develop smart, secure solutions that support sustainability, regulatory compliance, and operational efficiency.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/energy" }
    },
    {
      id: 4,
      label: "Fintech",
      img: "/card-finance-img-2048x1212.jpg",
      title: "Revolutionizing finance through innovation",
      description: "We build modern financial solutions that streamline transactions, ensure security, and deliver seamless digital experiences—from banking apps to payment gateways.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/financial-services" }
    },
    {
      id: 5,
      label: "Healthcare",
      img: "/card-healthcare-img-2048x1212.jpg",
      title: "Digitizing healthcare to improve patient outcomes",
      description: "Our custom healthcare platforms enhance care delivery, enable real-time data sharing, and support compliance, helping providers offer efficient and secure services.",
      type: "industry",
      button: { text: "Explore industry solutions", link: "/healthcare" }
    }
  ];

  const resetProgressBar = () => {
    if (progressRef.current) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      void progressRef.current.offsetWidth;
      progressRef.current.style.transition = 'width 15s linear';
      progressRef.current.style.width = '100%';
    }
  };

  useEffect(() => {
    resetProgressBar();
    timerRef.current = setInterval(() => {
      setOpenIndex(prev => (prev + 1) % cards.length);
    }, 15000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [openIndex, cards.length]);

  const goToPrevious = () => {
    setOpenIndex(prevIndex => (prevIndex - 1 + cards.length) % cards.length);
  };

  const goToNext = () => {
    setOpenIndex(prevIndex => (prevIndex + 1) % cards.length);
  };

  const handleCardClick = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <>
      {/* Mobile View */}
      <section className="md:hidden h-[85vh] relative overflow-hidden" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Wave background - same as desktop */}
        <div className="absolute inset-0">
          <img 
            src="/wave.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(1)',
              transform: 'scale(1.1)',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#0a0e0a]/50 to-[#0a0e0a]/90"></div>
        </div>
        
        <AnimatePresence mode="wait">
          {cards.map((card, index) => (
            index === openIndex && (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div 
                  className="h-full w-full relative"
                  style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                  <div className="relative h-full flex flex-col p-6 pt-8">
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 self-start"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                        <Building2 className="h-3 w-3 mr-1" />
                        {card.label}
                      </div>
                      <h2 className="text-3xl font-bold mb-4 leading-tight" style={{ color: '#E3FFEF' }}>
                        {card.title}
                      </h2>
                      <p className="text-base mb-6 leading-relaxed" style={{ color: '#94D3A2' }}>
                        {card.description}
                      </p>
                      
                      {card.button && (
                        <Link 
                          to={card.button.link}
                          className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl mb-6 self-start"
                          style={{ 
                            backgroundColor: '#E3FFEF',
                            color: '#0a0e0a'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#D0F5E3';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#E3FFEF';
                          }}
                        >
                          {card.button.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}

                      {card.stats && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {card.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-3 rounded-xl"
                              style={{ 
                                backgroundColor: 'rgba(227, 255, 239, 0.1)',
                                border: '1px solid rgba(227, 255, 239, 0.2)'
                              }}>
                              <div className="text-2xl font-bold" style={{ color: '#10b981' }}>{stat.number}</div>
                              <div className="text-xs" style={{ color: '#94D3A2' }}>{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {card.services && (
                        <div className="mb-6">
                          <h3 className="text-sm font-medium mb-3" style={{ color: '#E3FFEF' }}>Our Services</h3>
                          <div className="grid grid-cols-2 gap-2">
                            {card.services.map((service, idx) => (
                              <Link 
                                key={idx}
                                to={service.link}
                                className="flex items-center group transition-colors text-xs p-2 rounded-lg"
                                style={{ color: '#94D3A2' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                                  e.currentTarget.style.color = '#E3FFEF';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = '#94D3A2';
                                }}
                              >
                                <div className="w-1 h-1 rounded-full mr-2 transition-colors"
                                  style={{ backgroundColor: '#10b981' }} />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Progress Bar and Navigation at Bottom - same style as desktop */}
                    <div className="mt-auto pb-2">
                      {/* Progress Bar */}
                      <div className="relative w-full h-1 bg-white/20 rounded-full mb-4">
                        <div 
                          ref={progressRef}
                          className="absolute top-0 left-0 h-full bg-white rounded-full transition-[width]"
                          style={{ width: '0%' }}
                        />
                      </div>
                      
                      {/* Navigation - same style as desktop */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          {cards.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setOpenIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === openIndex ? 'bg-white w-8' : 'bg-white/40'
                              }`}
                            />
                          ))}
                        </div>
                        
                        <div className="flex gap-3">
                          <button 
                            onClick={goToPrevious}
                            className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                            style={{
                              backgroundColor: 'rgba(227, 255, 239, 0.1)',
                              border: '1px solid rgba(227, 255, 239, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                            }}
                          >
                            <ChevronLeft className="h-5 w-5" style={{ color: '#E3FFEF' }} />
                          </button>
                          <button 
                            onClick={goToNext}
                            className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                            style={{
                              backgroundColor: 'rgba(227, 255, 239, 0.1)',
                              border: '1px solid rgba(227, 255, 239, 0.2)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                            }}
                          >
                            <ChevronRight className="h-5 w-5" style={{ color: '#E3FFEF' }} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </section>

      {/* Desktop View */}
      <section className="hidden md:flex items-stretch gap-3 px-6 py-8 h-[85vh] min-h-[600px] w-full relative overflow-hidden" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Wave background */}
        <div className="absolute inset-0">
          <img 
            src="/wave.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(1)',
              transform: 'scale(1.1)',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#0a0e0a]/50 to-[#0a0e0a]/90"></div>
        </div>
        
        {cards.map((card, index) => {
          const isOpen = index === openIndex;
          return (
            <motion.div
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isOpen ? "flex-[9]" : "flex-[0.8] hover:flex-[1]"
              }`}
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"
                  >
                    <div className="h-full flex flex-col justify-end p-12 pb-10">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 self-start"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}
                      >
                        <Building2 className="h-4 w-4 mr-2" />
                        {card.label}
                      </motion.div>
                      
                      <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl font-bold mb-6 max-w-3xl leading-tight"
                        style={{ color: '#E3FFEF' }}
                      >
                        {card.title}
                      </motion.h1>
                      
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg mb-8 max-w-2xl leading-relaxed"
                        style={{ color: '#94D3A2' }}
                      >
                        {card.description}
                      </motion.p>
                      
                      {card.button && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="mb-10"
                        >
                          <Link 
                            to={card.button.link}
                            className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
                            style={{ 
                              backgroundColor: '#E3FFEF',
                              color: '#0a0e0a'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#D0F5E3';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#E3FFEF';
                            }}
                          >
                            {card.button.text}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </motion.div>
                      )}

                      {card.stats && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="grid grid-cols-3 gap-6 mb-10 max-w-lg"
                        >
                          {card.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-4 rounded-xl"
                              style={{ 
                                backgroundColor: 'rgba(227, 255, 239, 0.1)',
                                border: '1px solid rgba(227, 255, 239, 0.2)'
                              }}>
                              <div className="text-3xl font-bold mb-1" style={{ color: '#10b981' }}>{stat.number}</div>
                              <div className="text-sm" style={{ color: '#94D3A2' }}>{stat.label}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      {card.services && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="mb-10"
                        >
                          <h3 className="text-lg font-medium mb-4" style={{ color: '#E3FFEF' }}>Our Services</h3>
                          <div className="grid grid-cols-2 gap-3 max-w-xl">
                            {card.services.map((service, idx) => (
                              <Link 
                                key={idx}
                                to={service.link}
                                className="flex items-center group transition-colors text-sm p-2 rounded-lg"
                                style={{ color: '#94D3A2' }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                                  e.currentTarget.style.color = '#E3FFEF';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'transparent';
                                  e.currentTarget.style.color = '#94D3A2';
                                }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full mr-3 transition-colors"
                                  style={{ backgroundColor: '#10b981' }} />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Progress Bar */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-auto"
                      >
                        <div className="relative w-full h-1 bg-white/20 rounded-full mb-4">
                      <div 
                        ref={progressRef}
                        className="absolute top-0 left-0 h-full bg-white rounded-full transition-[width]"
                        style={{ width: '0%' }}
                      />
                    </div>
                        
                        {/* Navigation */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {cards.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setOpenIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === openIndex ? 'bg-white w-8' : 'bg-white/40'
                            }`}
                          />
                        ))}
                      </div>
                          
                          <div className="flex gap-3">
                            <button 
                              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                              className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                              style={{
                                backgroundColor: 'rgba(227, 255, 239, 0.1)',
                                border: '1px solid rgba(227, 255, 239, 0.2)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                              }}
                            >
                              <ChevronLeft className="h-5 w-5" style={{ color: '#E3FFEF' }} />
                            </button>
                            <button 
                              onClick={(e) => { e.stopPropagation(); goToNext(); }}
                              className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                              style={{
                                backgroundColor: 'rgba(227, 255, 239, 0.1)',
                                border: '1px solid rgba(227, 255, 239, 0.2)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                              }}
                            >
                              <ChevronRight className="h-5 w-5" style={{ color: '#E3FFEF' }} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors">
                    <div className="h-full flex flex-col items-center justify-center text-white p-4">
                      <div className="w-3 h-3 border-2 border-white rounded-full mb-4" />
                      <span className="text-lg font-medium writing-mode-vertical text-center">
                        {card.label}
                      </span>
                      <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center mt-auto hover:bg-white/10 transition-colors">
                        <span className="text-2xl">+</span>
                      </div>
                    </div>
                  </div> 
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </section>

      <style>{`
        .writing-mode-vertical {
          writing-mode: vertical-lr;
          text-orientation: mixed;
        }
      `}</style>
    </>
  );
};

export default HeroSlider;
