import React from 'react';
import { ArrowRight, Shield, CheckCircle, Bug, Zap, Target, TestTube, Monitor, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const QualityAssurance = () => {
  const testingTypes = [
    {
      icon: TestTube,
      title: 'Functional Testing',
      description: 'Verify that software functions according to specified requirements and user expectations.',
      methods: ['Unit Testing', 'Integration Testing', 'System Testing', 'User Acceptance Testing']
    },
    {
      icon: Monitor,
      title: 'Performance Testing',
      description: 'Ensure optimal performance under various load conditions and stress scenarios.',
      methods: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Scalability Testing']
    },
    {
      icon: Settings,
      title: 'Automation Testing',
      description: 'Implement automated test suites for regression testing and continuous integration.',
      methods: ['API Testing', 'UI Testing', 'Regression Testing', 'Smoke Testing']
    }
  ];

  const tools = [
    { category: 'Test Automation', items: ['Selenium', 'Cypress', 'Playwright', 'TestComplete'] },
    { category: 'Performance', items: ['JMeter', 'LoadRunner', 'K6', 'Gatling'] },
    { category: 'API Testing', items: ['Postman', 'REST Assured', 'SoapUI', 'Insomnia'] },
    { category: 'Mobile Testing', items: ['Appium', 'Espresso', 'XCUITest', 'Detox'] }
  ];

  const benefits = [
    'Reduced software defects by up to 90%',
    'Faster time-to-market with early bug detection',
    'Improved user satisfaction and experience',
    'Lower maintenance costs post-deployment',
    'Enhanced software reliability and stability',
    'Compliance with industry quality standards'
  ];

  const qaProcess = [
    { phase: 'Test Planning', description: 'Develop comprehensive test strategies and plans based on project requirements.' },
    { phase: 'Test Design', description: 'Create detailed test cases and scenarios covering all functional areas.' },
    { phase: 'Test Execution', description: 'Execute manual and automated tests with detailed reporting and tracking.' },
    { phase: 'Defect Management', description: 'Identify, document, and track defects through resolution and verification.' }
  ];

  const qualityMetrics = [
    { metric: '90%', label: 'Defect Reduction' },
    { metric: '50%', label: 'Faster Testing' },
    { metric: '99%', label: 'Test Coverage' },
    { metric: '24/7', label: 'Monitoring' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Split with Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-50 rounded-full text-red-700 text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                Quality Assurance
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Ensure Software Excellence
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Ensure your software meets the highest quality standards with our comprehensive QA and testing services that deliver reliable, bug-free applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Start QA Project
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
            
            <div className="grid grid-cols-2 gap-6">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Audit Section */}
      <section id="software-audit" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Software Audit</h2>
            <p className="text-xl text-gray-600">Assess your software products and processes to mitigate risks and minimize revenue loss</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Software Assessment</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our software audit services provide a thorough evaluation of your software products, development processes, and quality practices to identify risks, inefficiencies, and opportunities for improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Code quality and architecture review</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Security vulnerability assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Performance and scalability analysis</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Development process evaluation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Audit Benefits</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
                  <div className="text-gray-600 text-sm">Risk Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Quality Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">30%</div>
                  <div className="text-gray-600 text-sm">Faster Delivery</div>
                </div>
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
              src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Quality Assurance Testing" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testing Types Section - Three Column */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing Services</h2>
            <p className="text-xl text-gray-600">Comprehensive testing services covering all aspects of software quality</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testingTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Testing Methods:</h4>
                  <ul className="space-y-2">
                    {type.methods.map((method, methodIndex) => (
                      <li key={methodIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section - Grid Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Testing Tools & Technologies</h2>
            <p className="text-lg text-gray-600">Industry-leading tools for comprehensive testing</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tool.category}</h3>
                <div className="space-y-2">
                  {tool.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-sm text-gray-600 py-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Software Testing Team" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* QA Process Section - Horizontal Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our QA Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to quality assurance</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {qaProcess.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.phase}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">QA Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Quality assurance delivers measurable improvements in software reliability and user satisfaction.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Ensure Quality?</h3>
              <p className="text-gray-600 mb-6">
                Let us help you deliver high-quality software with our comprehensive QA and testing services.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start QA Testing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityAssurance;