import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

const CTAIntegrationsSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background from dark to light */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0a0e0a 0%, #0a0e0a 20%, #0f1412 40%, #141917 60%, #1a1f1d 80%, #202623 100%)'
        }}
      />

      <div className="relative z-10">
        {/* Integrations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                alt="Integrations"
                loading="lazy"
                width="1126"
                height="377"
                decoding="async"
                className="mx-auto mb-14"
                src="/integrations.webp"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              
              <h2 className="text-3xl lg:text-4xl font-bold max-w-4xl mx-auto" 
                style={{ color: '#E3FFEF' }}>
                Works with your existing ATS, CRM, scheduling, phone, and video conferencing tools
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Company Highlights Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                  style={{ 
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981'
                  }}>
                  <Award className="h-4 w-4 mr-2" />
                  Company Highlights
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                  We build lasting partnerships<br />with our clients
                </h2>
                <p className="text-xl mb-12 max-w-3xl mx-auto" style={{ color: '#94D3A2' }}>
                  Our commitment to excellence and client success has made us a trusted technology partner for businesses worldwide.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: '#10b981' }}>1000+</div>
                  <div style={{ color: '#94D3A2' }}>Projects Delivered</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: '#10b981' }}>120+</div>
                  <div style={{ color: '#94D3A2' }}>Active Clients</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: '#10b981' }}>30+</div>
                  <div style={{ color: '#94D3A2' }}>Years Experience</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="rounded-xl p-6"
                  style={{ 
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.1)'
                  }}
                >
                  <div className="text-4xl font-bold mb-2" style={{ color: '#10b981' }}>20</div>
                  <div style={{ color: '#94D3A2' }}>Global Offices</div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="/about"
                  className="inline-flex items-center px-8 py-4 rounded-xl font-medium transition-colors"
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
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAIntegrationsSection;