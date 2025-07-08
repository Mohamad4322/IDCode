import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Award, 
  Users, 
  Heart, 
  Lightbulb, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  TrendingUp, 
  Target as TargetIcon, 
  Globe, 
  Clock,
  Building2,
  Star,
  Shield,
  Zap,
  Eye,
  Headphones,
  MessageSquare,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const coreValues = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We deliver high-quality solutions that exceed expectations and stand the test of time.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: 'Our team brings years of experience and deep technical knowledge to every project.',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  const whyChooseUs = [
    { text: 'Proven track record of 500+ successful projects', icon: CheckCircle },
    { text: 'Agile development methodology for faster delivery', icon: Zap },
    { text: 'Transparent communication throughout the process', icon: MessageSquare },
    { text: '24/7 post-launch support and maintenance', icon: Headphones }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'ID Code was established with a vision to deliver exceptional software solutions that drive business growth.',
      milestone: 'Foundation',
      color: '#10b981'
    },
    {
      year: '2021',
      title: 'First Major Breakthrough',
      description: 'Successfully delivered our first enterprise-level project, setting the foundation for sustainable growth.',
      milestone: 'Growth',
      color: '#3b82f6'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Expanded our team to include specialists in cloud computing, mobile development, and AI/ML technologies.',
      milestone: 'Expansion',
      color: '#8b5cf6'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Established international presence to serve clients across different time zones and markets.',
      milestone: 'International',
      color: '#f59e0b'
    },
    {
      year: '2024',
      title: '500+ Projects Milestone',
      description: 'Reached the significant milestone of 500+ successful projects across various industries and technologies.',
      milestone: 'Achievement',
      color: '#ef4444'
    },
    {
      year: '2025',
      title: 'AI Innovation Hub',
      description: 'Leading the way in AI solutions and advanced digital transformation capabilities.',
      milestone: 'Future',
      color: '#06b6d4'
    }
  ];

  const achievements = [
    { number: 500, suffix: '+', label: 'Projects Delivered', icon: TargetIcon },
    { number: 150, suffix: '+', label: 'Happy Clients', icon: Users },
    { number: 10, suffix: '+', label: 'Years Experience', icon: Calendar },
    { number: 98, suffix: '%', label: 'Client Satisfaction', icon: Heart },
    { number: 24, suffix: '/7', label: 'Global Support', icon: Headphones },
    { number: 100, suffix: '%', label: 'On-Time Delivery', icon: CheckCircle }
  ];

  const officeInfo = {
    city: 'Edison',
    state: 'New Jersey',
    country: 'United States',
    phone: '+1 (732) 797-8127',
    email: 'mohamadrj@idcode-soft.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    timezone: 'EST (Eastern Standard Time)'
  };

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
                <Building2 className="h-4 w-4 mr-2" />
                About ID Code
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Transforming Ideas</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Into Digital Reality</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                We're a leading software development company specializing in custom solutions that drive business growth. 
                Our team combines technical expertise with creative problem-solving to deliver exceptional results.
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
                  Work With Us
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
                  Our Services
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
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Photo_cover_upwork.png" 
                    alt="ID Code Team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Our Core Values
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              The principles that guide everything we do and drive our success.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {value.title}
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Why Choose Us Section */}
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
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Eye className="h-4 w-4 mr-2" />
                Our Mission
              </div>

              <h2 className="text-4xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Empowering businesses through innovative technology solutions
              </h2>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                To drive growth, efficiency, and competitive advantage in the digital landscape. 
                We believe technology should solve real problems and create measurable value for businesses.
              </p>

              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4 flex-shrink-0">
                      <item.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base" style={{ color: '#E3FFEF' }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="w-12 h-12 mx-auto mb-4">
                    <achievement.icon className="w-full h-full" style={{ color: '#10b981' }} />
                  </div>
                  <div className="mb-2"> 
                    <span className="text-3xl font-bold" style={{ color: '#E3FFEF' }}>
                      <AnimatedCounter end={achievement.number} suffix={achievement.suffix || ''} />
                    </span>
                  </div>
                  <h3 className="text-sm font-medium" style={{ color: '#94D3A2' }}>
                    {achievement.label}
                  </h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Our Journey
            </h2>
            <p className="text-lg max-w-3xl" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              From a small startup to a trusted software development partner, here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-blue-200 to-purple-200"></div>
             
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                  onMouseEnter={() => setActiveTimelineIndex(index)}
                >
                  {/* Timeline dot */}
                  <div 
                    className="absolute left-8 w-4 h-4 rounded-full -translate-x-1/2 transition-all duration-300 border-4 border-white shadow-lg"
                    style={{ 
                      backgroundColor: activeTimelineIndex === index ? item.color : '#e5e7eb',
                      transform: `translateX(-50%) ${activeTimelineIndex === index ? 'scale(1.3)' : 'scale(1)'}`
                    }}
                  ></div>
                  
                  {/* Content */}
                  <div className="ml-20 flex-1">
                    <div className="rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: `2px solid ${activeTimelineIndex === index ? item.color : 'rgba(1, 5, 27, 0.08)'}`,
                        transform: activeTimelineIndex === index ? 'translateX(8px)' : 'translateX(0)'
                      }}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-bold" style={{ color: item.color }}>
                          {item.year}
                        </div>
                        <div className="text-sm font-medium px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: `${item.color}15`,
                            color: item.color
                          }}>
                          {item.milestone}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#01051B' }}>
                        {item.title}
                      </h3>
                      <p className="leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="relative overflow-hidden py-20" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Wave background */}
        <div className="absolute inset-0" style={{ opacity: 0.1 }}>
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
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Visit Our Office
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              Located in the heart of New Jersey, our office is where innovation meets collaboration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8"
              style={{ 
                backgroundColor: 'rgba(227, 255, 239, 0.05)',
                border: '1px solid rgba(227, 255, 239, 0.1)'
              }}
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold" style={{ color: '#E3FFEF' }}>Headquarters</h3>
                  <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Main Operations Center</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#E3FFEF' }}>{officeInfo.city}, {officeInfo.state}</p>
                    <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{officeInfo.country}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-400 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <a href={`tel:${officeInfo.phone}`} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#E3FFEF' }}>
                    {officeInfo.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-400 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <a href={`mailto:${officeInfo.email}`} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#E3FFEF' }}>
                    {officeInfo.email}
                  </a>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium" style={{ color: '#E3FFEF' }}>{officeInfo.hours}</p>
                    <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{officeInfo.timezone}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(227, 255, 239, 0.1)' }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
                  <Send className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Map */}
            
 

          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Company Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn about our journey, values, and commitment to delivering exceptional software solutions.
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
              <Star className="h-4 w-4 mr-2" />
              Ready to Start?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Transform Your Business Today
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to turn your vision into reality? Let's discuss your project and explore 
              how our expertise can drive your success.
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
                Take Our Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;