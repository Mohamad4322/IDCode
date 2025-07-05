import React from 'react';
import { ArrowRight, Cloud, CheckCircle, Zap, Shield, Globe, Database, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const CloudSolutions = () => {
  const cloudServices = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with minimal downtime.',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Testing & Validation']
    },
    {
      icon: Settings,
      title: 'Infrastructure Management',
      description: 'Complete cloud infrastructure setup, monitoring, and optimization services.',
      features: ['Infrastructure as Code', 'Auto Scaling', 'Load Balancing', 'Disaster Recovery']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance with industry standards.',
      features: ['Identity Management', 'Data Encryption', 'Compliance Monitoring', 'Security Audits']
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', services: ['EC2', 'S3', 'RDS', 'Lambda'] },
    { name: 'Microsoft Azure', services: ['Virtual Machines', 'Blob Storage', 'SQL Database', 'Functions'] },
    { name: 'Google Cloud Platform', services: ['Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions'] }
  ];

  const benefits = [
    'Reduce IT infrastructure costs by up to 30%',
    'Improve scalability and flexibility',
    'Enhanced security and compliance',
    'Faster deployment and time-to-market',
    '99.9% uptime and reliability',
    '24/7 monitoring and support'
  ];

  const migrationSteps = [
    { title: 'Assessment', description: 'Evaluate current infrastructure and create migration strategy' },
    { title: 'Planning', description: 'Design cloud architecture and migration timeline' },
    { title: 'Migration', description: 'Execute migration with minimal business disruption' },
    { title: 'Optimization', description: 'Optimize performance and costs post-migration' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Asymmetric Layout */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Cloud className="h-4 w-4 mr-2" />
                Cloud Solutions & Migration
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Scale Your Business with Cloud Technology
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with scalable, secure, and cost-effective cloud solutions. We help you migrate, optimize, and manage your cloud infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Start Migration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Benefits</h3>
              <div className="space-y-3">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cloud Computing" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section - Large Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Services</h2>
            <p className="text-lg text-gray-600">Comprehensive cloud solutions for modern businesses</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 border border-gray-200"
              >
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6 text-gray-700" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section - Simple Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Cloud Expertise</h2>
            <p className="text-lg text-gray-600">We work with leading cloud providers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cloudProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{provider.name}</h3>
                <div className="space-y-2">
                  {provider.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="text-sm text-gray-600 py-1">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cloud Infrastructure" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Migration Process Section - Horizontal Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Migration Process</h2>
            <p className="text-lg text-gray-600">Proven methodology for smooth cloud migration</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your cloud migration strategy and create a solution that drives your business forward.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Start Your Migration
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CloudSolutions;