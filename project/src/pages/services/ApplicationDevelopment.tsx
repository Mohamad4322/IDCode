import React from 'react';
import { ArrowRight, Code, CheckCircle, Layers, Zap, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApplicationDevelopment = () => {
  const benefits = [
    {
      number: '01',
      title: 'Custom-built solutions',
      description: 'Tailored applications designed specifically for your business requirements and workflows, ensuring perfect alignment with your operational needs.'
    },
    {
      number: '02',
      title: 'Scalable architecture',
      description: 'Future-proof applications built with scalable architecture that grows with your business and adapts to changing market demands.'
    },
    {
      number: '03',
      title: 'Industry expertise',
      description: 'Deep understanding of various industries allows us to deliver solutions that address sector-specific challenges and opportunities.'
    },
    {
      number: '04',
      title: 'Modern technologies',
      description: 'Leverage cutting-edge technologies and frameworks to build high-performance applications with exceptional user experiences.'
    },
    {
      number: '05',
      title: 'Agile development',
      description: 'Iterative development approach with regular feedback loops ensures your application meets expectations and delivers value quickly.'
    },
    {
      number: '06',
      title: 'Ongoing support',
      description: 'Comprehensive post-launch support and maintenance services to ensure your application continues to perform optimally.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with the latest technologies to deliver exceptional user experiences across all devices and platforms.'
    },
    {
      number: '02',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences and leverage device-specific capabilities for optimal performance.'
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
                <span className="text-gray-600 text-sm">Service</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Application Development
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Bring your software vision to life with tailored application development solutions that deliver industry-leading user experiences and drive business growth.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Application Development" 
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
            What you get with ID Code's application development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's application development services empower businesses to deliver <strong>exceptional user experiences, streamlined operations, and competitive advantages</strong>. This <strong>transformation from concept to fully functional applications</strong> accelerates business growth and improves operational efficiency along with <strong>enhanced customer engagement</strong> and <strong>streamlined business processes</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced development methodologies and modern technology stack</strong> ensure optimal application performance and user satisfaction, while <strong>agile development practices and continuous integration</strong> help deliver high-quality applications on time and within budget. With robust security measures and scalable architecture, our solutions allow you to focus on delivering <strong>exceptional business value</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Application Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help businesses and organizations
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
              The value of custom application development for your business
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

export default ApplicationDevelopment;