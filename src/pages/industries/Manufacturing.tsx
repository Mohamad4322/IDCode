import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Manufacturing = () => {
  const solutions = [
    {
      number: '01',
      title: 'Smart Factory Implementation',
      description: 'Transform your manufacturing operations with IoT sensors, real-time monitoring systems, and automated quality control processes that optimize production efficiency and reduce downtime.'
    },
    {
      number: '02',
      title: 'Predictive Maintenance Systems',
      description: 'Implement AI-powered predictive maintenance solutions that analyze equipment performance data to predict failures before they occur, reducing maintenance costs and preventing unexpected downtime.'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Production optimization',
      description: 'Maximize manufacturing efficiency through real-time monitoring, automated quality control, and intelligent production scheduling that reduces waste and improves output quality.'
    },
    {
      number: '02',
      title: 'Predictive maintenance',
      description: 'Prevent costly equipment failures with AI-powered predictive maintenance systems that analyze performance data and schedule maintenance before issues occur.'
    },
    {
      number: '03',
      title: 'Quality assurance',
      description: 'Ensure consistent product quality with automated inspection systems, real-time quality monitoring, and statistical process control that detect defects early in the production process.'
    },
    {
      number: '04',
      title: 'Supply chain visibility',
      description: 'Gain complete visibility into your supply chain with real-time tracking, inventory optimization, and supplier performance monitoring that reduces costs and improves delivery times.'
    },
    {
      number: '05',
      title: 'Operational efficiency',
      description: 'Streamline manufacturing operations through process automation, workflow optimization, and resource allocation that reduces costs and improves productivity.'
    },
    {
      number: '06',
      title: 'Data-driven decisions',
      description: 'Make informed manufacturing decisions with comprehensive analytics, performance dashboards, and real-time reporting that provide insights into all aspects of your operations.'
    }
  ];

  const technologies = [
    {
      title: 'Industrial IoT and Sensors',
      description: 'Deploy connected sensors and IoT devices throughout your manufacturing facility to collect real-time data on equipment performance, environmental conditions, and production metrics. Our IIoT solutions enable predictive maintenance, quality monitoring, and operational optimization.'
    },
    {
      title: 'Machine Learning and AI',
      description: 'Leverage artificial intelligence and machine learning algorithms to optimize production schedules, predict equipment failures, and improve quality control processes. Our AI solutions learn from historical data to continuously improve manufacturing performance.'
    },
    {
      title: 'Digital Twin Technology',
      description: 'Create virtual replicas of your manufacturing processes and equipment to simulate operations, test improvements, and optimize performance before implementing changes in the physical environment. Digital twins enable better planning and risk reduction.'
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
                Smart Manufacturing Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Revolutionize your manufacturing operations with Industry 4.0 solutions, IoT integration, and intelligent automation systems that optimize production efficiency and quality control.
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
                src="/files_2897771-1751324445119-image copy.png" 
                alt="Smart Manufacturing" 
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
            What you get with ID Code's smart manufacturing development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's smart manufacturing solutions empower industrial companies to achieve <strong>operational excellence, predictive maintenance, and quality optimization</strong>. This <strong>transformation from traditional manufacturing to Industry 4.0 platforms</strong> reduces downtime and waste, enabling greater productivity and cost efficiency along with <strong>enhanced production visibility</strong> and <strong>streamlined supply chain management</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced IoT sensors and real-time monitoring systems</strong> ensure optimal equipment performance and early fault detection, while <strong>machine learning algorithms and predictive analytics</strong> help optimize production schedules and maintenance planning. With robust cybersecurity measures for industrial networks, our solutions allow you to focus on delivering <strong>superior manufacturing outcomes</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Solutions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help manufacturers and industrial companies
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
              The value of smart manufacturing solutions for your business
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
            Our manufacturing technology expertise
          </h2>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-emerald-600" />
                  </div>
                  {index < technologies.length - 1 && (
                    <div className="w-px h-24 bg-emerald-300 ml-4 mt-4"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{tech.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;