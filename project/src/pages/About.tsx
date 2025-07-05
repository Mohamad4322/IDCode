import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Heart, Lightbulb, MapPin, Phone, Mail, Calendar, TrendingUp, Target as TargetIcon, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  const values = [
    {
      number: '01',
      title: 'Quality First',
      description: 'We deliver high-quality solutions that exceed expectations and stand the test of time.'
    },
    {
      number: '02',
      title: 'Proven Expertise',
      description: 'Our team brings years of experience and deep technical knowledge to every project.'
    },
    {
      number: '03',
      title: 'Client-Centric',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      number: '04',
      title: 'Innovation Driven',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    }
  ];

  const stats = [
    { label: 'Projects Completed', icon: TargetIcon },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years of Excellence', icon: Calendar },
    { number: '24/7', label: 'Support Available', icon: Globe }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'ID Code was established with a vision to deliver exceptional software solutions that drive business growth.',
      milestone: 'Foundation'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project, setting the foundation for sustainable growth.',
      milestone: 'Growth'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Expanded our team to include specialists in cloud computing, mobile development, and AI/ML technologies.',
      milestone: 'Expansion'
    },
    {
      year: '2023',
      title: 'International Presence',
      description: 'Established offices in Edison, NJ and Damascus, Syria to serve clients across different time zones.',
      milestone: 'Global'
    },
    {
      year: '2024',
      title: '200+ Projects Milestone',
      description: 'Reached the significant milestone of 200+ successful projects across various industries and technologies.',
      milestone: 'Achievement'
    },
    {
      year: '2025',
      title: 'Continued Innovation',
      description: 'Continuing to innovate and expand our services with AI solutions and advanced digital transformation capabilities.',
      milestone: 'Future'
    }
  ];

  const offices = [
    {
      country: 'United Arab Emirates',
      department: 'International office',
      city: 'Dubai',
      address: 'Business Bay, Dubai, UAE',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM'
    },
    {
      country: 'Netherlands',
      department: 'International office',
      city: 'Amsterdam',
      address: 'Zuidas District, Amsterdam, Netherlands',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    {
      country: 'United States',
      department: 'International office',
      city: 'New Jersey',
      address: 'Edison, New Jersey, United States',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    {
      country: 'Syria',
      department: 'International office',
      city: 'Damascus',
      address: 'Damascus, Syria',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM'
    }
  ];

  const achievements = [
    { metric: 98, suffix: '%', label: 'Client Satisfaction Rate', icon: Heart },
    { metric: 100, suffix: '%', label: 'On-Time Project Delivery', icon: CheckCircle },
    { metric: 50, suffix: '+', label: 'Industry Awards', icon: Award },
    { metric: 0, label: 'Security Breaches', icon: Globe },
    { metric: 40, suffix: '%', label: 'Avg Efficiency Improvement', icon: TrendingUp },
    { metric: 24, suffix: '/7', label: 'Global Support Coverage', icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section - Circular Design with Parallax */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-left mb-16">
            <h1 className="text-7xl lg:text-8xl font-serif font-bold text-gray-900 leading-tight mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
                ID Code
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              ID Code is a leading software development company specializing in custom solutions that drive business growth. We combine technical expertise with creative problem-solving to deliver exceptional results.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="max-w-4xl">
              <img 
                src="/Photo_cover_upwork.png" 
                alt="ID Code Team" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Split Layout with Parallax */}
      <section className="py-20 bg-gradient-to-br from-gray-700 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-serif text-white mb-8 text-left">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed text-left">
                To empower businesses through innovative software solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
              </p>
              <Link 
                to="/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold inline-flex items-center shadow-lg"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-6">Why Choose ID Code?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span className="text-lg">Proven track record of successful projects</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span className="text-lg">Agile development methodology</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span className="text-lg">Transparent communication throughout</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 mr-4 flex-shrink-0" />
                    <span className="text-lg">Post-launch support and maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Financial Services Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-600 mb-4 text-left">Our values</h2>
            <h3 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8 text-left">
              The core values that drive our company
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.number} className="border-t-2 border-blue-600 pt-6">
                <div className="text-blue-600 font-medium mb-2">{value.number}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Timeline Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm text-gray-500 font-medium mb-2">History</p>
            <h2 className="text-4xl font-serif text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a small startup to a trusted software development partner, here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 w-2 h-2 bg-gray-400 rounded-full -translate-x-1/2"></div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl font-serif text-gray-900">{item.year}</div>
                      <div className="text-sm text-gray-500">{item.milestone}</div>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section - Contact Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
              Our Global Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              With offices across different continents, we provide round-the-clock support and local expertise to our global clientele.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="offices__address-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="offices__address-item-header mb-4">
                  <div className="offices__address-item-country title-h5 text-lg font-serif text-gray-900 mb-1 text-left">
                    {office.country}
                  </div>
                  <div className="offices__address-item-department description-n text-sm text-gray-600 text-left">
                    {office.department}
                  </div>
                </div>
                
                <div className="offices__address-item-content">
                  <h4 className="offices__address-item-title title-h4 text-2xl font-serif text-gray-900 mb-3 text-left">
                    {office.city}
                  </h4>
                  
                  <div className="offices__address-item-address description-n text-gray-600 mb-4 text-left">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                  
                  <div className="offices__address-item-phone description-n mb-3 text-left">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-blue-600">
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="offices__address-item-email description-n mb-3 text-left">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="offices__address-item-hours description-n mb-4 text-left">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                  
                  <a href="#contact-us" className="offices__address-item__btn btn-n btn-n--gray btn-n--small inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm font-medium">
                    <span className="btn-n__text">Contact us</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - Animated Counters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Numbers that speak to our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter 
                      end={achievement.metric} 
                      suffix={achievement.suffix || ''} 
                    />
                  </div>
                  <p className="text-gray-600 font-medium">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Animated Gradient */}
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-serif text-white mb-6 text-left">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300 mb-8 text-left">
                Ready to start your next project? We'd love to hear from you and discuss how we can help bring your ideas to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (732) 797-8127</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">mohamadrj@idcode-soft.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Offices</h4>
                    <div className="flex items-center mb-1">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-gray-300">Edison, New Jersey</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                      <p className="text-gray-300">Damascus, Syria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }} 
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-3xl font-serif font-bold text-white mb-6">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-8 text-gray-300">
                Let's discuss your project and explore how our expertise can drive your success.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-semibold inline-flex items-center w-full justify-center"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 