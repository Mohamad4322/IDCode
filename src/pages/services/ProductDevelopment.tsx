import React from 'react';
import { ArrowRight, Lightbulb, Target, Rocket, Users, CheckCircle, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDevelopment = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Ideation & Strategy',
      description: 'Transform your ideas into viable product concepts with market research and strategic planning.',
      deliverables: ['Market Research', 'Competitive Analysis', 'Product Roadmap', 'Technical Feasibility']
    },
    {
      icon: Target,
      title: 'MVP Development',
      description: 'Build minimum viable products to validate your concept and gather user feedback quickly.',
      deliverables: ['Core Features', 'User Testing', 'Feedback Integration', 'Performance Metrics']
    },
    {
      icon: Rocket,
      title: 'Full Product Launch',
      description: 'Complete product development from concept to market launch with ongoing support.',
      deliverables: ['Full Feature Set', 'Launch Strategy', 'Marketing Support', 'Post-Launch Analytics']
    }
  ];

  const services = [
    'Product Strategy & Planning',
    'User Experience Design',
    'Technical Architecture',
    'MVP Development',
    'Full-Scale Development',
    'Quality Assurance',
    'Launch & Marketing Support',
    'Post-Launch Optimization'
  ];

  const technologies = [
    'React Native', 'Flutter', 'Swift', 'Kotlin',
    'React', 'Vue.js', 'Angular', 'Next.js',
    'Node.js', 'Python', 'Java', '.NET',
    'AWS', 'Azure', 'Google Cloud', 'Firebase'
  ];

  const benefits = [
    'Faster time-to-market with MVP approach',
    'Reduced development risks through validation',
    'User-centered design for better adoption',
    'Scalable architecture for future growth',
    'Comprehensive testing and quality assurance',
    'Post-launch support and maintenance'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section - Centered Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full text-orange-700 text-sm font-medium mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            Product Development
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            From Concept to Market Launch
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We guide you through every stage of product development with expertise and innovation, from initial concept to successful market launch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start Your Product
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
      </section>

      {/* Product-Oriented Delivery Section */}
      <section id="product-oriented-delivery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product-Oriented Delivery</h2>
            <p className="text-xl text-gray-600">Ensure timely and cost-effective product delivery while prioritizing your business objectives</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Delivery Excellence</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our product-oriented delivery approach ensures that every milestone aligns with your business goals while maintaining the highest quality standards and meeting critical deadlines.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Agile delivery methodology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Regular milestone reviews</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Risk mitigation strategies</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                  <span>Quality assurance integration</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Delivery Metrics</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
                  <div className="text-gray-600 text-sm">On-Time Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600 text-sm">Quality Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
                  <div className="text-gray-600 text-sm">Faster Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-gray-600 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research Section */}
      <section id="market-research" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Research</h2>
            <p className="text-xl text-gray-600">Evaluate your business landscape to capitalize on promising niches and get ahead of the competition</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-4">Comprehensive analysis of market trends, opportunities, and competitive landscape.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Industry trend analysis</li>
                <li>• Competitive benchmarking</li>
                <li>• Market size estimation</li>
                <li>• Growth opportunity identification</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User Research</h3>
              <p className="text-gray-600 mb-4">Deep understanding of your target audience and their needs, behaviors, and preferences.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• User persona development</li>
                <li>• Customer journey mapping</li>
                <li>• Survey and interview insights</li>
                <li>• Behavioral pattern analysis</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Insights</h3>
              <p className="text-gray-600 mb-4">Actionable insights and recommendations to guide your product strategy and positioning.</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Strategic recommendations</li>
                <li>• Market positioning advice</li>
                <li>• Risk assessment</li>
                <li>• Go-to-market strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Product Development Team" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Phases Section - Large Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Product Development Phases</h2>
            <p className="text-xl text-gray-600">Structured approach to bring your product to life</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                  <phase.icon className="h-8 w-8 text-gray-700" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-center text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Two Column List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                Comprehensive product development services covering every aspect of bringing your idea to market.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center py-3 px-4 bg-gray-50 rounded-lg"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
              <div className="grid grid-cols-2 gap-3">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white px-4 py-2 rounded-lg text-center text-gray-700 text-sm">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Product Development Process" 
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section - Simple List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Product Development</h2>
          <p className="text-xl text-gray-600 mb-12">
            We combine strategic thinking with technical expertise to build products that users love and businesses need.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center text-left"
              >
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-900 rounded-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Product?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your product idea into reality with our comprehensive development services.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDevelopment;