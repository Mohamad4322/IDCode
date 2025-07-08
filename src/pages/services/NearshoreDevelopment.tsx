import React from 'react';
import { ArrowRight, Globe, Users, Clock, DollarSign, CheckCircle, MapPin, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const NearshoreDevelopment = () => {
  const nearshoreBenefits = [
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Reduce development costs by 30-50% while maintaining high quality standards.',
      features: ['Competitive Rates', 'No Hidden Costs', 'Flexible Pricing', 'Value for Money']
    },
    {
      icon: Clock,
      title: 'Time Zone Alignment',
      description: 'Work with teams in similar time zones for better collaboration and communication.',
      features: ['Real-time Communication', 'Overlapping Hours', 'Faster Response', 'Live Collaboration']
    },
    {
      icon: Users,
      title: 'Skilled Talent Pool',
      description: 'Access to highly skilled developers and technical experts in various technologies.',
      features: ['Expert Developers', 'Latest Technologies', 'Proven Experience', 'Continuous Learning']
    }
  ];

  const services = [
    'Full-Stack Development',
    'Mobile App Development',
    'Cloud Solutions',
    'DevOps Services',
    'Quality Assurance',
    'UI/UX Design',
    'Data Analytics',
    'AI/ML Development'
  ];

  const advantages = [
    'Cultural and language compatibility',
    'Reduced communication barriers',
    'Similar business practices and work ethics',
    'Easier project management and coordination',
    'Higher quality deliverables and standards',
    'Long-term partnership opportunities'
  ];

  const technologies = [
    'React', 'Node.js', 'Python', 'Java',
    'Angular', 'Vue.js', '.NET', 'PHP',
    'AWS', 'Azure', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Redis'
  ];

  const process = [
    { step: 'Discovery', description: 'Understand your project requirements and business objectives.' },
    { step: 'Team Assembly', description: 'Assemble the right team with the skills needed for your project.' },
    { step: 'Development', description: 'Execute development using agile methodologies and best practices.' },
    { step: 'Delivery', description: 'Deliver high-quality software on time and within budget.' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Nearshore Development
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Trusted Nearshore Software Development
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Partner with a trusted nearshore software development company to deliver your software project with cost efficiency, quality, and seamless collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start Your Project
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nearshore Advantages</h2>
            <p className="text-xl text-gray-600">Why choose nearshore development for your next project</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {nearshoreBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Development Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive nearshore development services covering all aspects of software development.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center py-3 px-4 bg-white rounded-lg border border-gray-200"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Nearshore?</h3>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
          <p className="text-lg text-gray-600 mb-12">Expertise in modern technologies and frameworks</p>
          
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">Streamlined process for successful nearshore development</p>
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nearshore Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us for cost-effective, high-quality software development that delivers results.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NearshoreDevelopment;