import React from 'react';
import { ArrowRight, Headphones, Clock, Users, Wrench, CheckCircle, Monitor, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support = () => {
  const supportServices = [
    {
      icon: Headphones,
      title: '24/7 Technical Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly at all times.',
      features: ['24/7 Availability', 'Multi-channel Support', 'Expert Technicians', 'Priority Response']
    },
    {
      icon: Wrench,
      title: 'System Maintenance',
      description: 'Proactive system maintenance to prevent issues and optimize performance.',
      features: ['Preventive Maintenance', 'Performance Optimization', 'Security Updates', 'System Monitoring']
    },
    {
      icon: Monitor,
      title: 'Remote Monitoring',
      description: 'Continuous monitoring of your IT infrastructure to detect and resolve issues proactively.',
      features: ['Real-time Monitoring', 'Automated Alerts', 'Performance Analytics', 'Incident Management']
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      response: '4-8 hours',
      availability: 'Business Hours',
      channels: ['Email', 'Phone'],
      price: 'Standard'
    },
    {
      name: 'Premium Support',
      response: '1-2 hours',
      availability: '24/7',
      channels: ['Email', 'Phone', 'Chat'],
      price: 'Premium'
    },
    {
      name: 'Enterprise Support',
      response: '15-30 minutes',
      availability: '24/7',
      channels: ['Email', 'Phone', 'Chat', 'Dedicated Manager'],
      price: 'Enterprise'
    }
  ];

  const benefits = [
    'Reduced downtime and system interruptions',
    'Faster issue resolution and response times',
    'Proactive problem prevention and monitoring',
    'Expert technical guidance and consultation',
    'Cost-effective IT support and maintenance',
    'Improved system performance and reliability'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Headphones className="h-4 w-4 mr-2" />
                IT Support Services
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Expert IT Support When You Need It
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Efficiently handle technical issues and system changes with our comprehensive IT support services that keep your business running smoothly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Support Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Support Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15min</div>
                  <div className="text-gray-600 text-sm">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">First Call Resolution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Services</h2>
            <p className="text-xl text-gray-600">Comprehensive IT support solutions for your business needs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
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
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
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

      {/* Support Levels Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Levels</h2>
            <p className="text-lg text-gray-600">Choose the support level that fits your business needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 border-2 ${
                  index === 1 ? 'border-blue-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{level.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{level.response}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="font-medium">{level.availability}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Channels:</span>
                    <div className="mt-1">
                      {level.channels.map((channel, channelIndex) => (
                        <span key={channelIndex} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mb-1">
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <span className={`px-4 py-2 rounded-lg font-medium ${
                    index === 1 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {level.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Support Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Professional IT support delivers measurable improvements in system reliability and business continuity.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Immediate Support?</h3>
              <p className="text-gray-600 mb-6">
                Get expert IT support and ensure your systems run smoothly with our comprehensive support services.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Contact Support Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;