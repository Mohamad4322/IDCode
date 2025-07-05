import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Minus, Code, TestTube, Cuboid as Cube, Layers, RotateCcw, Globe, Monitor, Shield, BarChart3, Recycle, Zap, Brain, Database, Settings, Cpu, MessageSquare, Search, Headphones, TrendingDown, Network, Building, Users, ChevronLeft, ChevronRight } from 'lucide-react';

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
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
      icon: Cube,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Prototype', 'MVP'],
        businessNeed: ['Scale up development', 'Become more agile'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Engineering',
      title: 'Enterprise applications',
      description: 'ERP consulting\nCRM consulting',
      path: '/custom-software-development#enterprise-applications',
      icon: Layers,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Improve app maintainability', 'Overhaul the software'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Engineering',
      title: 'Legacy software modernization',
      description: 'Transform your core legacy systems to elevate performance, agility, scalability, and UX.',
      path: '/digital-transformation#legacy-modernization',
      icon: RotateCcw,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Legacy system'],
        businessNeed: ['Improve app maintainability', 'Overhaul the software', 'Optimise and future-proof'],
        requirements: ['Adopt or customise enterprise software', 'Scale in the cloud']
      }
    },
    {
      category: 'Engineering',
      title: 'Cloud computing',
      description: 'Cloud migration',
      path: '/cloud-solutions',
      icon: Globe,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Cut operational costs', 'Optimise and future-proof'],
        requirements: ['Scale in the cloud']
      }
    },
    {
      category: 'Advisory',
      title: 'Product and service design',
      description: 'Validate niche ideas and create innovative products and services that scale as your business does.',
      path: '/ui-ux-design#product-service-design',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Adopt or customise enterprise software']
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
    },
    {
      category: 'Advisory',
      title: 'Technical feasibility study',
      description: 'Explore new technologies and their potential for your business before making an investment.',
      path: '/poc-development#technical-feasibility',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Leverage AI and automation', 'Scale in the cloud']
      }
    },
    {
      category: 'Advisory',
      title: 'Sustainability consulting',
      description: 'Reach your net-zero goals and seize new, sustainable business growth opportunities.',
      path: '/sustainability-consulting',
      icon: Recycle,
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Propel towards net zero']
      }
    },
    {
      category: 'Advisory',
      title: 'Agile transformation',
      description: 'Transform your organization to achieve agility, resilience, and sustainable business growth.',
      path: '/digital-transformation#agile-transformation',
      icon: Zap,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Become more agile', 'Optimise and future-proof'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Advisory',
      title: 'AI consulting',
      description: 'Get strategic guidance on implementing AI solutions for scalable business growth.',
      path: '/ai-advisor#ai-consulting',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Data & AI',
      title: 'AI solutions advisor',
      description: 'Start the assessment →',
      path: '/ai-advisor',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product', 'Legacy system'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Data & AI',
      title: 'Data science',
      description: 'Boost your business performance and achieve optimization through tailored data-driven solutions.',
      path: '/data-analytics',
      icon: Database,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Manage and analyse your data', 'Build consistent data strategy']
      }
    },
    {
      category: 'Data & AI',
      title: 'Data engineering',
      description: 'Data strategy\nData platforms\nBusiness intelligence',
      path: '/data-analytics#data-engineering',
      icon: Settings,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Optimise and future-proof', 'Improve app maintainability'],
        requirements: ['Manage and analyse your data', 'Build consistent data strategy']
      }
    },
    {
      category: 'Data & AI',
      title: 'MLOps',
      description: 'Achieve seamless integration and maximum ROI for your machine learning models.',
      path: '/data-analytics#mlops',
      icon: Cpu,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['MVP', 'Ready product'],
        businessNeed: ['Optimise and future-proof', 'Manage post-release issues'],
        requirements: ['Leverage AI and automation', 'Manage and analyse your data']
      }
    },
    {
      category: 'Data & AI',
      title: 'Artificial intelligence',
      description: 'Generative AI\nMachine learning\nConversational AI\nAgentic AI',
      path: '/ai-advisor#artificial-intelligence',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Data & AI',
      title: 'Intelligent automation',
      description: 'Intelligent document processing',
      path: '/digital-transformation#intelligent-automation',
      icon: Settings,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Cut operational costs', 'Optimise and future-proof'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Data & AI',
      title: 'LLMOps',
      description: 'Streamline deployment, optimize performance, and maximize ROI for your large language models.',
      path: '/ai-advisor#llmops',
      icon: MessageSquare,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['MVP', 'Ready product'],
        businessNeed: ['Optimise and future-proof', 'Manage post-release issues'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Optimisation',
      title: 'Software audit',
      description: 'Assess your software products and processes to mitigate risks and minimize revenue loss.',
      path: '/quality-assurance#software-audit',
      icon: Search,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Manage post-release issues', 'Improve app maintainability'],
        requirements: ['Bolster security and compliance']
      }
    },
    {
      category: 'Optimisation',
      title: 'Quality assurance',
      description: 'Deliver flawless products and seamless user experiences with our expert QA services.',
      path: '/quality-assurance',
      icon: Shield,
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Manage post-release issues', 'Improve app maintainability'],
        requirements: ['Bolster security and compliance']
      }
    },
    {
      category: 'Optimisation',
      title: 'Support',
      description: 'Efficiently handle technical issues and system changes with our IT support services.',
      path: '/support',
      icon: Headphones,
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Manage post-release issues'],
        requirements: ['Bolster security and compliance']
      }
    },
    {
      category: 'Optimisation',
      title: 'FinOps',
      description: 'Get expert guidance to maximise your cloud infrastructure value, optimise costs, and boost ROI.',
      path: '/finops',
      icon: TrendingDown,
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Cut operational costs', 'Optimise and future-proof'],
        requirements: ['Scale in the cloud']
      }
    },
    {
      category: 'Expertise',
      title: 'DevOps',
      description: 'Full-cycle DevOps solutions to optimise your SDLC for greater agility and cost-efficiency.',
      path: '/devops-services',
      icon: Network,
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
      description: 'Utilize virtual reality technologies to deliver brand-defining, immersive user experiences.',
      path: '/vr-ar-mr',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Leverage AI and automation']
      }
    },
    {
      category: 'Expertise',
      title: 'Internet of Things',
      description: 'Embrace the potential of IoT for better efficiency, smoother collaboration and powerful data insights.',
      path: '/iot',
      icon: Network,
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Optimise and future-proof', 'Cut operational costs'],
        requirements: ['Manage and analyse your data', 'Leverage AI and automation']
      }
    },
    {
      category: 'Expertise',
      title: 'Market research',
      description: 'Evaluate your business landscape to capitalise on promising niches and get ahead of the competition.',
      path: '/product-development#market-research',
      icon: Search,
      image: 'https://images.pexels.com/photos/7567555/pexels-photo-7567555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC'],
        businessNeed: ['Optimise and future-proof'],
        requirements: ['Manage and analyse your data']
      }
    },
    {
      category: 'Expertise',
      title: 'Customer Experience',
      description: 'Refine every customer interaction to enhance satisfaction and drive sustainable revenue growth.',
      path: '/ui-ux-design#customer-experience',
      icon: Users,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Prototype', 'MVP', 'Ready product'],
        businessNeed: ['Optimise and future-proof', 'Manage post-release issues'],
        requirements: ['Adopt or customise enterprise software']
      }
    },
    {
      category: 'Expertise',
      title: 'Digital enterprise',
      description: 'Introduce digital transformation to your enterprise to drive efficiency, productivity, and revenue.',
      path: '/digital-transformation#digital-enterprise',
      icon: Building,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Ready product', 'Legacy system'],
        businessNeed: ['Overhaul the software', 'Optimise and future-proof', 'Become more agile'],
        requirements: ['Adopt or customise enterprise software', 'Manage and analyse your data']
      }
    },
    {
      category: 'Expertise',
      title: 'UX consulting',
      description: 'Launch successful products and deliver services that your customers will truly want to use.',
      path: '/ui-ux-design',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: {
        projectState: ['Idea', 'PoC', 'Prototype', 'MVP'],
        businessNeed: ['Optimise and future-proof', 'Manage post-release issues'],
        requirements: ['Adopt or customise enterprise software']
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
    
    // Generate recommendations immediately and show results
    generateRecommendations(newAnswers);
    setShowResults(true);
    setCurrentCardIndex(0); // Reset to first card when showing results
  };

  const handleQuestionToggle = (questionId: string) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
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
  const cardWidth = isMobile ? containerWidth - 32 : 320; // Full width minus padding on mobile
  const cardGap = isMobile ? 16 : 32;

  // Get the current list of cards to display
  const displayCards = showResults ? recommendedServices : [...filterableServices, contactUsCard];
  const totalCards = displayCards.length;
  const isAtLastCard = currentCardIndex === totalCards - 1;
  const isAtFirstCard = currentCardIndex === 0;

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
            See how we can help you reach your goals
          </h2>
          <p className="text-xl font-semibold text-gray-600">
            Answer three questions to help us match our expertise and software solutions to your needs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-8 gap-x-6">
          {/* Questions Column */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden w-full lg:w-[450px] flex-shrink-0">
            {questions.map((question, index) => (
              <div key={question.id} className="border-b border-gray-200 last:border-b-0">
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => handleQuestionToggle(question.id)}
                >
                  <div className="font-medium text-gray-900 min-h-[48px] flex items-center">
                    {index + 1}. {question.text}
                  </div>
                  <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                    {openQuestionId === question.id ? (
                      <Minus className="h-5 w-5 text-gray-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-600" />
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
                      <div className="flex flex-wrap gap-3 mt-6">
                        {question.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleOptionSelect(question.id, option)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              answers[question.id] === option
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
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
          
          {/* Results Column */}
          <div className="flex-1 min-w-0">
            {/* Navigation Controls */}
            <div className="flex justify-end mb-6 space-x-2">
              <button
                onClick={prevCardSlide}
                disabled={isAtFirstCard}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isAtFirstCard
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                aria-label="Previous card"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextCardSlide}
                disabled={isAtLastCard}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  isAtLastCard
                    ? 'bg-gray-100 text-gray-300 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
                aria-label="Next card"
              >
                <ChevronRight className="h-5 w-5" />
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
                    className="block flex-shrink-0 h-[470px] relative"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <div className={`h-full flex flex-col rounded-xl overflow-hidden ${
                      service.title === 'Contact us'
                        ? 'bg-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-300'
                        : 'bg-white shadow-lg hover:shadow-xl group hover:bg-gray-50 transition-all duration-300'
                    }`}>
                      {/* Show recommended badge if showing results and not the default view */}
                      {showResults && index === 0 && service.title !== 'Contact us' && (
                        <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium">
                          <span>Recommended</span>
                        </div>
                      )}
                      
                      <div className="p-6 flex-grow">
                        {/* Category with circle indicator */}
                        <div className="flex items-start mb-4">
                          <div className="w-4 h-4 rounded-full border border-gray-400 mr-3 mt-1 flex-shrink-0"></div>
                          <span className={`text-sm ${service.title === 'Contact us' ? 'text-gray-300' : 'text-gray-600'}`}>
                            {service.category}
                          </span>
                        </div>
                        
                        <h3 className={`text-3xl lg:text-4xl font-bold mb-4 text-left ${
                          service.title === 'Contact us' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        
                        <p className={`mb-8 text-left whitespace-pre-line ${
                          service.title === 'Contact us' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Arrow button at the bottom */}
                      <div className="p-6 mt-auto">
                        <div className={`flex items-center ${
                          service.title === 'Contact us' ? 'text-white' : 'text-gray-900'
                        }`}>
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            service.title === 'Contact us' 
                              ? 'border border-white' 
                              : 'border border-gray-300 group-hover:border-gray-400'
                          }`}>
                            <ArrowRight className={`h-5 w-5 ${
                              service.title === 'Contact us'
                                ? 'text-white'
                                : 'text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all'
                            }`} />
                          </div>
                          <div className={`h-px flex-grow ml-4 ${
                            service.title === 'Contact us'
                              ? 'bg-white/50'
                              : 'bg-gray-200 group-hover:bg-gray-400'
                          }`}></div>
                        </div>
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
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentCardIndex
                        ? 'bg-gray-900 w-8'
                        : 'bg-gray-300'
                    }`}
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