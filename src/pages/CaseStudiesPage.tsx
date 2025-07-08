import React, { useState } from 'react';
import { ArrowRight, Filter, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['All', 'Healthcare', 'Fintech', 'Government', 'Retail', 'Manufacturing', 'Energy'];

  // Filter case studies based on active industry and search query
  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = activeIndustry === 'All' || study.industry === activeIndustry;
    const matchesSearch = searchQuery === '' || 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Case Studies" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our portfolio of successful projects and learn how we've helped businesses across industries achieve their digital transformation goals.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndustry === industry
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <motion.div
                  key={study.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group h-full flex flex-col"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={study.images[0]} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {study.industry}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">{study.client}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 flex-grow">
                      {study.challenge.substring(0, 150)}...
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{study.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      to={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 mt-auto"
                    >
                      View case study
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any case studies matching your search criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveIndustry('All');
                }}
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-x-20 translate-y-20 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results for your business through innovative technology solutions.
              </p>
              
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center group font-medium"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;