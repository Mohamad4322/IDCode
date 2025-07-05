import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logistics = () => {
  const benefits = [
    {
      number: '01',
      title: 'Route optimization',
      description: 'Reduce delivery times and fuel costs with AI-powered route planning that considers traffic patterns, delivery windows, and vehicle capacity to optimize logistics operations.'
    },
    {
      number: '02',
      title: 'Real-time tracking',
      description: 'Provide complete shipment visibility with GPS tracking, automated status updates, and proactive notifications that keep customers informed throughout the delivery process.'
    },
    {
      number: '03',
      title: 'Inventory management',
      description: 'Optimize stock levels and reduce carrying costs with intelligent inventory management systems that predict demand and automate reordering processes.'
    },
    {
      number: '04',
      title: 'Fleet management',
      description: 'Maximize fleet efficiency with vehicle tracking, maintenance scheduling, driver performance monitoring, and fuel optimization that reduces operational costs.'
    },
    {
      number: '05',
      title: 'Supply chain visibility',
      description: 'Gain end-to-end supply chain transparency with real-time monitoring, performance analytics, and exception management that improves decision-making.'
    },
    {
      number: '06',
      title: 'Customer satisfaction',
      description: 'Enhance customer experience with accurate delivery estimates, real-time updates, and proactive communication that builds trust and loyalty.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Warehouse Management Systems',
      description: 'Comprehensive WMS solutions that optimize warehouse operations through automated inventory tracking, pick-and-pack optimization, and real-time visibility into stock levels and movements.'
    },
    {
      number: '02',
      title: 'Transportation Management',
      description: 'Advanced TMS platforms that streamline transportation operations with route optimization, carrier management, freight auditing, and performance analytics for improved efficiency and cost control.'
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
                Supply Chain & Logistics Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Optimize your supply chain operations with intelligent logistics platforms, real-time tracking systems, and automated warehouse management solutions that enhance delivery efficiency and reduce costs.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Logistics Technology" 
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
            What you get with ID Code's logistics software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's logistics solutions empower supply chain companies to achieve <strong>operational excellence, real-time visibility, and cost optimization</strong>. This <strong>transformation from manual logistics processes to automated digital platforms</strong> reduces delivery times and operational costs, enabling greater supply chain efficiency and customer satisfaction along with <strong>enhanced shipment tracking</strong> and <strong>streamlined warehouse operations</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced route optimization and fleet management systems</strong> ensure optimal delivery planning and vehicle utilization, while <strong>AI-powered demand forecasting and inventory management</strong> help optimize stock levels and reduce waste. With robust security measures for supply chain data protection, our solutions allow you to focus on delivering <strong>superior logistics services</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Logistics Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help logistics companies and supply chain operators
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
              The value of logistics technology for your supply chain
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

export default Logistics;