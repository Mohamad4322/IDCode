import React from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, Users, BarChart3, Target, Award } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CaseStudyProps {
  title?: string;
  industry?: string;
  client?: string;
  duration?: string;
  teamSize?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  images?: string[];
  nextCaseStudy?: {
    title: string;
    path: string;
  };
}

// This component can be used directly with props or as a route with params
const CaseStudyPage: React.FC<CaseStudyProps> = (props) => {
  const params = useParams();
  const slug = params.slug;
  
  // In a real implementation, you would fetch the case study data based on the slug
  // For now, we'll use mock data if no props are provided
  
  const caseStudyData: CaseStudyProps = props.title ? props : {
    title: "Healthcare Patient Portal Transformation",
    industry: "Healthcare",
    client: "Regional Medical Center",
    duration: "8 months",
    teamSize: "12 specialists",
    challenge: "The client faced significant challenges with their legacy patient management system. Patient satisfaction was declining due to cumbersome appointment scheduling, limited access to medical records, and inefficient communication channels. Staff were spending excessive time on administrative tasks, reducing their capacity for patient care.",
    solution: "We developed a comprehensive patient portal that integrated with their existing EHR system. The solution included secure patient authentication, intuitive appointment scheduling, access to medical records and test results, secure messaging with healthcare providers, prescription refill requests, and bill payment functionality. The portal was designed with a mobile-first approach to ensure accessibility across all devices.",
    results: [
      "45% increase in patient engagement",
      "60% reduction in administrative phone calls",
      "30% decrease in appointment no-shows",
      "85% patient satisfaction rating",
      "Estimated $1.2M annual cost savings"
    ],
    technologies: [
      "React", "Node.js", "MongoDB", "AWS", "FHIR API", "OAuth 2.0"
    ],
    testimonial: {
      quote: "The patient portal has transformed how we interact with our patients. The system is intuitive, secure, and has dramatically improved our operational efficiency while enhancing the patient experience.",
      author: "Dr. Sarah Johnson",
      position: "Chief Medical Officer, Regional Medical Center"
    },
    images: [
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/7578794/pexels-photo-7578794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    nextCaseStudy: {
      title: "Financial Services Digital Transformation",
      path: "/case-studies/fintech-digital-transformation"
    }
  };

  const {
    title,
    industry,
    client,
    duration,
    teamSize,
    challenge,
    solution,
    results,
    technologies,
    testimonial,
    images,
    nextCaseStudy
  } = caseStudyData;

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {images && images[0] && (
            <img 
              src={images[0]} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              {industry} Case Study
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {title}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {client && (
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-300">Client</div>
                  <div className="text-white font-medium">{client}</div>
                </div>
              )}
              
              {duration && (
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-300">Duration</div>
                  <div className="text-white font-medium">{duration}</div>
                </div>
              )}
              
              {teamSize && (
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <div className="text-sm text-gray-300">Team Size</div>
                  <div className="text-white font-medium">{teamSize}</div>
                </div>
              )}
            </div>
            
            <Link 
              to="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center group"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Challenge */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-700 text-sm font-medium mb-6">
                Challenge
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                The Problem
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {challenge}
              </p>
            </div>
            
            {/* Solution */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
                Solution
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
              Results
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Measurable Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solution delivered significant improvements across key performance indicators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results && results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {index === 0 ? <Users className="h-6 w-6 text-blue-600" /> :
                   index === 1 ? <BarChart3 className="h-6 w-6 text-blue-600" /> :
                   index === 2 ? <Calendar className="h-6 w-6 text-blue-600" /> :
                   index === 3 ? <Award className="h-6 w-6 text-blue-600" /> :
                   <Target className="h-6 w-6 text-blue-600" />}
                </div>
                <p className="text-lg font-medium text-gray-900">
                  {result}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {images && images.length > 1 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Project Gallery
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg h-64 group"
                >
                  <img 
                    src={image} 
                    alt={`${title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {technologies && technologies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Technologies Used
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full text-gray-700 border border-gray-200 hover:shadow-md transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 text-9xl opacity-10 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-2xl font-serif italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonial.author}</div>
                    <div className="text-blue-200">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Next Case Study Section */}
      {nextCaseStudy && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Explore More Case Studies
              </h2>
            </div>
            
            <Link 
              to={nextCaseStudy.path}
              className="block bg-white rounded-xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Next Case Study</div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {nextCaseStudy.title}
                  </h3>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center group"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;