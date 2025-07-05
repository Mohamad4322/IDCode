import React from 'react';
import { ArrowRight, Hotel, CheckCircle, Users, Clock, Globe, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hospitality = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced guest experience',
      description: 'Deliver personalized, seamless guest experiences across all touchpoints with digital solutions that anticipate needs and streamline interactions.'
    },
    {
      number: '02',
      title: 'Operational efficiency',
      description: 'Optimize staff productivity, resource allocation, and service delivery through automation and intelligent workflow management.'
    },
    {
      number: '03',
      title: 'Revenue optimization',
      description: 'Maximize revenue with dynamic pricing, upselling opportunities, and personalized offers based on guest preferences and market conditions.'
    },
    {
      number: '04',
      title: 'Data-driven insights',
      description: 'Leverage comprehensive analytics to understand guest behavior, operational performance, and market trends for strategic decision-making.'
    },
    {
      number: '05',
      title: 'Competitive differentiation',
      description: 'Stand out in the market with innovative digital experiences and services that create memorable stays and build brand loyalty.'
    },
    {
      number: '06',
      title: 'Cost reduction',
      description: 'Reduce operational costs through process automation, energy management, and optimized resource utilization across your property.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Property Management Systems',
      description: 'Comprehensive PMS solutions that integrate reservations, front desk operations, housekeeping, maintenance, and reporting in a single platform for streamlined hotel management.'
    },
    {
      number: '02',
      title: 'Guest Experience Platforms',
      description: 'Digital platforms that enhance the guest journey from pre-arrival to post-stay with mobile check-in/out, digital room keys, in-room controls, and personalized communication.'
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
                Hospitality Technology Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Implement tailored hospitality solutions designed to maximize revenue and guest satisfaction while streamlining operations and creating memorable experiences.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hospitality Technology" 
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
            What you get with ID Code's hospitality software development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's hospitality technology solutions empower hotels, resorts, and restaurants to deliver <strong>exceptional guest experiences, operational excellence, and revenue growth</strong>. This <strong>digital transformation of hospitality operations</strong> enhances guest satisfaction and operational efficiency, enabling greater competitive advantage and profitability along with <strong>enhanced guest personalization</strong> and <strong>streamlined property management</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced property management systems and guest experience platforms</strong> ensure optimal service delivery and guest satisfaction, while <strong>data analytics and revenue management tools</strong> help maximize occupancy and pricing strategies. With robust security measures for guest data protection, our solutions allow you to focus on delivering <strong>memorable hospitality experiences</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Hospitality Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help hotels, resorts, and restaurants
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
              The value of hospitality technology for your business
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
            Our hospitality sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Hotel className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Property Management</h3>
              <p className="text-gray-600 mb-4">Comprehensive property management systems that integrate all aspects of hotel operations for streamlined management and enhanced guest service.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Reservations management</li>
                <li>• Front desk operations</li>
                <li>• Housekeeping coordination</li>
                <li>• Maintenance tracking</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guest Experience</h3>
              <p className="text-gray-600 mb-4">Digital solutions that enhance the guest journey from booking to post-stay engagement, creating memorable experiences and building loyalty.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Mobile check-in/out</li>
                <li>• Digital room keys</li>
                <li>• In-room technology</li>
                <li>• Guest communication platforms</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Distribution & Revenue</h3>
              <p className="text-gray-600 mb-4">Intelligent systems for optimizing distribution channels, pricing strategies, and revenue management to maximize profitability.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Channel management</li>
                <li>• Dynamic pricing</li>
                <li>• Revenue forecasting</li>
                <li>• Competitive analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;