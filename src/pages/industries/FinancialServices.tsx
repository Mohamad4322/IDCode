import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinancialServices = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced Risk Management',
      description: 'Implement advanced risk assessment algorithms and real-time monitoring systems to identify and mitigate financial risks before they impact your operations.'
    },
    {
      number: '02',
      title: 'Regulatory Compliance',
      description: 'Stay compliant with evolving financial regulations through automated compliance monitoring, reporting systems, and audit trail capabilities.'
    },
    {
      number: '03',
      title: 'Customer Experience Optimization',
      description: 'Deliver personalized financial services through AI-powered recommendations, streamlined onboarding, and omnichannel customer support.'
    },
    {
      number: '04',
      title: 'Operational Efficiency',
      description: 'Automate manual processes, reduce operational costs, and improve transaction processing speed through intelligent automation and workflow optimization.'
    },
    {
      number: '05',
      title: 'Data-Driven Insights',
      description: 'Leverage big data analytics and machine learning to gain actionable insights into customer behavior, market trends, and business performance.'
    },
    {
      number: '06',
      title: 'Fraud Prevention',
      description: 'Protect your institution and customers with advanced fraud detection systems that use AI and machine learning to identify suspicious activities in real-time.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Digital Banking Platforms',
      description: 'Comprehensive digital banking solutions that provide seamless customer experiences across web and mobile platforms, enabling 24/7 banking services with advanced security features.'
    },
    {
      number: '02',
      title: 'Payment Processing Systems',
      description: 'Secure, scalable payment processing infrastructure that handles high-volume transactions with real-time fraud detection and multi-currency support for global operations.'
    }
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
                Financial Software Development
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                We help the financial services sector manage risk and unlock Big Data's potential — with advanced analytics, Machine Learning and more.
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
                src="/financial-software-development-head.jpg" 
                alt="Financial Technology" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's financial software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code is a <strong>reliable software development partner trusted by global financial enterprises</strong> and <strong>world-renowned banks</strong>. Our financial software development services empower financial institutions to deliver <strong>industry-leading services</strong> with <strong>enhanced operational efficiency, reduced transaction costs, and streamlined risk management</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              With decades of experience in the <strong>finance sector</strong> and strong expertise in <strong>data science, AI, and cybersecurity</strong>, we deliver custom <strong>data-driven fintech solutions</strong> that enable <strong>efficient decision-making</strong> and the management of complex financial risks. Additionally, our <strong>MVP development service</strong> and <strong>in-house R&D lab</strong> allow financial institutions to <strong>validate ideas and test new technologies</strong> before making significant investments.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Solutions Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help financial institutions and fintech companies
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
              <div key={solution.number} className="bg-white border border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-emerald-600 font-medium mb-2">{solution.number}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
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
              The value of custom financial software for your organization
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
    </div>
  );
};

export default FinancialServices;