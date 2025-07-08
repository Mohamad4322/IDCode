import React from 'react';
import { ArrowRight, Settings, Zap, Shield, Monitor, CheckCircle, GitBranch, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevOpsServices = () => {
  const devopsServices = [
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automated pipelines that streamline code integration, testing, and deployment processes.',
      capabilities: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Release Management']
    },
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Scalable infrastructure solutions using modern containerization and orchestration.',
      capabilities: ['Container Orchestration', 'Infrastructure as Code', 'Auto Scaling', 'Load Balancing']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring solutions for proactive issue detection and resolution.',
      capabilities: ['Application Monitoring', 'Log Management', 'Performance Metrics', 'Alert Systems']
    }
  ];

  const tools = [
    { category: 'CI/CD', items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'] },
    { category: 'Containerization', items: ['Docker', 'Kubernetes', 'OpenShift', 'Helm'] },
    { category: 'Infrastructure', items: ['Terraform', 'Ansible', 'Puppet', 'Chef'] },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog'] }
  ];

  const benefits = [
    'Faster deployment cycles and time-to-market',
    'Improved software quality and reliability',
    'Reduced manual errors and operational overhead',
    'Enhanced collaboration between teams',
    'Better scalability and infrastructure management',
    'Increased system uptime and performance'
  ];

  const devopsProcess = [
    { phase: 'Assessment', description: 'Evaluate current development and deployment processes to identify improvement areas.' },
    { phase: 'Strategy', description: 'Develop a comprehensive DevOps strategy aligned with business objectives.' },
    { phase: 'Implementation', description: 'Implement DevOps tools, processes, and automation gradually with minimal disruption.' },
    { phase: 'Optimization', description: 'Continuously monitor, measure, and optimize DevOps processes for better outcomes.' }
  ];

  const devopsMetrics = [
    { metric: '75%', label: 'Faster Deployments' },
    { metric: '90%', label: 'Reduced Errors' },
    { metric: '99.9%', label: 'System Uptime' },
    { metric: '50%', label: 'Cost Savings' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Full Width with Metrics */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium mb-6">
              <Settings className="h-4 w-4 mr-2" />
              DevOps Services
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Accelerate Development with DevOps
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Streamline your development and deployment processes with our comprehensive DevOps services that enhance collaboration, automation, and efficiency.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {devopsMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.metric}</div>
                  <div className="text-gray-600 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="DevOps Workflow" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section - Three Column */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">DevOps Services</h2>
            <p className="text-xl text-gray-600">End-to-end DevOps services that accelerate delivery and improve quality</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {devopsServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Capabilities:</h4>
                  <ul className="space-y-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {capability}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Tools & Technologies</h2>
            <p className="text-lg text-gray-600">Industry-leading tools for robust DevOps pipelines</p>
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
              src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="DevOps Team Collaboration" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Process Section - Horizontal Steps */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevOps Implementation Process</h2>
            <p className="text-lg text-gray-600">Structured approach to DevOps transformation</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {devopsProcess.map((step, index) => (
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">DevOps Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                DevOps practices deliver measurable improvements in development speed and software quality.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Accelerate Your Development?</h3>
              <p className="text-gray-600 mb-6">
                Transform your development and deployment processes with our comprehensive DevOps services.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start DevOps Transformation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServices;