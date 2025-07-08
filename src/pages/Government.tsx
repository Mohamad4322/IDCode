import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Building, CheckCircle, Database, Globe, Shield, ChevronLeft, ChevronRight, Lock, Users, FileText, BarChart3, Briefcase, Network, Activity, Star, Award, Clock, Zap, Lightbulb, Plus, Minus, Target, MessageSquare, Settings, Search, TrendingUp, Building2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Government = () => {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('digital-services');
  const cardContainerRef = useRef<HTMLDivElement>(null);

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
      if (cardContainerRef.current) {
        setContainerWidth(cardContainerRef.current.offsetWidth);
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  const benefits = [
    {
      number: '01',
      title: 'Enhanced Citizen Services',
      description: 'Improve citizen satisfaction with digital services that are accessible, user-friendly, and available 24/7, reducing wait times and administrative burden.',
      icon: Users,
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      number: '02',
      title: 'Operational Efficiency',
      description: 'Streamline government operations through process automation, workflow optimization, and paperless systems that reduce costs and improve service delivery.',
      icon: BarChart3,
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      number: '03',
      title: 'Data-Driven Decision Making',
      description: 'Leverage advanced analytics and reporting tools to make informed policy decisions based on comprehensive data insights and trends.',
      icon: Database,
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      number: '04',
      title: 'Transparency & Accountability',
      description: 'Enhance public trust through transparent systems that provide visibility into government operations, spending, and decision-making processes.',
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      number: '05',
      title: 'Security & Compliance',
      description: 'Implement robust security measures that protect sensitive government data while ensuring compliance with regulatory requirements and privacy laws.',
      icon: Shield,
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      number: '06',
      title: 'Cross-Agency Collaboration',
      description: 'Enable seamless information sharing and collaboration between different government agencies and departments for more coordinated service delivery.',
      icon: Network,
      gradient: 'from-purple-500 to-indigo-400'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Citizen Service Portals',
      description: 'Comprehensive digital platforms that enable citizens to access government services, submit applications, make payments, and track requests through intuitive interfaces.',
      features: ['Digital ID verification', 'Service request tracking', 'Online payment processing', 'Multi-language support', 'Mobile accessibility'],
      icon: Globe,
      gradient: 'from-emerald-500 to-green-400',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '02',
      title: 'Government Data Management',
      description: 'Secure data management systems that organize, protect, and analyze government information for improved decision-making and service delivery.',
      features: ['Data encryption & security', 'Real-time analytics', 'Automated reporting', 'Compliance monitoring', 'Data integration'],
      icon: Database,
      gradient: 'from-teal-500 to-emerald-400',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '03',
      title: 'Administrative Workflow Systems',
      description: 'Automated workflow solutions that streamline internal processes, reduce paperwork, and improve interdepartmental collaboration.',
      features: ['Process automation', 'Digital document management', 'Task assignment & tracking', 'Performance monitoring', 'Approval workflows'],
      icon: Briefcase,
      gradient: 'from-cyan-500 to-teal-400',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '04',
      title: 'Public Safety & Emergency Management',
      description: 'Integrated systems for emergency response coordination, incident management, and public safety operations.',
      features: ['Real-time incident tracking', 'Resource allocation', 'Public alert systems', 'Inter-agency coordination', 'Emergency planning'],
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-400',
      image: 'https://images.pexels.com/photos/8815993/pexels-photo-8815993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '05',
      title: 'Digital Identity & Authentication',
      description: 'Secure digital identity solutions that enable trusted access to government services while protecting citizen privacy.',
      features: ['Multi-factor authentication', 'Biometric verification', 'Single sign-on (SSO)', 'Identity lifecycle management', 'Privacy protection'],
      icon: Lock,
      gradient: 'from-indigo-500 to-blue-400',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '06',
      title: 'AI-Powered Government Analytics',
      description: 'Advanced AI and machine learning solutions for predictive analytics, pattern recognition, and intelligent automation.',
      features: ['Predictive modeling', 'Fraud detection', 'Service optimization', 'Citizen behavior analysis', 'Policy impact assessment'],
      icon: Lightbulb,
      gradient: 'from-purple-500 to-indigo-400',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const stats = [
    { value: '85%', label: 'Reduction in processing time', icon: Clock },
    { value: '3M+', label: 'Citizens served digitally', icon: Users },
    { value: '60%', label: 'Cost savings achieved', icon: TrendingUp },
    { value: '95%', label: 'User satisfaction rate', icon: Star }
  ];

  const faqs = [
    {
      id: 'digital-services',
      question: 'How can digital transformation improve citizen services?',
      answer: 'Digital transformation enables 24/7 service availability, reduces wait times, simplifies processes, and provides citizens with self-service options. Our solutions create user-friendly portals that allow citizens to access services, submit applications, track requests, and make payments online, significantly improving their experience with government services.'
    },
    {
      id: 'security-compliance',
      question: 'How do you ensure security and compliance in government systems?',
      answer: 'We implement multi-layered security frameworks including encryption, access controls, audit trails, and compliance monitoring. Our solutions meet government security standards like FedRAMP, FISMA, and other regulatory requirements, ensuring sensitive data protection while maintaining transparency and accessibility.'
    },
    {
      id: 'implementation-timeline',
      question: 'What is the typical timeline for implementing government digital solutions?',
      answer: 'Implementation timelines vary based on scope and complexity. Simple citizen portals can be deployed in 3-6 months, while comprehensive digital transformation projects may take 12-18 months. We use agile methodologies to deliver value incrementally and ensure minimal disruption to ongoing operations.'
    },
    {
      id: 'legacy-integration',
      question: 'Can you integrate with existing legacy government systems?',
      answer: 'Yes, we specialize in legacy system integration and modernization. Our approach includes API development, data migration strategies, and phased integration plans that allow you to modernize gradually while maintaining operational continuity. We ensure seamless data flow between old and new systems.'
    },
    {
      id: 'training-support',
      question: 'What training and support do you provide for government staff?',
      answer: 'We provide comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing support. Our training covers both technical aspects for IT staff and user training for government employees who will interact with the new systems daily.'
    }
  ];

  const nextSolution = () => {
    if (currentSolutionIndex < solutions.length - 1) {
      setCurrentSolutionIndex(prev => prev + 1);
    }
  };

  const prevSolution = () => {
    if (currentSolutionIndex > 0) {
      setCurrentSolutionIndex(prev => prev - 1);
    }
  };

  const cardWidth = isMobile ? containerWidth - 32 : 400;
  const cardGap = 24;
  const isAtLastCard = currentSolutionIndex === solutions.length - 1;
  const isAtFirstCard = currentSolutionIndex === 0;

  const handleFaqToggle = (faqId: string) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen pt-20">
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
              <Building2 className="h-4 w-4 mr-2" />
              Government Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              <span className="block">Transform Public Services</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>With Digital Innovation</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl leading-relaxed" style={{ color: '#94D3A2' }}>
              Modernize your government operations with secure, scalable digital solutions that enhance citizen services, 
              improve efficiency, and ensure compliance with the highest security standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D0F5E3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E3FFEF';
                }}
              >
                Get Expert Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#solutions"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center"
                style={{
                  backgroundColor: 'rgba(227, 255, 239, 0.1)',
                  color: '#E3FFEF',
                  border: '1px solid rgba(227, 255, 239, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                }}
              >
                View Solutions
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-5 w-5 mr-2" style={{ color: '#10b981' }} />
                    <div className="text-2xl md:text-3xl font-bold" style={{ color: '#E3FFEF' }}>
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Building className="h-4 w-4 mr-2" />
                Digital Government
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Empowering Governments</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>For the Digital Age</span>
              </h2>
              
              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Transform your government operations with comprehensive digital solutions that enhance citizen engagement, 
                streamline administrative processes, and ensure the highest levels of security and compliance.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Citizen-Centric Design', desc: 'User-friendly interfaces that make government services accessible to all citizens' },
                  { title: 'Enterprise Security', desc: 'Military-grade security with full compliance to government standards' },
                  { title: 'Scalable Architecture', desc: 'Solutions that grow with your organization and citizen needs' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#10b981' }} />
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#E3FFEF' }}>{item.title}</h4>
                      <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div 
                className="rounded-2xl p-8"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: 'Citizen Services', desc: 'Digital-first approach' },
                    { icon: Shield, title: 'Security', desc: 'Government-grade protection' },
                    { icon: BarChart3, title: 'Analytics', desc: 'Data-driven insights' },
                    { icon: Network, title: 'Integration', desc: 'Seamless connectivity' }
                  ].map((feature, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mx-auto mb-3`}>
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-1" style={{ color: '#E3FFEF' }}>
                        {feature.title}
                      </h4>
                      <p className="text-xs" style={{ color: '#94D3A2', opacity: 0.8 }}>
                        {feature.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Solutions Carousel */}
      <section id="solutions" className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
              <div>
                <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
                  Comprehensive Government Solutions
                </h2>
                <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  Digital transformation solutions designed specifically for government and public sector organizations
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={prevSolution}
                  disabled={isAtFirstCard}
                  className="w-10 h-10 border rounded-full flex items-center justify-center transition-all"
                  style={{
                    borderColor: isAtFirstCard ? 'rgba(1, 5, 27, 0.2)' : 'rgba(1, 5, 27, 0.3)',
                    backgroundColor: 'transparent',
                    cursor: isAtFirstCard ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ 
                    color: isAtFirstCard ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
                  }} />
                </button>
                <button
                  onClick={nextSolution}
                  disabled={isAtLastCard}
                  className="w-10 h-10 border rounded-full flex items-center justify-center transition-all"
                  style={{
                    borderColor: isAtLastCard ? 'rgba(1, 5, 27, 0.2)' : 'rgba(1, 5, 27, 0.3)',
                    backgroundColor: 'transparent',
                    cursor: isAtLastCard ? 'not-allowed' : 'pointer'
                  }}
                >
                  <ChevronRight className="w-5 h-5" style={{ 
                    color: isAtLastCard ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
                  }} />
                </button>
              </div>
            </div>
          </div>

          <div ref={cardContainerRef} className="relative overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentSolutionIndex * (cardWidth + cardGap) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ gap: `${cardGap}px` }}
            >
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <div
                    className="rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 group relative"
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(1, 5, 27, 0.08)',
                      minHeight: '600px'
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
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                          <solution.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="text-white font-medium text-sm">{solution.number}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#01051B' }}>
                        {solution.title}
                      </h3>
                      
                      <p className="text-sm mb-6 flex-grow" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                        {solution.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm" style={{ color: '#01051B' }}>Key Features:</h4>
                        <div className="space-y-2">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                              <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#10b981' }} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center font-medium transition-colors group mt-auto" style={{ color: '#10b981' }}>
                        Learn more about this solution
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {solutions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSolutionIndex(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === currentSolutionIndex ? '32px' : '8px',
                    backgroundColor: index === currentSolutionIndex ? '#01051B' : 'rgba(1, 5, 27, 0.2)'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Award className="h-4 w-4 mr-2" />
              Service Benefits
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Transform Your Government Operations
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
              Discover the comprehensive benefits of digital transformation for government agencies and public sector organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm font-medium" style={{ color: '#10b981' }}>
                    {benefit.number}
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                  {benefit.title}
                </h3>
                
                <p className="text-sm leading-relaxed" style={{ color: '#94D3A2', opacity: 0.8 }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Common questions about government digital transformation and our solutions.
            </p>
          </div>

          <div 
            className="rounded-2xl overflow-hidden"
            style={{ 
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(1, 5, 27, 0.08)'
            }}
          >
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-100 last:border-b-0">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => handleFaqToggle(faq.id)}
                >
                  <div className="font-medium pr-4" style={{ color: '#01051B' }}>
                    {faq.question}
                  </div>
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ 
                      backgroundColor: openFaqId === faq.id ? 'rgba(1, 5, 27, 0.1)' : 'rgba(1, 5, 27, 0.05)',
                      border: '1px solid rgba(1, 5, 27, 0.2)'
                    }}
                  >
                    {openFaqId === faq.id ? (
                      <Minus className="h-4 w-4" style={{ color: '#01051B' }} />
                    ) : (
                      <Plus className="h-4 w-4" style={{ color: '#01051B', opacity: 0.6 }} />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 overflow-hidden"
                    >
                      <p className="leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
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
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Sparkles className="h-4 w-4 mr-2" />
                Ready to Transform?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Modernize Your Government Services Today
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
                Partner with us to deliver better citizen services, improve operational efficiency, 
                and build a more transparent, accountable government.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact" 
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
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
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <button 
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.1)',
                    color: '#E3FFEF',
                    border: '1px solid rgba(227, 255, 239, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                  }}
                >
                  Download Case Studies
                  <FileText className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Government;