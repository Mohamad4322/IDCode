import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Healthcare = () => {
  const [expandedService, setExpandedService] = useState<string | null>('business-consulting');

  const services = [
    {
      id: 'business-consulting',
      title: 'Business consulting',
      description: 'Our expert business analysts will partner with you to understand your organisation\'s unique goals and how a custom healthcare software solution might help you meet them. Together, we\'ll define how smart technology could allow your company to adapt to best meet your customers\' needs.'
    },
    {
      id: 'patient-experience',
      title: 'Patient experience services'
    },
    {
      id: 'software-engineering',
      title: 'Software engineering',
      description: 'ID Code\'s full-cycle nearshore software development services help you analyse, plan, implement, and maintain your scalable solution architecture and intuitive UX/UI design.',
      link: 'Explore software development'
    },
    {
      id: 'rd-feasibility',
      title: 'R&D and feasibility study services'
    },
    {
      id: 'healthcare-security',
      title: 'Healthcare cyber security'
    },
    {
      id: 'software-integrations',
      title: 'Software integrations / Interoperability'
    }
  ];

  const benefits = [
    {
      number: '01',
      title: 'Deliver better patient service',
      description: 'Enable a seamless customer experience for your patients, allowing them to access their medical information anytime and anywhere with advanced electronic health records software. You\'ll save time and resources through powerful self-service capabilities that allow your team to focus on care.'
    },
    {
      number: '02',
      title: 'Manage medical data',
      description: 'Streamline and consolidate patient data and test results via a central storage hub for seamless access that drives patient and physician satisfaction. Saving time on administrative tasks allows you to free up time to focus on delivering high-quality patient care.'
    },
    {
      number: '03',
      title: 'Automate to improve patient care',
      description: 'Reduce time spent on data collection, data processing and complex test result analysis with healthcare software development that lets you automate key stages of your lab testing, increasing the efficiency of clinical staff.'
    },
    {
      number: '04',
      title: 'Optimise costs and increase efficiency',
      description: 'We can help you introduce digitalisation into your core processes and workflows to simplify inventory tracking, eliminate waste, and increase resource allocation efficiency. With advanced analytics and intelligent automation, you\'ll enable more effective use of physicians\' time, reduce manual efforts, and optimise operational costs.'
    },
    {
      number: '05',
      title: 'Unlock the value of your data',
      description: 'Our data science healthcare solutions provide you with an all-seeing eye that allows you to deeply analyse clinical processes and patient insights – enabling personalised, preventative care.'
    },
    {
      number: '06',
      title: 'Keep sensitive patient information safe',
      description: 'Avoid the risks associated with data leakage and loss. With our tailored cybersecurity services, you can organise and store your patient data, enabling authorised access and streamlined data transactions.'
    }
  ];

  const technologies = [
    'Computer vision',
    'Data mining',
    'Medical recommendation systems',
    'Natural language processing',
    'Data Science and machine learning',
    'Internet of Things (IoT)',
    'Mixed, augmented and virtual reality'
  ];

  const computerVisionFeatures = [
    'Interactive medical imaging solutions',
    'Advanced diagnostics and screening applications',
    'Intelligent screening tools',
    'Medical staff training tools and simulators',
    'Lab tests automation solutions'
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
                Healthcare Software Development
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Transform patient care with advanced healthcare software solutions that improve clinical outcomes, streamline operations, and enhance patient experiences through digital innovation.
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
                src="/custom-healthcare-software-development-head-min.jpg" 
                alt="Healthcare Technology" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-emerald-600 mb-4">Our services</h2>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              The scope of our healthcare software development services
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
              We will help you implement and maintain a tailored, cost-effective technology solution that supports your business goals and best meets your patients' needs.
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
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                      <div className="w-6 h-6 bg-emerald-600 rounded"></div>
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
                      <button className="text-emerald-600 hover:text-emerald-700 inline-flex items-center">
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
              The value of custom healthcare software for your medical organisation
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
          <h2 className="text-3xl font-light text-gray-900 mb-8">
            Our technology expertise for the healthcare sector
          </h2>
          
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              We help healthcare institutions of all sizes and specialisms adopt digital transformations powered by data science, 
              <span className="text-blue-600"> IoT</span>, cloud, 
              <span className="text-blue-600"> VR/AR/MR</span> and other modern technologies. Implement advanced digital healthcare solutions to optimise patient 
              data capture and healthcare data management, facilitate clinical decision-making and automate time-consuming manual 
              processes so your medical professionals can provide more efficient clinical services and better care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className={`py-3 cursor-pointer ${index === 0 ? 'text-blue-600 font-medium flex items-center' : 'text-gray-900 font-medium'}`}
                >
                  {index === 0 && <ArrowRight className="mr-2 h-4 w-4" />}
                  {tech}
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-2 bg-gray-100 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900">Computer vision</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  {computerVisionFeatures.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div>
                  {computerVisionFeatures.slice(3).map((feature, index) => (
                    <div key={index} className="flex items-center mb-4">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;