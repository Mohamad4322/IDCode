import React from 'react';
import { ArrowRight, TrendingDown, DollarSign, BarChart3, Target, CheckCircle, Cloud, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinOps = () => {
  const finopsServices = [
    {
      icon: BarChart3,
      title: 'Cost Optimization',
      description: 'Identify and eliminate cloud waste while optimizing resource allocation for maximum efficiency.',
      features: ['Resource Right-sizing', 'Reserved Instance Planning', 'Spot Instance Strategy', 'Unused Resource Cleanup']
    },
    {
      icon: Monitor,
      title: 'Cost Monitoring',
      description: 'Real-time monitoring and alerting for cloud spending with detailed cost breakdowns.',
      features: ['Real-time Dashboards', 'Budget Alerts', 'Cost Anomaly Detection', 'Spend Forecasting']
    },
    {
      icon: Target,
      title: 'Governance & Policies',
      description: 'Implement governance frameworks and policies to control cloud spending and usage.',
      features: ['Tagging Strategies', 'Budget Controls', 'Approval Workflows', 'Cost Allocation']
    }
  ];

  const benefits = [
    'Reduce cloud costs by 20-40% on average',
    'Improved visibility into cloud spending patterns',
    'Better resource utilization and efficiency',
    'Predictable and controlled cloud budgets',
    'Enhanced collaboration between teams',
    'Faster decision-making with real-time insights'
  ];

  const metrics = [
    { value: '35%', label: 'Average Cost Reduction' },
    { value: '90%', label: 'Visibility Improvement' },
    { value: '50%', label: 'Faster Optimization' },
    { value: '24/7', label: 'Continuous Monitoring' }
  ];

  const process = [
    { step: 'Assess', description: 'Analyze current cloud spending and identify optimization opportunities.' },
    { step: 'Optimize', description: 'Implement cost optimization strategies and right-size resources.' },
    { step: 'Monitor', description: 'Set up continuous monitoring and alerting for ongoing cost management.' },
    { step: 'Govern', description: 'Establish policies and processes for sustainable cost management.' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
              <TrendingDown className="h-4 w-4 mr-2" />
              FinOps Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Maximize Cloud Infrastructure Value
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Get expert guidance to maximize your cloud infrastructure value, optimize costs, and boost ROI with comprehensive FinOps practices.
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
                Start Cost Optimization
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FinOps Services</h2>
            <p className="text-xl text-gray-600">Comprehensive cloud financial management solutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {finopsServices.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">FinOps Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to cloud financial management</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FinOps Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                FinOps practices deliver measurable cost savings and improved cloud financial management.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Optimize Cloud Costs?</h3>
              <p className="text-gray-600 mb-6">
                Start your FinOps journey and maximize the value of your cloud infrastructure investments.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start FinOps Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinOps;