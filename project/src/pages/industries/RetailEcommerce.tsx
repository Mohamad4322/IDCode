import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailEcommerce = () => {
  const [expandedService, setExpandedService] = useState<string | null>('customer-analytics');

  const services = [
    {
      id: 'customer-analytics',
      title: 'Customer analytics & personalization',
      description: 'Leverage advanced data analytics and machine learning to understand customer behavior, preferences, and purchasing patterns. Create personalized shopping experiences that increase conversion rates and customer loyalty.'
    },
    {
      id: 'inventory-management',
      title: 'Inventory management systems'
    },
    {
      id: 'ecommerce-platforms',
      title: 'E-commerce platform development',
      description: 'ID Code\'s full-cycle e-commerce development services help you build scalable, secure, and user-friendly online stores with integrated payment processing and inventory management.',
      link: 'Explore e-commerce development'
    },
    {
      id: 'mobile-commerce',
      title: 'Mobile commerce solutions'
    },
    {
      id: 'payment-integration',
      title: 'Payment gateway integration'
    },
    {
      id: 'supply-chain',
      title: 'Supply chain optimization'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Enhanced customer experience',
      description: 'Create seamless omnichannel shopping experiences that delight customers across all touchpoints, from browsing to purchase to post-sale support.'
    },
    {
      number: '02',
      title: 'Increased sales conversion',
      description: 'Optimize your sales funnel with personalized recommendations, streamlined checkout processes, and targeted marketing campaigns that drive higher conversion rates.'
    },
    {
      number: '03',
      title: 'Inventory optimization',
      description: 'Reduce carrying costs and stockouts with intelligent inventory management systems that predict demand and automate reordering processes.'
    },
    {
      number: '04',
      title: 'Data-driven insights',
      description: 'Make informed business decisions with comprehensive analytics dashboards that provide real-time insights into sales performance, customer behavior, and market trends.'
    },
    {
      number: '05',
      title: 'Operational efficiency',
      description: 'Streamline business operations through automation of routine tasks, integrated systems, and optimized workflows that reduce costs and improve productivity.'
    },
    {
      number: '06',
      title: 'Scalable growth',
      description: 'Build a technology foundation that grows with your business, supporting increased traffic, expanded product catalogs, and new market opportunities.'
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
                Retail & E-commerce Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Transform your retail business with cutting-edge e-commerce platforms, inventory management systems, and customer analytics solutions that drive sales and enhance shopping experiences.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Retail Technology" 
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
            What you get with ID Code's retail & e-commerce development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's retail and e-commerce solutions empower businesses to deliver <strong>exceptional customer experiences, optimize inventory management, and drive sales growth</strong>. This <strong>digital transformation from traditional retail to omnichannel platforms</strong> increases revenue and customer satisfaction, enabling greater market reach and operational efficiency along with <strong>enhanced customer engagement</strong> and <strong>streamlined business operations</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced analytics and personalization engines</strong> ensure optimal customer targeting and product recommendations, while <strong>AI-powered inventory management and demand forecasting</strong> help optimize stock levels and reduce costs. With robust security measures for payment processing, our solutions allow you to focus on delivering <strong>superior shopping experiences</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-600 mb-4">Our services</h2>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              The scope of our retail & e-commerce development services
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              We help you build comprehensive retail solutions that integrate seamlessly with your business operations and deliver exceptional customer experiences.
            </p>
          </div>

          <div className="space-y-1">
            {services.map((service) => (
              <div key={service.id} className="border-b border-gray-200 last:border-b-0">
                <div 
                  className="flex items-center justify-between py-6 cursor-pointer"
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                    <span className="text-lg font-medium text-gray-900">{service.title}</span>
                  </div>
                  <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                    <Plus className={`h-4 w-4 text-gray-600 transition-transform ${expandedService === service.id ? 'rotate-45' : ''}`} />
                  </div>
                </div>
                
                {expandedService === service.id && service.description && (
                  <div className="pb-6 pl-16">
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    {service.link && (
                      <button className="text-blue-600 hover:text-blue-700 inline-flex items-center">
                        {service.link}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    )}
                  </div>
                )}
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
              The value of custom retail & e-commerce solutions for your business
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

export default RetailEcommerce;