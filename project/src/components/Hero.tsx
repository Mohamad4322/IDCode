import React from 'react';
import { ArrowRight, Play, Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-orange-300/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="h-6 w-6 text-blue-600" />
              <span className="text-blue-600 font-semibold">Innovation Meets Excellence</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Software Development
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 block">
                That Drives Results
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We partner with businesses to create custom software solutions that accelerate growth, 
              improve efficiency, and deliver exceptional user experiences through cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-semibold flex items-center justify-center group shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all font-semibold flex items-center justify-center backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </motion.button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: '200+', label: 'Projects Delivered' },
                { number: '50+', label: 'Happy Clients' },
                { number: '5+', label: 'Years Experience' },
                { number: '98%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg"
              >
                <Zap className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg"
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Project Delivered</div>
                    <div className="text-gray-600">On time and within budget</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Client Satisfaction</div>
                    <div className="text-gray-600">98% satisfaction rate</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-6 h-6 bg-white rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quality Assured</div>
                    <div className="text-gray-600">Rigorous testing process</div>
                  </div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="mt-8 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Development Progress</span>
                    <span className="text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Client Satisfaction</span>
                    <span className="text-green-600">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1.5 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600/20 to-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-blue-600/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */} 
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;