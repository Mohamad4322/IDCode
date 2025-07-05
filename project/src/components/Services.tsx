import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and cloud infrastructure.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused', 'Scalable Architecture']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['Cross-Platform', 'Native Performance', 'App Store Optimization', 'Push Notifications']
    },
    {
      icon: Database,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise software systems that streamline operations and boost productivity.',
      features: ['Custom ERP Systems', 'Data Analytics', 'Process Automation', 'Integration Services']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to modernize your technology stack.',
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Microservices', 'Container Orchestration']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes.',
      features: ['Process Optimization', 'Legacy Modernization', 'API Development', 'System Integration']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive software development services designed to meet your unique business needs and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-blue-600 font-semibold flex items-center group-hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;