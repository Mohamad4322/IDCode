import React, { useState, useEffect } from 'react';
import { ArrowRight, Brain, Zap, Target, CheckCircle, MessageSquare, Lightbulb, BarChart3, Cog, Cpu, Database, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedComponents';
import ScrollReveal from '../components/ScrollReveal';
import StaticNetworkBackground from '../components/StaticNetworkBackground';
import AnimatedCounter from '../components/AnimatedCounter';

const AIAdvisor = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedChallenge, setSelectedChallenge] = useState('');
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  const typingTexts = [
    "Predictive Analytics",
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Intelligent Automation"
  ];

  useEffect(() => {
    const text = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;
    
    if (!isDeleting && typingText === text) {
      // Pause at full text
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && typingText === '') {
      // Move to next text
      setIsDeleting(false);
      setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length);
    } else {
      // Type or delete
      const timeout = setTimeout(() => {
        setTypingText(
          isDeleting 
            ? text.substring(0, typingText.length - 1)
            : text.substring(0, typingText.length + 1)
        );
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typingText, isDeleting, currentTextIndex, typingTexts]);

  const industries = [
    'Healthcare',
    'Financial Services',
    'Retail & E-commerce',
    'Manufacturing',
    'Education',
    'Real Estate',
    'Logistics',
    'Energy'
  ];

  const challenges = [
    'Process Automation',
    'Data Analysis & Insights',
    'Customer Experience',
    'Operational Efficiency',
    'Cost Reduction',
    'Predictive Analytics',
    'Quality Control',
    'Risk Management'
  ];

  const aiSolutions = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent automation.',
      applications: ['Predictive Maintenance', 'Fraud Detection', 'Recommendation Systems', 'Demand Forecasting'],
      color: 'from-blue-600 to-purple-600',
      path: '/services/data-analytics'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, chatbots, and language understanding.',
      applications: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Document Processing', 'Language Translation'],
      color: 'from-blue-600 to-blue-400',
      path: '/services/custom-software-development'
    },
    {
      icon: BarChart3,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      applications: ['Quality Inspection', 'Facial Recognition', 'Object Detection', 'Medical Imaging'],
      color: 'from-green-600 to-green-400',
      path: '/services/quality-assurance'
    },
    {
      icon: Cog,
      title: 'Process Automation',
      description: 'Intelligent automation solutions that streamline workflows and reduce manual tasks.',
      applications: ['RPA Implementation', 'Workflow Optimization', 'Document Automation', 'Decision Support'],
      color: 'from-orange-500 to-orange-600',
      path: '/services/digital-transformation'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes for up to 40% efficiency gains.',
      metric: 40,
      suffix: '%',
      label: 'efficiency increase',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Zap,
      title: 'Faster Decision Making',
      description: 'Real-time insights and predictive analytics enable faster, data-driven decisions.',
      metric: 60,
      suffix: '%',
      label: 'faster decisions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CheckCircle,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      metric: 30,
      suffix: '%',
      label: 'cost savings',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Acceleration',
      description: 'Unlock new business opportunities with AI-powered insights and capabilities.',
      metric: 50,
      suffix: '%',
      label: 'faster innovation',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'AI Readiness Assessment',
      description: 'Evaluate your current infrastructure, data quality, and AI readiness to identify opportunities.',
      icon: Database
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design custom AI solutions tailored to your specific business challenges and objectives.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Proof of Concept',
      description: 'Develop and test a proof of concept to validate the solution before full implementation.',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Implementation & Training',
      description: 'Deploy the AI solution and provide comprehensive training for your team.',
      icon: Shield
    }
  ];

  // All AI solutions including additional ones
  const allAISolutions = [
    ...aiSolutions,
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights using advanced AI algorithms and machine learning techniques.',
      applications: ['Business Intelligence', 'Performance Analytics', 'Trend Analysis', 'Market Research'],
      path: '/services/data-analytics'
    },
    {
      icon: Shield,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered cybersecurity solutions that detect and prevent threats in real-time.',
      applications: ['Threat Detection', 'Anomaly Detection', 'Risk Assessment', 'Fraud Prevention'],
      path: '/services/cybersecurity'
    },
    {
      icon: Cpu,
      title: 'Edge AI Computing',
      description: 'Deploy AI models directly on edge devices for real-time processing and reduced latency.',
      applications: ['IoT Integration', 'Real-time Processing', 'Offline Capabilities', 'Edge Analytics'],
      path: '/services/edge-computing'
    }
  ];

  const handlePrevService = () => {
    setCurrentServiceIndex((prev) => {
      console.log('Previous clicked, current index:', prev);
      const newIndex = prev - 1;
      const result = newIndex < 0 ? allAISolutions.length - 1 : newIndex;
      console.log('New index will be:', result);
      return result;
    });
  };

  const handleNextService = () => {
    setCurrentServiceIndex((prev) => {
      console.log('Next clicked, current index:', prev);
      const newIndex = prev + 1;
      const result = newIndex >= allAISolutions.length ? 0 : newIndex;
      console.log('New index will be:', result);
      return result;
    });
  };

  const handleServiceClick = (path) => {
    // Use React Router's navigation instead of window.location
    window.open(path, '_self');
  };

  // Get the current and next service components
  const CurrentIcon = aiSolutions[currentServiceIndex].icon;
  const NextIcon = aiSolutions[(currentServiceIndex + 1) % aiSolutions.length].icon;

  return (
    <div className="pt-20">
      {/* Hero Section - Neural Network Design */}
      <section className="relative py-20 min-h-[80vh] flex items-center overflow-hidden">
        <StaticNetworkBackground 
          nodeCount={80}
          connectionDistance={120}
          className="absolute inset-0"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div style={{ y: y1 }}>
              <FadeIn delay={0.2}>
                <div className="flex items-center space-x-2 mb-6">
                  <Brain className="h-8 w-8 text-blue-600" />
                  <span className="text-blue-600 font-semibold text-lg text-left">AI-Powered Solutions</span>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h1 className="text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-6 text-left">
                  AI Solutions
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 h-24">
                    <span className="inline-block">{typingText}</span>
                    <span className="inline-block animate-blink">|</span>
                  </div>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <p className="text-xl font-serif text-gray-300 mb-8 leading-relaxed text-left">
                  Discover how artificial intelligence can transform your business. Get personalized AI recommendations based on your industry and specific challenges.
                </p>
              </FadeIn>
              
              <FadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="#advisor"
                    className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-orange-600 transition-all font-serif font-semibold flex items-center justify-center group shadow-lg"
                  >
                    Get AI Recommendations
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact"
                    className="border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-2xl hover:bg-gray-300 hover:text-gray-900 transition-colors font-serif font-semibold flex items-center justify-center"
                  >
                    Schedule Consultation
                  </Link>
                </motion.div>
              </FadeIn>
            </motion.div>
            
            <motion.div style={{ y: y2 }}>
              <FadeIn delay={0.4} direction="right">
                {/* AI Dashboard */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 relative">
                  <div className="text-left mb-6">
                    <Brain className="h-16 w-16 text-blue-600 mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-gray-900">AI-Powered Insights</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-500/20 backdrop-blur-sm p-4 rounded-xl text-left"
                    >
                      <div className="text-2xl font-serif font-bold text-blue-600">
                        <AnimatedCounter end={40} suffix="%" />
                      </div>
                      <div className="text-blue-600 text-sm font-serif">Efficiency Boost</div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-green-500/20 backdrop-blur-sm p-4 rounded-xl text-left"
                    >
                      <div className="text-2xl font-serif font-bold text-green-600">
                        <AnimatedCounter end={30} suffix="%" />
                      </div>
                      <div className="text-green-600 text-sm font-serif">Cost Reduction</div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-purple-500/20 backdrop-blur-sm p-4 rounded-xl text-left"
                    >
                      <div className="text-2xl font-serif font-bold text-purple-600">
                        <AnimatedCounter end={60} suffix="%" />
                      </div>
                      <div className="text-purple-600 text-sm font-serif">Faster Decisions</div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-orange-500/20 backdrop-blur-sm p-4 rounded-xl text-left"
                    >
                      <div className="text-2xl font-serif font-bold text-orange-600">
                        <AnimatedCounter end={50} suffix="%" />
                      </div>
                      <div className="text-orange-600 text-sm font-serif">Innovation Speed</div>
                    </motion.div>
                  </div>

                  {/* AI Processing Animation */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-serif text-gray-600">AI Processing</span>
                      <span className="text-blue-600 font-serif font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="bg-gradient-to-r from-blue-600 to-orange-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating AI Elements */}
                <FloatingElement
                  amplitude={10}
                  duration={4}
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-orange-500 p-4 rounded-2xl shadow-lg"
                >
                  <Cpu className="h-8 w-8 text-white" />
                </FloatingElement>

                <FloatingElement
                  amplitude={10}
                  duration={3}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-orange-500 p-4 rounded-2xl shadow-lg"
                >
                  <Database className="h-8 w-8 text-white" />
                </FloatingElement>
              </FadeIn>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Solutions Section - Testing Services Style with Navigation */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollReveal animation="fadeIn" className="text-left mb-16">
      <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
        Our AI Solutions
      </h2>
      <p className="text-xl font-serif text-gray-600 max-w-3xl">
        Comprehensive AI services designed to address your specific business challenges and unlock new opportunities.
      </p>
    </ScrollReveal>

    {/* Navigation Controls */}
    <div className="flex justify-end items-center mb-12">
      <div className="flex space-x-4">
        <button
          onClick={() => {
            if (currentServiceIndex > 0) {
              setCurrentServiceIndex(currentServiceIndex - 1);
            }
          }}
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => {
            if (currentServiceIndex < allAISolutions.length - 1) {
              setCurrentServiceIndex(currentServiceIndex + 1);
            }
          }}
          className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>

    {/* AI Solutions Cards */}
    <div className="relative">
      {/* Desktop View - 3 cards at once */}
      <div className="hidden lg:block overflow-hidden">
        <div className="grid grid-cols-3 gap-8">
          {allAISolutions.slice(currentServiceIndex, currentServiceIndex + 3).map((solution, index) => {
            if (!solution || !solution.icon) {
              return (
                <div key={`empty-${index}`} className="bg-white rounded-xl p-8 border border-gray-200 opacity-50">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl mb-6"></div>
                  <div className="h-8 bg-gray-100 rounded mb-4"></div>
                  <div className="h-20 bg-gray-100 rounded"></div>
                </div>
              );
            }

            const IconComponent = solution.icon;
            return (
              <motion.div
                key={currentServiceIndex + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  onClick={() => handleServiceClick(solution.path)}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group h-[600px] flex flex-col"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <IconComponent className="h-8 w-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex-shrink-0">{solution.title}</h3>
                  <p className="text-gray-600 font-serif mb-3 flex-grow">{solution.description}</p>
                  <div className="flex-shrink-0">
                    <h4 className="font-serif font-semibold text-gray-900 mb-2">Applications:</h4>
                    <ul className="space-y-2">
                      {solution.applications?.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-gray-600 font-serif text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 flex-shrink-0"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile View - 1 card at a time */}
      <div className="lg:hidden overflow-hidden">
        <div>
          {allAISolutions[currentServiceIndex] ? (
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="px-4"
            >
              <div
                onClick={() => handleServiceClick(allAISolutions[currentServiceIndex].path)}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  {React.createElement(allAISolutions[currentServiceIndex].icon, {
                    className: "h-8 w-8 text-gray-700 group-hover:text-blue-600 transition-colors",
                  })}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">
                  {allAISolutions[currentServiceIndex].title}
                </h3>
                <p className="text-gray-600 font-serif mb-6 text-sm">
                  {allAISolutions[currentServiceIndex].description}
                </p>
                <div>
                  <h4 className="font-serif font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {allAISolutions[currentServiceIndex].applications?.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-600 font-serif text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-center text-gray-500 py-10">No more cards to display.</div>
          )}
        </div>
      </div>

      {/* Touch Swipe Handler for Mobile */}
      <div
        className="lg:hidden absolute inset-0 z-10"
        onTouchStart={(e) => {
          const touchStart = e.touches[0].clientX;
          e.currentTarget.setAttribute("data-touch-start", touchStart.toString());
        }}
        onTouchEnd={(e) => {
          const touchStartStr = e.currentTarget.getAttribute("data-touch-start");
          if (!touchStartStr) return;

          const touchStart = parseFloat(touchStartStr);
          const touchEnd = e.changedTouches[0].clientX;
          const diff = touchStart - touchEnd;

          if (Math.abs(diff) > 50) {
            e.preventDefault();
            if (diff > 0 && currentServiceIndex < allAISolutions.length - 1) {
              setCurrentServiceIndex(currentServiceIndex + 1);
            } else if (diff < 0 && currentServiceIndex > 0) {
              setCurrentServiceIndex(currentServiceIndex - 1);
            }
          }
        }}
      />
    </div>
  </div>
</section>


      {/* Benefits Section - Animated Counters */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fadeIn" className="text-left mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Benefits of AI Implementation
            </h2>
            <p className="text-xl font-serif text-gray-600 max-w-3xl">
              Discover the measurable impact AI can have on your business operations and growth.
            </p>
          </ScrollReveal>

          <StaggerContainer staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -15, rotate: index % 2 === 0 ? 3 : -3 }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl transition-all duration-300 relative z-10">
                    <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 font-serif mb-4">{benefit.description}</p>
                    <div className="text-2xl font-serif font-bold text-blue-600">
                      <AnimatedCounter 
                        end={benefit.metric} 
                        suffix={benefit.suffix} 
                      /> {benefit.label}
                    </div>
                  </div>
                  
                  {/* Floating Shadow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-20 rounded-3xl blur-xl transform translate-y-4`}></div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* AI Advisor Tool - Interactive Section */}
      <section id="advisor" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        {/* Animated Background */}
        <StaticNetworkBackground 
          nodeCount={30}
          connectionDistance={100}
          className="absolute inset-0"
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fadeIn" className="text-left mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Get Personalized AI Recommendations
            </h2>
            <p className="text-xl font-serif text-gray-300 max-w-3xl">
              Answer a few questions about your business to receive tailored AI solution recommendations.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="slideUp" delay={0.2}>
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="space-y-8">
                {/* Fixed height container for questions */}
                <div className="min-h-[200px]">
                  <label className="block text-lg font-serif font-semibold text-white mb-4 text-left">
                    What industry are you in?
                  </label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {industries.map((industry, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedIndustry(industry)}
                        className={`p-3 rounded-xl text-sm font-serif font-medium transition-all ${
                          selectedIndustry === industry
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-white/20 text-gray-300 hover:bg-white/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {industry}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="min-h-[200px]">
                  <label className="block text-lg font-serif font-semibold text-white mb-4 text-left">
                    What's your main business challenge?
                  </label>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {challenges.map((challenge, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setSelectedChallenge(challenge)}
                        className={`p-3 rounded-xl text-sm font-serif font-medium transition-all ${
                          selectedChallenge === challenge
                            ? 'bg-purple-600 text-white shadow-lg'
                            : 'bg-white/20 text-gray-300 hover:bg-white/30'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {challenge}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {selectedIndustry && selectedChallenge && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 min-h-[200px]"
                  >
                    <h3 className="text-xl font-serif font-bold text-white mb-4 text-left">
                      Recommended AI Solutions for {selectedIndustry}
                    </h3>
                    <p className="text-gray-300 font-serif mb-4 text-left">
                      Based on your industry ({selectedIndustry}) and challenge ({selectedChallenge}), 
                      we recommend the following AI solutions:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-white">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="font-serif">Machine Learning for predictive analytics</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="font-serif">Process automation solutions</span>
                      </li>
                      <li className="flex items-center text-white">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="font-serif">Data analytics and insights platform</span>
                      </li>
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link 
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-orange-600 transition-colors font-serif font-semibold inline-flex items-center"
                      >
                        Get Detailed Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process Section - Animated Circle */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fadeIn" className="text-left mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl font-serif text-gray-600 max-w-3xl">
              A structured approach to ensure successful AI adoption and maximum ROI for your business.
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Circular Connection */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-blue-200 rounded-full opacity-30"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                return (
                  <ScrollReveal
                    key={index}
                    animation="zoom"
                    delay={index * 0.2}
                    className="relative"
                  >
                    <div className="bg-white rounded-3xl p-8 text-left shadow-lg hover:shadow-xl transition-all duration-300 relative z-10">
                      <div className="bg-gradient-to-r from-blue-600 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-600 font-serif">{step.description}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Animated Gradient */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900">
          {/* Animated Gradient Mesh */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-600/30 via-transparent to-gray-800/30"
          />
          
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-gray-900/30 via-transparent to-gray-700/30"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          <ScrollReveal animation="fadeIn" className="mb-8">
            <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Ready to Implement AI in Your Business?
            </h2>
            <p className="text-xl font-serif text-gray-300 mb-8 max-w-3xl">
              Let's discuss your AI opportunities and create a roadmap for successful implementation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="slideUp" delay={0.2}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors font-serif font-semibold inline-flex items-center shadow-lg"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </ScrollReveal> 
        </div>
      </section>
    </div>
  );
};

export default AIAdvisor; 