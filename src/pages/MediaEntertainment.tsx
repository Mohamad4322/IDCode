import React from 'react';
import { ArrowRight, Film, CheckCircle, Monitor, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MediaEntertainment = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced content delivery',
      description: 'Deliver high-quality content across multiple platforms and devices with optimized streaming solutions and content delivery networks.'
    },
    {
      number: '02',
      title: 'Personalized user experiences',
      description: 'Create tailored content recommendations and user interfaces based on viewing habits, preferences, and demographics.'
    },
    {
      number: '03',
      title: 'Monetization optimization',
      description: 'Maximize revenue through subscription management, targeted advertising, and flexible payment models optimized for different markets.'
    },
    {
      number: '04',
      title: 'Content management efficiency',
      description: 'Streamline content production, management, and distribution workflows with integrated digital asset management systems.'
    },
    {
      number: '05',
      title: 'Audience insights',
      description: 'Gain deep understanding of audience behavior and preferences through advanced analytics and engagement metrics.'
    },
    {
      number: '06',
      title: 'Multi-platform reach',
      description: 'Extend content reach across web, mobile, smart TVs, and emerging platforms with cross-platform development solutions.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Content Streaming Platforms',
      description: 'Robust streaming solutions that deliver high-quality video and audio content to multiple devices with adaptive bitrate technology, content protection, and personalized user experiences.'
    },
    {
      number: '02',
      title: 'Digital Asset Management',
      description: 'Comprehensive systems for organizing, storing, and distributing digital media assets with metadata management, version control, and rights management capabilities.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section with Gradient Background */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 border border-emerald-400 rounded-full mr-3"></div>
                <span className="text-emerald-600 text-sm">Industry</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Media & Entertainment Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Reach wider audiences with unparalleled digital experiences crafted for maximum engagement, content monetization, and seamless multi-platform delivery.
              </p>
              
              <Link to="/contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors inline-flex items-center shadow-md">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/media-and-entertainment-industry-head-min.jpg" 
                alt="Media & Entertainment Technology" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's media & entertainment software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's media and entertainment solutions empower content creators and distributors to deliver <strong>engaging digital experiences, optimized content delivery, and innovative monetization models</strong>. This <strong>digital transformation of media operations</strong> enhances audience engagement and content reach, enabling greater market penetration and revenue growth along with <strong>enhanced content management</strong> and <strong>streamlined production workflows</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced streaming platforms and digital asset management systems</strong> ensure optimal content delivery and organization, while <strong>analytics and personalization engines</strong> help understand audience behavior and deliver tailored experiences. With robust security measures for content protection and rights management, our solutions allow you to focus on creating <strong>compelling entertainment experiences</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Media Solutions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help media companies and content creators
            </h2>
            <div className="flex justify-end">
              <div className="flex space-x-2">
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.number} className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-emerald-600 font-medium mb-2">{solution.number}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-600 mb-4">Service benefits</h2>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              The value of media & entertainment technology for your business
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="border-t-2 border-emerald-600 pt-6">
                <div className="text-emerald-600 font-medium mb-2">{benefit.number}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Our media & entertainment sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Film className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content Platforms</h3>
              <p className="text-gray-600 mb-4">Robust streaming and content delivery platforms that provide high-quality media experiences across multiple devices and networks.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Video streaming platforms</li>
                <li>• Audio streaming services</li>
                <li>• Live event broadcasting</li>
                <li>• Content protection systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Platform Experiences</h3>
              <p className="text-gray-600 mb-4">Cross-platform applications that deliver consistent, engaging user experiences across web, mobile, smart TVs, and emerging platforms.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Responsive web applications</li>
                <li>• Mobile apps development</li>
                <li>• Smart TV applications</li>
                <li>• Cross-platform frameworks</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audience Engagement</h3>
              <p className="text-gray-600 mb-4">Innovative solutions that enhance audience interaction, personalization, and social integration for deeper engagement with content.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Recommendation engines</li>
                <li>• Interactive content</li>
                <li>• Social media integration</li>
                <li>• Community platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainment;