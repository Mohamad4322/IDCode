import React from 'react';
import { ArrowRight, Cloud, CheckCircle, Zap, Shield, Globe, Database, Settings, Server, Lock, BarChart3, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CloudSolutions = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Reduce IT infrastructure costs by up to 30% while improving performance and scalability for your business operations.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Zap,
      title: 'Enhanced Performance',
      description: 'Improve scalability and flexibility with cloud-native solutions that adapt to your business demands in real-time.',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Enhanced security and compliance with industry standards, protecting your data and applications in the cloud.',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Faster deployment and time-to-market with global infrastructure that ensures 99.9% uptime and reliability.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Settings,
      title: 'Automated Management',
      description: '24/7 monitoring and support with automated scaling and management to optimize your cloud infrastructure.',
      gradient: 'from-indigo-500 to-blue-400'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Advanced analytics and data processing capabilities that unlock insights and drive business intelligence.',
      gradient: 'from-purple-500 to-indigo-400'
    }
  ];

  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with minimal downtime and maximum efficiency.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization services for peak performance.',
      features: ['Infrastructure as Code', 'Auto Scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: Lock,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards to protect your assets.',
      features: ['Identity Management', 'Data Encryption', 'Compliance Monitoring', 'Security Audits']
    }
  ];

  const cloudProviders = [
    { 
      name: 'Amazon Web Services', 
      services: ['EC2', 'S3', 'RDS', 'Lambda'],
      description: 'Comprehensive AWS solutions for scalable cloud infrastructure'
    },
    { 
      name: 'Microsoft Azure', 
      services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions'],
      description: 'Enterprise-grade Azure services for hybrid cloud environments'
    },
    { 
      name: 'Google Cloud Platform', 
      services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions'],
      description: 'Advanced GCP solutions with AI and machine learning capabilities'
    }
  ];

  const migrationProcess = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive evaluation of your current infrastructure and development of a tailored migration strategy.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture with security, scalability, and cost-efficiency in mind.'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute migration with minimal business disruption using proven methodologies and best practices.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous optimization of performance and costs with ongoing monitoring and support.'
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
                <Cloud className="h-4 w-4 mr-2" />
                Cloud Solutions & Migration
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Scale Your Business with</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Cloud Technology</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Transform your business with scalable, secure, and cost-effective cloud solutions. 
                We help you migrate, optimize, and manage your cloud infrastructure for maximum efficiency.
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
                  Start Migration
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
                  src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cloud Computing" 
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
              What you get with ID Code's cloud solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                ID Code's cloud solutions empower businesses to achieve <strong>unprecedented scalability, cost efficiency, and operational excellence</strong>. This <strong>transformation to cloud-native infrastructure</strong> accelerates digital innovation and improves business agility along with <strong>enhanced security</strong> and <strong>streamlined operations</strong>.
              </p>
              
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                Our <strong>comprehensive cloud migration strategies and modern infrastructure management</strong> ensure optimal performance and cost optimization, while <strong>enterprise-grade security and compliance</strong> help protect your data and applications. With 24/7 monitoring and support, our solutions allow you to focus on delivering <strong>exceptional business value</strong>.
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

      {/* Cloud Services Section */}
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
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              We provide end-to-end cloud solutions that transform your infrastructure and accelerate business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
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
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                  {service.title}
                </h3>
                
                <p className="text-base mb-6 leading-relaxed" style={{ color: '#94D3A2' }}>
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
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

      {/* Migration Process Section */}
      <section className="py-24" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Our Cloud Migration Process
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              A proven methodology that ensures smooth cloud migration with minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {migrationProcess.map((step, index) => (
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

      {/* Cloud Providers Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Multi-Cloud Expertise
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              We work with leading cloud providers to deliver the best solutions for your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {provider.name}
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                  {provider.description}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {provider.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm py-2 px-3 rounded-lg" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                      {service}
                    </div>
                  ))}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Cloud Migration Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch how we seamlessly migrate businesses to the cloud with minimal disruption and maximum efficiency.
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
              <Cloud className="h-4 w-4 mr-2" />
              Ready to Migrate?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Ready to Move to the Cloud?
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Let's discuss your cloud migration strategy and create a solution that drives your business forward 
              with scalable, secure, and cost-effective cloud infrastructure.
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
                Start Your Migration →
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
                Get Cloud Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;
