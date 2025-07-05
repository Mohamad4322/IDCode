import React from 'react';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Monitor, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const CyberSecurity = () => {
  const securityServices = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive evaluation of your current security posture and identification of vulnerabilities.',
      features: ['Vulnerability Scanning', 'Risk Assessment', 'Compliance Audit', 'Security Gap Analysis']
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Ethical hacking services to identify and exploit security weaknesses before malicious actors do.',
      features: ['Network Testing', 'Web Application Testing', 'Social Engineering', 'Wireless Security']
    },
    {
      icon: Monitor,
      title: 'Security Monitoring',
      description: '24/7 security monitoring and incident response to protect against cyber threats.',
      features: ['SIEM Implementation', 'Threat Detection', 'Incident Response', 'Security Analytics']
    }
  ];

  const threats = [
    { name: 'Malware & Ransomware', impact: 'High', frequency: 'Daily' },
    { name: 'Phishing Attacks', impact: 'Medium', frequency: 'Hourly' },
    { name: 'Data Breaches', impact: 'Critical', frequency: 'Weekly' },
    { name: 'Insider Threats', impact: 'High', frequency: 'Monthly' }
  ];

  const benefits = [
    'Proactive threat identification and mitigation',
    'Compliance with industry security standards',
    'Reduced risk of data breaches and cyber attacks',
    'Enhanced customer trust and brand reputation',
    'Cost savings from prevented security incidents',
    '24/7 security monitoring and support'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Cyber Security
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Protect Your Digital Infrastructure
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Proactively identify threats to your digital infrastructure and futureproof your IT ecosystem with comprehensive cybersecurity solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get Security Assessment
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Threat Landscape</h3>
              <div className="space-y-4">
                {threats.map((threat, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">{threat.name}</h4>
                      <p className="text-sm text-gray-600">Frequency: {threat.frequency}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      threat.impact === 'Critical' ? 'bg-red-100 text-red-800' :
                      threat.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {threat.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cybersecurity solutions to protect your business</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-red-600" />
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive cybersecurity delivers measurable protection and peace of mind for your business.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Secure Your Business?</h3>
              <p className="text-gray-600 mb-6">
                Protect your digital infrastructure with our comprehensive cybersecurity solutions.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start Security Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CyberSecurity;