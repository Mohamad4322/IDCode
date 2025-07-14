import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, CheckCircle, Users, Clock, Target, Zap, Shield, Globe, Building2, Star, Award, TrendingUp, Layers, Database, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
  const features = [
    {
      icon: Code,
      title: 'Tailored Solutions',
      description: 'Custom-built software designed specifically for your business requirements and workflows.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business and adapt to changing needs.',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated developers with deep expertise in modern technologies and best practices.',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Target,
      title: 'Business Focus',
      description: 'Solutions aligned with your business goals and designed to drive measurable results.',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  const technologies = [
    { 
      category: 'Frontend', 
      items: ['React', 'Vue.js', 'Angular', 'TypeScript'],
      icon: Globe,
      gradient: 'from-emerald-500 to-green-400'
    },
    { 
      category: 'Backend', 
      items: ['Node.js', 'Python', 'Java', '.NET'],
      icon: Code,
      gradient: 'from-teal-500 to-emerald-400'
    },
    { 
      category: 'Database', 
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
      icon: Database,
      gradient: 'from-cyan-500 to-teal-400'
    },
    { 
      category: 'Cloud', 
      items: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
      icon: Shield,
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  const process = [
    { 
      step: '01', 
      title: 'Requirements Analysis', 
      description: 'Deep dive into your business needs and technical requirements.',
      icon: Target,
      gradient: 'from-emerald-500 to-green-400'
    },
    { 
      step: '02', 
      title: 'Solution Design', 
      description: 'Create detailed technical specifications and architecture.',
      icon: Layers,
      gradient: 'from-teal-500 to-emerald-400'
    },
    { 
      step: '03', 
      title: 'Development', 
      description: 'Agile development with regular demos and feedback.',
      icon: Code,
      gradient: 'from-cyan-500 to-teal-400'
    },
    { 
      step: '04', 
      title: 'Testing & Deployment', 
      description: 'Comprehensive testing and smooth deployment process.',
      icon: CheckCircle,
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Operational Efficiency',
      description: 'Increased operational efficiency by up to 40% through automation and optimization',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Shield,
      title: 'Error Reduction',
      description: 'Reduced manual processes and human errors with intelligent automation',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: BarChart3,
      title: 'Data Insights',
      description: 'Better data insights and reporting capabilities for informed decision-making',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Improved customer experience and satisfaction through tailored solutions',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Star,
      title: 'Competitive Advantage',
      description: 'Competitive advantage through unique features and capabilities',
      gradient: 'from-purple-500 to-blue-400'
    },
    {
      icon: Award,
      title: 'Long-term ROI',
      description: 'Long-term cost savings and return on investment through efficient solutions',
      gradient: 'from-pink-500 to-purple-400'
    }
  ];

  const stats = [
    { number: '40%', label: 'Efficiency Increase', icon: TrendingUp },
    { number: '60%', label: 'Error Reduction', icon: Shield },
    { number: '3x', label: 'Faster Processing', icon: Zap },
    { number: '95%', label: 'Client Satisfaction', icon: Star }
  ];

  const testimonials = [
    {
      quote: "ID Code delivered a custom software solution that perfectly matched our complex business requirements. The system has transformed our operations and increased efficiency significantly.",
      author: "ROBERT JOHNSON",
      company: "MANUFACTURING PLUS"
    },
    {
      quote: "The custom ERP system they built for us has streamlined our entire workflow. Their attention to detail and understanding of our business needs was exceptional.",
      author: "SARAH WILLIAMS",
      company: "LOGISTICS PRO"
    },
    {
      quote: "Working with ID Code on our custom CRM was a game-changer. The solution they delivered exceeded our expectations and has driven measurable business growth.",
      author: "MICHAEL DAVIS",
      company: "SALES DYNAMICS"
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
                <Code className="h-4 w-4 mr-2" />
                Custom Software Development
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Software That Fits</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Your Business Perfectly</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Transform your business with tailor-made software solutions designed to meet your specific requirements and drive operational excellence.
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
                  Start Your Project
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
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Custom Software Development" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Applications Section */}
      <section id="enterprise-applications" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Applications</h2>
            <p className="text-xl text-gray-600">Comprehensive enterprise software systems that streamline operations and boost productivity</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ERP & CRM Consulting</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our enterprise application development focuses on creating robust ERP and CRM systems that integrate seamlessly with your existing business processes and drive operational efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">ERP Consulting</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Resource planning optimization</li>
                    <li>• Financial management integration</li>
                    <li>• Supply chain automation</li>
                    <li>• Real-time reporting dashboards</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">CRM Consulting</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Customer relationship management</li>
                    <li>• Sales pipeline automation</li>
                    <li>• Marketing campaign integration</li>
                    <li>• Customer analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Enterprise Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Streamlined business processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Improved data visibility and reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Enhanced customer relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Scalable enterprise architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Integration with existing systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Custom Software Development" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Custom Software?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Off-the-shelf solutions can't address your unique business challenges. Our custom development ensures perfect alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Simple Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600">Modern, proven technologies for robust solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-600 py-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">A proven methodology for successful project delivery</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
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
              Key Benefits
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Custom Software Development Benefits
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Transform your business operations with tailored software solutions that deliver measurable results.
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
              Custom Software Results
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
              Our custom software solutions deliver measurable improvements and business transformation.
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
              See how our custom software solutions have transformed businesses and delivered exceptional results.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we create custom software solutions that perfectly align with your business requirements.
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
              <Code className="h-4 w-4 mr-2" />
              Ready to Build Custom Software?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Transform Your Business Today
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to create software that perfectly fits your business? Let's discuss your requirements 
              and build a solution that drives real results.
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
                Start Your Project →
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

export default CustomSoftware;
