import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ChevronLeft, ChevronRight, Award, Star, Globe, Clock, Users, ArrowRight, Zap, Heart, Shield, ShoppingCart, Factory, GraduationCap, Truck, Car, Film, Wheat, Building, Hotel, Stethoscope, DollarSign, CheckCircle } from 'lucide-react';

const IndustriesContactSection = () => {
  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: '',
    newsletter: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      // Check if we're in development mode
      const isDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname.includes('webcontainer') ||
                          window.location.hostname.includes('local-credentialless');
      
      if (isDevelopment) {
        // In development, just simulate success
        console.log('Form submission (dev mode):', formData);
        setTimeout(() => {
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            serviceInterest: '',
            message: '',
            newsletter: false
          });
          
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
          
          setIsSubmitting(false);
        }, 1000);
        return;
      }
      
      // Production submission to secure PHP handler
      const response = await fetch('/api/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.serviceInterest,
          message: formData.message,
          newsletter: formData.newsletter,
          source: 'Industries Contact Section'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: '',
          message: '',
          newsletter: false
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // More specific error messages
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      if (errorMessage.includes('Failed to fetch')) {
        setSubmitError('Network error. Please check your connection and try again.');
      } else if (errorMessage.includes('Too many submissions')) {
        setSubmitError('Too many submissions. Please wait a few minutes before trying again.');
      } else {
        setSubmitError(errorMessage || 'There was an error submitting your message. Please try again or contact us directly at mohamadrj@idcode-soft.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
  {
    name: 'Energy & Utilities',
    path: '/energy',
    icon: Zap,
    image: '/energy-software-development-head.jpg',
    description:
      'Boost operational efficiency with automation and reduce your direct carbon footprint'
  },
  {
    name: 'Healthcare', 
    path: '/healthcare',
    icon: Heart,
    image: '/custom-healthcare-software-development-head-min.jpg', 
    description:
      'Deliver exceptional patient service and automate administrative tasks'
  },
  {
    name: 'Government',
    path: '/government',
    icon: Building,
    image: '/government-software-solutions-head-min.jpg',
    description:
      'Digitize your public services to create transparent, efficient government agencies'
  },
  {
    name: 'Financial Services',
    path: '/financial-services',
    icon: DollarSign,
    image: '/financial-software-development-head.jpg',
    description:
      'Transforming financial services with secure, scalable technology'
  },
  {
    name: 'Retail & Ecommerce',
    path: '/retail-ecommerce',
    icon: ShoppingCart,
    image: '/retail-software-solutions-head-min.jpg',
    description:
      'Creating seamless omnichannel experiences for modern shoppers'
  },
  {
    name: 'Manufacturing',
    path: '/manufacturing',
    icon: Factory,
    image: '/automotive-software-engineering-head-min.jpg',
    description:
      'Optimizing operations with smart factory solutions'
  },
  {
    name: 'Education',
    path: '/education',
    icon: GraduationCap,
    image: '/e-excise-header-2048x1051.jpg',
    description:
      'Empowering learning with cutting-edge EdTech platforms'
  },
  
  {
    name: 'Logistics',
    path: '/logistics',
    icon: Truck,
    image: '/logistics-software-development-head-min.jpg',
    description:
      'Streamline your supply chain, fleets, and warehousing operations'
  },
  {
    name: 'Automotive',
    path: '/automotive',
    icon: Car,
    image: '/automotive-software-engineering-head-min.jpg',
    description:
      'Introduce intelligent features and process optimizations for drivers'
  },
  {
    name: 'Media & Entertainment',
    path: '/media-entertainment',
    icon: Film,
    image: '/media-and-entertainment-industry-head-min.jpg',
    description:
      'Reach wider audiences with unparalleled digital experiences'
  },
  {
    name: 'Agriculture',
    path: '/agriculture',
    icon: Wheat,
    image: '/software-development-for-agriculture-head-min.jpg',
    description:
      'Adopt data-driven innovations to balance supply and optimize production'
  },
  {
    name: 'Hospitality',
    path: '/hospitality', 
    icon: Hotel,
    image: '/hospitality-software-development-header.jpg',
    description:
      'Implement tailored solutions to maximize revenue and guest satisfaction'
  },
  {
    name: 'Insurance',
    path: '/insurance',
    icon: Shield,
    image: '/insurance-software-development-services-head-min.jpg',
    description:
      'Boost underwriting efficiency and reduce risks with tailored solutions'
  }
];

  const testimonials = [
    {
      quote: "There is clear impact on time saved. We save 53 hours per month across our recruiting team.",
      author: "NITIN MOORJANI",
      company: "AUTOMATTIC"
    },
    {
      quote: "The time I save with Metaview means I can move forward next steps with candidates faster. And ultimately that impacts my hiring velocity.",
      author: "LUKE HEXTALL",
      company: "POLAR ANALYTICS"
    }, 
    {
      quote: "We have enhanced depth and clarity for hiring managers and recruiters. We gain a full contextual understanding of the interview process.",
      author: "HANNAH WARDLE",
      company: "QUORA"
    }
  ];

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
      if (cardContainerRef.current) {
        setContainerWidth(cardContainerRef.current.offsetWidth);
      }
    };
    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, []);

  const cardWidth = isMobile ? containerWidth - 32 : 380;
  const cardGap = 24;
  const isAtFirstCard = currentIndustrySlide === 0;
  const isAtLastCard = currentIndustrySlide >= industries.length - (isMobile ? 1 : 3);

  const nextIndustrySlide = () => {
    if (!isAtLastCard) {
      setCurrentIndustrySlide(prev => prev + 1);
    }
  };

  const prevIndustrySlide = () => {
    if (!isAtFirstCard) {
      setCurrentIndustrySlide(prev => prev - 1);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevIndustrySlide();
    } else if (info.offset.x < -threshold) {
      nextIndustrySlide();
    }
  };

  // Animation styles
  const slideTransform = {
    transform: `translateX(-${currentIndustrySlide * (cardWidth + cardGap)}px)`,
    transition: 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
  };

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0a0e0a' }}>
      <style>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
      
      {/* Background pattern */}
      <img 
        alt=""
        loading="lazy"
        width="1560"
        height="1514"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.15, color: 'transparent' }}
        src="/AIAgents-bg.webp"
      />

      <div className="relative z-10">
        {/* Industries Section */}
        <div className="py-24">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Building2 className="h-4 w-4 mr-2" />
                Industries
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
                <span className="block">Game-changing solutions</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>tailored for every sector</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
                We deliver specialized solutions across diverse industries, addressing unique challenges with innovative technology.
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-end mb-6 space-x-2">
              <button
                onClick={prevIndustrySlide}
                disabled={isAtFirstCard}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                style={{
                  backgroundColor: isAtFirstCard ? 'rgba(227, 255, 239, 0.05)' : 'rgba(227, 255, 239, 0.1)',
                  border: '1px solid rgba(227, 255, 239, 0.3)',
                  cursor: isAtFirstCard ? 'not-allowed' : 'pointer'
                }}
              >
                <ChevronLeft className="h-5 w-5" style={{ 
                  color: isAtFirstCard ? 'rgba(227, 255, 239, 0.3)' : '#E3FFEF' 
                }} />
              </button>
              <button
                onClick={nextIndustrySlide}
                disabled={isAtLastCard}
                className="w-10 h-10 flex items-center justify-center rounded-full transition-all"
                style={{
                  backgroundColor: isAtLastCard ? 'rgba(227, 255, 239, 0.05)' : 'rgba(227, 255, 239, 0.1)',
                  border: '1px solid rgba(227, 255, 239, 0.3)',
                  cursor: isAtLastCard ? 'not-allowed' : 'pointer'
                }}
              >
                <ChevronRight className="h-5 w-5" style={{ 
                  color: isAtLastCard ? 'rgba(227, 255, 239, 0.3)' : '#E3FFEF' 
                }} />
              </button>
            </div>

            <div ref={cardContainerRef} className="relative overflow-hidden">
              <div
                className="flex"
                style={{ ...slideTransform, gap: `${cardGap}px` }}
              >
                {industries.map((industry, index) => (
                  <Link
                    key={`${industry.name}-${index}`}
                    to={industry.path}
                    className="block flex-shrink-0 relative group rounded-2xl overflow-hidden transition-transform hover:-translate-y-1 cursor-pointer"
                    style={{ 
                      width: `${cardWidth}px`,
                      height: '420px',
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.1)'
                    }}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          // Fallback to a gradient background if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                        <h3 className="text-3xl font-bold text-white mb-2">{industry.name}</h3>
                        <p className="text-white/80 mb-4">{industry.description}</p>
                        <div className="flex items-center text-white group">
                          <span className="mr-2">Explore solutions</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {isMobile && (
              <div className="flex justify-center mt-6 space-x-2">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndustrySlide(index)}
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: index === currentIndustrySlide ? '32px' : '8px',
                      backgroundColor: index === currentIndustrySlide ? '#E3FFEF' : 'rgba(227, 255, 239, 0.2)'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Impact Stats Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: '#E3FFEF' }}>
                Real impact from intake to final offer.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="text-center p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}>
                <div className="w-12 h-12 mx-auto mb-4">
                  <Star className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-5xl font-bold" style={{ color: '#E3FFEF' }}>10</span>
                  <span className="text-2xl ml-1" style={{ color: '#10b981' }}>H</span>
                </div>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#E3FFEF' }}>
                  Hours saved per recruiter per week
                </h3>
                <blockquote className="text-sm italic mb-2" style={{ color: '#94D3A2' }}>
                  "{testimonials[0].quote}"
                </blockquote>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#94D3A2', opacity: 0.6 }}>
                  {testimonials[0].author} • {testimonials[0].company}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="text-center p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}>
                <div className="w-12 h-12 mx-auto mb-4">
                  <Globe className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-5xl font-bold" style={{ color: '#E3FFEF' }}>30</span>
                  <span className="text-2xl ml-1" style={{ color: '#10b981' }}>%</span>
                </div>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#E3FFEF' }}>
                  Decrease in interviews per hire
                </h3>
                <blockquote className="text-sm italic mb-2" style={{ color: '#94D3A2' }}>
                  "{testimonials[1].quote}"
                </blockquote>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#94D3A2', opacity: 0.6 }}>
                  {testimonials[1].author} • {testimonials[1].company}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="text-center p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}>
                <div className="w-12 h-12 mx-auto mb-4">
                  <Clock className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-5xl font-bold" style={{ color: '#E3FFEF' }}>92</span>
                  <span className="text-2xl ml-1" style={{ color: '#10b981' }}>%</span>
                </div>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#E3FFEF' }}>
                  Users reporting better hiring decisions
                </h3>
                <blockquote className="text-sm italic mb-2" style={{ color: '#94D3A2' }}>
                  "{testimonials[2].quote}"
                </blockquote>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#94D3A2', opacity: 0.6 }}>
                  {testimonials[2].author} • {testimonials[2].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Left: Contact Form */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#E3FFEF' }}>
                  Get in touch to discuss your software vision with industry experts
                </h2>
                <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
                  Ready to transform your business with cutting-edge technology? Get in touch with our experts today.
                </p>

                <form className="space-y-6 relative" onSubmit={handleSubmit}>
                  {/* Full form loading overlay */}
                  {isSubmitting && (
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl z-10 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4">
                          <svg className="animate-spin w-full h-full text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
                        <p className="text-white text-lg font-medium mb-2">Sending your message</p>
                        <p className="text-emerald-400 text-sm">Please wait...</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="text" 
                      placeholder="Full name *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                      style={{
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.2)',
                        color: '#E3FFEF'
                      }}
                    />
                    <input 
                      type="email" 
                      placeholder="Email *"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                      style={{
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.2)',
                        color: '#E3FFEF'
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      type="tel" 
                      placeholder="Phone number *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                      style={{
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.2)',
                        color: '#E3FFEF'
                      }}
                    />
                    <input 
                      type="text" 
                      placeholder="Company *"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                      style={{
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.2)',
                        color: '#E3FFEF'
                      }}
                    />
                  </div>
                  
                  {/* Custom Dropdown Container */}
                  <div className="relative">
                    <select 
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl px-4 py-3 pr-10 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
                      style={{
                        backgroundColor: 'rgba(227, 255, 239, 0.05)',
                        border: '1px solid rgba(227, 255, 239, 0.2)',
                        color: formData.serviceInterest ? '#E3FFEF' : '#94D3A2'
                      }}
                    >
                      <option value="" style={{ backgroundColor: '#1a1f1a', color: '#94D3A2' }}>
                        Select Service Interest *
                      </option>
                      <option value="custom-development" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                        Custom Software Development
                      </option>
                      <option value="ai-solutions" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                        AI & Machine Learning
                      </option>
                      <option value="cloud-solutions" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                        Cloud Solutions
                      </option>
                      <option value="cybersecurity" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                        Cybersecurity
                      </option>
                      <option value="other" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                        Other
                      </option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="h-5 w-5" style={{ color: '#94D3A2' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  <textarea 
                    placeholder="Tell us about your project *" 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 resize-none transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: '#E3FFEF'
                    }}
                  />
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-gray-600 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
                      style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}
                    />
                    <label className="text-sm leading-relaxed" style={{ color: '#94D3A2' }}>
                      I agree to receive communications from ID Code and understand that I can unsubscribe at any time. 
                      View our <span className="underline hover:opacity-80 cursor-pointer" style={{ color: '#7DD3C0' }}>Privacy Policy</span>.
                    </label>
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                      {submitError}
                    </div>
                  )}
                  
                  {submitSuccess && (
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-emerald-400 text-sm flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                      Your message has been sent successfully! We'll get back to you soon.
                    </div>
                  )}
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-full font-medium transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                  >
                    {isSubmitting ? (
                      <>
                        {/* Loading overlay */}
                        <div className="absolute inset-0 bg-emerald-50 opacity-50"></div>
                        
                        {/* Loading content */}
                        <span className="flex items-center relative z-10">
                          {/* Spinner */}
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-emerald-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          
                          {/* Loading text with dots animation */}
                          <span className="inline-flex items-center">
                            Sending
                            <span className="inline-flex ml-1">
                              <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                              <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                              <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                            </span>
                          </span>
                        </span>
                        
                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 h-1 bg-emerald-600 animate-pulse" style={{ width: '100%' }}>
                          <div className="h-full bg-emerald-400" style={{ animation: 'loading 2s ease-in-out infinite' }}></div>
                        </div>
                      </>
                    ) : (
                      <>Contact us →</>
                    )}
                  </button>
                </form>
              </div>

              {/* Right: Trust Signals */}
              <div className="space-y-8">
                {/* Featured Testimonial */}
                <div className="rounded-2xl p-10"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}>
                  <p className="text-sm font-semibold mb-2" style={{ color: '#94D3A2' }}>
                    What our customers say
                  </p>
                  <blockquote className="text-lg mb-6" style={{ color: '#E3FFEF' }}>
                    "The breadth of knowledge and understanding that ID Code has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with ID Code, you are working with the top 1% of the engineering excellence."
                  </blockquote>
                  <div>
                    <p className="font-semibold" style={{ color: '#E3FFEF' }}>Sam Fleming</p>
                    <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>President, Fleming-AOD</p>
                  </div>
                </div>

                {/* Trust Metrics */}
                <div className="rounded-2xl p-8"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
                    Trusted by Industry Leaders
                  </h3>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#10b981' }}>500+</div>
                      <div className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Enterprise Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#10b981' }}>99.9%</div>
                      <div className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Project Success Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#10b981' }}>48h</div>
                      <div className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Response Time</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: '#10b981' }}>5★</div>
                      <div className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Client Rating</div>
                    </div>
                  </div>
                </div>

                {/* Achievement */}
                <div className="rounded-2xl p-6"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(52, 211, 153, 0.1) 100%)',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                  <div className="flex items-center mb-3">
                    <Award className="h-6 w-6 mr-3" style={{ color: '#10b981' }} />
                    <span className="font-semibold" style={{ color: '#10b981' }}>Recent Achievement</span>
                  </div>
                  <p className="font-medium" style={{ color: '#E3FFEF' }}>
                    Named "Top Software Development Company 2024" by TechReview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesContactSection;
