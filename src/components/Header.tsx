import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ChevronRight, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp,
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
  TrendingDown,
  Headphones,
  GitBranch,
  Monitor,
  Network,
  Users,
  Building,
  TrendingUp,
  Heart,
  Hotel,
  Truck,
  ShoppingBag,
  Car,
  Film,
  Wheat
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(0);
  const [hoveredIndustryIndex, setHoveredIndustryIndex] = useState(0);
    
  // Use real location from react-router-dom
  const location = useLocation();
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if a path is active, considering language prefix
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const isActiveCategory = (basePath) => {
    return location.pathname.startsWith(basePath);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      const mobileMenu = document.querySelector('.mobile-menu-container');
      const menuButton = document.querySelector('.hide_show_menu_btn');
      
      if (isMenuOpen && mobileMenu && menuButton) {
        if (!mobileMenu.contains(target) && !menuButton.contains(target)) {
          setIsMenuOpen(false);
          setActiveDropdown(null);
        }
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const serviceCategories = [
    {
      name: 'Engineering',
      description: 'End-to-end engineering services for seamless software delivery.',
      gradient: 'from-emerald-500 to-teal-600',
      subServices: [
        { name: 'Application development', icon: Code, path: '/application-development', description: 'Bring your software vision to life with a tailored solution and deliver an industry-leading user experience.' },
        { name: 'PoC development', icon: TestTube, path: '/poc-development', description: 'Safely explore business-boosting concepts with robust testing and expert road mapping.' },
        { name: 'Product-oriented delivery', icon: Target, path: '/product-development#product-oriented-delivery', description: 'Ensure timely and cost-effective product delivery while prioritizing your business objectives.' },
        { name: 'Enterprise applications', icon: Layers, path: '/custom-software-development#enterprise-applications', description: 'ERP consulting • CRM consulting' },
        { name: 'Legacy software modernization', icon: RotateCcw, path: '/digital-transformation#legacy-modernization', description: 'Transform your core legacy systems to elevate performance, agility, scalability, and UX.' },
        { name: 'Cloud computing', icon: Globe, path: '/cloud-solutions', description: 'Cloud migration solutions' }
      ]
    },
    {
      name: 'Advisory',
      description: 'Strategic guidance for top-notch products and services.',
      gradient: 'from-teal-500 to-cyan-600',
      subServices: [
        { name: 'Product and service design', icon: Palette, path: '/ui-ux-design#product-service-design', description: 'Validate niche ideas and create innovative products and services that scale as your business does.' },
        { name: 'Cyber security', icon: Shield, path: '/cyber-security', description: 'Proactively identify threats to your digital infrastructure to futureproof your IT ecosystem.' },
        { name: 'Technical feasibility study', icon: BarChart3, path: '/poc-development#technical-feasibility', description: 'Explore new technologies and their potential for your business before making an investment.' },
        { name: 'Sustainability consulting', icon: Recycle, path: '/sustainability-consulting', description: 'Reach your net-zero goals and seize new, sustainable business growth opportunities.' },
        { name: 'Agile transformation', icon: Zap, path: '/digital-transformation#agile-transformation', description: 'Transform your organization to achieve agility, resilience, and sustainable business growth.' },
        { name: 'AI consulting', icon: Brain, path: '/ai-advisor#ai-consulting', description: 'Get strategic guidance on implementing AI solutions for scalable business growth.' }
      ]
    },
    {
      name: 'Data & AI',
      description: 'Custom solutions to maximize the value of your data.',
      gradient: 'from-cyan-500 to-blue-600',
      subServices: [
        { name: 'AI solutions advisor', icon: Brain, path: '/ai-advisor', description: 'Start the assessment →' },
        { name: 'Data science', icon: Database, path: '/data-analytics', description: 'Boost your business performance and achieve optimization through tailored data-driven solutions.' },
        { name: 'Data engineering', icon: Settings, path: '/data-analytics#data-engineering', description: 'Data strategy • Data platforms • Business intelligence' },
        { name: 'MLOps', icon: Cpu, path: '/data-analytics#mlops', description: 'Achieve seamless integration and maximum ROI for your machine learning models.' },
        { name: 'Artificial intelligence', icon: Brain, path: '/ai-advisor#artificial-intelligence', description: 'Generative AI • Machine learning • Conversational AI • Agentic AI' },
        { name: 'Intelligent automation', icon: Settings, path: '/digital-transformation#intelligent-automation', description: 'Intelligent document processing' },
        { name: 'LLMOps', icon: MessageSquare, path: '/ai-advisor#llmops', description: 'Streamline deployment, optimize performance, and maximize ROI for your large language models.' }
      ]
    },
    {
      name: 'Optimisation',
      description: 'Expert help for flawless performance of your products and services.',
      gradient: 'from-blue-500 to-indigo-600',
      subServices: [
        { name: 'Software audit', icon: Search, path: '/quality-assurance#software-audit', description: 'Assess your software products and processes to mitigate risks and minimize revenue loss.' },
        { name: 'Quality assurance', icon: Shield, path: '/quality-assurance', description: 'Deliver flawless products and seamless user experiences with our expert QA services.' },
        { name: 'Support', icon: Headphones, path: '/support', description: 'Efficiently handle technical issues and system changes with our IT support services.' },
        { name: 'FinOps', icon: TrendingDown, path: '/finops', description: 'Get expert guidance to maximise your cloud infrastructure value, optimise costs, and boost ROI.' }
      ]
    },
    {
      name: 'Expertise',
      description: 'Latest technologies and innovative approaches to drive your business growth forward.',
      gradient: 'from-indigo-500 to-purple-600',
      subServices: [
        { name: 'DevOps', icon: GitBranch, path: '/devops-services', description: 'Full-cycle DevOps solutions to optimise your SDLC for greater agility and cost-efficiency.' },
        { name: 'VR/AR/MR', icon: Monitor, path: '/vr-ar-mr', description: 'Utilize virtual reality technologies to deliver brand-defining, immersive user experiences.' },
        { name: 'Internet of Things', icon: Network, path: '/iot', description: 'Embrace the potential of IoT for better efficiency, smoother collaboration and powerful data insights.' },
        { name: 'Market research', icon: Search, path: '/product-development#market-research', description: 'Evaluate your business landscape to capitalise on promising niches and get ahead of the competition.' },
        { name: 'Customer Experience', icon: Users, path: '/ui-ux-design#customer-experience', description: 'Refine every customer interaction to enhance satisfaction and drive sustainable revenue growth.' },
        { name: 'Digital enterprise', icon: Building, path: '/digital-transformation#digital-enterprise', description: 'Introduce digital transformation to your enterprise to drive efficiency, productivity, and revenue.' },
        { name: 'UX consulting', icon: Palette, path: '/ui-ux-design', description: 'Launch successful products and deliver services that your customers will truly want to use.' },
        { name: 'Nearshore development', icon: Globe, path: '/nearshore-development', description: 'Partner with a trusted nearshore software development company to deliver your software project.' }
      ]
    }
  ];

  const industries = [
    { 
      name: 'Fintech', 
      path: '/financial-services',
      icon: TrendingUp,
      description: 'Effectively manage risks, protect your assets against fraud and maximize the potential of your data.',
      image: '/financial-software-development-head.jpg',
      color: 'text-emerald-600'
    },
    { 
      name: 'Healthcare', 
      path: '/healthcare',
      icon: Heart,
      description: 'Leverage new technologies to provide outstanding patient care focused on improving clinical results.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'text-teal-600'
    },
    { 
      name: 'Energy', 
      path: '/energy',
      icon: Zap,
      description: 'Elevate your power system\'s productivity, safety and sustainability with energy management software.',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'text-cyan-600'
    },
    { 
      name: 'Government', 
      path: '/government',
      icon: Building,
      description: 'Digitise your public services to create a transparent, efficient, and data-centric government agency.',
      image: '/government-software-solutions-head-min.jpg',
      color: 'text-blue-600'
    },
    { 
      name: 'Insurance', 
      path: '/insurance',
      icon: Shield,
      description: 'Adopt data-driven insurance software solutions boosting efficiency, profitability, and security in your sector.',
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'text-indigo-600'
    },
    { 
      name: 'Hospitality', 
      path: '/hospitality',
      icon: Hotel,
      description: 'Implement tailored hospitality solutions designed to maximize revenue and guest satisfaction.',
      image: '/hospitality-software-development-header.jpg',
      color: 'text-emerald-500'
    },
    { 
      name: 'Logistics', 
      path: '/logistics',
      icon: Truck,
      description: 'Streamline your supply chain, fleets, and warehousing for industry-leading logistics services.',
      image: '/logistics-software-development-head-min.jpg',
      color: 'text-teal-500'
    },
    { 
      name: 'Retail', 
      path: '/retail-ecommerce',
      icon: ShoppingBag,
      description: 'Transform customer journeys and engage shoppers in new ways, increasing sales and enhancing profitability.',
      image: '/retail-software-solutions-head-min.jpg',
      color: 'text-cyan-500'
    },
    { 
      name: 'Automotive', 
      path: '/automotive',
      icon: Car,
      description: 'Introduce intelligent features and process optimizations to deliver a new level of driver experience.',
      image: '/automotive-software-engineering-head-min.jpg',
      color: 'text-blue-500'
    },
    { 
      name: 'Media & Entertainment', 
      path: '/media-entertainment',
      icon: Film,
      description: 'Reach wider audiences with unparalleled digital experiences crafted for maximum engagement.',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'text-indigo-500'
    },
    { 
      name: 'Agriculture', 
      path: '/software-development-for-agriculture-head-min.jpg',
      icon: Wheat,
      description: 'Adopt data-driven innovations to balance supply and optimise production under increasing pressures.',
      image: 'https://images.pexels.com/photos/2389022/pexels-photo-2389022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'text-purple-500'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };
  const IndustryIcon = industries[hoveredIndustryIndex]?.icon;


  // Navigation items
  const navItems = {
    services: 'Services',
    industries: 'Industries',
    aboutUs: 'About us',
    blog: 'Blog',
    aiAdvisor: 'AI solutions advisor',
    contactUs: 'Contact us'
  };

  return (
    <header className={`header--new fixed left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled
        ? 'top-4 mx-4 bg-white/80 backdrop-blur-3xl shadow-2xl border border-gray-200 rounded-xl' 
        : 'top-0 bg-gradient-to-b from-[#2c483e]/90 from-0% via-[#2c483e]/40 via-60% via-white/60 via-80% to-white/90 to-100% backdrop-blur-sm'
      }`}>

      <div className="container-n max-w-screen-xl mx-auto"> 
       <div className={`header--new__row flex items-center transition-all duration-500 ${
         isScrolled
           ? 'h-13 pt-0 px-4 sm:px- lg:px-1 mx-4'    
           : 'h-20 px-4 sm:px-6 lg:px-8'    
       }`}>

          {/* Logo */}
          <Link to="/" className="header--new__logo flex items-center group mr-8" aria-label="IDCode Logo">
            <span className="header--new__logo-img-wrap">
              <img
                src="/logo.png"
                alt="IDCode"
                className="header--new__logo-img w-[120px] h-[40px] object-contain"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
  className="header__menu--newWrap hidden lg:block flex-1"
  onMouseLeave={() => setActiveDropdown(null)}
>

            <ul className="header__menu--new flex items-center space-x-0"> 
              {/* Services Dropdown */}
              <li 
                className="services menu-item menu-item-has-children relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}  
              >
                <Link 
                  to="/services"
                  className={`nav-link px-6 py-8 text-gray-700 hover:text-emerald-600 transition-colors text-base flex items-center cursor-pointer relative group ${
                    isActiveCategory('/services') ? 'text-emerald-600' : ''
                  }`}
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  <div className="menu-title">{navItems.services}</div>
                  <div className="dropdown-menu-opener ml-1">
                    <svg className="w-3 h-3" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Green dot indicator */}
                  <span className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full transition-all duration-300 ${
                    isActiveCategory('/services') || activeDropdown === 'services' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                </Link>
                  
                  {activeDropdown === 'services' && (
                    <div className="dropdown-menu__wrapper fixed left-0 right-0 top-full mt-0 z-50 px-4">
                        <div
    className="dropdown-menu w-full max-w-[1100px] mx-auto bg-gradient-to-br from-white/80 via-emerald-50/20 to-teal-50/20 backdrop-blur-3xl rounded-2xl shadow-2xl border border-emerald-100/30 overflow-hidden"
    onMouseLeave={() => setActiveDropdown(null)}
  >

                        <div className="flex flex-col lg:flex-row min-h-[550px]">
                          {/* Left Section - Categories */}
                          <div className="w-full lg:w-1/3 bg-gradient-to-br from-slate-900 via-emerald-900/50 to-slate-900 p-0 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
                            <div className="relative z-10">
                              {serviceCategories.map((category, index) => (
                                <div
                                  key={index}
                                  className={`menu-title block-group cursor-pointer p-6 transition-all duration-300 relative group ${
       hoveredCategoryIndex === index 
        ? `bg-gradient-to-r ${serviceCategories[0].gradient} shadow-lg transform scale-105` 
         : 'hover:bg-slate-700/50'
     }`}
                                  onMouseEnter={() => setHoveredCategoryIndex(index)}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                  <div className="relative z-10">
                                    <div className="flex items-center mb-3">
                                      <div className="menu-title text-white font-bold text-lg">{category.name}</div>
                                      <ChevronRight className={`ml-auto h-5 w-5 text-white/70 transform transition-transform ${hoveredCategoryIndex === index ? 'translate-x-1' : ''}`} />
                                    </div>
                                    <span className={`description text-sm leading-relaxed block ${hoveredCategoryIndex === index ? 'text-white' : 'text-gray-300'}`}>
                                      {category.description}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Right Section - Services */}
                          <div className="w-full lg:w-2/3 bg-white/80 backdrop-blur-2xl p-8">
                            <div className="mb-6">
                              <h3 className="text-2xl font-bold mb-3 text-gray-900 bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
                                {serviceCategories[hoveredCategoryIndex].name} Services
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                Expert {serviceCategories[hoveredCategoryIndex].name.toLowerCase()} services tailored to meet your unique business needs and drive digital transformation.
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {serviceCategories[hoveredCategoryIndex].subServices.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.path}
                                  className="dropdown-item flex flex-col p-5 rounded-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 border border-transparent hover:border-emerald-200 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className={`icon-wrap w-14 h-14 bg-gradient-to-br ${serviceCategories[hoveredCategoryIndex].gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <service.icon className="icon h-6 w-6 text-white" />
                                  </div>
                                  <div className="menu-title font-semibold text-gray-900 mb-2 text-sm group-hover:text-emerald-700 transition-colors">{service.name}</div>
                                  <span className="description text-gray-600 text-xs leading-relaxed group-hover:text-emerald-600 transition-colors flex-1">{service.description}</span>
                                  <ArrowRight className="h-4 w-4 text-emerald-500 mt-3 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li> 
 
              {/* Industries Dropdown */}
              <li 
                className="industries menu-item menu-item-has-children relative"
                onMouseEnter={() => setActiveDropdown('industries')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className={`nav-link px-6 py-8 text-gray-700 hover:text-emerald-600 transition-colors text-base flex items-center cursor-pointer relative group ${
                  isActiveCategory('/industries') ? 'text-emerald-600' : ''
                }`}>
                  <div className="menu-title">{navItems.industries}</div>
                  <div className="dropdown-menu-opener ml-1">
                    <svg className="w-3 h-3" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {/* Green dot indicator */}
                  <span className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full transition-all duration-300 ${
                    industries.some(industry => isActive(industry.path)) || activeDropdown === 'industries' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}></span>
                </span>
                  
                  {activeDropdown === 'industries' && (
                    <div className="dropdown-menu__wrapper fixed left-0 right-0 top-full mt-0 z-50 px-4">
                      <div className="dropdown-menu w-full max-w-[1100px] mx-auto bg-gradient-to-br from-white/80 via-emerald-50/20 to-teal-50/20 backdrop-blur-3xl rounded-2xl shadow-2xl border border-emerald-100/30 overflow-hidden">
                        <div className="flex flex-col lg:flex-row min-h-[550px]">
                          {/* Left Section - Industries Grid */}
                          <div className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 via-emerald-900/50 to-slate-900 p-6 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-sm"></div>
                            <div className="relative z-10">
                              <h3 className="text-xl font-bold text-white mb-6">Industries We Serve</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {industries.map((industry, index) => (
                                  <Link
                                    key={index}
                                    to={industry.path}
                                    className={`dropdown-item flex items-center space-x-4 p-4 text-white hover:bg-white/10 rounded-xl transition-all duration-300 group border border-transparent hover:border-white/20 ${
                                      hoveredIndustryIndex === index ? 'bg-white/10 border-white/20 transform scale-105' : ''
                                    }`}
                                    onMouseEnter={() => setHoveredIndustryIndex(index)}
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className={`icon-wrap w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 flex-shrink-0`}>
                                      <industry.icon className={`icon h-6 w-6 ${industry.color} group-hover:text-white transition-colors duration-300`} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="menu-title font-semibold text-sm group-hover:text-white transition-colors truncate">
                                        {industry.name}
                                      </div>
                                    </div>
                                    <ChevronRight className="h-4 w-4 text-white/50 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                          
                          {/* Right Section - Featured Industry */}
                          <div className="w-full lg:w-1/2 bg-white/80 backdrop-blur-2xl p-8 backdrop-blur-sm">
                            <div className="industries__holder h-full flex flex-col">
                              <div className="industries__holder-item active flex-1">
                                <div className="flex items-center mb-4">
                                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
  {IndustryIcon && (
    <IndustryIcon className={`h-8 w-8 ${industries[hoveredIndustryIndex].color}`} />
  )}
</div>

                                  <div>
                                    <span className="long-title text-2xl font-bold text-gray-900 block">
                                      {industries[hoveredIndustryIndex].name}
                                    </span>
                                    <span className="text-sm text-emerald-600">Industry Solutions</span>
                                  </div>
                                </div>
                                <span className="description text-gray-600 text-sm mb-6 leading-relaxed block">
                                  {industries[hoveredIndustryIndex].description}
                                </span>
                                <div className="image-wrap aspect-video bg-gradient-to-br from-emerald-100 to-teal-200 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                  <img 
                                    src={industries[hoveredIndustryIndex].image}
                                    alt={industries[hoveredIndustryIndex].name}
                                    className="image w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                                <Link 
                                  to={industries[hoveredIndustryIndex].path}
                                  className="inline-flex items-center mt-4 text-emerald-600 hover:text-emerald-700 font-medium text-sm group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  Explore {industries[hoveredIndustryIndex].name} Solutions
                                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* About us */}
                <li className="about-us menu-item relative">
                  <Link 
                    to="/about"
                    className={`nav-link px-6 py-8 text-gray-700 hover:text-emerald-600 transition-colors text-base flex items-center cursor-pointer relative group ${
                      isActive('/about') ? 'text-emerald-600' : ''
                    }`}
                  >
                    <div className="menu-title">{navItems.aboutUs}</div>
                    {/* Green dot indicator */}
                    <span className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full transition-all duration-300 ${
                      isActive('/about') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                  </Link>
                </li>                 
                
                {/* Blog */}
                <li className="blog menu-item relative">
                  <Link 
                    to="/blog"
                    className={`nav-link px-6 py-8 text-gray-700 hover:text-emerald-600 transition-colors text-base flex items-center cursor-pointer relative group ${
                      isActive('/blog') ? 'text-emerald-600' : ''
                    }`}
                  >
                    <div className="menu-title">{navItems.blog}</div>
                    {/* Green dot indicator */}
                    <span className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full transition-all duration-300 ${
                      isActive('/blog') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                  </Link>
                </li>

                {/* AI solutions advisor */}
               <li className="ai-advisor menu-item relative">
                  <Link 
                    to="/ai-advisor"
                    className={`nav-link px-6 py-8 text-gray-700 hover:text-emerald-600 transition-colors text-base flex items-center cursor-pointer relative group ${
                      isActive('/ai-advisor') ? 'text-emerald-600' : ''
                    }`}
                  >
                    <div className="menu-title">{navItems.aiAdvisor}</div>
                    {/* Green dot indicator */}
                    <span className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-600 rounded-full transition-all duration-300 ${
                      isActive('/ai-advisor') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}></span>
                  </Link>
                </li> 
              </ul>
            </nav>

            {/* Right side elements */}
            <div className="header--new__info flex items-center ml-auto">
              {/* Contact Button - Desktop */}
              <div className="header--new__btn-wrap header--new__btn-wrap--desktop hidden lg:block mr-4">
                
<div className="header--new__btn-wrap header--new__btn-wrap--desktop hidden lg:block mr-4">
  <Link
    to="/contact"
    className={`header--new__btn--mask btn-n btn-n--emerald bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl ${
      isScrolled ? 'px-4 py-2 text-sm' : 'px-6 py-3 text-base'
    }`}
  >
    <span className="btn-n__text">{navItems.contactUs}</span>
  </Link>
</div>

              </div>

              {/* Search */} 
              <div className="header--new__search hidden lg:block">
                <div className="search--new__btn search--new__icon-wrap cursor-pointer p-2 hover:bg-emerald-50 rounded-lg transition-colors" tabIndex={0}>
                  <Search className="search--new__icon h-4 w-4 text-gray-700 hover:text-emerald-600 transition-colors" />
                </div> 
              </div>
            </div>

         {/* Mobile Contact Button */}
         {!isScrolled && (
           <div className="header--new__btn-wrap header--new__btn-wrap--mobile lg:hidden">
             <Link
               to="/contact"
               className="header--new__btn--mask btn-n btn-n--emerald bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm shadow-md"
             >
               <span className="btn-n__text">{navItems.contactUs}</span>
             </Link>
           </div>
         )}


          {/* Mobile menu button */}
          <div className="hide-show-menu hide_show_menu_btn lg:hidden" tabIndex={0} onClick={toggleMobileMenu}>
            <div className="hide-show-menu-icon p-2 rounded-lg hover:bg-emerald-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Detached Popup Style */}
        {isMenuOpen && (
          <div className={`mobile-menu-container lg:hidden fixed z-50 bg-gradient-to-br from-white/100 via-emerald-50/60 to-teal-50/60 backdrop-blur-3xl rounded-2xl shadow-2xl border border-emerald-200/30 max-h-[calc(100vh-120px)] overflow-hidden animate-in slide-in-from-top-2 duration-300 ${
            isScrolled 
              ? 'inset-x-0 top-20 mx-0'  
              : 'inset-x-4 top-24'
          }`}>
            <div className="py-6 px-6 overflow-y-auto overscroll-contain max-h-full backdrop-blur-sm" style={{ WebkitOverflowScrolling: 'touch' }}>
              <nav className="flex flex-col space-y-6"> 
                {/* Services Dropdown - Mobile */}
                <div className="border-b border-emerald-100 pb-6">
                  <button 
                     onClick={() => handleMobileDropdownClick('services')} 
                     className="flex items-center justify-between w-full text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg"
                   > 
                     <span>{navItems.services}</span>
                     <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 transition-all duration-300 ${activeDropdown === 'services' ? 'rotate-180 bg-emerald-200' : ''}`}>
                       <ChevronDown className="h-4 w-4 text-emerald-600" />
                     </div>
                   </button> 
                  
                  {activeDropdown === 'services' && (
                    <div className="mt-4 space-y-1 max-h-64 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-4">
                          <div className={`text-sm font-semibold text-white px-4 py-2 rounded-lg mb-2 bg-gradient-to-r ${category.gradient} shadow-md`}>
                            {category.name}
                          </div>
                          <div className="space-y-1 pl-4">
                            {category.subServices.map((service, serviceIndex) => (
                              <Link
                                key={`${categoryIndex}-${serviceIndex}`}
                                to={service.path}
                                className="flex items-center space-x-3 py-3 px-4 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 group"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className={`w-10 h-10 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                                  <service.icon className="h-5 w-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm truncate">{service.name}</div>
                                  <div className="text-xs text-gray-500 truncate">{service.description.substring(0, 50)}...</div>
                                </div>
                                <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-emerald-500 flex-shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Industries Dropdown - Mobile */}
                <div className="border-b border-emerald-100 pb-6">
                  <button 
                     onClick={() => handleMobileDropdownClick('industries')}
                     className="flex items-center justify-between w-full text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg"
                   > 
                     <span>{navItems.industries}</span>
                     <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-emerald-100 transition-all duration-300 ${activeDropdown === 'industries' ? 'rotate-180 bg-emerald-200' : ''}`}>
                       <ChevronDown className="h-4 w-4 text-emerald-600" />
                     </div>
                   </button>
                  
                  {activeDropdown === 'industries' && (
                    <div className="mt-4 space-y-2 max-h-64 overflow-y-auto overscroll-contain" style={{ WebkitOverflowScrolling: 'touch' }}>
                      {industries.map((industry, index) => (
                        <Link
                          key={index}
                          to={industry.path}
                           className="flex items-center space-x-4 py-4 px-4 text-gray-600 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 rounded-xl transition-all duration-200 group border border-transparent hover:border-emerald-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                           <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-emerald-200 group-hover:to-teal-300 transition-all duration-200 shadow-md">
                             <industry.icon className={`h-6 w-6 ${industry.color} group-hover:scale-110 transition-transform duration-200`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm mb-1">{industry.name}</div>
                            <div className="text-xs text-gray-500 line-clamp-2">{industry.description}</div>
                          </div>
                          <div className="flex flex-col items-center space-y-1 flex-shrink-0">
                             <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-emerald-500" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

        {/* Services */}
                <Link 
                  to="/services"
                  className="flex items-center justify-between text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg hover:bg-emerald-50 rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{navItems.services}</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                </Link>

                {/* About us */}
                <Link 
                  to="/about"
                  className="flex items-center justify-between text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg hover:bg-emerald-50 rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{navItems.aboutUs}</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                </Link>
                
                {/* Blog */}
                <Link 
                  to="/blog" 
                  className="flex items-center justify-between text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg hover:bg-emerald-50 rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{navItems.blog}</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                </Link>
                
                {/* AI solutions advisor */}
                <Link 
                  to="/ai-advisor"
                  className="flex items-center justify-between text-gray-800 hover:text-emerald-600 transition-colors font-semibold py-3 text-lg hover:bg-emerald-50 rounded-lg px-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{navItems.aiAdvisor}</span>
                  <ChevronRight className="h-3 w-3 text-gray-400" />
                </Link>

                {/* Mobile Footer Links */}
                <div className="pt-6 border-t border-emerald-100 flex flex-col gap-4">
                  <Link 
                    to="/contact"
                    className="header--new__btn--mask btn-n btn-n--emerald bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 font-medium text-sm w-full text-center block shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {navItems.contactUs}
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
      

    </header>
  );
};

export default Header;