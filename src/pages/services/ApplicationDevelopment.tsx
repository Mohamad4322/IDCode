import React from 'react';
import { ArrowRight, Code, CheckCircle, Layers, Zap, Users, Target, Smartphone, Globe, Database, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ApplicationDevelopment = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Custom-built solutions',
      description: 'Tailored applications designed specifically for your business requirements and workflows, ensuring perfect alignment with your operational needs.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Layers,
      title: 'Scalable architecture',
      description: 'Future-proof applications built with scalable architecture that grows with your business and adapts to changing market demands.',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Industry expertise',
      description: 'Deep understanding of various industries allows us to deliver solutions that address sector-specific challenges and opportunities.',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Lightbulb,
      title: 'Modern technologies',
      description: 'Leverage cutting-edge technologies and frameworks to build high-performance applications with exceptional user experiences.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Agile development',
      description: 'Iterative development approach with regular feedback loops ensures your application meets expectations and delivers value quickly.',
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      icon: Shield,
      title: 'Ongoing support',
      description: 'Comprehensive post-launch support and maintenance services to ensure your application continues to perform optimally.',
      gradient: 'from-purple-500 to-indigo-400'
    }
  ];

  const solutions = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with the latest technologies to deliver exceptional user experiences across all devices and platforms.',
      features: ['React & Next.js', 'Progressive Web Apps', 'Real-time Features', 'API Integration']
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences and leverage device-specific capabilities for optimal performance.',
      features: ['iOS & Android', 'React Native', 'Flutter Development', 'App Store Optimization']
    },
    {
      icon: Database,
      title: 'Enterprise Applications',
      description: 'Robust enterprise-grade applications designed to handle complex business processes and large-scale operations with security and reliability.',
      features: ['Microservices Architecture', 'Cloud Integration', 'Security Compliance', 'Performance Optimization']
    }
  ];

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'React Native', category: 'Mobile' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, define project scope, and create a comprehensive development roadmap.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team designs the user experience and technical architecture for optimal performance and scalability.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing ensures high-quality code and rapid iteration cycles.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment to production with ongoing maintenance and support for optimal performance.'
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
                Application Development
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Bring Your Software</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Vision to Life</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Transform your ideas into powerful, scalable applications that deliver exceptional user experiences 
                and drive business growth with our custom development solutions.
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
                  to="/ai-advisor"
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
                  Get Assessment
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
                  alt="Application Development" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              What you get with ID Code's application development
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                ID Code's application development services empower businesses to deliver <strong>exceptional user experiences, streamlined operations, and competitive advantages</strong>. This <strong>transformation from concept to fully functional applications</strong> accelerates business growth and improves operational efficiency along with <strong>enhanced customer engagement</strong> and <strong>streamlined business processes</strong>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                Our <strong>advanced development methodologies and modern technology stack</strong> ensure optimal application performance and user satisfaction, while <strong>agile development practices and continuous integration</strong> help deliver high-quality applications on time and within budget. With robust security measures and scalable architecture, our solutions allow you to focus on delivering <strong>exceptional business value</strong>.
              </p>
            </div>
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

      {/* Solutions Section */}
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
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Application Development Solutions
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              We help businesses and organizations build powerful applications that drive growth and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mb-6">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                  {solution.title}
                </h3>
                
                <p className="text-base mb-6 leading-relaxed" style={{ color: '#94D3A2' }}>
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ backgroundColor: '#10b981' }}></div>
                      <span className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Our Development Process
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Technologies We Use
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Cutting-edge technologies and frameworks for modern application development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className="font-semibold mb-2" style={{ color: '#01051B' }}>{tech.name}</div>
                <div className="text-sm" style={{ color: '#10b981' }}>{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch how we transform ideas into powerful applications through our proven development methodology.
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
              Ready to Start?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Let's Build Your Application Together
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to transform your ideas into powerful applications? Let's discuss your project and 
              create a solution that drives your business forward.
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
                to="/ai-advisor"
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
                Take Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDevelopment;
