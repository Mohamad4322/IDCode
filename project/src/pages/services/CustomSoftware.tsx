import React from 'react';
import { ArrowRight, Code, CheckCircle, Users, Clock, Target, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
  const features = [
    {
      icon: Code,
      title: 'Tailored Solutions',
      description: 'Custom-built software designed specifically for your business requirements and workflows.'
    },
    {
      icon: Zap,
      title: 'Scalable Architecture',
      description: 'Future-proof solutions that grow with your business and adapt to changing needs.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated developers with deep expertise in modern technologies and best practices.'
    },
    {
      icon: Target,
      title: 'Business Focus',
      description: 'Solutions aligned with your business goals and designed to drive measurable results.'
    }
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Angular', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', '.NET'] },
    { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker'] }
  ];

  const process = [
    { step: '01', title: 'Requirements Analysis', description: 'Deep dive into your business needs and technical requirements.' },
    { step: '02', title: 'Solution Design', description: 'Create detailed technical specifications and architecture.' },
    { step: '03', title: 'Development', description: 'Agile development with regular demos and feedback.' },
    { step: '04', title: 'Testing & Deployment', description: 'Comprehensive testing and smooth deployment process.' }
  ];

  const benefits = [
    'Increased operational efficiency by up to 40%',
    'Reduced manual processes and human errors',
    'Better data insights and reporting capabilities',
    'Improved customer experience and satisfaction',
    'Competitive advantage through unique features',
    'Long-term cost savings and ROI'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Clean Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-6">
              <Code className="h-4 w-4 mr-2" />
              Custom Software Development
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Build Software That Fits Your Business Perfectly
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with tailor-made software solutions designed to meet your specific requirements and drive operational excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Applications Section */}
      <section id="enterprise-applications" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enterprise Applications</h2>
            <p className="text-xl text-gray-600">Comprehensive enterprise software systems that streamline operations and boost productivity</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ERP & CRM Consulting</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our enterprise application development focuses on creating robust ERP and CRM systems that integrate seamlessly with your existing business processes and drive operational efficiency.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">ERP Consulting</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Resource planning optimization</li>
                    <li>• Financial management integration</li>
                    <li>• Supply chain automation</li>
                    <li>• Real-time reporting dashboards</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">CRM Consulting</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Customer relationship management</li>
                    <li>• Sales pipeline automation</li>
                    <li>• Marketing campaign integration</li>
                    <li>• Customer analytics and insights</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Enterprise Benefits</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Streamlined business processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Improved data visibility and reporting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Enhanced customer relationships</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Scalable enterprise architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Integration with existing systems</span>
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
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Custom Software Development" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section - Grid Layout */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Custom Software?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Off-the-shelf solutions can't address your unique business challenges. Our custom development ensures perfect alignment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Simple Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-lg text-gray-600">Modern, proven technologies for robust solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
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

      {/* Process Section - Horizontal Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-lg text-gray-600">A proven methodology for successful project delivery</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
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
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss your requirements and create a software solution that perfectly fits your business needs.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftware;