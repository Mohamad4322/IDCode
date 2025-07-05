import React, { useState } from 'react';
import { ArrowRight, Building, CheckCircle, Database, Globe, Shield, ChevronLeft, ChevronRight, Lock, Users, FileText, BarChart3, Briefcase, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Government = () => {
  const [currentSolutionIndex, setCurrentSolutionIndex] = useState(0);

  const benefits = [
    {
      number: '01',
      title: 'Enhanced citizen services',
      description: 'Improve citizen satisfaction with digital services that are accessible, user-friendly, and available 24/7, reducing wait times and administrative burden.',
      icon: Users,
      color: 'blue'
    },
    {
      number: '02',
      title: 'Operational efficiency',
      description: 'Streamline government operations through process automation, workflow optimization, and paperless systems that reduce costs and improve service delivery.',
      icon: BarChart3,
      color: 'green'
    },
    {
      number: '03',
      title: 'Data-driven decision making',
      description: 'Leverage advanced analytics and reporting tools to make informed policy decisions based on comprehensive data insights and trends.',
      icon: Database,
      color: 'purple'
    },
    {
      number: '04',
      title: 'Transparency and accountability',
      description: 'Enhance public trust through transparent systems that provide visibility into government operations, spending, and decision-making processes.',
      icon: FileText,
      color: 'orange'
    },
    {
      number: '05',
      title: 'Security and compliance',
      description: 'Implement robust security measures that protect sensitive government data while ensuring compliance with regulatory requirements and privacy laws.',
      icon: Shield,
      color: 'red'
    },
    {
      number: '06',
      title: 'Cross-agency collaboration',
      description: 'Enable seamless information sharing and collaboration between different government agencies and departments for more coordinated service delivery.',
      icon: Network,
      color: 'indigo'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Citizen Service Portals',
      description: 'Comprehensive digital platforms that enable citizens to access government services, submit applications, make payments, and track requests through intuitive interfaces.',
      features: ['Digital ID verification', 'Service request tracking', 'Online payment processing', 'Multi-language support'],
      icon: Globe
    },
    {
      number: '02',
      title: 'Government Data Management',
      description: 'Secure data management systems that organize, protect, and analyze government information for improved decision-making and service delivery.',
      features: ['Data encryption', 'Real-time analytics', 'Automated reporting', 'Compliance monitoring'],
      icon: Database
    },
    {
      number: '03',
      title: 'Administrative Workflow Systems',
      description: 'Automated workflow solutions that streamline internal processes, reduce paperwork, and improve interdepartmental collaboration.',
      features: ['Process automation', 'Digital document management', 'Task assignment', 'Performance tracking'],
      icon: Briefcase
    },
    {
      number: '04',
      title: 'Public Safety & Emergency Management',
      description: 'Integrated systems for emergency response coordination, incident management, and public safety operations.',
      features: ['Real-time incident tracking', 'Resource allocation', 'Public alerts', 'Inter-agency coordination'],
      icon: Shield
    }
  ];

  const stats = [
    { value: '85%', label: 'Reduction in processing time' },
    { value: '3M+', label: 'Citizens served digitally' },
    { value: '60%', label: 'Cost savings achieved' },
    { value: '95%', label: 'User satisfaction rate' }
  ];

  const nextSolution = () => {
    if (currentSolutionIndex < solutions.length - 2) {
      setCurrentSolutionIndex(prev => prev + 1);
    }
  };

  const prevSolution = () => {
    if (currentSolutionIndex > 0) {
      setCurrentSolutionIndex(prev => prev - 1);
    }
  };

  return (
    <div className="pt-20 bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 border border-gray-400 rounded-full mr-3"></div>
                <span className="text-gray-600 text-sm">Industry</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Government<br />
                <span className="font-semibold">Software Solutions</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Digitize your public services to create a transparent, efficient, and data-centric government agency that better serves citizens and optimizes resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center group">
                  Get expert advice
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/case-studies" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center">
                  View case studies
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1652361/pexels-photo-1652361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Government Technology" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Lock className="h-8 w-8 text-blue-600 mb-2" />
                <p className="text-sm font-semibold">Secure & Compliant</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Users className="h-8 w-8 text-green-600 mb-2" />
                <p className="text-sm font-semibold">Citizen-Centric</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get section - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              What you get with ID Code's government software solutions
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ID Code's government software solutions empower public sector organizations to deliver <strong>efficient, transparent, and citizen-centric services</strong>. This <strong>digital transformation of government operations</strong> improves service delivery and resource utilization, enabling greater public trust and satisfaction along with <strong>enhanced data security</strong> and <strong>streamlined administrative processes</strong>.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our <strong>advanced citizen service portals and digital workflow systems</strong> ensure optimal service delivery and reduced administrative burden, while <strong>data analytics and reporting tools</strong> help make informed policy decisions and improve resource allocation. With robust security measures for sensitive government data protection, our solutions allow you to focus on delivering <strong>exceptional public services</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Government Solutions Section - Enhanced with Slider */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              We help government agencies and public sector organizations
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 max-w-2xl">
                Transform your government operations with our comprehensive digital solutions
              </p>
              <div className="flex space-x-2">
                <button 
                  onClick={prevSolution}
                  disabled={currentSolutionIndex === 0}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentSolutionIndex === 0 
                      ? 'bg-gray-100 text-gray-300' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextSolution}
                  disabled={currentSolutionIndex >= solutions.length - 2}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentSolutionIndex >= solutions.length - 2 
                      ? 'bg-gray-100 text-gray-300' 
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8"
              animate={{ x: -currentSolutionIndex * 520 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={solution.number} className="flex-shrink-0 w-[500px]">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="text-blue-600 font-medium mb-2">{solution.number}</div>
                          <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                        </div>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Benefits Section - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium text-blue-600 mb-4">Service benefits</h2>
            <h3 className="text-4xl font-light text-gray-900">
              The value of digital transformation for government agencies
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600 border-blue-600',
                green: 'bg-green-100 text-green-600 border-green-600',
                purple: 'bg-purple-100 text-purple-600 border-purple-600',
                orange: 'bg-orange-100 text-orange-600 border-orange-600',
                red: 'bg-red-100 text-red-600 border-red-600',
                indigo: 'bg-indigo-100 text-indigo-600 border-indigo-600'
              };
              const colors = colorClasses[benefit.color as keyof typeof colorClasses];
              
              return (
                <motion.div 
                  key={benefit.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`border-t-2 ${colors.split(' ')[2]} pt-6 group hover:bg-white hover:shadow-lg hover:rounded-lg hover:p-6 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`font-medium ${colors.split(' ')[1]}`}>{benefit.number}</div>
                    <div className={`w-10 h-10 ${colors.split(' ')[0]} rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <Icon className={`h-5 w-5 ${colors.split(' ')[1]}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section - Enhanced */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">
            Our government sector technology expertise
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">E-Government Platforms</h3>
              <p className="text-gray-600 mb-6">Comprehensive digital platforms that enable citizens to access government services online, reducing administrative burden and improving service delivery.</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Citizen service portals
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Digital form submission
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Online payment systems
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                  Service request tracking
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Management & Analytics</h3>
              <p className="text-gray-600 mb-6">Secure data management systems that organize, protect, and analyze government information for improved decision-making and service delivery.</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                  Data warehousing
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                  Business intelligence
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                  Predictive analytics
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                  Performance dashboards
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <p className="text-gray-600 mb-6">Robust security solutions that protect sensitive government data while ensuring compliance with regulatory requirements and privacy laws.</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Identity and access management
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Data encryption
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Compliance monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                  Security auditing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Ready to transform your government services?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you deliver better public services and improve citizen satisfaction.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center group">
            Schedule a consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
 
export default Government;