import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Code, 
  TestTube, 
  Target, 
  Layers, 
  RotateCcw, 
  Globe, 
  Palette, 
  Shield, 
  BarChart3, 
  Recycle, 
  Zap, 
  Brain, 
  Database, 
  Settings, 
  Cpu, 
  MessageSquare, 
  Search, 
  Headphones, 
  TrendingDown, 
  GitBranch, 
  Monitor, 
  Network, 
  Users, 
  Building, 
  Eye,
  Cloud,
  Smartphone,
  CheckCircle,
  Star,
  Award,
  Building2,
  Play,
  Sparkles,
  Activity,
  Clock,
  DollarSign,
  MapPin,
  Calendar,
  FileText,
  Briefcase,
  Factory,
  ShoppingCart,
  TrendingUp,
  Lightbulb,
  Lock,
  Gauge,
  Workflow,
  Bot,
  Radar,
  Sliders
} from 'lucide-react';

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  path: string;
  icon: React.ElementType;
  image: string;
  gradient: string;
  tags: {
    businessGoal: string[];
    companySize: string[];
    industry: string[];
    timeline: string[];
    budget: string[];
  };
}

interface AssessmentQuestion {
  id: string;
  text: string;
  icon: React.ElementType;
  options: { value: string; label: string; score: number }[];
}

const ServicesPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [assessmentData, setAssessmentData] = useState({
    businessGoal: '',
    companySize: '',
    industry: '',
    timeline: '',
    budget: ''
  });
  const [showAssessmentResults, setShowAssessmentResults] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>('businessGoal');
  const [recommendedServices, setRecommendedServices] = useState<Service[]>([]);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const assessmentQuestions: AssessmentQuestion[] = [
    {
      id: 'businessGoal',
      text: 'What is your primary business goal?',
      icon: Target,
      options: [
        { value: 'build-new', label: 'Build new software from scratch', score: 10 },
        { value: 'modernize', label: 'Modernize existing systems', score: 8 },
        { value: 'automate', label: 'Automate business processes', score: 9 },
        { value: 'analyze-data', label: 'Analyze data and gain insights', score: 9 },
        { value: 'improve-security', label: 'Improve security and compliance', score: 7 },
        { value: 'scale-operations', label: 'Scale operations and infrastructure', score: 8 },
        { value: 'enhance-ux', label: 'Enhance user experience', score: 7 },
        { value: 'reduce-costs', label: 'Reduce operational costs', score: 6 }
      ]
    },
    {
      id: 'companySize',
      text: 'What is your company size?',
      icon: Building,
      options: [
        { value: 'startup', label: 'Startup (1-20 employees)', score: 6 },
        { value: 'small', label: 'Small Business (21-100 employees)', score: 7 },
        { value: 'medium', label: 'Medium Enterprise (101-500 employees)', score: 8 },
        { value: 'large', label: 'Large Enterprise (500+ employees)', score: 10 }
      ]
    },
    {
      id: 'industry',
      text: 'Which industry best describes your business?',
      icon: Briefcase,
      options: [
        { value: 'technology', label: 'Technology & Software', score: 10 },
        { value: 'healthcare', label: 'Healthcare & Medical', score: 9 },
        { value: 'finance', label: 'Finance & Banking', score: 9 },
        { value: 'retail', label: 'Retail & E-commerce', score: 8 },
        { value: 'manufacturing', label: 'Manufacturing & Industrial', score: 7 },
        { value: 'education', label: 'Education & Training', score: 6 },
        { value: 'consulting', label: 'Professional Services', score: 7 },
        { value: 'other', label: 'Other', score: 5 }
      ]
    },
    {
      id: 'timeline',
      text: 'What is your preferred project timeline?',
      icon: Clock,
      options: [
        { value: 'urgent', label: 'Urgent (1-3 months)', score: 6 },
        { value: 'short', label: 'Short-term (3-6 months)', score: 8 },
        { value: 'medium', label: 'Medium-term (6-12 months)', score: 9 },
        { value: 'long', label: 'Long-term (12+ months)', score: 10 },
        { value: 'flexible', label: 'Timeline is flexible', score: 8 }
      ]
    },
    {
      id: 'budget',
      text: 'What is your estimated project budget?',
      icon: DollarSign,
      options: [
        { value: 'small', label: 'Under $50K', score: 5 },
        { value: 'medium', label: '$50K - $200K', score: 7 },
        { value: 'large', label: '$200K - $500K', score: 8 },
        { value: 'enterprise', label: '$500K+', score: 10 },
        { value: 'flexible', label: 'Budget is flexible', score: 9 }
      ]
    }
  ];

  const services: Service[] = [
    {
      id: 'custom-development',
      category: 'Engineering',
      title: 'Custom Software Development',
      description: 'End-to-end custom software solutions designed to address your unique business challenges and drive growth.',
      longDescription: 'Transform your business vision into reality with our comprehensive custom software development services.',
      features: ['Full-Stack Development', 'API Integration', 'Database Design', 'Cloud Deployment', 'Ongoing Support'],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'PostgreSQL'],
      path: '/custom-software-development',
      icon: Code,
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-emerald-500 to-green-400',
      tags: {
        businessGoal: ['build-new', 'scale-operations'],
        companySize: ['small', 'medium', 'large'],
        industry: ['technology', 'finance', 'healthcare'],
        timeline: ['medium', 'long'],
        budget: ['medium', 'large', 'enterprise']
      }
    },
    {
      id: 'ai-solutions',
      category: 'Data & AI',
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      longDescription: 'Transform your business with cutting-edge AI solutions that deliver measurable results.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Automation'],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python', 'AWS'],
      path: '/ai-advisor',
      icon: Brain,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-purple-500 to-violet-400',
      tags: {
        businessGoal: ['automate', 'analyze-data', 'scale-operations'],
        companySize: ['medium', 'large'],
        industry: ['technology', 'healthcare', 'finance', 'retail'],
        timeline: ['medium', 'long'],
        budget: ['large', 'enterprise']
      }
    },
    {
      id: 'cloud-solutions',
      category: 'Engineering',
      title: 'Cloud Solutions & Migration',
      description: 'Scalable, secure cloud infrastructure and migration services to modernize your technology stack.',
      longDescription: 'Accelerate your digital transformation with our comprehensive cloud solutions.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Implementation', 'Security Configuration', 'Cost Optimization'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
      path: '/cloud-solutions',
      icon: Cloud,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-blue-500 to-sky-400',
      tags: {
        businessGoal: ['modernize', 'scale-operations', 'reduce-costs'],
        companySize: ['small', 'medium', 'large'],
        industry: ['technology', 'finance', 'healthcare', 'retail'],
        timeline: ['short', 'medium'],
        budget: ['medium', 'large']
      }
    },
    {
      id: 'digital-transformation',
      category: 'Engineering',
      title: 'Digital Transformation',
      description: 'Comprehensive digital transformation services to modernize your business processes and technology.',
      longDescription: 'Transform your entire business with our strategic digital transformation approach.',
      features: ['Process Automation', 'System Integration', 'Change Management', 'Training & Support', 'Performance Monitoring'],
      technologies: ['Microservices', 'API Gateway', 'Cloud Platforms', 'Analytics', 'Mobile'],
      path: '/digital-transformation',
      icon: Zap,
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-orange-500 to-amber-400',
      tags: {
        businessGoal: ['modernize', 'automate', 'scale-operations'],
        companySize: ['medium', 'large'],
        industry: ['finance', 'healthcare', 'manufacturing', 'retail'],
        timeline: ['long'],
        budget: ['large', 'enterprise']
      }
    },
    {
      id: 'data-analytics',
      category: 'Data & AI',
      title: 'Data Analytics & BI',
      description: 'Transform raw data into actionable insights with advanced analytics and business intelligence solutions.',
      longDescription: 'Unlock the power of your data with our comprehensive analytics and BI services.',
      features: ['Data Warehousing', 'ETL Pipelines', 'Interactive Dashboards', 'Predictive Modeling', 'Real-time Analytics'],
      technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Apache Spark'],
      path: '/data-analytics',
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/6636040/pexels-photo-6636040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-pink-500 to-rose-400',
      tags: {
        businessGoal: ['analyze-data', 'scale-operations'],
        companySize: ['medium', 'large'],
        industry: ['technology', 'finance', 'retail', 'healthcare'],
        timeline: ['medium', 'long'],
        budget: ['medium', 'large']
      }
    },
    {
      id: 'cybersecurity',
      category: 'Advisory',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services to protect your business from threats and ensure compliance.',
      longDescription: 'Secure your digital assets with our advanced cybersecurity solutions.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance Management', 'Incident Response', 'Security Training'],
      technologies: ['SIEM', 'Firewall', 'Encryption', 'Multi-factor Auth', 'Zero Trust'],
      path: '/cyber-security',
      icon: Shield,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-red-500 to-pink-400',
      tags: {
        businessGoal: ['improve-security'],
        companySize: ['small', 'medium', 'large'],
        industry: ['finance', 'healthcare', 'technology'],
        timeline: ['short', 'medium'],
        budget: ['medium', 'large']
      }
    },
    {
      id: 'ui-ux-design',
      category: 'Advisory',
      title: 'UI/UX Design Services',
      description: 'Create exceptional user experiences with our comprehensive UI/UX design services.',
      longDescription: 'Design products that users love with our user-centered design approach.',
      features: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'Usability Testing'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      path: '/ui-ux-design',
      icon: Palette,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-indigo-500 to-purple-400',
      tags: {
        businessGoal: ['enhance-ux', 'build-new'],
        companySize: ['startup', 'small', 'medium'],
        industry: ['technology', 'retail', 'healthcare'],
        timeline: ['short', 'medium'],
        budget: ['small', 'medium']
      }
    },
    {
      id: 'quality-assurance',
      category: 'Optimization',
      title: 'Quality Assurance & Testing',
      description: 'Ensure your software meets the highest quality standards with comprehensive testing services.',
      longDescription: 'Deliver flawless software with our comprehensive QA and testing services.',
      features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Testing', 'API Testing'],
      technologies: ['Selenium', 'Cypress', 'Jest', 'JMeter', 'Postman'],
      path: '/quality-assurance',
      icon: CheckCircle,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-green-500 to-emerald-400',
      tags: {
        businessGoal: ['build-new', 'modernize'],
        companySize: ['small', 'medium', 'large'],
        industry: ['technology', 'finance', 'healthcare'],
        timeline: ['short', 'medium'],
        budget: ['small', 'medium']
      }
    },
    {
      id: 'devops-services',
      category: 'Engineering',
      title: 'DevOps & Automation',
      description: 'Streamline your development and deployment processes with comprehensive DevOps services.',
      longDescription: 'Accelerate your software delivery with our DevOps and automation expertise.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging', 'Security Automation'],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Prometheus'],
      path: '/devops-services',
      icon: GitBranch,
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-teal-500 to-cyan-400',
      tags: {
        businessGoal: ['automate', 'scale-operations', 'reduce-costs'],
        companySize: ['medium', 'large'],
        industry: ['technology', 'finance'],
        timeline: ['medium', 'long'],
        budget: ['medium', 'large']
      }
    },
    {
      id: 'poc-development',
      category: 'Engineering',
      title: 'Proof of Concept Development',
      description: 'Validate your innovative ideas with minimal risk through our PoC development services.',
      longDescription: 'Test your concepts before full implementation with our rapid PoC development.',
      features: ['Rapid Prototyping', 'Technical Validation', 'Market Testing', 'Risk Assessment', 'Investment Planning'],
      technologies: ['React', 'Python', 'AWS', 'Docker', 'Figma'],
      path: '/poc-development',
      icon: TestTube,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      gradient: 'from-lime-500 to-green-400',
      tags: {
        businessGoal: ['build-new'],
        companySize: ['startup', 'small', 'medium'],
        industry: ['technology', 'healthcare', 'finance'],
        timeline: ['urgent', 'short'],
        budget: ['small', 'medium']
      }
    }
  ];

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

  const handleQuestionToggle = (questionId: string) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  const handleOptionSelect = (questionId: string, optionValue: string) => {
    const updatedData = {
      ...assessmentData,
      [questionId]: optionValue
    };
    setAssessmentData(updatedData);

    // Auto-open next question
    const currentIndex = assessmentQuestions.findIndex(q => q.id === questionId);
    const nextQuestion = assessmentQuestions[currentIndex + 1];
    if (nextQuestion && !updatedData[nextQuestion.id]) {
      setOpenQuestionId(nextQuestion.id);
    }

    // Show results when all questions are answered
    if (Object.values(updatedData).every(value => value !== '')) {
      generateRecommendations(updatedData);
      setShowAssessmentResults(true);
    }
  };

  const generateRecommendations = (data: typeof assessmentData) => {
    const servicesWithScores = services.map(service => {
      let score = 0;
      
      // Score based on business goal match
      if (service.tags.businessGoal.includes(data.businessGoal)) score += 3;
      
      // Score based on company size match
      if (service.tags.companySize.includes(data.companySize)) score += 2;
      
      // Score based on industry match
      if (service.tags.industry.includes(data.industry)) score += 2;
      
      // Score based on timeline match
      if (service.tags.timeline.includes(data.timeline)) score += 1;
      
      // Score based on budget match
      if (service.tags.budget.includes(data.budget)) score += 2;
      
      return { service, score };
    });

    // Sort by score and take top recommendations
    const topServices = servicesWithScores
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map(item => item.service);

    setRecommendedServices(topServices);
  };

  const nextSlide = () => {
    const totalServices = showAssessmentResults ? recommendedServices.length : services.length;
    if (currentSlide < totalServices - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const cardWidth = isMobile ? containerWidth - 32 : 380;
  const cardGap = 24;
  const displayServices = showAssessmentResults ? recommendedServices : services;
  const isAtLastCard = currentSlide === displayServices.length - 1;
  const isAtFirstCard = currentSlide === 0;

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Star },
    { number: '99.5%', label: 'Success Rate', icon: CheckCircle }
  ];

  const testimonials = [
    {
      quote: "ID Code's comprehensive approach to digital transformation exceeded our expectations. They delivered a solution that perfectly matched our business needs.",
      author: "SARAH MITCHELL",
      company: "TECHFLOW"
    },
    {
      quote: "The assessment tool helped us identify exactly what services we needed. The recommended solution delivered immediate ROI and long-term value.",
      author: "DR. JAMES CHEN",
      company: "INNOVATELAB"
    },
    {
      quote: "Working with ID Code was seamless. Their expertise across multiple domains allowed us to tackle complex challenges with confidence.",
      author: "MARIA RODRIGUEZ",
      company: "GLOBALCORP"
    }
  ];

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
              Comprehensive Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              <span className="block">Technology Solutions</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>That Drive Results</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl leading-relaxed" style={{ color: '#94D3A2' }}>
              From custom software development to AI-powered solutions, we deliver comprehensive technology services 
              tailored to your unique business needs and goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setOpenQuestionId('businessGoal')}
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D0F5E3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E3FFEF';
                }}
              >
                Find Your Perfect Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#services"
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
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Assessment Section */}
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
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Assessment Questions */}
            <div className="flex-shrink-0">
              <div 
                className="rounded-2xl overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)',
                  width: isMobile ? '100%' : '520px'
                }}
              >
                {/* Header */}
                <div className="p-8 pb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                  >
                    <Sliders className="w-10 h-10" style={{ color: '#10b981' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#E3FFEF' }}>
                    Service Recommendation Engine
                  </h3>
                  <p className="text-base" style={{ color: '#94D3A2', opacity: 0.8 }}>
                    Answer a few questions to get personalized service recommendations
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="px-8 mb-6">
                  <div className="flex justify-between text-sm mb-2" style={{ color: '#94D3A2' }}>
                    <span>Progress</span>
                    <span>{Math.round((Object.values(assessmentData).filter(v => v !== '').length / assessmentQuestions.length) * 100)}%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ backgroundColor: 'rgba(227, 255, 239, 0.1)' }}>
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        backgroundColor: '#10b981',
                        width: `${(Object.values(assessmentData).filter(v => v !== '').length / assessmentQuestions.length) * 100}%`
                      }}
                    />
                  </div>
                </div>

                {/* Questions */}
                <div>
                  {assessmentQuestions.map((question, index) => {
                    const Icon = question.icon;
                    const isAnswered = assessmentData[question.id] !== '';
                    
                    return (
                      <div key={question.id} className="border-t" style={{ borderColor: 'rgba(227, 255, 239, 0.1)' }}>
                        <div 
                          className="flex justify-between items-center p-6 cursor-pointer hover:bg-opacity-80 transition-colors"
                          onClick={() => handleQuestionToggle(question.id)}
                          style={{ backgroundColor: openQuestionId === question.id ? 'rgba(227, 255, 239, 0.05)' : 'transparent' }}
                        >
                          <div className="flex items-center gap-4">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center"
                              style={{ 
                                backgroundColor: isAnswered ? 'rgba(16, 185, 129, 0.2)' : 'rgba(227, 255, 239, 0.1)',
                                border: `1px solid ${isAnswered ? '#10b981' : 'rgba(227, 255, 239, 0.2)'}`
                              }}
                            >
                              {isAnswered ? (
                                <CheckCircle className="w-5 h-5" style={{ color: '#10b981' }} />
                              ) : (
                                <Icon className="w-5 h-5" style={{ color: '#94D3A2' }} />
                              )}
                            </div>
                            <div>
                              <div className="font-medium" style={{ color: '#E3FFEF' }}>
                                {index + 1}. {question.text}
                              </div>
                              {isAnswered && (
                                <div className="text-sm mt-1" style={{ color: '#7DD3C0' }}>
                                  {question.options.find(opt => opt.value === assessmentData[question.id])?.label}
                                </div>
                              )}
                            </div>
                          </div>
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ 
                              backgroundColor: openQuestionId === question.id ? 'rgba(227, 255, 239, 0.1)' : 'rgba(227, 255, 239, 0.05)',
                              border: '1px solid rgba(227, 255, 239, 0.2)'
                            }}
                          >
                            {openQuestionId === question.id ? (
                              <Minus className="h-4 w-4" style={{ color: '#E3FFEF' }} />
                            ) : (
                              <Plus className="h-4 w-4" style={{ color: '#94D3A2', opacity: 0.6 }} />
                            )}
                          </div>
                        </div>
                        
                        <AnimatePresence>
                          {openQuestionId === question.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-6 overflow-hidden"
                            >
                              <div className="grid grid-cols-1 gap-3 mt-4">
                                {question.options.map((option) => (
                                  <button
                                    key={option.value}
                                    onClick={() => handleOptionSelect(question.id, option.value)}
                                    className="p-3 rounded-xl text-sm font-medium transition-all text-left"
                                    style={{
                                      backgroundColor: assessmentData[question.id] === option.value 
                                        ? 'rgba(16, 185, 129, 0.2)' 
                                        : 'rgba(227, 255, 239, 0.05)',
                                      color: assessmentData[question.id] === option.value 
                                        ? '#10b981' 
                                        : '#94D3A2',
                                      border: `1px solid ${assessmentData[question.id] === option.value 
                                        ? '#10b981' 
                                        : 'rgba(227, 255, 239, 0.2)'}`
                                    }}
                                    onMouseEnter={(e) => {
                                      if (assessmentData[question.id] !== option.value) {
                                        e.currentTarget.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (assessmentData[question.id] !== option.value) {
                                        e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.2)';
                                      }
                                    }}
                                  >
                                    {option.label}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Results Panel */}
            <div className="flex-1 min-w-0">
              {showAssessmentResults ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div 
                    className="rounded-2xl p-8"
                    style={{ 
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.1)'
                    }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold" style={{ color: '#E3FFEF' }}>
                          Recommended Services
                        </h3>
                        <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>
                          Based on your specific needs
                        </p>
                      </div>
                    </div>

                    <p className="mb-6" style={{ color: '#94D3A2', opacity: 0.8 }}>
                      Based on your requirements, we recommend the following services to help you achieve your business goals:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {recommendedServices.slice(0, 4).map((service, idx) => (
                        <div 
                          key={idx}
                          className="p-4 rounded-xl"
                          style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}
                        >
                          <div className="flex items-center mb-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-3`}>
                              <service.icon className="h-4 w-4 text-white" />
                            </div>
                            <h4 className="font-semibold text-sm" style={{ color: '#E3FFEF' }}>
                              {service.title}
                            </h4>
                          </div>
                          <p className="text-xs" style={{ color: '#94D3A2', opacity: 0.8 }}>
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button 
                      className="px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                      style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#D0F5E3';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#E3FFEF';
                      }}
                    >
                      Get Detailed Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div 
                  className="rounded-2xl p-12 h-full flex items-center justify-center"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="text-center">
                    <Sparkles className="h-16 w-16 mx-auto mb-4" style={{ color: 'rgba(227, 255, 239, 0.3)' }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#E3FFEF' }}>
                      Service Recommendations
                    </h3>
                    <p style={{ color: '#94D3A2', opacity: 0.8 }}>
                      Complete the assessment to discover services perfectly tailored to your business needs
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Carousel */}
      <section id="services" className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              {showAssessmentResults ? 'Your Recommended Services' : 'Our Complete Service Portfolio'}
            </h2>
            <p className="text-lg mb-8" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              {showAssessmentResults 
                ? 'Services specifically matched to your business needs and goals'
                : 'Comprehensive technology solutions to transform your business'
              }
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end mb-6 space-x-2">
            <button
              onClick={prevSlide}
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
              onClick={nextSlide}
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
              animate={{ x: -currentSlide * (cardWidth + cardGap) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ gap: `${cardGap}px` }}
            >
              {displayServices.map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}px` }}
                >
                  <a href={service.path} className="block h-full">
                    <div
                      className="rounded-2xl p-8 shadow-lg flex flex-col h-full transition-all duration-300 group relative overflow-hidden"
                      style={{ 
                        backgroundColor: '#FFFFFF',
                        border: '1px solid rgba(1, 5, 27, 0.08)',
                        minHeight: '500px'
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
                      {showAssessmentResults && index === 0 && (
                        <div className="absolute top-6 right-6">
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: 'rgba(16, 185, 129, 0.1)',
                              color: '#10b981'
                            }}
                          >
                            Best Match
                          </span>
                        </div>
                      )}
                      
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                        style={{ opacity: 0.9 }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm font-medium" style={{ color: '#10b981' }}>
                          {service.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4" style={{ color: '#01051B' }}>
                        {service.title}
                      </h3>
                      
                      <p className="text-sm flex-grow mb-6" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm" style={{ color: '#01051B' }}>Key Features:</h4>
                        <div className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                              <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#10b981' }} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center font-medium transition-colors group mt-auto" style={{ color: '#10b981' }}>
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {displayServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === currentSlide ? '32px' : '8px',
                    backgroundColor: index === currentSlide ? '#01051B' : 'rgba(1, 5, 27, 0.2)'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <TrendingUp className="h-4 w-4 mr-2" />
              Proven Results
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Numbers That Speak for Themselves
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
              Our track record of delivering exceptional results across diverse industries and project scales.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4">
                  <stat.icon className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-5xl font-bold" style={{ color: '#E3FFEF' }}>{stat.number}</span>
                </div>
                <h3 className="text-lg font-medium" style={{ color: '#94D3A2' }}>
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Client Success Stories
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              See how our comprehensive services have transformed businesses across different industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                <blockquote className="text-lg mb-6 italic" style={{ color: '#01051B' }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-xs uppercase tracking-wider" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                  {testimonial.author} • {testimonial.company}
                </div>
              </motion.div>
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
                Ready to Get Started?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Let's Build Your Success Story
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
                Ready to transform your business with the right technology solutions? 
                Let's discuss your project and find the perfect services for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <button
                  onClick={() => setOpenQuestionId('businessGoal')}
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
                  Take Assessment
                  <Target className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;