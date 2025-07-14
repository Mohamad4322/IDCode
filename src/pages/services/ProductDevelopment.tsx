import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Target, Rocket, Users, CheckCircle, Layers, Zap, Building2, Star, Award, TrendingUp, Clock, Shield, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDevelopment = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Ideation & Strategy',
      description: 'Transform your ideas into viable product concepts with market research and strategic planning.',
      features: ['Market Research', 'Competitive Analysis', 'Product Roadmap', 'Technical Feasibility'],
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Target,
      title: 'MVP Development',
      description: 'Build minimum viable products to validate your concept and gather user feedback quickly.',
      features: ['Core Features', 'User Testing', 'Feedback Integration', 'Performance Metrics'],
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Rocket,
      title: 'Full Product Launch',
      description: 'Complete product development from concept to market launch with ongoing support.',
      features: ['Full Feature Set', 'Launch Strategy', 'Marketing Support', 'Post-Launch Analytics'],
      gradient: 'from-cyan-500 to-teal-400'
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'Product Strategy & Planning',
      description: 'Strategic roadmap development and market positioning'
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'User-centered design and interface development'
    },
    {
      icon: Layers,
      title: 'Technical Architecture',
      description: 'Scalable and robust system architecture design'
    },
    {
      icon: Target,
      title: 'MVP Development',
      description: 'Rapid prototyping and minimum viable product creation'
    },
    {
      icon: Rocket,
      title: 'Full-Scale Development',
      description: 'Complete product development and feature implementation'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality validation'
    }
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin',
    'React', 'Vue.js', 'Angular', 'Next.js',
    'Node.js', 'Python', 'Java', '.NET',
    'AWS', 'Azure', 'Google Cloud', 'Firebase'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Time-to-Market',
      description: 'MVP approach accelerates product launch and market validation',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduced development risks through iterative validation and testing',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Users,
      title: 'User-Centered Design',
      description: 'Focus on user experience for better adoption and satisfaction',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Architecture',
      description: 'Built for growth with scalable and maintainable architecture',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive testing ensures reliable and bug-free products',
      gradient: 'from-purple-500 to-blue-400'
    },
    {
      icon: Award,
      title: 'Ongoing Support',
      description: 'Post-launch support and maintenance for continued success',
      gradient: 'from-pink-500 to-purple-400'
    }
  ];

  const stats = [
    { number: '95%', label: 'On-Time Delivery', icon: Clock },
    { number: '98%', label: 'Quality Score', icon: Star },
    { number: '30%', label: 'Faster Development', icon: Rocket },
    { number: '100%', label: 'Client Satisfaction', icon: Award }
  ];

  const testimonials = [
    {
      quote: "ID Code transformed our product idea into a market-ready solution. Their strategic approach and technical expertise delivered exceptional results that exceeded our expectations.",
      author: "JENNIFER ADAMS",
      company: "PRODUCTTECH"
    },
    {
      quote: "The team's ability to understand our vision and translate it into a successful product was remarkable. Their MVP approach saved us time and resources while ensuring market fit.",
      author: "ROBERT WILSON",
      company: "INNOVATE SOLUTIONS"
    },
    {
      quote: "From concept to launch, ID Code provided comprehensive support. Their product development methodology and attention to detail resulted in a product our users love.",
      author: "LISA MARTINEZ",
      company: "STARTUP VENTURES"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Rocket className="h-4 w-4 mr-2" />
                Product Development
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">From Concept to</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Market Launch</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                We guide you through every stage of product development with expertise and innovation, from initial concept to successful market launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
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
                  Start Your Product
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
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
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  border: '1px solid rgba(227, 255, 239, 0.2)'
                }}>
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Product Development" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product-Oriented Delivery Section */}
      <section id="product-oriented-delivery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product-Oriented Delivery</h2>
            <p className="text-xl text-gray-600">Ensure timely and cost-effective product delivery while prioritizing your business objectives</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Excellence</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our product-oriented delivery approach ensures that every milestone aligns with your business goals while maintaining the highest quality standards and meeting critical deadlines.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Agile delivery methodology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Regular milestone reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Risk mitigation strategies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Quality assurance integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Delivery Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Quality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-gray-600 text-sm">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section id="market-research" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Research</h2>
            <p className="text-xl text-gray-600">Evaluate your business landscape to capitalize on promising niches and get ahead of the competition</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-4">Comprehensive analysis of market trends, opportunities, and competitive landscape.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Industry trend analysis</li>
                <li>• Competitive benchmarking</li>
                <li>• Market size estimation</li>
                <li>• Growth opportunity identification</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Research</h3>
              <p className="text-gray-600 mb-4">Deep understanding of your target audience and their needs, behaviors, and preferences.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• User persona development</li>
                <li>• Customer journey mapping</li>
                <li>• Survey and interview insights</li>
                <li>• Behavioral pattern analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Insights</h3>
              <p className="text-gray-600 mb-4">Actionable insights and recommendations to guide your product strategy and positioning.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strategic recommendations</li>
                <li>• Market positioning advice</li>
                <li>• Risk assessment</li>
                <li>• Go-to-market strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Product Development Team" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Product Development Phases
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Structured approach to bring your product to life with proven methodologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <phase.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {phase.title}
                </h3>
                
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {phase.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: '#01051B' }}>Key Features:</h4>
                  <div className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                        <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#10b981' }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Background Image */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Code className="h-4 w-4 mr-2" />
                Our Services
              </div>

              <h2 className="text-4xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Comprehensive Product Development Services
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                From strategy to launch, we provide end-to-end product development services.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: '#E3FFEF' }}>{service.title}</h4>
                      <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ 
                backgroundColor: 'rgba(227, 255, 239, 0.05)',
                border: '1px solid rgba(227, 255, 239, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
                Technologies We Use
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 rounded-lg text-center text-sm transition-all hover:scale-105"
                    style={{ 
                      backgroundColor: 'rgba(227, 255, 239, 0.1)',
                      color: '#E3FFEF',
                      border: '1px solid rgba(227, 255, 239, 0.2)'
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Award className="h-4 w-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Product Development Benefits
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Strategic thinking combined with technical expertise to build products users love.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {benefit.title}
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Product Development Results
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
              Our product development delivers measurable results and successful market launches.
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
                  <span className="text-4xl font-bold" style={{ color: '#E3FFEF' }}>{stat.number}</span>
                </div>
                <h3 className="text-base font-medium" style={{ color: '#94D3A2' }}>
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
              See how our product development services have helped businesses launch successful products.
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
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <blockquote className="text-lg mb-6 italic" style={{ color: '#01051B' }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm font-medium" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {testimonial.author} • {testimonial.company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we transform product ideas into successful market launches through our proven development methodology.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <video 
              src="/cta-video-big.webm" 
              className="w-full max-h-[400px] object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            ></video>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative overflow-hidden py-24"
        style={{
          background: 'linear-gradient(to bottom, #0a0e0a 0%, #0a0e0a 20%, #0f1412 40%, #141917 60%, #1a1f1d 80%, #202623 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/cta-video-big.webm" type="video/webm" />
          </video>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Rocket className="h-4 w-4 mr-2" />
              Ready to Build Your Product?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Turn Your Idea Into Reality
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to launch your product? Let's discuss your vision and explore 
              how our comprehensive development services can bring it to market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
                Start Your Product →
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300"
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
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDevelopment;
