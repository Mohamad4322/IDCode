import React, { useState } from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import WavyBackground from './WavyBackground';

const Footer = () => {  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
    
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Check if running in local development environment
    const isLocalDevelopment = window.location.hostname === 'localhost' || 
                              window.location.hostname.includes('webcontainer') ||
                              window.location.hostname.includes('local-credentialless');
    
    if (isLocalDevelopment) {
      // Simulate successful submission in development
      setTimeout(() => {
        setSubmitSuccess(true);
        setEmail('');
        setIsSubmitting(false);
      }, 1000);
      return;
    }
    
    // Send email using a serverless function or email service
    fetch('https://formsubmit.co/ajax/mohamadrj@idcode-soft.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        _subject: 'Newsletter Subscription',
        _template: 'table',
        _captcha: 'false'
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setSubmitSuccess(true);
      setEmail('');
    })
    .catch(error => {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error subscribing. Please try again.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

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
    <footer className="relative overflow-hidden" style={{ color: '#01051B', backgroundColor: '#E8F5E9' }}>
      <WavyBackground
        className="absolute inset-0 z-0"
        color1="rgba(227, 255, 239, 0.3)"
        color2="rgba(240, 253, 250, 0.2)"
        color3="rgba(224, 242, 247, 0.1)"
        speed={0.15}
        amplitude={15}
        frequency={0.008}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/IDcode.png"
                alt="ID Code Logo"
                className="w-[160px] h-auto object-contain"
              />
            </div>
            <p className="mb-6 leading-relaxed max-w-md" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              We're a leading software development company specializing in custom solutions that drive business growth. Transform your ideas into powerful digital experiences.
            </p>

            {/* Newsletter Signup */}
            <form className="mb-6" onSubmit={handleSubmit}>
              <h4 className="text-lg font-semibold mb-3" style={{ color: '#01051B' }}>Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="flex-1 px-4 py-3 rounded-l-xl focus:outline-none text-sm"
                  style={{
                    backgroundColor: 'rgba(1, 5, 27, 0.05)',
                    color: '#01051B',
                    border: '1px solid rgba(1, 5, 27, 0.1)'
                  }}
                />
                <button 
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="px-6 py-3 rounded-r-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
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
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>
              {submitSuccess && (
                <p className="text-xs mt-2 text-emerald-600">Thank you for subscribing to our newsletter!</p>
              )}
              {submitError && (
                <p className="text-xs mt-2 text-red-500">
                  {language === 'en' ? 'There was an error. Please try again.' : 'حدث خطأ. يرجى المحاولة مرة أخرى.'}
                </p>
              )}
            </form>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(1, 5, 27, 0.05)',
                  border: '1px solid rgba(1, 5, 27, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.1)';
                }}
              >
                <Linkedin className="h-5 w-5" style={{ color: '#01051B' }} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(1, 5, 27, 0.05)',
                  border: '1px solid rgba(1, 5, 27, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.1)';
                }}
              >
                <Twitter className="h-5 w-5" style={{ color: '#01051B' }} />
              </a>
              <a 
                href="#" 
                className="p-3 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(1, 5, 27, 0.05)',
                  border: '1px solid rgba(1, 5, 27, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(1, 5, 27, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(1, 5, 27, 0.1)';
                }}
              >
                <Github className="h-5 w-5" style={{ color: '#01051B' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#01051B' }}>Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="transition-colors"
                    style={{ color: 'rgba(1, 5, 27, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#10b981';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                    }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#01051B' }}>Industries</h3>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <Link 
                    to={industry.path} 
                    className="transition-colors"
                    style={{ color: 'rgba(1, 5, 27, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#10b981';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                    }}
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6" style={{ color: '#01051B' }}>Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: '#10b981' }} />
                <span style={{ color: 'rgba(1, 5, 27, 0.7)' }}>+1 (732) 797-8127</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: '#10b981' }} />
                <span style={{ color: 'rgba(1, 5, 27, 0.7)' }}>mohamadrj@idcode-soft.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                <div>
                  <div style={{ color: 'rgba(1, 5, 27, 0.7)' }}>Edison, New Jersey</div>
                  <div className="text-sm" style={{ color: 'rgba(1, 5, 27, 0.5)' }}>Mon - Fri: 9:00 AM - 6:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(1, 5, 27, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              © 2025 ID Code. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(1, 5, 27, 0.7)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                }}
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(1, 5, 27, 0.7)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                }}
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="transition-colors"
                style={{ color: 'rgba(1, 5, 27, 0.7)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(1, 5, 27, 0.7)';
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;