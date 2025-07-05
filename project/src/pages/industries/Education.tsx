import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Education = () => {
  const benefits = [
    {
      number: '01',
      title: 'Enhanced learning outcomes',
      description: 'Improve student performance and engagement through personalized learning paths, adaptive assessments, and data-driven insights that help educators tailor instruction to individual needs.'
    },
    {
      number: '02',
      title: 'Streamlined administration',
      description: 'Reduce administrative burden with automated enrollment, grading, and reporting systems that free up educators to focus on teaching and student support.'
    },
    {
      number: '03',
      title: 'Accessible education',
      description: 'Expand educational access through online learning platforms, mobile applications, and assistive technologies that accommodate diverse learning needs and geographical constraints.'
    },
    {
      number: '04',
      title: 'Data-driven insights',
      description: 'Make informed educational decisions with comprehensive analytics that track student progress, identify at-risk learners, and measure the effectiveness of teaching strategies.'
    },
    {
      number: '05',
      title: 'Collaborative learning',
      description: 'Foster collaboration and communication through digital platforms that enable peer-to-peer learning, group projects, and real-time interaction between students and educators.'
    },
    {
      number: '06',
      title: 'Cost efficiency',
      description: 'Reduce operational costs through digital transformation, automated processes, and scalable technology solutions that optimize resource allocation and improve institutional efficiency.'
    }
  ];

  const solutions = [
    {
      number: '01',
      title: 'Learning Management Systems',
      description: 'Comprehensive LMS platforms that facilitate course delivery, student engagement, and performance tracking with integrated assessment tools, content management, and communication features.'
    },
    {
      number: '02',
      title: 'Virtual Classroom Solutions',
      description: 'Interactive online learning environments that support live instruction, collaborative activities, and multimedia content delivery with features like breakout rooms, screen sharing, and real-time polling.'
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 border border-gray-400 rounded-full mr-3"></div>
                <span className="text-gray-600 text-sm">Industry</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Educational Technology Solutions
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg">
                Transform learning experiences with innovative educational technology platforms, learning management systems, and digital tools that enhance student engagement and academic outcomes.
              </p>
              
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center">
                Get expert advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Educational Technology" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you get section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12">
            What you get with ID Code's educational technology development
          </h2>
          
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              ID Code's educational technology solutions empower institutions to deliver <strong>personalized learning experiences, streamlined administration, and enhanced student outcomes</strong>. This <strong>transition from traditional classroom methods to digital learning platforms</strong> improves accessibility and engagement, enabling greater educational reach and effectiveness along with <strong>enhanced learning analytics</strong> and <strong>streamlined educational workflows</strong>.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our <strong>advanced learning management systems and adaptive learning technologies</strong> ensure optimal student progress tracking and personalized content delivery, while <strong>AI-powered assessment tools and analytics platforms</strong> help educators make data-driven decisions about curriculum and instruction. With robust security measures for student data protection, our solutions allow you to focus on delivering <strong>exceptional educational experiences</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-8">
              We help educational institutions and EdTech companies
            </h2>
            <div className="flex justify-end">
              <div className="flex space-x-2">
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                </button>
                <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <div key={solution.number} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-blue-600 font-medium mb-2">{solution.number}</div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-700 leading-relaxed">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-sm font-medium text-gray-600 mb-4">Service benefits</h2>
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              The value of educational technology for your institution
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.number} className="border-t-2 border-blue-600 pt-6">
                <div className="text-blue-600 font-medium mb-2">{benefit.number}</div>
                <h4 className="text-lg font-medium text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;