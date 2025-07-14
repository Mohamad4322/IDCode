import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Star, Users, Award, Globe, Zap, Code, Smartphone, Cloud, Database, Shield, Lightbulb, Sparkles, ChevronLeft, ChevronRight, ChevronDown, Activity, DollarSign, ShoppingCart, Factory, GraduationCap, Building2, Truck, Plane, Stethoscope, Briefcase, Brain, MessageSquare, Car, Film, Wheat, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, PanInfo } from 'framer-motion';
import StaticNetworkBackground from '../components/StaticNetworkBackground';
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedComponents'; 
import VerticalHeroSlider from '../components/VerticalHeroSlider';
import IndustryHoverCard from '../components/IndustryHoverCard';
import TestimonialSlider from '../components/TestimonialSlider';
import AISolutionsAdvisorSection from '../components/AISolutionsAdvisorSection';
import IndustriesContactSection from '../components/IndustriesContactSection';
import CTAIntegrationsSection from '../components/CTAIntegrationsSection';
import ArticlesCarouselSection from '../components/ArticlesCarouselSection';
import { CardSlider } from '../components/AnimatedSlider';
import GradientText from '../components/GradientText';
import LazyImage from '../components/LazyImage';
import LazyVideo from '../components/LazyVideo';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface IndustryCard {
  name: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  path: string;
  image: string;
}

const Home = () => {
  const { scrollY } = useScroll(); 
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Industries');
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  // Industry cards
  const industries: IndustryCard[] = [
  {
    name: 'Financial Services',
    icon: DollarSign,
    description: 'Navigate financial risks with ease',
    benefits: ['Speed up transactions, reduce costs'],
    path: '/financial-services',
    image: '/images/financial-services.jpg'
  },
  {
    name: 'Healthcare',
    icon: Activity,
    description: 'Deliver exceptional patient service',
    benefits: ['Automate administrative tasks, optimise costs'],
    path: '/healthcare',
    image: '/images/healthcare.jpg'
  },
  {
    name: 'Energy & Utilities',
    icon: Zap,
    description: 'Boost operational efficiency with automation',
    benefits: ['Reduce your direct carbon footprint'],
    path: '/energy',
    image: '/images/energy-utilities.jpg'
  },
  {
    name: 'Government',
    icon: Shield,
    description: 'Digitise your public services',
    benefits: ['Defend against cyber crime'],
    path: '/government',
    image: '/images/government.jpg'
  },
  {
    name: 'Retail & Ecommerce',
    icon: ShoppingCart,
    description: 'Transform shopping experiences',
    benefits: ['Enhance customer engagement, optimize inventory'],
    path: '/retail-ecommerce',
    image: '/images/retail-ecommerce.jpg'
  },
  {
    name: 'Manufacturing',
    icon: Factory,
    description: 'Optimize production processes',
    benefits: ['Improve quality control, reduce downtime'],
    path: '/manufacturing',
    image: '/images/manufacturing.jpg'
  },
  {
    name: 'Education',
    icon: GraduationCap,
    description: 'Empower learning experiences',
    benefits: ['Enable remote education, personalize learning'],
    path: '/education',
    image: '/images/education.jpg'
  },
  {
    name: 'Real Estate',
    icon: Building2,
    description: 'Modernize property management',
    benefits: ['Streamline transactions, enhance virtual tours'],
    path: '/real-estate',
    image: '/images/real-estate.jpg'
  },
  {
    name: 'Transportation & Logistics',
    icon: Truck,
    description: 'Optimize supply chain operations',
    benefits: ['Track shipments in real-time, reduce delays'],
    path: '/transportation-logistics',
    image: '/images/transportation-logistics.jpg'
  },
  {
    name: 'Insurance Services',
    icon: Briefcase,
    description: 'Accelerate claims processing',
    benefits: ['Boost underwriting efficiency, reduce risks'],
    path: '/insurance',
    image: '/images/insurance-services.jpg'
  },
  {
    name: 'Hospitality',
    icon: Plane,
    description: 'Enhance guest experiences',
    benefits: ['Personalize services, streamline bookings'],
    path: '/travel-hospitality',
    image: '/images/hospitality.jpg'
  },
  {
    name: 'Pharmaceuticals',
    icon: Stethoscope,
    description: 'Accelerate drug discovery',
    benefits: ['Improve clinical trials, ensure compliance'],
    path: '/pharmaceuticals',
    image: '/images/pharmaceuticals.jpg'
  },
  {
    name: 'Automotive',
    icon: Car,
    description: 'Introduce intelligent features',
    benefits: ['Enhance driver experience, optimize processes'],
    path: '/automotive',
    image: '/images/automotive.jpg'
  },
  {
    name: 'Media & Entertainment',
    icon: Film,
    description: 'Reach wider audiences',
    benefits: ['Create unparalleled digital experiences'],
    path: '/media-entertainment',
    image: '/images/media-entertainment.jpg'
  },
  {
    name: 'Agriculture',
    icon: Wheat,
    description: 'Adopt data-driven innovations',
    benefits: ['Balance supply, optimize production'],
    path: '/agriculture',
    image: '/images/agriculture.jpg'
  },
  {
    name: 'Insurance',
    icon: Shield,
    description: 'Boost efficiency and security',
    benefits: ['Data-driven solutions for profitability'],
    path: '/insurance',
    image: '/images/insurance.jpg'
  },
  {
    name: 'Logistics',
    icon: Truck,
    description: 'Streamline supply chain operations',
    benefits: ['Optimize delivery and warehousing'],
    path: '/logistics',
    image: '/images/logistics.jpg'
  }
];

  const categories = ['All Industries', 'HEALTHCARE', 'FINANCE', 'RETAIL', 'MANUFACTURING', 'EDUCATION', 'REAL ESTATE'];

  const testimonials = [
    {
      quote: "ID Code delivered exceptional results that exceeded our expectations. Their technical expertise and project management skills are outstanding.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "Working with ID Code was a game-changer for our digital transformation. They understood our needs and delivered a solution that transformed our business.",
      author: "Michael Chen",
      position: "CEO, InnovateLab",
      rating: 5
    },
    {
      quote: "The team at ID Code is professional, responsive, and delivers high-quality work on time. I highly recommend their services.",
      author: "Emily Rodriguez",
      position: "Product Manager, StartupX",
      rating: 5
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Delivered' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
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

  const nextIndustrySlide = () => {
    if (currentIndustrySlide < industries.length - 1) {
      setCurrentIndustrySlide(prev => prev + 1);
    }
  };

  const prevIndustrySlide = () => {
    if (currentIndustrySlide > 0) {
      setCurrentIndustrySlide(prev => prev - 1);
    }
  };

  // Handle swipe gestures for mobile
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      prevIndustrySlide();
    } else if (info.offset.x < -threshold) {
      nextIndustrySlide();
    }
  };

  // Calculate card width and gap based on mobile/desktop
  const cardWidth = isMobile ? containerWidth - 32 : 320;
  const cardGap = isMobile ? 16 : 32;

  const isAtLastCard = currentIndustrySlide === industries.length - 1;
  const isAtFirstCard = currentIndustrySlide === 0;

  // Reset slide when category changes
  useEffect(() => {
    setCurrentIndustrySlide(0);
  }, [selectedCategory]);

  return (
    <div className="pt-20">
      {/* Vertical Auto-Sliding Hero Section */}
      <VerticalHeroSlider />

      {/* Featured Services Section */}
     <section
  id="transformative-solutions"
  className="relative overflow-hidden"
  style={{ backgroundColor: '#0a0e0a' }}
>
  {/* Wave background */}
  <div className="absolute inset-0" style={{ opacity: 0.15 }}>
    <img 
      src="https://www.metaview.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwave.c40ba853.png&w=3840&q=75"
      alt=""
      className="w-full h-full object-cover"
      style={{ 
        filter: 'brightness(0.8)',
        transform: 'scale(1.1)'
      }}
    />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    {/* HEADER */}
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
      <div>
  <a
    href="#transformative-solutions"
    className="inline-block text-sm mb-2 transition-colors"
    style={{ color: '#94D3A2', opacity: 0.7 }}
    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
    onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
  >
    
  </a>
  <h2 className="text-4xl font-bold mb-2" style={{ color: '#E3FFEF' }}>
    Transformative Solutions
  </h2>
        <p className="text-lg" style={{ color: '#94D3A2', opacity: 0.8 }}>
          We deliver cutting-edge technology solutions that drive innovation,
          efficiency, and growth for organizations worldwide.
        </p>
      </div>
      <div className="flex gap-4">
        <button
          aria-label="Previous"
          className="prev-btn w-10 h-10 border rounded-full flex items-center justify-center transition-all"
          style={{ 
            borderColor: 'rgba(227, 255, 239, 0.3)',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.3)';
          }}
        >
          <ChevronLeft className="w-5 h-5" style={{ color: '#E3FFEF' }} />
        </button>
        <button
          aria-label="Next"
          className="next-btn w-10 h-10 border rounded-full flex items-center justify-center transition-all"
          style={{ 
            borderColor: 'rgba(227, 255, 239, 0.3)',
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(227, 255, 239, 0.3)';
          }}
        >
          <ChevronRight className="w-5 h-5" style={{ color: '#E3FFEF' }} />
        </button>
      </div>
    </div>
    {/* CAROUSEL */}
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: '.prev-btn',
        nextEl: '.next-btn',
      }}
      slidesPerView={1.2}
      spaceBetween={16}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
      }}
    >
      {[
        {
          icon: Code,
          title: 'Custom Software Development',
          description:
            'Tailored software solutions designed to address your unique business challenges and opportunities.',
          path: '/custom-software-development',
          gradient: 'from-emerald-500 to-green-400',
        },
        {
          icon: Brain,
          title: 'AI & Machine Learning',
          description:
            'Harness the power of artificial intelligence to gain insights, automate processes, and drive innovation.',
          path: '/ai-advisor',
          gradient: 'from-teal-500 to-emerald-400',
        },
        {
          icon: Cloud,
          title: 'Cloud Solutions',
          description:
            'Scalable, secure cloud infrastructure and migration services to modernize your technology stack.',
          path: '/cloud-solutions',
          gradient: 'from-green-500 to-teal-400',
        },
      ].map((svc, idx) => (
        <SwiperSlide key={idx}>
          <div 
            className="rounded-2xl p-8 shadow-lg flex flex-col h-full transition-all duration-300"
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
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-6`}
              style={{ opacity: 0.9 }}
            >
              <svc.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#E3FFEF' }}>
              {svc.title}
            </h3>
            <p className="text-sm flex-grow" style={{ color: '#94D3A2', opacity: 0.8 }}>
              {svc.description}
            </p>
            <Link
              to={svc.path}
              className="mt-6 inline-flex items-center font-medium transition-colors group"
              style={{ color: '#7DD3C0' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#94D3A2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#7DD3C0'}
            >
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link> 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



      {/* AI Solutions Advisor Section */}
      <AISolutionsAdvisorSection />
      <IndustriesContactSection />
      <ArticlesCarouselSection />

      {/* Video Showcase Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we transform ideas into powerful digital solutions that drive business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <LazyVideo
                src="/cta-video-big.webm"
                className="w-full h-full"
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ID Code?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Expertise</h4>
                    <p className="text-sm text-gray-600">Over 200+ successful projects delivered across industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dedicated Teams</h4>
                    <p className="text-sm text-gray-600">Skilled developers committed to your project success</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovative Solutions</h4>
                    <p className="text-sm text-gray-600">Cutting-edge technologies tailored to your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>  
  );
};

export default Home;
