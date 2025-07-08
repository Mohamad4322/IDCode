import React from 'react';
import { ArrowRight, Zap, Target, Cog, TrendingUp, CheckCircle, BarChart3, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalTransformation = () => {
  const transformationAreas = [
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      impact: '40% efficiency increase'
    },
    {
      icon: BarChart3,
      title: 'Data & Analytics',
      description: 'Transform your data into actionable insights for better decision making.',
      impact: '60% faster decisions'
    },
    {
      icon: Settings,
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, efficient digital solutions.',
      impact: '50% cost reduction'
    },
    {
      icon: Users,
      title: 'Digital Culture',
      description: 'Build digital-first mindset and capabilities across your organization.',
      impact: '70% adoption rate'
    }
  ];

  const services = [
    'Digital Strategy Development',
    'Process Analysis & Optimization',
    'Technology Assessment',
    'Legacy System Modernization',
    'Cloud Migration',
    'Data Platform Implementation',
    'Automation Solutions',
    'Change Management'
  ];

  const industries = [
    { name: 'Manufacturing', description: 'Smart factory solutions and IoT integration' },
    { name: 'Healthcare', description: 'Digital health platforms and patient management' },
    { name: 'Financial Services', description: 'Fintech solutions and digital banking' },
    { name: 'Retail', description: 'E-commerce platforms and customer analytics' }
  ];

  const benefits = [
    'Increased operational efficiency by up to 40%',
    'Reduced manual processes and human errors',
    'Enhanced customer experience and satisfaction',
    'Improved data-driven decision making',
    'Better scalability and flexibility',
    'Competitive advantage in digital markets'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Split Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-700 text-sm font-medium mb-6">
                <Zap className="h-4 w-4 mr-2" />
                Digital Transformation
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Modernize Your Business for the Digital Age
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with comprehensive digital solutions that drive efficiency, innovation, and growth in today's competitive landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Start Transformation
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
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Transformation Impact</h3>
              <div className="space-y-6">
                {transformationAreas.map((area, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <area.icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{area.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{area.description}</p>
                      <span className="text-purple-600 font-medium text-sm">{area.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Modernization Section */}
      <section id="legacy-modernization" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Legacy Software Modernization</h2>
            <p className="text-xl text-gray-600">Transform your core legacy systems to elevate performance, agility, scalability, and UX</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">System Assessment</h3>
              <p className="text-gray-600 mb-4">Comprehensive evaluation of your legacy systems to identify modernization opportunities and risks.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Technical debt analysis</li>
                <li>• Performance bottleneck identification</li>
                <li>• Security vulnerability assessment</li>
                <li>• Integration complexity evaluation</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modernization Strategy</h3>
              <p className="text-gray-600 mb-4">Strategic roadmap for transforming legacy systems with minimal business disruption.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Phased migration planning</li>
                <li>• Technology stack recommendations</li>
                <li>• Risk mitigation strategies</li>
                <li>• Timeline and resource planning</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Implementation</h3>
              <p className="text-gray-600 mb-4">Seamless execution of modernization with continuous monitoring and optimization.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Incremental system migration</li>
                <li>• Data preservation and integrity</li>
                <li>• User training and adoption</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Transformation Section */}
      <section id="agile-transformation" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agile Transformation</h2>
            <p className="text-xl text-gray-600">Transform your organization to achieve agility, resilience, and sustainable business growth</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Organizational Agility</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our agile transformation approach helps organizations become more responsive, adaptive, and efficient by implementing proven agile methodologies and fostering a culture of continuous improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Agile methodology implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Team structure optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Process automation and optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Cultural change management</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Agile Benefits</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                  <div className="text-gray-600 text-sm">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Higher Quality</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Team Productivity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">80%</div>
                  <div className="text-gray-600 text-sm">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Automation Section */}
      <section id="intelligent-automation" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Automation</h2>
            <p className="text-xl text-gray-600">Intelligent document processing and workflow automation solutions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automation Capabilities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Document Processing</h4>
                  <p className="text-gray-600 text-sm">AI-powered document extraction, classification, and processing for improved efficiency.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Workflow Automation</h4>
                  <p className="text-gray-600 text-sm">Streamlined business processes with intelligent routing and decision-making capabilities.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Data Integration</h4>
                  <p className="text-gray-600 text-sm">Seamless integration between systems with automated data synchronization and validation.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Automation Impact</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our intelligent automation solutions reduce manual effort, eliminate errors, and accelerate business processes through advanced AI and machine learning technologies.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">70% reduction in manual processing time</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">95% accuracy in document processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">24/7 automated workflow execution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Scalable automation infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Enterprise Section */}
      <section id="digital-enterprise" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Enterprise</h2>
            <p className="text-xl text-gray-600">Introduce digital transformation to your enterprise to drive efficiency, productivity, and revenue</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Strategy</h3>
              <p className="text-gray-600">Comprehensive digital strategy development aligned with business objectives and market opportunities.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Employee Enablement</h3>
              <p className="text-gray-600">Digital tools and platforms that empower employees to work more efficiently and collaboratively.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
              <p className="text-gray-600">Continuous monitoring and optimization of digital processes for maximum efficiency and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Digital Transformation" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions to modernize your business operations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Horizontal Cards */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Transform</h2>
            <p className="text-lg text-gray-600">Specialized transformation solutions for different sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
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
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Digital Transformation Team" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transformation Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Digital transformation delivers measurable improvements across all aspects of your business operations.
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
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Transform?</h3>
              <p className="text-gray-600 mb-6">
                Start your digital transformation journey today and unlock new opportunities for growth and innovation.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Begin Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Transformation Process</h2>
            <p className="text-lg text-gray-600">Our structured approach ensures successful digital transformation</p>
          </div>

          <div className="space-y-8">
            {[
              { step: '01', title: 'Assessment', description: 'Evaluate current systems, processes, and digital maturity level.' },
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive digital transformation roadmap.' },
              { step: '03', title: 'Implementation', description: 'Execute transformation initiatives with minimal business disruption.' },
              { step: '04', title: 'Optimization', description: 'Continuously improve and optimize digital processes and systems.' }
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-6 flex-shrink-0 font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;