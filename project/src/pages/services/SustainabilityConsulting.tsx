import React from 'react';
import { ArrowRight, Leaf, Recycle, TrendingDown, BarChart3, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const SustainabilityConsulting = () => {
  const sustainabilityServices = [
    {
      icon: Target,
      title: 'Net-Zero Strategy',
      description: 'Develop comprehensive strategies to achieve net-zero emissions and carbon neutrality goals.',
      features: ['Carbon Footprint Assessment', 'Emission Reduction Planning', 'Offset Strategies', 'Progress Monitoring']
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Transform business models to embrace circular economy principles and reduce waste.',
      features: ['Waste Reduction Programs', 'Resource Optimization', 'Circular Design', 'Supply Chain Transformation']
    },
    {
      icon: BarChart3,
      title: 'ESG Reporting',
      description: 'Implement comprehensive ESG reporting frameworks and sustainability metrics.',
      features: ['ESG Framework Development', 'Sustainability Metrics', 'Compliance Reporting', 'Stakeholder Communication']
    }
  ];

  const benefits = [
    'Achieve net-zero emissions and sustainability goals',
    'Reduce operational costs through efficiency improvements',
    'Enhanced brand reputation and stakeholder trust',
    'Compliance with environmental regulations',
    'Access to green financing and investment opportunities',
    'Competitive advantage in sustainable markets'
  ];

  const metrics = [
    { value: '30%', label: 'Average Cost Reduction' },
    { value: '50%', label: 'Waste Reduction' },
    { value: '40%', label: 'Energy Efficiency Gain' },
    { value: '25%', label: 'Carbon Footprint Reduction' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
              <Leaf className="h-4 w-4 mr-2" />
              Sustainability Consulting
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Reach Your Net-Zero Goals
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Reach your net-zero goals and seize new, sustainable business growth opportunities with our comprehensive sustainability consulting services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start Sustainability Journey
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sustainability Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for sustainable business transformation</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {sustainabilityServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-green-600" />
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Sustainability Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Sustainability consulting delivers measurable environmental and business benefits.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Go Sustainable?</h3>
              <p className="text-gray-600 mb-6">
                Transform your business with sustainable practices that drive growth and environmental impact.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start Sustainability Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SustainabilityConsulting;