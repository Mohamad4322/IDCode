import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RealEstate = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced property visibility',
      description: 'Increase property exposure through virtual tours, high-quality imagery, and comprehensive online listings that attract more qualified buyers and tenants.'
    },
    {
      number: '02',
      title: 'Streamlined transactions',
      description: 'Accelerate deal closure with digital document management, electronic signatures, and automated workflow systems that reduce paperwork and processing time.'
    },
    {
      number: '03',
      title: 'Data-driven valuations',
      description: 'Make accurate property valuations using AI-powered market analysis, comparable sales data, and predictive modeling that considers multiple market factors.'
    },
    {
      number: '04',
      title: 'Improved client experience',
      description: 'Deliver exceptional service through personalized property recommendations, real-time communication tools, and seamless digital interactions throughout the buying or selling process.'
    },
    {
      number: '05',
      title: 'Operational efficiency',
      description: 'Optimize business operations with automated lead management, CRM integration, and performance analytics that help agents focus on high-value activities.'
    },
    {
      number: '06',
      title: 'Market insights',
      description: 'Gain competitive advantage with comprehensive market analytics, trend analysis, and investment opportunity identification that inform strategic decisions.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Property Management Platforms',
      description: 'Comprehensive property management solutions that handle tenant relations, maintenance requests, rent collection, and financial reporting with automated workflows and real-time communication tools.'
    },
    {
      number: '02',
      title: 'Virtual Tour Technology',
      description: 'Immersive 3D virtual tours and augmented reality experiences that allow potential buyers and tenants to explore properties remotely, reducing the need for physical showings and expanding market reach.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 border border-gray-400 rounded-full mr-3"></div>
                <span className="text-gray-600 text-sm">Industry</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                PropTech Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Modernize real estate operations with innovative property management systems, virtual tour technologies, and market analytics platforms that enhance property transactions and client experiences.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Real Estate Technology" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's PropTech development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's PropTech solutions empower real estate professionals to deliver <strong>enhanced property experiences, streamlined transactions, and data-driven market insights</strong>. This <strong>transformation from traditional real estate practices to digital platforms</strong> accelerates deal closure and improves client satisfaction, enabling greater market efficiency and transparency along with <strong>enhanced property visibility</strong> and <strong>streamlined property management</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced virtual reality and 3D visualization technologies</strong> ensure immersive property viewing experiences and remote accessibility, while <strong>AI-powered market analysis and property valuation tools</strong> help make informed investment decisions and pricing strategies. With robust security measures for transaction data protection, our solutions allow you to focus on delivering <strong>exceptional real estate services</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help real estate agencies and property companies
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
              <div key={solution.number} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-blue-600 font-medium mb-2">{solution.number}</div>
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
              The value of PropTech solutions for your real estate business
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="border-t-2 border-blue-600 pt-6">
                <div className="text-blue-600 font-medium mb-2">{benefit.number}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;