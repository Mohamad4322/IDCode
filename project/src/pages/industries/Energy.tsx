import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Energy = () => {
  const energyTypes = [
    { name: 'Electric power', icon: '⚡' },
    { name: 'Water and heat', icon: '🌊' },
    { name: 'Smart grids', icon: '🔗' },
    { name: 'Solar and wind energy', icon: '☀️' },
    { name: 'Nuclear power plants', icon: '⚛️' },
    { name: 'Oil and gas', icon: '🛢️' },
    { name: 'Smart cities', icon: '🏙️' },
    { name: 'Governments', icon: '🏛️' }
  ];

  const technologies = [
    {
      title: 'Big Data and artificial intelligence',
      description: 'Leverage our data modelling expertise and machine learning development services to help you streamline data analytics (diagnostic, descriptive, and predictive) and enable swift load-flow calculation. Our custom AI-based solutions collect data from multiple sources while applying complex mathematical calculations and aggregation formulas to produce actionable outputs you can use to support your decision-making and risk management processes.'
    },
    {
      title: 'Cloud-based solutions',
      description: 'We\'ll help you develop and implement a cloud-first strategy tailored to your organisation\'s unique needs. So, you can optimise the performance, cost-effectiveness and resilience of your software systems, as well as the security of your data. Our cloud migration services can help you realise the value of Big Data to improve customer satisfaction, providing end users with real-time analytics on their actual and forecasted energy consumption. What\'s more, our team of software development experts can help you implement a cloud-based software solution with advanced data analytics, ML features and predictive maintenance for your complex energy systems.'
    },
    {
      title: 'Industrial Internet of things (IIoT)',
      description: 'Our expert IoT development services focus on the adoption of custom IIoT solutions that can streamline your energy and utilities management and enable effective network monitoring. Using IoT sensors, connected devices and mobile apps, you can collect valuable data insights that allow you to detect against fluctuations in temperature, humidity, moisture levels, and vibrations. This means that you can proactively identify potential issues and take preventive measures to avoid costly downtime and equipment failures.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Enable efficient energy distribution management',
      description: 'With our energy software development expertise, your consumers will benefit from a stable, accessible, clean and sustainable energy supply and you\'ll have the peace of mind that your networks will remain resilient to operational challenges and potential threats. As an energy software company, we\'re specialists at developing and integrating custom distribution management systems (ADMS) that help utility suppliers meet customer needs in terms of power quality, supply reliability and data security.'
    },
    {
      number: '02',
      title: 'Enhance power system stability',
      description: 'Enable real-time monitoring and management of your power systems to maintain the accuracy and reliability of your entire power ecosystem while avoiding errors and financial losses. Our team of energy software development experts will work with you to develop custom energy management software solutions for your business that enable automated system stability analysis and optimised load flow calculation for ultimate efficiency.'
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
                Energy Software Development
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Adopt an advanced energy management software solution to dramatically improve the productivity, accessibility, safety and sustainability of your business power system.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="/files_2897771-1751318939403-image.png" 
                alt="Energy Technology" 
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
            What you get with ID Code's energy software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's energy software development services empower utility companies to deliver <strong>stable, sustainable, and efficient energy supplies</strong>. We help you ensure power quality, supply reliability, and data security, making your networks resilient to operational challenges and potential threats. Our <strong>tailored energy solutions</strong> enable real-time monitoring and management of power systems, maintaining <strong>accuracy and reliability across your entire power ecosystem</strong> and avoiding costly errors and financial losses.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our automation services help optimize complex processes within the energy sector, from logistics to billing, reducing human errors and operational costs. Additionally, we offer <strong>solutions for automating visual asset inspections with drones and computer vision</strong>, enabling rapid and accurate infrastructure assessments. With a <strong>focus on environmentally friendly practices</strong>, we also provide sustainability consulting services to help you remain compliant and reduce your carbon footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Energy Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help energy producers and distributors
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

      {/* What we do Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-600 mb-4">What we do</h2>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              Energy management software solutions we build
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mb-8">
              We've been helping energy producers and distributors, developers of smart cities and governmental organisations optimise their energy efficiency and cut costs for thirty years.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              Our software team has tried-and-tested expertise in designing and developing bespoke data-driven software solutions for energy management powered by Cloud, IoT, blockchain, drones, and other cutting-edge technologies.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-900 font-medium mb-8">
              We understand the unique needs and challenges of the energy and utilities industry and the technologies behind modern power management solutions for all types of sources, facilities and businesses, including:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 border border-gray-200 rounded-lg p-8">
            {energyTypes.map((type, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{type.icon}</span>
                </div>
                <h4 className="font-medium text-gray-900">{type.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Our energy sector technology expertise
          </h2>

          <div className="space-y-12">
            {technologies.map((tech, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-gray-600" />
                  </div>
                  {index < technologies.length - 1 && (
                    <div className="w-px h-24 bg-gray-300 ml-4 mt-4"></div>
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

export default Energy;