import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Monitor, Database, Building2, Star, Award, TrendingUp, Clock, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  const securityServices = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture and identification of vulnerabilities.',
      features: ['Vulnerability Scanning', 'Risk Assessment', 'Compliance Audit', 'Security Gap Analysis'],
      gradient: 'from-red-500 to-pink-400'
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to identify and exploit security weaknesses before malicious actors do.',
      features: ['Network Testing', 'Web Application Testing', 'Social Engineering', 'Wireless Security'],
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: Monitor,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response to protect against cyber threats.',
      features: ['SIEM Implementation', 'Threat Detection', 'Incident Response', 'Security Analytics'],
      gradient: 'from-purple-500 to-red-400'
    }
  ];

  const threats = [
    { name: 'Malware & Ransomware', impact: 'High', frequency: 'Daily', color: 'red' },
    { name: 'Phishing Attacks', impact: 'Medium', frequency: 'Hourly', color: 'orange' },
    { name: 'Data Breaches', impact: 'Critical', frequency: 'Weekly', color: 'red' },
    { name: 'Insider Threats', impact: 'High', frequency: 'Monthly', color: 'orange' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Proactive Protection',
      description: 'Proactive threat identification and mitigation before they impact your business',
      gradient: 'from-red-500 to-pink-400'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Assurance',
      description: 'Compliance with industry security standards and regulatory requirements',
      gradient: 'from-orange-500 to-red-400'
    },
    {
      icon: Lock,
      title: 'Risk Reduction',
      description: 'Reduced risk of data breaches and cyber attacks through comprehensive security',
      gradient: 'from-purple-500 to-red-400'
    },
    {
      icon: Award,
      title: 'Brand Protection',
      description: 'Enhanced customer trust and brand reputation through robust security measures',
      gradient: 'from-pink-500 to-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      description: 'Cost savings from prevented security incidents and business disruptions',
      gradient: 'from-red-500 to-orange-400'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: '24/7 security monitoring and support for continuous protection',
      gradient: 'from-orange-500 to-pink-400'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: Shield },
    { number: '24/7', label: 'Security Monitoring', icon: Clock },
    { number: '15min', label: 'Average Response Time', icon: Zap },
    { number: '100%', label: 'Compliance Achievement', icon: Award }
  ];

  const testimonials = [
    {
      quote: "ID Code's cybersecurity solutions provided us with the peace of mind we needed. Their proactive approach and 24/7 monitoring have kept our systems secure and compliant.",
      author: "JAMES WILSON",
      company: "SECURETECH"
    },
    {
      quote: "The security assessment revealed vulnerabilities we didn't know existed. Their comprehensive approach and ongoing support have significantly strengthened our security posture.",
      author: "MARIA RODRIGUEZ",
      company: "DATAPROTECT"
    },
    {
      quote: "Working with ID Code on cybersecurity has been exceptional. Their expertise and rapid response capabilities have protected us from multiple threats and potential breaches.",
      author: "DAVID CHEN",
      company: "CYBERSAFE"
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
                <Shield className="h-4 w-4 mr-2" />
                Cyber Security
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Protect Your</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Digital Infrastructure</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Proactively identify threats to your digital infrastructure and futureproof your IT ecosystem with comprehensive cybersecurity solutions.
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
                  Get Security Assessment
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

            {/* Right Content - Threat Landscape */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'rgba(227, 255, 239, 0.05)',
                border: '1px solid rgba(227, 255, 239, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
                Current Threat Landscape
              </h3>
              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div key={index} className="p-4 rounded-lg transition-all hover:scale-105"
                    style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold" style={{ color: '#E3FFEF' }}>{threat.name}</h4>
                        <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Frequency: {threat.frequency}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        threat.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        threat.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {threat.impact}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Comprehensive Security Services
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Multi-layered cybersecurity solutions to protect your business from evolving threats.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {service.title}
                </h3>
                
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {service.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: '#01051B' }}>Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
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

      {/* Benefits Section */}
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
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Award className="h-4 w-4 mr-2" />
              Security Benefits
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Comprehensive Cybersecurity Protection
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              Measurable protection and peace of mind for your business with our advanced security solutions.
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
                className="rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                  {benefit.title}
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: '#94D3A2' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Security Performance Metrics
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Our cybersecurity solutions deliver measurable results and comprehensive protection.
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
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4">
                  <stat.icon className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-4xl font-bold" style={{ color: '#01051B' }}>{stat.number}</span>
                </div>
                <h3 className="text-base font-medium" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Client Security Success Stories
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              See how our cybersecurity services have protected businesses from threats and ensured compliance.
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
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <blockquote className="text-lg mb-6 italic" style={{ color: '#E3FFEF' }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm font-medium" style={{ color: '#94D3A2' }}>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Approach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we implement comprehensive cybersecurity measures to protect your digital infrastructure.
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
              <Shield className="h-4 w-4 mr-2" />
              Ready to Secure Your Business?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Protect Your Digital Assets Today
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to strengthen your cybersecurity? Let's discuss your security needs and explore 
              how our comprehensive solutions can protect your business from threats.
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
                Get Security Assessment →
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

export default CyberSecurity;
