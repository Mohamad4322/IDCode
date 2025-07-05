import React from 'react';
import { ArrowRight, BarChart3, TrendingUp, Database, Brain, CheckCircle, PieChart, LineChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
  const analyticsServices = [
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with comprehensive BI solutions.',
      capabilities: ['Interactive Dashboards', 'Real-time Reporting', 'Data Visualization', 'KPI Tracking']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Implement AI-powered analytics to discover hidden patterns and insights.',
      capabilities: ['Predictive Modeling', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines and warehouses for efficient data processing.',
      capabilities: ['Data Pipeline Design', 'ETL Processes', 'Data Warehousing', 'Real-time Processing']
    }
  ];

  const tools = [
    'Tableau', 'Power BI', 'Python', 'R',
    'SQL', 'Apache Spark', 'Elasticsearch', 'TensorFlow',
    'AWS Analytics', 'Google Analytics', 'Snowflake', 'Databricks'
  ];

  const useCases = [
    { industry: 'Healthcare', use: 'Patient analytics and treatment optimization' },
    { industry: 'Finance', use: 'Risk assessment and fraud detection' },
    { industry: 'Retail', use: 'Customer behavior and inventory optimization' },
    { industry: 'Manufacturing', use: 'Predictive maintenance and quality control' }
  ];

  const benefits = [
    'Improved decision-making with data-driven insights',
    'Increased operational efficiency by 30-40%',
    'Better customer understanding and targeting',
    'Risk reduction through predictive analytics',
    'Revenue growth through optimization',
    'Competitive advantage through data intelligence'
  ];

  const process = [
    { step: 'Data Assessment', description: 'Evaluate your current data landscape and identify opportunities' },
    { step: 'Strategy Development', description: 'Create comprehensive analytics strategy aligned with business goals' },
    { step: 'Implementation', description: 'Build and deploy analytics solutions with proper governance' },
    { step: 'Optimization', description: 'Continuously refine and improve analytics processes' }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Centered with Stats */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-medium mb-6">
            <BarChart3 className="h-4 w-4 mr-2" />
            Data & Analytics
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Turn Data Into Strategic Advantage
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Transform your data into powerful insights that drive strategic decisions and business growth with our comprehensive analytics solutions.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { metric: '40%', label: 'Efficiency Increase' },
              { metric: '60%', label: 'Faster Decisions' },
              { metric: '30%', label: 'Cost Reduction' },
              { metric: '99%', label: 'Data Accuracy' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.metric}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start Analytics Project
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
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Data Analytics Dashboard" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Data Engineering Section */}
      <section id="data-engineering" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Engineering</h2>
            <p className="text-xl text-gray-600">Build robust data infrastructure for efficient processing and analysis</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Strategy</h3>
              <p className="text-gray-600">Comprehensive data strategy development aligned with business objectives and technical capabilities.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Platforms</h3>
              <p className="text-gray-600">Scalable data platform design and implementation for efficient data storage and processing.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Intelligence</h3>
              <p className="text-gray-600">Advanced BI solutions that transform raw data into actionable business insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MLOps Section */}
      <section id="mlops" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">MLOps</h2>
            <p className="text-xl text-gray-600">Achieve seamless integration and maximum ROI for your machine learning models</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">ML Lifecycle Management</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our MLOps services streamline the entire machine learning lifecycle, from development to deployment and monitoring, ensuring your ML models deliver consistent value in production.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Automated ML pipeline development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Model versioning and tracking</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Continuous integration and deployment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Model performance monitoring</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">MLOps Benefits</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                  <div className="text-gray-600 text-sm">Faster Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">60%</div>
                  <div className="text-gray-600 text-sm">Reduced Errors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                  <div className="text-gray-600 text-sm">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
                  <div className="text-gray-600 text-sm">Model Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Three Column */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Analytics Capabilities</h2>
            <p className="text-xl text-gray-600">Comprehensive data analytics services to unlock business potential</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
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

      {/* Tools Section - Tag Cloud */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tools & Technologies</h2>
          <p className="text-lg text-gray-600 mb-12">Industry-leading analytics tools and platforms</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                {tool}
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
              src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Data Visualization" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section - Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600">Analytics solutions tailored for different industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200 text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                <p className="text-gray-600 text-sm">{useCase.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Vertical Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Analytics Process</h2>
            <p className="text-lg text-gray-600">Systematic approach to implementing data analytics solutions</p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex items-start"
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-6 flex-shrink-0 font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Two Column */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Analytics Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Data analytics delivers measurable improvements across all aspects of your business operations.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Unlock Your Data's Potential?</h3>
              <p className="text-gray-600 mb-6">
                Transform your business with powerful data analytics solutions that drive growth and innovation.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start Your Analytics Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;