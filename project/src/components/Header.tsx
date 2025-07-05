import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { TrendingUp, Heart, Zap, Building, Shield, Hotel, Truck, ShoppingBag, Car, Film, Wheat, Code, MessageSquare, Database, BarChart3, Settings, Cpu, Monitor, Smartphone, Globe, Layers, GitBranch, TestTube, Palette, Brain, Recycle, RotateCcw, Target, Users, Headphones, TrendingDown, Network, Cuboid as Cube, Lock, Leaf, Wifi, Eye } from 'lucide-react';

const Header = () => { 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(0);
  const [hoveredIndustryIndex, setHoveredIndustryIndex] = useState(0);
  
  // Mock useLocation for demo
  const location = { pathname: '/' };
 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isActiveCategory = (basePath) => location.pathname.startsWith(basePath);

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
      subServices: [
        { name: 'Application development', icon: Code, path: '/application-development', description: 'Bring your software vision to life with a tailored solution and deliver an industry-leading user experience.' },
        { name: 'PoC development', icon: TestTube, path: '/poc-development', description: 'Safely explore business-boosting concepts with robust testing and expert road mapping.' },
        { name: 'Product-oriented delivery', icon: Target, path: '/product-development#product-oriented-delivery', description: 'Ensure timely and cost-effective product delivery while prioritizing your business objectives.' },
        { name: 'Enterprise applications', icon: Layers, path: '/custom-software-development#enterprise-applications', description: 'ERP consulting\nCRM consulting' },
        { name: 'Legacy software modernization', icon: RotateCcw, path: '/digital-transformation#legacy-modernization', description: 'Transform your core legacy systems to elevate performance, agility, scalability, and UX.' },
        { name: 'Cloud computing', icon: Globe, path: '/cloud-solutions', description: 'Cloud migration' }
      ]
    },
    {
      name: 'Advisory',
      description: 'Strategic guidance for top-notch products and services.',
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
      subServices: [
        { name: 'AI solutions advisor', icon: Brain, path: '/ai-advisor', description: 'Start the assessment →' },
        { name: 'Data science', icon: Database, path: '/data-analytics', description: 'Boost your business performance and achieve optimization through tailored data-driven solutions.' },
        { name: 'Data engineering', icon: Settings, path: '/data-analytics#data-engineering', description: 'Data strategy\nData platforms\nBusiness intelligence' },
        { name: 'MLOps', icon: Cpu, path: '/data-analytics#mlops', description: 'Achieve seamless integration and maximum ROI for your machine learning models.' },
        { name: 'Artificial intelligence', icon: Brain, path: '/ai-advisor#artificial-intelligence', description: 'Generative AI\nMachine learning\nConversational AI\nAgentic AI' },
        { name: 'Intelligent automation', icon: Settings, path: '/digital-transformation#intelligent-automation', description: 'Intelligent document processing' },
        { name: 'LLMOps', icon: MessageSquare, path: '/ai-advisor#llmops', description: 'Streamline deployment, optimize performance, and maximize ROI for your large language models.' }
      ]
    },
    {
      name: 'Optimisation',
      description: 'Expert help for flawless performance of your products and services.',
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
      image: 'https://images.pexels.com/photos/6347729/pexels-photo-6347729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Healthcare', 
      path: '/healthcare',
      icon: Heart,
      description: 'Leverage new technologies to provide outstanding patient care focused on improving clinical results.',
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Energy', 
      path: '/energy',
      icon: Zap,
      description: 'Elevate your power system\'s productivity, safety and sustainability with energy management software.',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Government', 
      path: '/government',
      icon: Building,
      description: 'Digitise your public services to create a transparent, efficient, and data-centric government agency.',
      image: 'https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Insurance', 
      path: '/insurance',
      icon: Shield,
      description: 'Adopt data-driven insurance software solutions boosting efficiency, profitability, and security in your sector.',
      image: 'https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Hospitality', 
      path: '/hospitality',
      icon: Hotel,
      description: 'Implement tailored hospitality solutions designed to maximize revenue and guest satisfaction.',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Logistics', 
      path: '/logistics',
      icon: Truck,
      description: 'Streamline your supply chain, fleets, and warehousing for industry-leading logistics services.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Retail', 
      path: '/retail-ecommerce',
      icon: ShoppingBag,
      description: 'Transform customer journeys and engage shoppers in new ways, increasing sales and enhancing profitability.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Automotive', 
      path: '/automotive',
      icon: Car,
      description: 'Introduce intelligent features and process optimizations to deliver a new level of driver experience.',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Media & Entertainment', 
      path: '/media-entertainment',
      icon: Film,
      description: 'Reach wider audiences with unparalleled digital experiences crafted for maximum engagement.',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    { 
      name: 'Agriculture', 
      path: '/agriculture',
      icon: Wheat,
      description: 'Adopt data-driven innovations to balance supply and optimise production under increasing pressures.',
      image: 'https://images.pexels.com/photos/2389022/pexels-photo-2389022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header 
      className={`header--new fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-n max-w-screen-xl mx-auto">
        <div className="header--new__row flex items-center h-20 px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="header--new__logo flex items-center group mr-8" aria-label="IDCode Logo">
            <span className="header--new__logo-img-wrap">
              <img 
                src= "/logo.png" 
                alt="IDCode" 
                className="header--new__logo-img w-[120px] h-[40px] object-contain"
              />
            </span>
          </Link>

          {/* Desktop Navigation - Moved next to logo */}
          <nav className="header__menu--newWrap hidden lg:block flex-1"> 
            <ul className="header__menu--new flex items-center space-x-0">
                {/* Services Dropdown */}
                <li 
                  className="services menu-item menu-item-has-children relative"
                  onMouseEnter={() => setActiveDropdown('services')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className={`nav-link px-6 py-8 text-gray-700 hover:text-blue-600 transition-colors text-base flex items-center cursor-pointer ${
                    isActiveCategory('/') ? 'text-blue-600' : ''
                  }`}>
                    <div className="menu-title">Services</div>
                    <div className="dropdown-menu-opener ml-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </span>
                  
                  {activeDropdown === 'services' && (
                    <div className="dropdown-menu__wrapper absolute top-full left-0 mt-0 z-50">
                      <div className="dropdown-menu w-[1000px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden" style={{ left: '-400px' }}>
                        <div className="flex">
                          {/* Left Section - Categories */}
                          <div className="w-1/3 bg-slate-800 p-0">
                            {serviceCategories.map((category, index) => (
                              <div
                                key={index}
                                className={`menu-title block-group cursor-pointer p-6 transition-colors ${
                                  hoveredCategoryIndex === index ? 'bg-slate-700' : 'hover:bg-slate-700/50'
                                }`}
                                onMouseEnter={() => setHoveredCategoryIndex(index)}
                              >
                                <div className="menu-title text-white font-semibold text-lg mb-2">{category.name}</div>
                                <span className={`description text-sm leading-relaxed ${hoveredCategoryIndex === index ? 'text-white' : 'text-gray-300'}`}>
                                  {category.description}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Right Section - Services */}
                          <div className="w-2/3 bg-white p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">
                              Comprehensive software development services
                            </h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                              Expert software services tailored to meet your unique business needs and drive digital transformation.
                            </p>
                            
                            <div className="grid grid-cols-3 gap-4">
                              {serviceCategories[hoveredCategoryIndex].subServices.map((service, index) => (
                                <Link
                                  key={index}
                                  to={service.path}
                                  className="dropdown-item flex flex-col p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="icon-wrap w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                                    <service.icon className="icon h-6 w-6 text-blue-600" />
                                  </div>
                                  <div className="menu-title font-medium text-gray-900 mb-2 text-sm group-hover:text-blue-600">{service.name}</div>
                                  <span className="description text-gray-600 text-xs leading-relaxed group-hover:text-blue-600">{service.description}</span>
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
                  <span className={`nav-link px-6 py-8 text-gray-700 hover:text-blue-600 transition-colors text-base flex items-center cursor-pointer ${
                    isActiveCategory('/') ? 'text-blue-600' : ''
                  }`}>
                    <div className="menu-title">Industries</div>
                    <div className="dropdown-menu-opener ml-1">
                      <svg className="w-3 h-3" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </span>
                  
                  {activeDropdown === 'industries' && (
                    <div className="dropdown-menu__wrapper absolute top-full left-0 mt-0 z-50">
                      <div className="dropdown-menu w-[1000px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden" style={{ left: '-400px' }}>
                        <div className="flex">
                          {/* Left Section - Industries Grid */}
                          <div className="w-1/2 bg-slate-800 p-6">
                            <div className="grid grid-cols-2 gap-2">
                              {industries.map((industry, index) => (
                                <Link
                                  key={index}
                                  to={industry.path}
                                  className="dropdown-item flex items-center space-x-3 px-3 py-3 text-white hover:bg-slate-700 rounded-lg transition-colors group"
                                  onMouseEnter={() => setHoveredIndustryIndex(index)}
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="icon-wrap w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center group-hover:bg-slate-600">
                                    <industry.icon className="icon h-4 w-4 text-gray-300 group-hover:text-white" />
                                  </div>
                                  <div className="menu-title font-medium text-sm group-hover:text-white">
                                    {industry.name}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          
                          {/* Right Section - Featured Industry */}
                          <div className="w-1/2 bg-white p-6">
                            <div className="industries__holder">
                              <div className="industries__holder-item active">
                                <span className="long-title text-xl font-semibold mb-2 text-gray-900 block">
                                  {industries[hoveredIndustryIndex].name}
                                </span>
                                <span className="description text-gray-600 text-sm mb-4 leading-relaxed block">
                                  {industries[hoveredIndustryIndex].description}
                                </span>
                                <div className="image-wrap aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                  <img 
                                    src={industries[hoveredIndustryIndex].image}
                                    alt={industries[hoveredIndustryIndex].name}
                                    className="image w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>

                {/* About us */}
                <li className="about-us menu-item">
                  <Link 
                    to="/about" 
                    className={`nav-link px-6 py-8 text-gray-700 hover:text-blue-600 transition-colors text-base ${
                      isActive('/about') ? 'text-blue-600' : ''
                    }`}
                  >
                    <div className="menu-title">About us</div>
                  </Link>
                </li>

                {/* AI solutions advisor */}
                <li className="menu-item ">
                  <Link 
                    to="/ai-advisor" 
                    className={`nav-link px-6 py-8 text-gray-700 hover:text-blue-600 transition-colors text-base ${
                      isActive('/ai-advisor') ? 'text-blue-600' : ''
                    }`}
                  >
                    <div className="menu-title ml-8">AI solutions advisor</div>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Right side elements */}
            <div className="header--new__info flex items-center ml-auto">
              {/* Language Selector */}
              <div className="header--new__lang lang--new hidden lg:block mr-6">
                <div className="lang--new__item selected">
                  <span className="lang--new__link text-gray-700 font-normal text-sm cursor-pointer">EN</span>
                </div>
              </div>

              {/* Contact Button - Desktop */}
              <div className="header--new__btn-wrap header--new__btn-wrap--desktop hidden lg:block mr-4">
                <Link to="/contact" className="header--new__btn--mask btn-n btn-n--black bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm">
                  <span className="btn-n__text">Contact us</span>
                </Link>
              </div>

              {/* Search */}
              <div className="header--new__search hidden lg:block">
                <div className="search--new__btn search--new__icon-wrap cursor-pointer p-2" tabIndex={0}>
                  <Search className="search--new__icon h-4 w-4 text-gray-700" />
                </div>
              </div>
            </div>

         {/* Mobile Contact Button */}
         <div className="header--new__btn-wrap header--new__btn-wrap--mobile lg:hidden mr-3">
           <Link
             to="/contact"
             className="header--new__btn--mask btn-n btn-n--black bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm whitespace-nowrap"
           >
             <span className="btn-n__text">Contact us</span>
           </Link>
         </div>

          {/* Mobile menu button */}
          <div className="hide-show-menu hide_show_menu_btn lg:hidden" tabIndex={0} onClick={toggleMobileMenu}>
            <div className="hide-show-menu-icon p-2 rounded-lg hover:bg-gray-100 transition-colors">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu-container lg:hidden border-t border-gray-100 py-4 px-6">
            <nav className="flex flex-col space-y-4">
              {/* Services Dropdown - Mobile */}
              <div>
                <button 
                  onClick={() => handleMobileDropdownClick('services')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  <span>Services</span>
                  <span className={`w-4 h-4 flex items-center justify-center transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}>
                    <span className="block w-2 h-2 border-r-2 border-b-2 border-current transform rotate-45 mt-[-4px]"></span>
                  </span>
                </button>
                
                {activeDropdown === 'services' && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    {serviceCategories.flatMap(category => 
                      category.subServices.map((service, index) => (
                        <Link
                          key={`${category.name}-${index}`}
                          to={service.path}
                          className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* Industries Dropdown - Mobile */}
              <div>
               <button 
                  onClick={() => handleMobileDropdownClick('industries')}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  <span>Industries</span>
                  <span className={`w-4 h-4 flex items-center justify-center transition-transform ${activeDropdown === 'industries' ? 'rotate-180' : ''}`}>
                    <span className="block w-2 h-2 border-r-2 border-b-2 border-current transform rotate-45 mt-[-4px]"></span>
                  </span>
                </button>
                
                {activeDropdown === 'industries' && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    {industries.map((industry, index) => (
                      <Link
                        key={index}
                        to={industry.path}
                        className="flex items-center space-x-2 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <industry.icon className="h-4 w-4" />
                        <span>{industry.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              
              <Link 
                to="/ai-advisor" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                AI solutions advisor
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;