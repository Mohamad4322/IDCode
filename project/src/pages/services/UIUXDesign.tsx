import React from 'react';
import { ArrowRight, Palette, Users, Eye, Smartphone, CheckCircle, Monitor, Figma, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const UIUXDesign = () => {
  const designServices = [
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Modern, responsive web designs that engage users and drive conversions.',
      deliverables: ['Wireframes', 'Visual Designs', 'Responsive Layouts', 'Style Guides']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Intuitive mobile app interfaces optimized for touch interactions and usability.',
      deliverables: ['App Wireframes', 'UI Designs', 'Interaction Design', 'App Icons']
    },
    {
      icon: Figma,
      title: 'Design Systems',
      description: 'Comprehensive design systems that ensure consistency across all touchpoints.',
      deliverables: ['Component Library', 'Design Tokens', 'Usage Guidelines', 'Brand Standards']
    }
  ];

  const designPrinciples = [
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Design solutions that prioritize user needs and create exceptional experiences.'
    },
    {
      icon: Eye,
      title: 'Visual Excellence',
      description: 'Create stunning visual designs that capture attention and communicate effectively.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensure optimal user experience across all devices and screen sizes.'
    },
    {
      icon: Zap,
      title: 'Interactive Prototypes',
      description: 'Build interactive prototypes to validate design concepts before development.'
    }
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'Adobe Creative Suite',
    'InVision', 'Principle', 'Framer', 'Marvel',
    'Miro', 'Hotjar', 'UsabilityHub', 'Maze'
  ];

  const process = [
    { step: 'Research & Discovery', description: 'Understand user needs, business goals, and market requirements through research.' },
    { step: 'Wireframing', description: 'Create low-fidelity wireframes to establish layout and information architecture.' },
    { step: 'Visual Design', description: 'Develop high-fidelity designs with colors, typography, and visual elements.' },
    { step: 'Prototyping', description: 'Build interactive prototypes to test and validate design concepts.' },
    { step: 'Testing & Iteration', description: 'Conduct user testing and iterate based on feedback and insights.' }
  ];

  const benefits = [
    'Improved user satisfaction and engagement',
    'Higher conversion rates and business metrics',
    'Reduced development costs through early validation',
    'Enhanced brand perception and credibility',
    'Better accessibility and usability',
    'Consistent user experience across platforms'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Minimal Layout */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-pink-50 rounded-full text-pink-700 text-sm font-medium mb-6">
            <Palette className="h-4 w-4 mr-2" />
            UI/UX Design
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Design Experiences That Users Love
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Create exceptional user experiences with our comprehensive UI/UX design services that combine aesthetics with functionality to drive engagement and conversions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start Design Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/"
              className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="UI/UX Design" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Service Design Section */}
      <section id="product-service-design" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product and Service Design</h2>
            <p className="text-xl text-gray-600">Validate niche ideas and create innovative products and services that scale as your business does</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Design-Driven Innovation</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our product and service design approach combines user research, market analysis, and creative thinking to develop innovative solutions that meet user needs and business objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">User-centered design methodology</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Market opportunity identification</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Concept validation and testing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Scalable product architecture</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Design Process</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold text-pink-600">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Discover</h5>
                    <p className="text-gray-600 text-sm">Research users, market, and business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Define</h5>
                    <p className="text-gray-600 text-sm">Establish product vision and requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold text-purple-600">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Design</h5>
                    <p className="text-gray-600 text-sm">Create concepts and prototypes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-semibold text-green-600">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Validate</h5>
                    <p className="text-gray-600 text-sm">Test with users and refine based on feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section id="customer-experience" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Experience Design</h2>
            <p className="text-xl text-gray-600">Refine every customer interaction to enhance satisfaction and drive sustainable revenue growth</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Journey Mapping</h3>
              <p className="text-gray-600">Comprehensive mapping of customer journeys to identify pain points and opportunities for improvement.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Experience Optimization</h3>
              <p className="text-gray-600">Refinement of customer touchpoints to create seamless, delightful experiences across all channels.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Feedback Integration</h3>
              <p className="text-gray-600">Systems for collecting, analyzing, and implementing customer feedback to continuously improve experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles Section - Four Column */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Philosophy</h2>
            <p className="text-lg text-gray-600">Great design balances beautiful aesthetics with intuitive functionality</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designPrinciples.map((principle, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 border border-gray-200">
                  <principle.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Three Column */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Services</h2>
            <p className="text-xl text-gray-600">Comprehensive design services for all your digital needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 border border-gray-200">
                  <service.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="UI Design Process" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Timeline */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-lg text-gray-600">User-centered design process for optimal results</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section - Tag Cloud */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Design Tools & Technologies</h2>
          <p className="text-lg text-gray-600 mb-12">Industry-leading design tools for exceptional results</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Great design delivers measurable business results and improved user satisfaction.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Create Amazing Experiences?</h3>
              <p className="text-gray-600 mb-6">
                Let's design user experiences that delight your customers and drive business success.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start Design Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;