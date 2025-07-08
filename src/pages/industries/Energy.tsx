import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Battery, 
  Wind, 
  Sun, 
  Globe, 
  TrendingUp, 
  Shield, 
  Users, 
  ArrowRight, 
  Sparkles,
  BarChart3,
  Settings,
  Lightbulb,
  Leaf
} from 'lucide-react';

const Energy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#01051B' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Zap className="h-4 w-4 mr-2" />
                Energy Innovation
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Powering the Future with
                <span className="block bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Smart Energy Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your energy operations with cutting-edge technology. From renewable energy management 
                to smart grid solutions, we help energy companies innovate for a sustainable future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact" 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg inline-flex items-center"
                  style={{ 
                    backgroundColor: '#10b981',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0d9668';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#10b981';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Explore Energy Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#FFFFFF',
                    border: '2px solid rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  View Case Studies
                  <Globe className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <Wind className="h-8 w-8 text-emerald-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Renewable Energy</h3>
                    <p className="text-gray-300 text-sm">Smart wind and solar management systems</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <Battery className="h-8 w-8 text-blue-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Energy Storage</h3>
                    <p className="text-gray-300 text-sm">Advanced battery management solutions</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <BarChart3 className="h-8 w-8 text-purple-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Smart Analytics</h3>
                    <p className="text-gray-300 text-sm">Real-time energy consumption insights</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <Settings className="h-8 w-8 text-orange-400 mb-4" />
                    <h3 className="text-white font-semibold mb-2">Grid Management</h3>
                    <p className="text-gray-300 text-sm">Intelligent power distribution systems</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#01051B' }}>
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              From renewable energy integration to smart grid management, we provide end-to-end 
              technology solutions for the modern energy sector.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sun,
                title: "Solar Energy Management",
                description: "Advanced photovoltaic monitoring and optimization systems for maximum energy yield.",
                color: "#f59e0b"
              },
              {
                icon: Wind,
                title: "Wind Power Solutions",
                description: "Intelligent wind turbine control and predictive maintenance platforms.",
                color: "#06b6d4"
              },
              {
                icon: Battery,
                title: "Energy Storage Systems",
                description: "Smart battery management and grid-scale energy storage solutions.",
                color: "#8b5cf6"
              },
              {
                icon: Lightbulb,
                title: "Smart Grid Technology",
                description: "Next-generation power distribution and demand response systems.",
                color: "#10b981"
              },
              {
                icon: BarChart3,
                title: "Energy Analytics",
                description: "Real-time monitoring, forecasting, and optimization of energy consumption.",
                color: "#ef4444"
              },
              {
                icon: Leaf,
                title: "Sustainability Tracking",
                description: "Carbon footprint monitoring and environmental impact assessment tools.",
                color: "#22c55e"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#01051B' }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24" style={{ backgroundColor: '#01051B' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Driving Energy Innovation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our energy solutions have helped companies reduce costs, improve efficiency, 
              and accelerate their transition to sustainable energy sources.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "40%", label: "Energy Cost Reduction", icon: TrendingUp },
              { number: "99.9%", label: "System Uptime", icon: Shield },
              { number: "500+", label: "Projects Delivered", icon: Users },
              { number: "25M", label: "MWh Managed", icon: Zap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-blue-600/20 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Sparkles className="h-4 w-4 mr-2" />
                Ready to Transform?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#01051B' }}>
                Power Your Future with Smart Energy Solutions
              </h2>
              <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
                Join leading energy companies in the digital transformation journey. 
                Let's build a more efficient, sustainable energy future together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact" 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-md inline-flex items-center"
                  style={{ 
                    backgroundColor: '#10b981',
                    color: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0d9668';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }}
                >
                  Start Your Energy Transformation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                
                <button 
                  className="px-8 py-4 rounded-xl font-medium transition-all duration-300 inline-flex items-center"
                  style={{ 
                    backgroundColor: 'transparent',
                    color: '#01051B',
                    border: '2px solid rgba(1, 5, 27, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.2)';
                  }}
                >
                  Download Energy Guide
                  <Globe className="ml-2 h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Energy;