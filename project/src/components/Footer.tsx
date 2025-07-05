import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: 'Custom Software Development', path: '/custom-software-development' },
    { name: 'Product Development', path: '/product-development' },
    { name: 'Digital Transformation', path: '/digital-transformation' },
    { name: 'Cloud Solutions', path: '/cloud-solutions' },
    { name: 'Data & Analytics', path: '/data-analytics' },
    { name: 'Quality Assurance', path: '/quality-assurance' }
  ];

  const industries = [
    { name: 'Healthcare', path: '/healthcare' },
    { name: 'Financial Services', path: '/financial-services' },
    { name: 'Retail & E-commerce', path: '/retail-ecommerce' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Education', path: '/education' },
    { name: 'Real Estate', path: '/real-estate' }
  ];

  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/IDcode.png"
                alt="ID Code Logo"
                className="w-[160px] h-auto object-contain"
              />
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
              We're a leading software development company specializing in custom solutions that drive business growth. Transform your ideas into powerful digital experiences.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 text-gray-900"
                />
                <button className="bg-blue-600 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors text-white">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5 text-gray-700" />
              </a>
              <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition-colors">
                <Github className="h-5 w-5 text-gray-700" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-700">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="hover:text-blue-600 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3 text-gray-700">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link to={industry.path} className="hover:text-blue-600 transition-colors">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>(732) 797-8127</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>hello@idcode.dev</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="mb-2">Edison, New Jersey</div>
                  <div>Damascus, Syria</div>
                </div>
              </li>
            </ul>
          </div>
        </div> 

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © 2025 ID Code. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-700">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;