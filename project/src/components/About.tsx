import React from 'react';
import { CheckCircle, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'We deliver high-quality solutions that exceed expectations and stand the test of time.'
    },
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Our team brings years of experience and deep technical knowledge to every project.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We work closely with our clients to understand their needs and deliver tailored solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Driven',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
    }
  ];

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About ID Code
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              ID Code is a leading software development company specializing in custom solutions that drive business growth. We combine technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of experienced developers, designers, and project managers work collaboratively to transform your ideas into powerful digital solutions. We pride ourselves on delivering projects on time, within budget, and exceeding quality expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-6">
              To empower businesses through innovative software solutions that drive growth, efficiency, and competitive advantage in the digital landscape.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Why Choose ID Code?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Transparent communication throughout</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                  <span>Post-launch support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;