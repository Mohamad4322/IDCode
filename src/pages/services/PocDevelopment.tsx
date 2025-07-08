import React from 'react';
import { ArrowRight, TestTube, CheckCircle, Target, Zap, Users, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PocDevelopment = () => {
  const benefits = [
    {
      number: '01',
      title: 'Risk mitigation',
      description: 'Validate business concepts and technical feasibility before making significant investments, reducing project risks and potential losses.'
    },
    {
      number: '02',
      title: 'Faster validation',
      description: 'Quickly test and validate ideas with minimal time and resource investment, enabling rapid decision-making and market entry.'
    },
    {
      number: '03',
      title: 'Stakeholder buy-in',
      description: 'Demonstrate concept viability to stakeholders and investors with tangible prototypes that showcase potential value and impact.'
    },
    {
      number: '04',
      title: 'Technical insights',
      description: 'Gain valuable technical insights and identify potential challenges early in the development process for better planning.'
    },
    {
      number: '05',
      title: 'Market validation',
      description: 'Test market demand and user acceptance before full-scale development, ensuring product-market fit and user satisfaction.'
    },
    {
      number: '06',
      title: 'Cost optimization',
      description: 'Optimize development costs by identifying the most viable approach and avoiding expensive mistakes in full-scale development.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Technical Proof of Concept',
      description: 'Validate technical feasibility and architecture decisions with focused prototypes that demonstrate core functionality and performance capabilities.'
    },
    {
      number: '02',
      title: 'Business Proof of Concept',
      description: 'Test business models and value propositions with market-ready prototypes that validate commercial viability and user acceptance.'
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
                <span className="text-gray-600 text-sm">Service</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Proof of Concept Development
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Safely explore business-boosting concepts with robust testing and expert road mapping to validate ideas before full-scale development.
              </p>
              
              <Link to="/contact" className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Proof of Concept Development" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Feasibility Section */}
      <section id="technical-feasibility" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Feasibility Study</h2>
            <p className="text-xl text-gray-600">Explore new technologies and their potential for your business before making an investment</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Assessment</h3>
              <p className="text-gray-600 mb-4">Comprehensive evaluation of emerging technologies and their applicability to your business needs.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technology stack evaluation</li>
                <li>• Performance benchmarking</li>
                <li>• Scalability analysis</li>
                <li>• Integration compatibility</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Analysis</h3>
              <p className="text-gray-600 mb-4">Identify potential technical risks and challenges before committing to full development.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technical risk assessment</li>
                <li>• Implementation complexity</li>
                <li>• Resource requirements</li>
                <li>• Timeline estimation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Projection</h3>
              <p className="text-gray-600 mb-4">Calculate potential return on investment and business impact of technology adoption.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Cost-benefit analysis</li>
                <li>• Performance improvements</li>
                <li>• Efficiency gains</li>
                <li>• Competitive advantages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's PoC development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's proof of concept development services empower businesses to <strong>validate innovative ideas, reduce development risks, and make informed investment decisions</strong>. This <strong>strategic approach to concept validation</strong> minimizes financial exposure while maximizing learning and insight generation along with <strong>enhanced stakeholder confidence</strong> and <strong>streamlined development planning</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>rapid prototyping methodologies and expert technical assessment</strong> ensure comprehensive concept validation and feasibility analysis, while <strong>market research and user testing capabilities</strong> help validate commercial viability and user acceptance. With detailed documentation and roadmapping, our solutions allow you to focus on making <strong>data-driven development decisions</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* PoC Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help innovators and businesses
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
              The value of proof of concept development for your innovation
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
    </div>
  );
};

export default PocDevelopment;