import React from 'react';
import { ArrowRight, Shield, CheckCircle, Database, Clock, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insurance = () => {
  const benefits = [
    {
      number: '01',
      title: 'Accelerated claims processing',
      description: 'Streamline claims handling with automated workflows, digital document management, and real-time status tracking that reduces processing time and improves customer satisfaction.'
    },
    {
      number: '02',
      title: 'Enhanced risk assessment',
      description: 'Improve underwriting accuracy with AI-powered risk models, predictive analytics, and comprehensive data analysis that optimizes pricing and reduces losses.'
    },
    {
      number: '03',
      title: 'Fraud detection and prevention',
      description: 'Identify suspicious patterns and potential fraud with advanced analytics, machine learning algorithms, and real-time monitoring systems.'
    },
    {
      number: '04',
      title: 'Customer experience optimization',
      description: 'Deliver personalized insurance services through digital self-service portals, mobile applications, and omnichannel communication platforms.'
    },
    {
      number: '05',
      title: 'Operational efficiency',
      description: 'Automate routine tasks, streamline workflows, and optimize resource allocation to reduce operational costs and improve productivity.'
    },
    {
      number: '06',
      title: 'Regulatory compliance',
      description: 'Ensure adherence to evolving insurance regulations with automated compliance monitoring, reporting systems, and audit trail capabilities.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Claims Management Systems',
      description: 'End-to-end digital claims processing platforms that streamline the entire claims lifecycle from first notice of loss to settlement and payment.'
    },
    {
      number: '02',
      title: 'Underwriting Platforms',
      description: 'Intelligent underwriting solutions that leverage data analytics, AI, and automation to improve risk assessment accuracy and efficiency.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 border border-gray-400 rounded-full mr-3"></div>
                <span className="text-gray-600 text-sm">Industry</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Insurance Software Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Adopt data-driven insurance software solutions boosting efficiency, profitability, and security in your sector while enhancing customer experiences.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7821702/pexels-photo-7821702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Insurance Technology" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's insurance software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's insurance software solutions empower insurance companies to deliver <strong>efficient claims processing, accurate risk assessment, and exceptional customer experiences</strong>. This <strong>digital transformation of insurance operations</strong> reduces processing times and improves underwriting accuracy, enabling greater profitability and customer satisfaction along with <strong>enhanced fraud detection</strong> and <strong>streamlined compliance management</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced claims management systems and underwriting platforms</strong> ensure optimal processing efficiency and risk assessment accuracy, while <strong>AI-powered fraud detection and customer portals</strong> help protect against losses and improve service delivery. With robust security measures for sensitive policyholder data protection, our solutions allow you to focus on delivering <strong>superior insurance services</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help insurance companies and insurtech startups
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
              <div key={solution.number} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-blue-600 font-medium mb-2">{solution.number}</div>
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
              The value of insurance software solutions for your business
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="border-t-2 border-blue-600 pt-6">
                <div className="text-blue-600 font-medium mb-2">{benefit.number}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            Our insurance sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process Automation</h3>
              <p className="text-gray-600 mb-4">Streamline insurance operations with intelligent automation that reduces manual tasks and accelerates processing times.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Claims processing automation</li>
                <li>• Policy administration</li>
                <li>• Document management</li>
                <li>• Workflow optimization</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Analytics & AI</h3>
              <p className="text-gray-600 mb-4">Leverage advanced analytics and artificial intelligence to improve risk assessment, fraud detection, and customer insights.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Predictive analytics</li>
                <li>• Risk modeling</li>
                <li>• Fraud detection algorithms</li>
                <li>• Customer behavior analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Customer Experience</h3>
              <p className="text-gray-600 mb-4">Create seamless digital experiences for policyholders with self-service portals, mobile apps, and personalized interactions.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Customer portals</li>
                <li>• Mobile applications</li>
                <li>• Chatbots and virtual assistants</li>
                <li>• Personalization engines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;