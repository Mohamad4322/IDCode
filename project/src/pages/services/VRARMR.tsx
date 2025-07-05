import React from 'react';
import { ArrowRight, Monitor, Eye, Smartphone, Gamepad2, CheckCircle, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const VRARMR = () => {
  const vrServices = [
    {
      icon: Monitor,
      title: 'Virtual Reality (VR)',
      description: 'Immersive VR experiences that transport users to completely virtual environments.',
      features: ['Training Simulations', 'Virtual Showrooms', 'Gaming Experiences', 'Educational Content']
    },
    {
      icon: Eye,
      title: 'Augmented Reality (AR)',
      description: 'AR solutions that overlay digital information onto the real world for enhanced experiences.',
      features: ['Product Visualization', 'Navigation Assistance', 'Interactive Marketing', 'Maintenance Guides']
    },
    {
      icon: Smartphone,
      title: 'Mixed Reality (MR)',
      description: 'Mixed reality applications that blend physical and digital worlds seamlessly.',
      features: ['Collaborative Workspaces', 'Design Visualization', 'Remote Assistance', 'Interactive Presentations']
    }
  ];

  const industries = [
    { name: 'Healthcare', use: 'Medical training simulations and patient treatment visualization' },
    { name: 'Education', use: 'Immersive learning experiences and virtual classrooms' },
    { name: 'Manufacturing', use: 'Assembly line training and equipment maintenance guidance' },
    { name: 'Real Estate', use: 'Virtual property tours and architectural visualization' },
    { name: 'Retail', use: 'Virtual try-on experiences and product demonstrations' },
    { name: 'Entertainment', use: 'Immersive gaming and interactive entertainment experiences' }
  ];

  const benefits = [
    'Enhanced user engagement and immersion',
    'Improved training effectiveness and retention',
    'Reduced costs for physical prototypes and travel',
    'Better visualization of complex concepts',
    'Increased customer satisfaction and conversion',
    'Competitive advantage through innovation'
  ];

  const technologies = [
    'Unity 3D', 'Unreal Engine', 'ARKit', 'ARCore',
    'WebXR', 'Oculus SDK', 'HoloLens', 'Magic Leap',
    'Three.js', 'A-Frame', 'Vuforia', '8th Wall'
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              <Monitor className="h-4 w-4 mr-2" />
              VR/AR/MR Solutions
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Immersive Digital Experiences
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Utilize virtual reality technologies to deliver brand-defining, immersive user experiences that engage, educate, and inspire your audience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Start VR/AR Project
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

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">VR/AR/MR Services</h2>
            <p className="text-xl text-gray-600">Comprehensive immersive technology solutions</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {vrServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-purple-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                        <CheckCircle className="h-4 w-4 text-purple-600 mr-3" />
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

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Applications</h2>
            <p className="text-lg text-gray-600">VR/AR/MR solutions across various industries</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p className="text-lg text-gray-600 mb-12">Cutting-edge tools and platforms for immersive experiences</p>
          
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">VR/AR/MR Benefits</h2>
              <p className="text-lg text-gray-600 mb-8">
                Immersive technologies deliver measurable improvements in engagement and business outcomes.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Create Immersive Experiences?</h3>
              <p className="text-gray-600 mb-6">
                Transform your business with cutting-edge VR/AR/MR solutions that captivate and engage your audience.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors w-full justify-center"
              >
                Start VR/AR Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VRARMR;