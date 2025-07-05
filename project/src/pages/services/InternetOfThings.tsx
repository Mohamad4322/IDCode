import React from 'react';
import { ArrowRight, Wifi, Smartphone, Database, Zap, CheckCircle, Monitor, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternetOfThings = () => {
  const iotServices = [
    {
      icon: Cpu,
      title: 'IoT Device Development',
      description: 'Custom IoT devices and sensors designed for your specific business requirements.',
      features: ['Hardware Design', 'Firmware Development', 'Sensor Integration', 'Connectivity Solutions']
    },
    {
      icon: Database,
      title: 'IoT Platform Development',
      description: 'Comprehensive IoT platforms for device management, data collection, and analytics.',
      features: ['Device Management', 'Data Processing', 'Real-time Analytics', 'Cloud Integration']
    },
    {
      icon: Monitor,
      title: 'IoT Analytics',
      description: 'Advanced analytics and machine learning for IoT data to drive business insights.',
      features: ['Predictive Analytics', 'Anomaly Detection', 'Performance Monitoring', 'Business Intelligence']
    }
  ];

  const applications = [
    { industry: 'Smart Manufacturing', use: 'Predictive maintenance and production optimization' },
    { industry: 'Smart Cities', use: 'Traffic management and environmental monitoring' },
    { industry: 'Healthcare', use: 'Remote patient monitoring and medical device connectivity' },
    { industry: 'Agriculture', use: 'Precision farming and crop monitoring systems' },
    { industry: 'Retail', use: 'Inventory tracking and customer behavior analytics' },
    { industry: 'Energy', use: 'Smart grid management and energy optimization' }
  ];

  const benefits = [
    'Improved operational efficiency and automation',
    'Real-time monitoring and data-driven insights',
    'Reduced operational costs and waste',
    'Enhanced customer experiences and services',
    'Predictive maintenance and reduced downtime',
    'Better resource utilization and optimization'
  ];

  const technologies = [
    'Arduino', 'Raspberry Pi', 'ESP32', 'LoRaWAN',
    'MQTT', 'CoAP', 'Zigbee', 'Bluetooth LE',
    'AWS IoT', 'Azure IoT', 'Google Cloud IoT', 'Node-RED'
  ];

  const metrics = [
    { value: '40%', label: 'Efficiency Improvement' },
    { value: '30%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Monitoring' },
    { value: '99%', label: 'Uptime' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Wifi className="h-4 w-4 mr-2" />
              Internet of Things
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Connect Everything, Optimize Everything
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Embrace the potential of IoT for better efficiency, smoother collaboration and powerful data insights that transform your business operations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start IoT Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IoT Services</h2>
            <p className="text-xl text-gray-600">End-to-end IoT solutions for connected business transformation</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {iotServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-3" />
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

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IoT Applications</h2>
            <p className="text-lg text-gray-600">IoT solutions across various industries and use cases</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{app.industry}</h3>
                <p className="text-gray-600 text-sm">{app.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IoT Technologies</h2>
          <p className="text-lg text-gray-600 mb-12">Cutting-edge IoT platforms and technologies</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">IoT Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                IoT solutions deliver measurable improvements in efficiency, cost savings, and business insights.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Connect Your Business?</h3>
              <p className="text-gray-600 mb-6">
                Transform your operations with IoT solutions that provide real-time insights and automation.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start IoT Implementation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternetOfThings;