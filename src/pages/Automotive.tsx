import React from 'react';
import { ArrowRight, Car, CheckCircle, Cpu, Smartphone, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Automotive = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced vehicle intelligence',
      description: 'Implement advanced software systems that improve vehicle functionality, connectivity, and autonomous capabilities for a superior driving experience.'
    },
    {
      number: '02',
      title: 'Manufacturing optimization',
      description: 'Streamline production processes with intelligent automation, predictive maintenance, and quality control systems that reduce costs and improve efficiency.'
    },
    {
      number: '03',
      title: 'Connected mobility',
      description: 'Create seamless connectivity between vehicles, infrastructure, and services to enable new mobility models and revenue streams.'
    },
    {
      number: '04',
      title: 'Customer experience',
      description: 'Deliver personalized digital experiences throughout the customer journey, from research and purchase to ownership and service.'
    },
    {
      number: '05',
      title: 'Data-driven insights',
      description: 'Leverage vehicle and customer data to gain actionable insights for product development, marketing strategies, and business optimization.'
    },
    {
      number: '06',
      title: 'Cybersecurity',
      description: 'Protect vehicles, manufacturing systems, and customer data with robust security measures that address evolving automotive cybersecurity threats.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Connected Vehicle Platforms',
      description: 'Comprehensive software platforms that enable vehicle connectivity, telematics, over-the-air updates, and integration with mobile applications and third-party services.'
    },
    {
      number: '02',
      title: 'Automotive Manufacturing Systems',
      description: 'Intelligent manufacturing solutions that optimize production processes, quality control, supply chain management, and predictive maintenance in automotive plants.'
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
                Automotive Software Engineering
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Introduce intelligent features and process optimizations to deliver a new level of driver experience while transforming automotive manufacturing and operations.
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
                src="/automotive-software-engineering-head-min.jpg" 
                alt="Automotive Technology" 
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
            What you get with ID Code's automotive software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's automotive software solutions empower vehicle manufacturers and suppliers to deliver <strong>intelligent, connected, and secure mobility experiences</strong>. This <strong>digital transformation of automotive systems and processes</strong> enhances vehicle functionality and manufacturing efficiency, enabling greater innovation and competitiveness along with <strong>enhanced driver experiences</strong> and <strong>streamlined production operations</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced connected vehicle platforms and manufacturing systems</strong> ensure optimal vehicle performance and production efficiency, while <strong>data analytics and cybersecurity solutions</strong> help protect critical systems and gain valuable insights. With robust security measures for vehicle and manufacturing systems, our solutions allow you to focus on delivering <strong>next-generation automotive innovations</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Automotive Solutions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help automotive manufacturers and suppliers
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
              The value of automotive software solutions for your business
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
            Our automotive sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Car className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">In-Vehicle Systems</h3>
              <p className="text-gray-600 mb-4">Advanced software solutions for vehicle control systems, infotainment, and driver assistance features that enhance the driving experience.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Infotainment systems</li>
                <li>• ADAS development</li>
                <li>• Vehicle diagnostics</li>
                <li>• HMI design</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connectivity Solutions</h3>
              <p className="text-gray-600 mb-4">Seamless connectivity between vehicles, mobile devices, and cloud services for enhanced functionality and user experience.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• V2X communication</li>
                <li>• Telematics platforms</li>
                <li>• Mobile app integration</li>
                <li>• OTA update systems</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automotive Cybersecurity</h3>
              <p className="text-gray-600 mb-4">Robust security solutions that protect vehicles, manufacturing systems, and data from cyber threats and vulnerabilities.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Secure communication</li>
                <li>• Intrusion detection</li>
                <li>• Security testing</li>
                <li>• Compliance solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Automotive;