import React from 'react';
import { ArrowRight, Wheat, CheckCircle, Smartphone, Cloud, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Agriculture = () => {
  const benefits = [
    {
      number: '01',
      title: 'Increased crop yields',
      description: 'Optimize farming practices with precision agriculture technologies that monitor soil conditions, weather patterns, and crop health to maximize production.'
    },
    {
      number: '02',
      title: 'Resource optimization',
      description: 'Reduce water, fertilizer, and pesticide usage through targeted application based on real-time field data and crop needs.'
    },
    {
      number: '03',
      title: 'Operational efficiency',
      description: 'Streamline farm operations with automated scheduling, equipment monitoring, and workforce management to reduce costs and improve productivity.'
    },
    {
      number: '04',
      title: 'Supply chain visibility',
      description: 'Gain end-to-end visibility into agricultural supply chains from farm to consumer, ensuring quality, traceability, and compliance.'
    },
    {
      number: '05',
      title: 'Data-driven decisions',
      description: 'Make informed farming decisions based on comprehensive analytics, historical trends, and predictive models that reduce risk and improve outcomes.'
    },
    {
      number: '06',
      title: 'Sustainable practices',
      description: 'Implement environmentally friendly farming methods that reduce environmental impact while maintaining or improving productivity and profitability.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Precision Agriculture Systems',
      description: 'Comprehensive digital platforms that integrate IoT sensors, satellite imagery, and analytics to enable data-driven farming decisions and optimize crop management.'
    },
    {
      number: '02',
      title: 'Farm Management Software',
      description: 'End-to-end solutions for managing agricultural operations, including planning, resource allocation, inventory management, and financial tracking.'
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
                Agricultural Technology Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Adopt data-driven innovations to balance supply and optimize production under increasing pressures while promoting sustainable farming practices.
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
                src="/software-development-for-agriculture-head-min.jpg" 
                alt="Agricultural Technology" 
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
            What you get with ID Code's agricultural software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's agricultural technology solutions empower farmers and agribusinesses to achieve <strong>increased productivity, resource efficiency, and sustainable practices</strong>. This <strong>digital transformation of farming operations</strong> optimizes crop yields and reduces environmental impact, enabling greater profitability and sustainability along with <strong>enhanced decision-making</strong> and <strong>streamlined agricultural processes</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced precision agriculture systems and farm management platforms</strong> ensure optimal resource utilization and operational efficiency, while <strong>IoT sensors and data analytics</strong> help monitor field conditions and predict crop needs. With robust solutions for supply chain traceability and compliance, our technologies allow you to focus on delivering <strong>sustainable and profitable agricultural production</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Agricultural Solutions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help farmers and agribusinesses
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
              The value of agricultural technology for your business
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Our agricultural sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT & Sensor Technology</h3>
              <p className="text-gray-600 mb-4">Connected sensor networks that monitor soil conditions, weather patterns, crop health, and equipment performance for data-driven farming.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Soil moisture sensors</li>
                <li>• Weather stations</li>
                <li>• Crop monitoring systems</li>
                <li>• Equipment telemetry</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics & AI</h3>
              <p className="text-gray-600 mb-4">Advanced analytics and artificial intelligence solutions that transform agricultural data into actionable insights for improved decision-making.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Predictive crop modeling</li>
                <li>• Yield forecasting</li>
                <li>• Pest and disease detection</li>
                <li>• Resource optimization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Farm Management Systems</h3>
              <p className="text-gray-600 mb-4">Comprehensive digital platforms for managing all aspects of agricultural operations, from planning to harvest and distribution.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Crop planning tools</li>
                <li>• Resource management</li>
                <li>• Inventory tracking</li>
                <li>• Financial analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;