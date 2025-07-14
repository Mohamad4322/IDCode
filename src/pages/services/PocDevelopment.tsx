import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TestTube, CheckCircle, Target, Zap, Users, BarChart3, Lightbulb, Shield, Clock, Building2, Star, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PocDevelopment = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Validate business concepts and technical feasibility before making significant investments, reducing project risks and potential losses.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Zap,
      title: 'Faster Validation',
      description: 'Quickly test and validate ideas with minimal time and resource investment, enabling rapid decision-making and market entry.',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Stakeholder Buy-in',
      description: 'Demonstrate concept viability to stakeholders and investors with tangible prototypes that showcase potential value and impact.',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Lightbulb,
      title: 'Technical Insights',
      description: 'Gain valuable technical insights and identify potential challenges early in the development process for better planning.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Target,
      title: 'Market Validation',
      description: 'Test market demand and user acceptance before full-scale development, ensuring product-market fit and user satisfaction.',
      gradient: 'from-purple-500 to-blue-400'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Optimize development costs by identifying the most viable approach and avoiding expensive mistakes in full-scale development.',
      gradient: 'from-pink-500 to-purple-400'
    }
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: 'Technical Proof of Concept',
      description: 'Validate technical feasibility and architecture decisions with focused prototypes that demonstrate core functionality and performance capabilities.',
      features: ['Technology Assessment', 'Performance Benchmarking', 'Scalability Analysis', 'Integration Testing'],
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Target,
      title: 'Business Proof of Concept',
      description: 'Test business models and value propositions with market-ready prototypes that validate commercial viability and user acceptance.',
      features: ['Market Research', 'User Testing', 'ROI Analysis', 'Business Model Validation'],
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Create functional prototypes quickly to test core concepts and gather feedback from stakeholders and potential users.',
      features: ['Interactive Mockups', 'MVP Development', 'User Experience Testing', 'Iterative Design'],
      gradient: 'from-cyan-500 to-teal-400'
    }
  ];

  const stats = [
    { number: '85%', label: 'Risk Reduction', icon: Shield },
    { number: '60%', label: 'Faster Time to Market', icon: Clock },
    { number: '40%', label: 'Cost Savings', icon: TrendingUp },
    { number: '95%', label: 'Stakeholder Satisfaction', icon: Star }
  ];

  const testimonials = [
    {
      quote: "ID Code's PoC development helped us validate our innovative concept before making a major investment. Their expertise saved us months of development time and significant costs.",
      author: "DAVID MARTINEZ",
      company: "INNOVATETECH"
    },
    {
      quote: "The proof of concept they delivered exceeded our expectations. It provided clear insights into technical feasibility and market potential, enabling confident decision-making.",
      author: "SARAH THOMPSON",
      company: "FUTURELAB"
    },
    {
      quote: "Working with ID Code on our PoC was a game-changer. Their rapid prototyping approach allowed us to test multiple concepts quickly and identify the most promising direction.",
      author: "MICHAEL CHEN",
      company: "STARTUPX"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Wave background */}
        <div className="absolute inset-0" style={{ opacity: 0.15 }}>
          <img 
            src="/wave.webp"
            alt=""
            className="w-full h-full object-cover"
            style={{ 
              filter: 'brightness(0.8)',
              transform: 'scale(1.1)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <TestTube className="h-4 w-4 mr-2" />
                Proof of Concept Development
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                <span className="block">Validate Ideas</span>
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Before Full Investment</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
                Safely explore business-boosting concepts with robust testing and expert road mapping to validate ideas before full-scale development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
                  style={{ 
                    backgroundColor: '#E3FFEF',
                    color: '#0a0e0a'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#D0F5E3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3FFEF';
                  }}
                >
                  Get Expert Advice
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 inline-flex items-center"
                  style={{
                    backgroundColor: 'rgba(227, 255, 239, 0.1)',
                    color: '#E3FFEF',
                    border: '1px solid rgba(227, 255, 239, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                  }}
                >
                  View All Services
                </Link>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  border: '1px solid rgba(227, 255, 239, 0.2)'
                }}>
                <img 
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Proof of Concept Development" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Our PoC Development Solutions
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Comprehensive proof of concept services to validate your innovative ideas and reduce development risks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {solution.title}
                </h3>
                
                <p className="text-base mb-6 leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {solution.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-sm" style={{ color: '#01051B' }}>Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                        <div className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0" style={{ backgroundColor: '#10b981' }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#0a0e0a' }}>
        {/* Background Image */}
        <img 
          alt=""
          loading="lazy"
          width="1560"
          height="1514"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15, color: 'transparent' }}
          src="/AIAgents-bg.webp"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <Award className="h-4 w-4 mr-2" />
              Service Benefits
            </div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              The Value of Proof of Concept Development
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              Minimize risks and maximize success with our comprehensive PoC development approach.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#E3FFEF' }}>
                  {benefit.title}
                </h3>
                
                <p className="text-base leading-relaxed" style={{ color: '#94D3A2' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#01051B' }}>
              Proven PoC Development Results
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Our proof of concept development delivers measurable value and risk reduction for businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl transition-all hover:transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4">
                  <stat.icon className="w-full h-full" style={{ color: '#10b981' }} />
                </div>
                <div className="mb-2"> 
                  <span className="text-4xl font-bold" style={{ color: '#01051B' }}>{stat.number}</span>
                </div>
                <h3 className="text-base font-medium" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {stat.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24" style={{ backgroundColor: '#0a0e0a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Client Success Stories
            </h2>
            <p className="text-xl max-w-3xl" style={{ color: '#94D3A2' }}>
              See how our PoC development services have helped businesses validate ideas and reduce risks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl p-8 transition-all hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}
              >
                <blockquote className="text-lg mb-6 italic" style={{ color: '#E3FFEF' }}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm font-medium" style={{ color: '#94D3A2' }}>
                  {testimonial.author} • {testimonial.company}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our PoC Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how we transform innovative ideas into validated concepts through our proven development methodology.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl">
            <video 
              src="/cta-video-big.webm" 
              className="w-full max-h-[400px] object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            ></video>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="relative overflow-hidden py-24"
        style={{
          background: 'linear-gradient(to bottom, #0a0e0a 0%, #0a0e0a 20%, #0f1412 40%, #141917 60%, #1a1f1d 80%, #202623 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/cta-video-big.webm" type="video/webm" />
          </video>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <TestTube className="h-4 w-4 mr-2" />
              Ready to Validate Your Idea?
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
              Start Your PoC Development Today
            </h2>
            
            <p className="text-xl mb-8" style={{ color: '#94D3A2' }}>
              Ready to validate your innovative concept? Let's discuss your idea and explore 
              how our PoC development can minimize risks and maximize success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: '#E3FFEF',
                  color: '#0a0e0a'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D0F5E3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E3FFEF';
                }}
              >
                Start Your PoC Project →
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full font-medium transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(227, 255, 239, 0.1)',
                  color: '#E3FFEF',
                  border: '1px solid rgba(227, 255, 239, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(227, 255, 239, 0.1)';
                }}
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PocDevelopment;
