import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Brain, Zap, Target, CheckCircle, MessageSquare, Lightbulb, BarChart3, Cog, Cpu, Database, Shield, ChevronLeft, ChevronRight, Plus, Minus, Clock, Users, DollarSign, TrendingUp, Award, Briefcase, Building, Star, Eye, Globe, Lock, Activity, Smartphone, Cloud, Settings, Search, Filter, Calendar, FileText, Layers, Workflow, Bot, Gauge, PieChart, LineChart, BarChart, Radar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIAdvisor = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [assessmentData, setAssessmentData] = useState({
    industry: '',
    companySize: '',
    challenge: '',
    budget: '',
    timeline: '',
    techMaturity: '',
    dataVolume: '',
    compliance: ''
  });
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>('industry');
  const [aiReadinessScore, setAiReadinessScore] = useState(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const assessmentQuestions = [
    {
      id: 'industry',
      text: 'What industry does your company operate in?',
      icon: Building,
      options: [
        { value: 'healthcare', label: 'Healthcare & Medical', score: 9 },
        { value: 'finance', label: 'Financial Services', score: 10 },
        { value: 'retail', label: 'Retail & E-commerce', score: 8 },
        { value: 'manufacturing', label: 'Manufacturing', score: 7 },
        { value: 'education', label: 'Education & Training', score: 6 },
        { value: 'logistics', label: 'Logistics & Supply Chain', score: 8 },
        { value: 'energy', label: 'Energy & Utilities', score: 7 },
        { value: 'government', label: 'Government & Public Sector', score: 5 }
      ]
    },
    {
      id: 'companySize',
      text: 'What is your company size?',
      icon: Users,
      options: [
        { value: 'startup', label: 'Startup (1-10 employees)', score: 6 },
        { value: 'small', label: 'Small Business (11-50 employees)', score: 7 },
        { value: 'medium', label: 'Medium Enterprise (51-200 employees)', score: 8 },
        { value: 'large', label: 'Large Enterprise (201-1000 employees)', score: 9 },
        { value: 'enterprise', label: 'Enterprise (1000+ employees)', score: 10 }
      ]
    },
    {
      id: 'challenge',
      text: 'What is your primary business challenge?',
      icon: Target,
      options: [
        { value: 'automation', label: 'Process Automation', score: 8 },
        { value: 'insights', label: 'Data Analysis & Insights', score: 9 },
        { value: 'customer', label: 'Customer Experience Enhancement', score: 7 },
        { value: 'efficiency', label: 'Operational Efficiency', score: 8 },
        { value: 'costs', label: 'Cost Reduction', score: 7 },
        { value: 'quality', label: 'Quality Control & Assurance', score: 8 },
        { value: 'prediction', label: 'Predictive Analytics', score: 9 },
        { value: 'security', label: 'Cybersecurity & Fraud Detection', score: 10 }
      ]
    },
    {
      id: 'budget',
      text: 'What is your estimated budget for AI implementation?',
      icon: DollarSign,
      options: [
        { value: 'small', label: 'Under $50K', score: 5 },
        { value: 'medium', label: '$50K - $150K', score: 7 },
        { value: 'large', label: '$150K - $500K', score: 8 },
        { value: 'enterprise', label: '$500K - $1M', score: 9 },
        { value: 'unlimited', label: 'Over $1M', score: 10 },
        { value: 'flexible', label: 'Budget is flexible', score: 8 }
      ]
    },
    {
      id: 'timeline',
      text: 'What is your preferred implementation timeline?',
      icon: Clock,
      options: [
        { value: 'immediate', label: 'Immediate (1-3 months)', score: 6 },
        { value: 'short', label: 'Short-term (3-6 months)', score: 8 },
        { value: 'medium', label: 'Medium-term (6-12 months)', score: 9 },
        { value: 'long', label: 'Long-term (12+ months)', score: 10 },
        { value: 'phased', label: 'Phased approach', score: 9 }
      ]
    },
    {
      id: 'techMaturity',
      text: 'How would you rate your organization\'s technical maturity?',
      icon: Gauge,
      options: [
        { value: 'basic', label: 'Basic - Limited tech infrastructure', score: 4 },
        { value: 'developing', label: 'Developing - Some digital processes', score: 6 },
        { value: 'intermediate', label: 'Intermediate - Good digital foundation', score: 7 },
        { value: 'advanced', label: 'Advanced - Strong tech capabilities', score: 9 },
        { value: 'cutting-edge', label: 'Cutting-edge - Leading technology adoption', score: 10 }
      ]
    },
    {
      id: 'dataVolume',
      text: 'How much data does your organization generate/handle?',
      icon: Database,
      options: [
        { value: 'minimal', label: 'Minimal - Basic record keeping', score: 5 },
        { value: 'moderate', label: 'Moderate - Standard business data', score: 7 },
        { value: 'substantial', label: 'Substantial - Large datasets', score: 8 },
        { value: 'massive', label: 'Massive - Big data environment', score: 10 },
        { value: 'realtime', label: 'Real-time streaming data', score: 10 }
      ]
    },
    {
      id: 'compliance',
      text: 'Do you operate in a regulated industry?',
      icon: Shield,
      options: [
        { value: 'none', label: 'No specific regulations', score: 8 },
        { value: 'moderate', label: 'Some industry standards', score: 7 },
        { value: 'strict', label: 'Strict compliance requirements (HIPAA, SOX)', score: 6 },
        { value: 'financial', label: 'Financial regulations (PCI DSS, GDPR)', score: 5 },
        { value: 'government', label: 'Government/Military standards', score: 4 }
      ]
    }
  ];

  // Dynamic AI Solutions based on user inputs
  const generateAISolutions = () => {
    const { industry, challenge, budget, companySize } = assessmentData;
    
    const solutionLibrary = {
      healthcare: {
        automation: {
          title: 'Medical Process Automation',
          description: 'Streamline patient intake, appointment scheduling, and medical record processing with AI-powered automation.',
          features: ['Automated Patient Scheduling', 'Medical Record Processing', 'Insurance Verification', 'Compliance Monitoring'],
          roi: '35% reduction in administrative time',
          implementation: '3-6 months',
          complexity: 'Medium'
        },
        insights: {
          title: 'Clinical Data Analytics',
          description: 'Advanced analytics for patient outcomes, treatment effectiveness, and operational insights.',
          features: ['Patient Outcome Prediction', 'Treatment Optimization', 'Resource Planning', 'Population Health Analytics'],
          roi: '25% improvement in patient outcomes',
          implementation: '4-8 months',
          complexity: 'High'
        }
      },
      finance: {
        security: {
          title: 'AI-Powered Fraud Detection',
          description: 'Real-time fraud detection and prevention using machine learning algorithms.',
          features: ['Real-time Transaction Monitoring', 'Behavioral Analytics', 'Risk Scoring', 'Automated Alerts'],
          roi: '60% reduction in fraud losses',
          implementation: '2-4 months',
          complexity: 'High'
        },
        automation: {
          title: 'Financial Process Automation',
          description: 'Automate loan processing, compliance reporting, and risk assessment workflows.',
          features: ['Automated Loan Processing', 'Compliance Reporting', 'Risk Assessment', 'Document Processing'],
          roi: '40% faster processing times',
          implementation: '3-5 months',
          complexity: 'Medium'
        }
      },
      retail: {
        customer: {
          title: 'Personalized Customer Experience',
          description: 'AI-driven recommendation engines and personalized shopping experiences.',
          features: ['Product Recommendations', 'Dynamic Pricing', 'Inventory Optimization', 'Customer Segmentation'],
          roi: '30% increase in conversion rates',
          implementation: '2-4 months',
          complexity: 'Medium'
        },
        prediction: {
          title: 'Demand Forecasting System',
          description: 'Predict customer demand and optimize inventory management using AI algorithms.',
          features: ['Sales Forecasting', 'Inventory Optimization', 'Trend Analysis', 'Supply Chain Planning'],
          roi: '25% reduction in inventory costs',
          implementation: '3-6 months',
          complexity: 'Medium'
        }
      },
      manufacturing: {
        quality: {
          title: 'AI Quality Control System',
          description: 'Computer vision and machine learning for automated quality inspection and defect detection.',
          features: ['Visual Inspection', 'Defect Detection', 'Quality Scoring', 'Production Monitoring'],
          roi: '45% reduction in defects',
          implementation: '4-6 months',
          complexity: 'High'
        },
        efficiency: {
          title: 'Predictive Maintenance',
          description: 'AI-powered predictive maintenance to prevent equipment failures and optimize operations.',
          features: ['Equipment Monitoring', 'Failure Prediction', 'Maintenance Scheduling', 'Cost Optimization'],
          roi: '30% reduction in downtime',
          implementation: '3-5 months',
          complexity: 'Medium'
        }
      }
    };

    // Default solution if specific combination not found
    const defaultSolution = {
      title: 'Custom AI Solution',
      description: 'Tailored AI implementation designed specifically for your business needs and industry requirements.',
      features: ['Custom AI Models', 'Data Integration', 'User Training', 'Ongoing Support'],
      roi: 'ROI varies based on implementation',
      implementation: '4-8 months',
      complexity: 'Variable'
    };

    return solutionLibrary[industry]?.[challenge] || defaultSolution;
  };

  // AI Readiness Assessment Score Calculation
  const calculateReadinessScore = () => {
    const scores = Object.entries(assessmentData).map(([key, value]) => {
      const question = assessmentQuestions.find(q => q.id === key);
      const option = question?.options.find(opt => opt.value === value);
      return option?.score || 0;
    });
    
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    const maxScore = assessmentQuestions.length * 10;
    return Math.round((totalScore / maxScore) * 100);
  };

  // Industry-specific AI use cases
  const industryUseCases = {
    healthcare: [
      { title: 'Medical Imaging Analysis', impact: 'High', complexity: 'High' },
      { title: 'Drug Discovery Acceleration', impact: 'Very High', complexity: 'Very High' },
      { title: 'Patient Risk Assessment', impact: 'High', complexity: 'Medium' },
      { title: 'Clinical Decision Support', impact: 'High', complexity: 'High' }
    ],
    finance: [
      { title: 'Algorithmic Trading', impact: 'Very High', complexity: 'Very High' },
      { title: 'Credit Risk Modeling', impact: 'High', complexity: 'Medium' },
      { title: 'Anti-Money Laundering', impact: 'High', complexity: 'High' },
      { title: 'Robo-Advisory Services', impact: 'Medium', complexity: 'Medium' }
    ],
    retail: [
      { title: 'Dynamic Pricing Optimization', impact: 'High', complexity: 'Medium' },
      { title: 'Supply Chain Optimization', impact: 'High', complexity: 'High' },
      { title: 'Virtual Shopping Assistants', impact: 'Medium', complexity: 'Medium' },
      { title: 'Visual Search Technology', impact: 'Medium', complexity: 'High' }
    ]
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

  // Update readiness score when assessment data changes
  useEffect(() => {
    if (Object.values(assessmentData).some(value => value !== '')) {
      setAiReadinessScore(calculateReadinessScore());
    }
  }, [assessmentData]);

  const handleQuestionToggle = (questionId: string) => {
    setOpenQuestionId(openQuestionId === questionId ? null : questionId);
  };

  const handleOptionSelect = (questionId: string, optionValue: string) => {
    setAssessmentData(prev => ({
      ...prev,
      [questionId]: optionValue
    }));

    // Auto-open next question
    const currentIndex = assessmentQuestions.findIndex(q => q.id === questionId);
    const nextQuestion = assessmentQuestions[currentIndex + 1];
    if (nextQuestion) {
      setOpenQuestionId(nextQuestion.id);
    }

    // Show results when all questions are answered
    const updatedData = { ...assessmentData, [questionId]: optionValue };
    if (Object.values(updatedData).every(value => value !== '')) {
      setShowResults(true);
    }
  };

  const getReadinessLevel = (score: number) => {
    if (score >= 80) return { level: 'Excellent', color: '#10b981', description: 'Your organization is highly ready for AI implementation' };
    if (score >= 60) return { level: 'Good', color: '#f59e0b', description: 'Your organization has good AI readiness with some areas for improvement' };
    if (score >= 40) return { level: 'Fair', color: '#ef4444', description: 'Your organization needs preparation before AI implementation' };
    return { level: 'Needs Improvement', color: '#dc2626', description: 'Significant preparation required for successful AI adoption' };
  };

  const readinessInfo = getReadinessLevel(aiReadinessScore);

  return (
    <div className="pt-20">
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
              <Brain className="h-4 w-4 mr-2" />
              AI Solutions Advisor
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              <span className="block">Discover Your Perfect</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>AI Solution</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl leading-relaxed" style={{ color: '#94D3A2' }}>
              Take our comprehensive AI readiness assessment to discover personalized recommendations, 
              understand your organization's AI potential, and get a custom implementation roadmap.
            </p>

            <div className="flex items-center gap-6">
              <Link 
                to="/contact"
                onClick={() => setOpenQuestionId('industry')}
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D0F5E3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E3FFEF';
                }}
              >
                Start Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              {aiReadinessScore > 0 && (
                <div className="flex items-center gap-3">
                  <div className="text-sm" style={{ color: '#94D3A2' }}>
                    AI Readiness Score:
                  </div>
                  <div 
                    className="px-3 py-1 rounded-full text-sm font-bold"
                    style={{ 
                      backgroundColor: readinessInfo.color, 
                      color: '#FFFFFF' 
                    }}
                  >
                    {aiReadinessScore}%
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Assessment Section */}
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
                    <Sparkles className="w-10 h-10" style={{ color: '#10b981' }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#E3FFEF' }}>
                    AI Readiness Assessment
                  </h3>
                  <p className="text-base" style={{ color: '#94D3A2', opacity: 0.8 }}>
                    Complete this comprehensive assessment to get personalized AI recommendations
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
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  {/* AI Readiness Score */}
                  <div 
                    className="rounded-2xl p-8"
                    style={{ 
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.1)'
                    }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold" style={{ color: '#E3FFEF' }}>
                        AI Readiness Score
                      </h3>
                      <div 
                        className="px-4 py-2 rounded-full text-lg font-bold"
                        style={{ 
                          backgroundColor: readinessInfo.color, 
                          color: '#FFFFFF' 
                        }}
                      >
                        {aiReadinessScore}%
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2" style={{ color: '#94D3A2' }}>
                        <span>Readiness Level: {readinessInfo.level}</span>
                      </div>
                      <div className="w-full rounded-full h-3" style={{ backgroundColor: 'rgba(227, 255, 239, 0.1)' }}>
                        <div 
                          className="h-3 rounded-full transition-all duration-1000"
                          style={{ 
                            backgroundColor: readinessInfo.color,
                            width: `${aiReadinessScore}%`
                          }}
                        />
                      </div>
                    </div>
                    
                    <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>
                      {readinessInfo.description}
                    </p>
                  </div>

                  {/* Recommended Solution */}
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
                          Recommended Solution
                        </h3>
                        <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>
                          Based on your assessment
                        </p>
                      </div>
                    </div>

                    {(() => {
                      const solution = generateAISolutions();
                      return (
                        <div>
                          <h4 className="text-lg font-semibold mb-3" style={{ color: '#E3FFEF' }}>
                            {solution.title}
                          </h4>
                          <p className="mb-4" style={{ color: '#94D3A2', opacity: 0.8 }}>
                            {solution.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <div className="text-center p-3 rounded-xl" style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}>
                              <div className="text-lg font-bold" style={{ color: '#10b981' }}>{solution.roi}</div>
                              <div className="text-xs" style={{ color: '#94D3A2' }}>Expected ROI</div>
                            </div>
                            <div className="text-center p-3 rounded-xl" style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}>
                              <div className="text-lg font-bold" style={{ color: '#10b981' }}>{solution.implementation}</div>
                              <div className="text-xs" style={{ color: '#94D3A2' }}>Timeline</div>
                            </div>
                            <div className="text-center p-3 rounded-xl" style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}>
                              <div className="text-lg font-bold" style={{ color: '#10b981' }}>{solution.complexity}</div>
                              <div className="text-xs" style={{ color: '#94D3A2' }}>Complexity</div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="font-semibold mb-3" style={{ color: '#E3FFEF' }}>Key Features:</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {solution.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center">
                                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: '#10b981' }} />
                                  <span className="text-sm" style={{ color: '#94D3A2' }}>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button 
                            onClick={() => window.location.href = '/contact'}
                            className="px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center cursor-pointer"
                            style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#D0F5E3';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#E3FFEF';
                            }}
                          >
                            Get Detailed Proposal 
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Industry Use Cases */}
                  {industryUseCases[assessmentData.industry] && (
                    <div 
                      className="rounded-2xl p-8"
                      style={{ 
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.1)'
                      }}
                    >
                      <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                        Additional AI Opportunities in {assessmentData.industry}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {industryUseCases[assessmentData.industry].map((useCase, idx) => (
                          <div 
                            key={idx} 
                            className="p-4 rounded-xl"
                            style={{ backgroundColor: 'rgba(227, 255, 239, 0.03)' }}
                          >
                            <h4 className="font-semibold mb-2" style={{ color: '#E3FFEF' }}>
                              {useCase.title}
                            </h4>
                            <div className="flex justify-between text-xs">
                              <span style={{ color: '#94D3A2' }}>Impact: {useCase.impact}</span>
                              <span style={{ color: '#94D3A2' }}>Complexity: {useCase.complexity}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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
                    <Brain className="h-16 w-16 mx-auto mb-4" style={{ color: 'rgba(227, 255, 239, 0.3)' }} />
                    <h3 className="text-xl font-bold mb-2" style={{ color: '#E3FFEF' }}>
                      AI Assessment Results
                    </h3>
                    <p style={{ color: '#94D3A2', opacity: 0.8 }}>
                      Complete the assessment to see your personalized AI recommendations and readiness score
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation Roadmap */}
      {showResults && (
        <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
                Your AI Implementation Roadmap
              </h2>
              <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                A strategic approach tailored to your organization's readiness level
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: 'Phase 1',
                  title: 'Foundation Setup',
                  duration: '1-2 months',
                  tasks: ['Data Infrastructure Assessment', 'Team Training', 'Technology Audit', 'Compliance Review'],
                  icon: Settings
                },
                {
                  phase: 'Phase 2',
                  title: 'Pilot Implementation',
                  duration: '2-4 months',
                  tasks: ['Proof of Concept', 'Initial Model Development', 'Testing & Validation', 'Performance Metrics'],
                  icon: Zap
                },
                {
                  phase: 'Phase 3',
                  title: 'Full Deployment',
                  duration: '3-6 months',
                  tasks: ['Production Deployment', 'User Training', 'System Integration', 'Performance Optimization'],
                  icon: Cpu
                },
                {
                  phase: 'Phase 4',
                  title: 'Scale & Optimize',
                  duration: 'Ongoing',
                  tasks: ['Performance Monitoring', 'Model Refinement', 'Feature Expansion', 'Continuous Improvement'],
                  icon: TrendingUp
                }
              ].map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl p-6 transition-all duration-300"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid rgba(1, 5, 27, 0.08)'
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="text-sm font-medium mb-1" style={{ color: '#10b981' }}>
                      {phase.phase}
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#01051B' }}>
                      {phase.title}
                    </h3>
                    <div className="text-sm mb-4" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                      Duration: {phase.duration}
                    </div>
                    
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="flex items-start text-sm" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                          <div className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: '#10b981' }} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* AI Technology Stack */}
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Layers className="h-4 w-4 mr-2" />
              Technology Stack
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
              We leverage the latest AI frameworks and technologies to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'TensorFlow', category: 'Machine Learning', icon: Brain },
              { name: 'PyTorch', category: 'Deep Learning', icon: Cpu },
              { name: 'OpenAI GPT', category: 'Natural Language', icon: MessageSquare },
              { name: 'AWS AI Services', category: 'Cloud AI', icon: Cloud },
              { name: 'Computer Vision', category: 'Image Analysis', icon: Eye },
              { name: 'Scikit-learn', category: 'Data Science', icon: BarChart3 },
              { name: 'Apache Spark', category: 'Big Data', icon: Database },
              { name: 'Kubernetes', category: 'MLOps', icon: Settings }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 text-center transition-all duration-300"
                  style={{
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold mb-1" style={{ color: '#E3FFEF' }}>
                    {tech.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>
                    {tech.category}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Ready to Get Started?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#01051B' }}>
                Transform Your Business with AI
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                Schedule a consultation with our AI experts to discuss your specific needs and 
                create a custom implementation strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact" 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-md inline-flex items-center"
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
                  Schedule Consultation
                  <Calendar className="ml-2 h-5 w-5" />
                </Link>
                
                <button 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#01051B',
                    border: '2px solid rgba(1, 5, 27, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.2)';
                  }}
                >
                  Download AI Guide
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

export default AIAdvisor;