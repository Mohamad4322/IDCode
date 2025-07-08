import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus, Code, TestTube, Box, Layers, RotateCcw, Globe, Monitor, Shield, BarChart3, Recycle, Zap, Brain, Database, Settings, Cpu, MessageSquare, Search, Headphones, TrendingDown, Network, Building, Users, ChevronLeft, ChevronRight, Smartphone, Cloud, Palette, GitBranch, Target, Eye, Wifi, Heart, DollarSign, ShoppingCart, Factory, GraduationCap, Building2, Truck, Plane, Stethoscope, Film, Wheat, Hotel, Lock, Leaf } from 'lucide-react';

interface ServiceCard {
  category: string;
  title: string;
  description: string;
  path: string;
  icon: React.ElementType;
  image: string;
  tags: {
    projectState: string[];
    businessNeed: string[];
    requirements: string[];
  };
}

interface Question {
  id: string;
  text: string;
  options: string[];
}

const AISolutionsAdvisorSection: React.FC = () => {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>('projectState');
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [recommendedServices, setRecommendedServices] = useState<ServiceCard[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const questions: Question[] = [
    {
      id: 'projectState',
      text: 'What best describes the current state of your software project?',
      options: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product', 'Legacy system']
    },
    {
      id: 'businessNeed',
      text: 'What is your primary business need?',
      options: [
        'Scale up development',
        'Manage post-release issues',
        'Improve app maintainability',
        'Cut operational costs',
        'Overhaul the software',
        'Optimise and future-proof',
        'Become more agile'
      ]
    },
    {
      id: 'requirements',
      text: 'Does your project have any specific requirements?',
      options: [
        'Bolster security and compliance',
        'Adopt or customise enterprise software',
        'Manage and analyse your data',
        'Propel towards net zero',
        'Scale in the cloud',
        'Build consistent data strategy',
        'Leverage AI and automation'
      ]
    }
  ];

  const filterableServices: ServiceCard[] = [
    {
      category: 'Engineering',
      title: 'Application development',
      description: 'Bring your most complex software vision to life with innovation and scalability in mind',
      path: '/application-development',
      icon: Code,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype'],
        businessNeed: ['Scale up development', 'Overhaul the software'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Engineering',
      title: 'PoC development',
      description: 'Safely explore business-boosting concepts with robust testing and expert road mapping.',
      path: '/poc-development',
      icon: TestTube,
      image: '/files_2897771-1751318939403-image.png',
      tags: {
        projectState: ['Idea', 'PoC'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Leverage AI and automation', 'Manage and analyse your data']
      }
    },
    {
      category: 'Engineering',
      title: 'Product-oriented delivery',
      description: 'Ensure timely and cost-effective product delivery while prioritizing your business objectives.',
      path: '/product-development#product-oriented-delivery',
      icon: Box,
      image: '/files_2897771-1751318922399-image.png',
      tags: {
        projectState: ['Prototype', 'MVP'],
        businessNeed: ['Scale up development', 'Become more agile'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Data & AI',
      title: 'AI solutions advisor',
      description: 'Start the assessment →',
      path: '/ai-advisor',
      icon: Brain,
      image: '/files_2897771-1751324405036-image.png',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product', 'Legacy system'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Engineering',
      title: 'Custom software development',
      description: 'End-to-end custom software solutions designed to address your unique business challenges and opportunities.',
      path: '/custom-software-development',
      icon: Code,
      image: '/files_2897771-1751324414865-image.png',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Scale up development', 'Overhaul the software', 'Become more agile'],
        requirements: ['Adopt or customise enterprise software', 'Scale in the cloud']
      }
    },
    {
      category: 'Engineering',
      title: 'Product development',
      description: 'Comprehensive product development from concept to market launch with ongoing support and optimization.',
      path: '/product-development',
      icon: Box,
      image: '/files_2897771-1751324429488-image.png',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Scale up development', 'Become more agile'],
        requirements: ['Leverage AI and automation', 'Build consistent data strategy']
      }
    },
    {
      category: 'Engineering',
      title: 'Digital transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and drive innovation.',
      path: '/digital-transformation',
      icon: Zap,
      image: '/files_2897771-1751324445119-image.png',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Overhaul the software', 'Become more agile', 'Improve app maintainability'],
        requirements: ['Propel towards net zero', 'Leverage AI and automation']
      }
    },
    {
      category: 'Engineering',
      title: 'Cloud solutions',
      description: 'Scalable, secure cloud infrastructure and migration services to modernize your technology stack.',
      path: '/cloud-solutions',
      icon: Cloud,
      image: '/files_2897771-1751324475088-image.png',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Cut operational costs', 'Optimise and future-proof'],
        requirements: ['Scale in the cloud', 'Bolster security and compliance']
      }
    },
    {
      category: 'Advisory',
      title: 'Cyber security',
      description: 'Proactively identify threats to your digital infrastructure to futureproof your IT ecosystem.',
      path: '/cyber-security',
      icon: Shield,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Manage post-release issues', 'Optimise and future-proof'],
        requirements: ['Bolster security and compliance']
      }
    }
    ,
    {
      category: 'Advisory',
      title: 'UI/UX Design',
      description: 'Create exceptional user experiences with our comprehensive UI/UX design services that combine aesthetics with functionality.',
      path: '/ui-ux-design',
      icon: Palette,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Improve app maintainability', 'Become more agile'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Optimisation',
      title: 'Quality assurance',
      description: 'Comprehensive testing services to ensure your software meets the highest quality standards.',
      path: '/quality-assurance',
      icon: Shield,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Manage post-release issues', 'Improve app maintainability'],
        requirements: ['Bolster security and compliance']
      }
    },
    {
      category: 'Expertise',
      title: 'DevOps services',
      description: 'Streamline your development and deployment processes with our comprehensive DevOps services.',
      path: '/devops-services',
      icon: GitBranch,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Scale up development', 'Improve app maintainability', 'Become more agile'],
        requirements: ['Scale in the cloud']
      }
    },
    {
      category: 'Expertise',
      title: 'VR/AR/MR',
      description: 'Immersive virtual, augmented, and mixed reality experiences that engage, educate, and inspire your audience.',
      path: '/vr-ar-mr',
      icon: Eye,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype'],
        businessNeed: ['Overhaul the software', 'Become more agile'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Expertise',
      title: 'Internet of Things',
      description: 'Connect everything and optimize everything with comprehensive IoT solutions for your business.',
      path: '/iot',
      icon: Wifi,
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Leverage AI and automation', 'Manage and analyse your data']
      }
    },
    {
      category: 'Optimisation',
      title: 'Support',
      description: 'Comprehensive IT support services to keep your systems running smoothly and efficiently.',
      path: '/support',
      icon: Headphones,
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Manage post-release issues', 'Cut operational costs'],
        requirements: ['Bolster security and compliance']
      }
    },
    {
      category: 'Optimisation',
      title: 'FinOps',
      description: 'Maximize your cloud infrastructure value, optimize costs, and boost ROI with our FinOps services.',
      path: '/finops',
      icon: TrendingDown,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Cut operational costs', 'Optimise and future-proof'],
        requirements: ['Scale in the cloud', 'Manage and analyse your data']
      }
    }
  ];

  // Contact Us card that will always be appended at the end
  const contactUsCard: ServiceCard = {
    category: 'Contact',
    title: 'Contact us',
    description: 'Get in touch with our team to discuss your specific needs and requirements.',
    path: '/contact',
    icon: Globe,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: {
      projectState: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product', 'Legacy system'],
      businessNeed: ['Scale up development', 'Cut operational costs', 'Optimise and future-proof'],
      requirements: ['Adopt or customise enterprise software', 'Leverage AI and automation']
    }
  };

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

  const handleOptionSelect = (questionId: string, option: string) => {
  const newAnswers = {
    ...answers,
    [questionId]: option
  };
  setAnswers(newAnswers);
  
  // Auto-open next question in sequence
  const currentQuestionIndex = questions.findIndex(q => q.id === questionId);
  const nextQuestion = questions[currentQuestionIndex + 1];
  
  if (nextQuestion && !newAnswers[nextQuestion.id]) {
    setOpenQuestionId(nextQuestion.id);
  }
  
  // Generate recommendations immediately and show results
  generateRecommendations(newAnswers);
  setShowResults(true);
  setCurrentCardIndex(0); // Reset to first card when showing results
};

const handleQuestionToggle = (questionId: string) => {
  // Don't allow closing questions, only switching between them
  if (openQuestionId !== questionId) {
    setOpenQuestionId(questionId);
  }
};
const [showTooltip, setShowTooltip] = useState<string | null>(null);
const canAccessQuestion = (questionId: string) => {
  const questionIndex = questions.findIndex(q => q.id === questionId);
  
  // First question is always accessible
  if (questionIndex === 0) return true;
  
  // For other questions, check if previous question is answered
  const previousQuestion = questions[questionIndex - 1];
  return answers[previousQuestion.id] !== undefined;
};

  const generateRecommendations = (currentAnswers: { [key: string]: string } = answers) => {
    // Filter services based on selected answers and calculate match score
    const servicesWithScores = filterableServices.map(service => {
      let score = 0;
      
      // Check project state match
      if (currentAnswers.projectState && service.tags.projectState.includes(currentAnswers.projectState)) {
        score += 1;
      }
      
      // Check business need match
      if (currentAnswers.businessNeed && service.tags.businessNeed.includes(currentAnswers.businessNeed)) {
        score += 1;
      }
      
      // Check requirements match
      if (currentAnswers.requirements && service.tags.requirements.includes(currentAnswers.requirements)) {
        score += 1;
      }
      
      return { service, score };
    });
    
    // Filter out services with no matches and sort by score (descending)
    const filteredServices = servicesWithScores
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .map(item => item.service);
    
    // Always append the contact us card at the end
    setRecommendedServices([...filteredServices, contactUsCard]);
  };

  const nextCardSlide = () => {
    const totalCards = showResults ? recommendedServices.length : filterableServices.length + 1;
    if (currentCardIndex < totalCards - 1) {
      setCurrentCardIndex(prev => prev + 1);
    }
  };

  const prevCardSlide = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
    }
  };

  // Handle swipe gestures for mobile
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevCardSlide();
    } else if (info.offset.x < -threshold) {
      nextCardSlide();
    }
  };

  // Calculate card width and gap based on mobile/desktop
  const cardWidth = isMobile ? containerWidth - 32 : 350; // Increased card width
  const cardGap = isMobile ? 16 : 32;

  // Get the current list of cards to display
  const displayCards = showResults ? recommendedServices : [...filterableServices, contactUsCard];
  const totalCards = displayCards.length;
  const isAtLastCard = currentCardIndex === totalCards - 1;
  const isAtFirstCard = currentCardIndex === 0;

  const gradientBackgrounds = [
    'https://www.metaview.ai/_next/static/media/background-gradient-0.8956e64c.png',
    'https://www.metaview.ai/_next/static/media/background-gradient-1.a82365e5.png',
    'https://www.metaview.ai/_next/static/media/background-gradient.3e969b41.png'
  ];

  return (
    <section
  className="py-20 bg-cover bg-center"
  style={{
    backgroundImage: "url('/background-gradient.webp')",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#01051B' }}>
            See how we can help you reach your goals
          </h2>
          <p className="text-xl font-medium" style={{ color: '#01051B', opacity: 0.6 }}>
            Answer three questions to help us match our expertise and software solutions to your needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Questions Column */}
          <div className="flex-shrink-0">
            <div 
              className="rounded-2xl overflow-hidden"
              style={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(1, 5, 27, 0.08)',
                width: isMobile ? '100%' : '460px'
              }}
            >
              {/* Logo/Header section */}
              <div className="p-8 pb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                >
                  <Brain className="w-10 h-10" style={{ color: '#10b981' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#01051B' }}>
                  Solutions Advisor
                </h3>
                <p className="text-base" style={{ color: '#01051B', opacity: 0.6 }}>
                  Find the perfect match for your needs
                </p>
              </div>

              {/* Questions */}
              <div>
                {questions.map((question, index) => (
                  <div key={question.id} className="border-t" style={{ borderColor: 'rgba(1, 5, 27, 0.08)' }}>
                    <div 
  className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
  onClick={() => handleQuestionToggle(question.id)}
>
                      <div className="font-medium pr-4" style={{ color: '#01051B' }}>
                        {index + 1}. {question.text}
                      </div>
                      <div 
  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
  style={{ 
    backgroundColor: openQuestionId === question.id ? 'rgba(1, 5, 27, 0.1)' : 'rgba(1, 5, 27, 0.05)',
    border: '1px solid rgba(1, 5, 27, 0.2)'
  }}
>
  {openQuestionId === question.id ? (
    <Minus className="h-4 w-4" style={{ color: '#01051B' }} />
  ) : (
    <Plus className="h-4 w-4" style={{ color: '#01051B', opacity: 0.6 }} />
  )}
</div> 
                     </div>
                    
                    <AnimatePresence>
                      {openQuestionId === question.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-6 pb-6 overflow-hidden"
                        >
                         <div className="flex flex-wrap gap-3">
  {question.options.map((option) => (
    <button
      key={option}
      onClick={() => handleOptionSelect(question.id, option)}
      className="px-4 py-2 rounded-full text-sm font-medium transition-all"
      style={{
        backgroundColor: answers[question.id] === option ? '#10b981' : 'rgba(1, 5, 27, 0.05)',
        color: answers[question.id] === option ? '#FFFFFF' : 'rgba(1, 5, 27, 0.7)',
        border: '1px solid rgba(1, 5, 27, 0.2)'
      }}
      onMouseEnter={(e) => {
        if (answers[question.id] !== option) {
          e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
          e.currentTarget.style.color = '#10b981';
        }
      }}
      onMouseLeave={(e) => {
        if (answers[question.id] !== option) {
          e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
          e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
        }
      }}
    >
      {option}
    </button>
  ))}
</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Results Column */}
          <div className="flex-1 min-w-0">
            {/* Navigation Controls */}
            <div className="flex justify-end mb-6 space-x-2">
  <button
    onClick={prevCardSlide}
    disabled={isAtFirstCard}
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
    style={{
      backgroundColor: isAtFirstCard ? 'rgba(1, 5, 27, 0.05)' : 'rgba(1, 5, 27, 0.1)',
      border: '1px solid rgba(1, 5, 27, 0.2)',
      cursor: isAtFirstCard ? 'not-allowed' : 'pointer'
    }}
  >
    <ChevronLeft className="h-5 w-5" style={{ 
      color: isAtFirstCard ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
    }} />
  </button>
  <button
    onClick={nextCardSlide}
    disabled={isAtLastCard}
    className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
    style={{
      backgroundColor: isAtLastCard ? 'rgba(1, 5, 27, 0.05)' : 'rgba(1, 5, 27, 0.1)',
      border: '1px solid rgba(1, 5, 27, 0.2)',
      cursor: isAtLastCard ? 'not-allowed' : 'pointer'
    }}
  >
    <ChevronRight className="h-5 w-5" style={{ 
      color: isAtLastCard ? 'rgba(1, 5, 27, 0.3)' : '#01051B' 
    }} />
  </button>
</div>

            <div ref={cardContainerRef} className="relative overflow-hidden">
              <motion.div
                className="flex"
                animate={{ 
                  x: -currentCardIndex * (cardWidth + cardGap)
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                style={{ gap: `${cardGap}px` }}
              >
                {displayCards.map((service, index) => (
                  <Link 
                    key={`${service.title}-${index}`}
                    to={service.path}
                    className="block flex-shrink-0 relative rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 group"
                    style={{ 
                      width: `${cardWidth}px`,
                      height: '500px',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(1, 5, 27, 0.08)'
                    }}
                  >
                    <div className="h-full flex flex-col p-8 relative">
                      {/* Recommended badge */}
                      {showResults && index === 0 && service.title !== 'Contact us' && (
                        <div className="absolute top-6 right-6">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: 'rgba(16, 185, 129, 0.1)',
                              color: '#10b981'
                            }}
                          >
                            Recommended
                          </span>
                        </div>
                      )}
                      
                      {/* Category with circle */}
                      <div className="flex items-center gap-3 mb-6">
                        <div 
                          className="w-4 h-4 rounded-full border flex-shrink-0"
                          style={{ borderColor: 'rgba(1, 5, 27, 0.3)' }}
                        />
                        <span className="text-sm font-medium" style={{ color: '#01051B', opacity: 0.6 }}>
                          {service.category}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4"
                        style={{ color: '#01051B' }}
                      >
                        {service.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-base leading-relaxed whitespace-pre-line mb-8 flex-grow"
                        style={{ color: '#01051B', opacity: 0.6 }}
                      >
                        {service.description}
                      </p>
                      
                      {/* Arrow link at bottom */}
                      <div className="mt-auto flex items-center group">
                        <div 
                          className="w-12 h-12 rounded-full border flex items-center justify-center transition-all group-hover:border-opacity-60"
                          style={{ borderColor: 'rgba(1, 5, 27, 0.3)' }}
                        >
                          <ArrowRight 
                            className="h-5 w-5 transition-transform group-hover:translate-x-1" 
                            style={{ color: '#01051B', opacity: 0.4 }}
                          />
                        </div>
                        <div 
                          className="h-px flex-grow ml-4 transition-opacity group-hover:opacity-60"
                          style={{ backgroundColor: 'rgba(1, 5, 27, 0.1)' }}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Mobile navigation dots */}
            {isMobile && (
              <div className="flex justify-center mt-6 space-x-2">
                {Array.from({ length: totalCards }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCardIndex(index)}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: index === currentCardIndex ? '32px' : '8px',
                      backgroundColor: index === currentCardIndex ? '#01051B' : 'rgba(1, 5, 27, 0.2)'
                    }}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsAdvisorSection;