import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, CheckCircle, Star, Users, Award, Globe, Zap, Code, Smartphone, Cloud, Database, Shield, Lightbulb, Sparkles, ChevronLeft, ChevronRight, ChevronDown, Activity, DollarSign, ShoppingCart, Factory, GraduationCap, Building2, Truck, Plane, Stethoscope, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, PanInfo } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import StaticNetworkBackground from '../components/StaticNetworkBackground';
import { FadeIn, StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedComponents';
import AnimatedCounter from '../components/AnimatedCounter';
import VerticalHeroSlider from '../components/VerticalHeroSlider';
import IndustryHoverCard from '../components/IndustryHoverCard';
import TestimonialSlider from '../components/TestimonialSlider';
import AISolutionsAdvisorSection from '../components/AISolutionsAdvisorSection';

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
  const slideInterval = 8000;

  const slides = [
    {
      title: 'Transform healthcare delivery with digital innovation',
      description: 'Enhance patient outcomes and deliver affordable care with custom healthcare software tailored for your medical organization.',
      category: 'Healthcare',
      background: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/healthcare'
    },
    {
      title: 'Deliver industry-leading financial services',
      description: 'Strategically address risks while unlocking the full potential of Big Data for the financial sector with our fintech solutions.',
      category: 'Fintech',
      background: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/financial-services'
    },
    {
      title: 'Accelerate claims processing with custom software',
      description: 'Boost underwriting efficiency and reduce risks with tailored solutions for insurance operations.',
      category: 'Insurance',
      background: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/insurance'
    },
    {
      title: 'Harness the full potential of your data',
      description: 'Maximize your business potential by delving deeper into your data and gaining invaluable insights.',
      category: 'Data & AI',
      background: 'https://images.pexels.com/photos/8438917/pexels-photo-8438917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: '/data-analytics'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndustrySlide, setCurrentIndustrySlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All Industries');
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const industries: IndustryCard[] = [
    {
      name: 'Fintech',
      icon: DollarSign,
      description: 'Navigate financial risks with ease',
      benefits: ['Speed up transactions, reduce costs'],
      path: '/financial-services',
      image: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Healthcare',
      icon: Activity,
      description: 'Deliver exceptional patient service',
      benefits: ['Automate administrative tasks, optimise costs'],
      path: '/healthcare',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Energy',
      icon: Zap,
      description: 'Boost operational efficiency with automation',
      benefits: ['Reduce your direct carbon footprint'],
      path: '/energy',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Government',
      icon: Shield,
      description: 'Digitise your public services',
      benefits: ['Defend against cyber crime'],
      path: '/government',
      image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Retail & E-commerce',
      icon: ShoppingCart,
      description: 'Transform shopping experiences',
      benefits: ['Enhance customer engagement, optimize inventory'],
      path: '/retail-ecommerce',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Optimize production processes',
      benefits: ['Improve quality control, reduce downtime'],
      path: '/manufacturing',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Empower learning experiences',
      benefits: ['Enable remote education, personalize learning'],
      path: '/education',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Real Estate',
      icon: Building2,
      description: 'Modernize property management',
      benefits: ['Streamline transactions, enhance virtual tours'],
      path: '/real-estate',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Transportation & Logistics',
      icon: Truck,
      description: 'Optimize supply chain operations',
      benefits: ['Track shipments in real-time, reduce delays'],
      path: '/transportation-logistics',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Insurance',
      icon: Briefcase,
      description: 'Accelerate claims processing',
      benefits: ['Boost underwriting efficiency, reduce risks'],
      path: '/insurance',
      image: 'https://images.pexels.com/photos/3184634/pexels-photo-3184634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Travel & Hospitality',
      icon: Plane,
      description: 'Enhance guest experiences',
      benefits: ['Personalize services, streamline bookings'],
      path: '/travel-hospitality',
      image: 'https://images.pexels.com/photos/2507007/pexels-photo-2507007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'Pharmaceuticals',
      icon: Stethoscope,
      description: 'Accelerate drug discovery',
      benefits: ['Improve clinical trials, ensure compliance'],
      path: '/pharmaceuticals',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const categories = ['All Industries', 'HEALTHCARE', 'FINANCE', 'RETAIL', 'MANUFACTURING', 'EDUCATION', 'REAL ESTATE'];

  const filteredIndustries = selectedCategory === 'All Industries' 
    ? industries 
    : industries.filter(industry => industry.category === selectedCategory);

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

      {/* AI Solutions Advisor Section */}
      <AISolutionsAdvisorSection />

      {/* Industries Section - Updated with new navigation */}
      <section className="py-24 bg-[#f9f9fb]">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm text-gray-500 font-medium mb-2">Industries</p>
            <h2 className="text-4xl font-serif leading-tight text-gray-900 max-w-3xl">
              Game-changing solutions <br /> tailored for every sector
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end mb-6 space-x-2">
            <button
              onClick={prevIndustrySlide}
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
              onClick={nextIndustrySlide}
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
                x: -currentIndustrySlide * (cardWidth + cardGap)
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              style={{ gap: `${cardGap}px` }}
            >
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <Link 
                    key={`${industry.name}-${index}`}
                    to={industry.path}
                    className="block flex-shrink-0 h-[380px] relative group"
                    style={{ width: `${cardWidth}px` }}
                  >
                    <IndustryHoverCard industry={{
                      name: industry.name,
                      projects: '50+ projects',
                      path: industry.path,
                      image: industry.image,
                      description: industry.description,
                      category: industry.name.toUpperCase()
                    }} image={industry.image} />
                  </Link>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile navigation dots */}
          {isMobile && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: industries.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndustrySlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndustrySlide
                      ? 'bg-gray-900 w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section - Animated Slider */}
      <section className="py-20 text-white" style={{ backgroundColor: '#1e1d28' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Get in touch to discuss your software vision with industry experts
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full name *" className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" />
                <input type="email" placeholder="Email *" className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Phone number *" className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" />
                <input type="text" placeholder="Country *" defaultValue="United States" readOnly className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" />
              </div>
              <input type="text" placeholder="Company *" className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none w-full" />
              <textarea placeholder="Message *" rows={4} className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none w-full resize-none" />
              <div className="flex items-start gap-2">
                <input type="checkbox" className="accent-blue-500 mt-1" />
                <label className="text-sm text-gray-300">I want to receive news and updates once in a while</label>
              </div>
              <p className="text-sm text-gray-400">
                We will add your info to our CRM for contacting you regarding your request. For more info please consult our{' '}
                <a href="#" className="underline">privacy policy</a>.
              </p>
              <button type="submit" className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                Contact us →
              </button>
            </form>
          </div>

          {/* Right: Testimonial Card */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-10 ">
            <p className="text-sm font-semibold text-gray-500 mb-2">What our customers say</p>
            <p className="text-5xl text-gray-300 leading-none mb-4">"</p>
            <p className="text-lg mb-6">
              The breadth of knowledge and understanding that ID Code has within its walls allows us to leverage that expertise to
              make superior deliverables for our customers. When you work with ID Code, you are working with the top 1% of the
              aptitude and engineering excellence of the whole country.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div>
                <p className="font-semibold">Sam Fleming</p>
                <p className="text-sm text-gray-500">President, Fleming-AOD</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 border-t pt-4">
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
        </div>
      </section> 

      {/* CTA Section - Using Your Custom Background Image */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side: Title and subtitle */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
                Company highlights
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light leading-tight text-white">
                We build lasting<br />
                partnerships with our<br />
                clients
              </h2>
            </div>
            {/* Right side: Stats */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <p className="text-4xl font-semibold text-white">1000+</p>
                <p className="text-sm text-gray-300 mt-2">projects delivered</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">120+</p>
                <p className="text-sm text-gray-300 mt-2">active clients, including Fortune 500 companies</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">30+</p>
                <p className="text-sm text-gray-300 mt-2">years on the market</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-white">20</p>
                <p className="text-sm text-gray-300 mt-2">offices and delivery centres globally</p>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </div>  
  );
};

export default Home;