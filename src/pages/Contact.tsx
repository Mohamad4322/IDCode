import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight, Star, Award, Users, Building2, Headphones, MessageSquare, Globe, CheckCircle, Send, Calendar, Zap, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: '',
    newsletter: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    
    try {
      // Check if we're in development mode
      const isDevelopment = window.location.hostname === 'localhost' || 
                          window.location.hostname.includes('webcontainer') ||
                          window.location.hostname.includes('local-credentialless');
      
      if (isDevelopment) {
        // In development, just simulate success
        console.log('Form submission (dev mode):', formData);
        setTimeout(() => {
          setSubmitSuccess(true);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            serviceInterest: '',
            message: '',
            newsletter: false
          });
          
          setTimeout(() => {
            setSubmitSuccess(false);
          }, 5000);
          
          setIsSubmitting(false);
        }, 1000);
        return;
      }
      
      // Production submission to secure PHP handler
      const response = await fetch('/api/contact-handler.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.serviceInterest,
          message: formData.message,
          newsletter: formData.newsletter,
          source: 'Contact Page'
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: '',
          message: '',
          newsletter: false
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error(data.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // More specific error messages
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      if (errorMessage.includes('Failed to fetch')) {
        setSubmitError('Network error. Please check your connection and try again.');
      } else if (errorMessage.includes('Too many submissions')) {
        setSubmitError('Too many submissions. Please wait a few minutes before trying again.');
      } else {
        setSubmitError(errorMessage || 'There was an error submitting your message. Please try again or contact us directly at mohamadrj@idcode-soft.com');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      contact: '+1 (732) 797-8127',
      action: 'tel:+17327978127',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      contact: 'mohamadrj@idcode-soft.com',
      action: 'mailto:mohamadrj@idcode-soft.com',
      gradient: 'from-teal-500 to-emerald-400'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant responses',
      contact: 'Available 24/7',
      action: '#chat',
      gradient: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a consultation call',
      contact: 'Free 30-min session',
      action: '#schedule',
      gradient: 'from-blue-500 to-cyan-400'
    }
  ];

  const officeInfo = {
    city: 'Edison',
    state: 'New Jersey',
    country: 'United States',
    phone: '+1 (732) 797-8127',
    email: 'mohamadrj@idcode-soft.com',
    hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
    timezone: 'EST (Eastern Standard Time)'
  };

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: Award },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Headphones }
  ];

  const testimonials = [
    {
      quote: "The breadth of knowledge and understanding that ID Code has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with ID Code, you are working with the top 1% of engineering excellence.",
      author: "SAM FLEMING",
      company: "FLEMING-AOD"
    },
    {
      quote: "ID Code delivered exceptional results that exceeded our expectations. Their technical expertise and project management skills are outstanding.",
      author: "SARAH JOHNSON",
      company: "TECHCORP"
    },
    {
      quote: "Working with ID Code was a game-changer for our digital transformation. They understood our needs and delivered a solution that transformed our business.",
      author: "MICHAEL CHEN",
      company: "INNOVATELAB"
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: 'Rapid Development',
      description: 'Fast turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Top 1% engineering talent across all technologies'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with 24/7 support'
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
        
        {/* Lighter overlay for readability */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 14, 10, 0.3) 0%, rgba(10, 14, 10, 0.6) 100%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
              <span className="block">Let's Build Something</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Amazing Together</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-3xl leading-relaxed" style={{ color: '#94D3A2' }}>
              Ready to transform your business with cutting-edge technology? Let's discuss your project and 
              discover how we can help you achieve your digital goals.
            </p>
          </motion.div>
        </div>
      </section>
 

      {/* Contact Form & Office Info Section */}
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
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              id="contact-form"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Send className="h-4 w-4 mr-2" />
                Send Us a Message
              </div>

              <h2 className="text-4xl font-bold mb-8" style={{ color: '#E3FFEF' }}>
                Get in touch to discuss your software vision with industry experts
              </h2>
              <p className="text-xl mb-8 leading-relaxed" style={{ color: '#94D3A2' }}>
              </p>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Full name *" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: '#E3FFEF'
                    }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email *" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: '#E3FFEF'
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="tel" 
                    placeholder="Phone number *" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: '#E3FFEF'
                    }}
                  />
                  <input 
                    type="text" 
                    placeholder="Company *" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: '#E3FFEF'
                    }}
                  />
                </div>
                
                {/* Custom Dropdown Container */}
                <div className="relative">
                  <select 
                    name="serviceInterest"
                    value={formData.serviceInterest}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl px-4 py-3 pr-10 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none cursor-pointer"
                    style={{
                      backgroundColor: 'rgba(227, 255, 239, 0.05)',
                      border: '1px solid rgba(227, 255, 239, 0.2)',
                      color: formData.serviceInterest ? '#E3FFEF' : '#94D3A2'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#1a1f1a', color: '#94D3A2' }}>
                      Select Service Interest *
                    </option>
                    <option value="custom-development" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                      Custom Software Development
                    </option>
                    <option value="ai-solutions" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                      AI & Machine Learning
                    </option>
                    <option value="cloud-solutions" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                      Cloud Solutions
                    </option>
                    <option value="digital-transformation" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                      Digital Transformation
                    </option>
                    <option value="other" style={{ backgroundColor: '#1a1f1a', color: '#E3FFEF' }}>
                      Other
                    </option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5" style={{ color: '#94D3A2' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <textarea 
                  placeholder="Tell us about your project *" 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl px-4 py-3 resize-none transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 placeholder-gray-400"
                  style={{
                    backgroundColor: 'rgba(227, 255, 239, 0.05)',
                    border: '1px solid rgba(227, 255, 239, 0.2)',
                    color: '#E3FFEF'
                  }}
                />
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-gray-600 text-emerald-600 focus:ring-emerald-500 focus:ring-offset-0"
                    style={{ backgroundColor: 'rgba(227, 255, 239, 0.05)' }}
                  />
                  <label className="text-sm leading-relaxed" style={{ color: '#94D3A2' }}>
                    I agree to receive communications from ID Code and understand that I can unsubscribe at any time. 
                    View our <a href="/privacy" className="underline hover:opacity-80" style={{ color: '#7DD3C0' }}>Privacy Policy</a>.
                  </label>
                </div>
                
                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
                    {submitError}
                  </div>
                )}
                
                {submitSuccess && (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-emerald-400 text-sm flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                <button 
                  type="submit" 
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#E3FFEF', color: '#0a0e0a' }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#D0F5E3';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#E3FFEF';
                  }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Details Card */}
              <div className="rounded-2xl p-8"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#E3FFEF' }}>Our Office</h3>
                    <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>Visit us or get in touch</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#E3FFEF' }}>{officeInfo.city}, {officeInfo.state}</p>
                      <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{officeInfo.country}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#10b981' }} />
                    <a href={`tel:${officeInfo.phone}`} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#E3FFEF' }}>
                      {officeInfo.phone}
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 flex-shrink-0" style={{ color: '#10b981' }} />
                    <a href={`mailto:${officeInfo.email}`} className="font-medium hover:opacity-80 transition-opacity" style={{ color: '#E3FFEF' }}>
                      {officeInfo.email}
                    </a>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" style={{ color: '#10b981' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#E3FFEF' }}>{officeInfo.hours}</p>
                      <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{officeInfo.timezone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl p-8"
                style={{ 
                  backgroundColor: 'rgba(227, 255, 239, 0.05)',
                  border: '1px solid rgba(227, 255, 239, 0.1)'
                }}>
                <h3 className="text-xl font-bold mb-6" style={{ color: '#E3FFEF' }}>
                  Why Choose ID Code?
                </h3>
                <div className="space-y-4">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center mr-3 flex-shrink-0">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium mb-1" style={{ color: '#E3FFEF' }}>{item.title}</p>
                        <p className="text-sm" style={{ color: '#94D3A2', opacity: 0.8 }}>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See How We Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our short video to learn more about our approach to software development and how we collaborate with clients.
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
      
      {/* Contact Methods Section */}
      <section className="py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#01051B' }}>
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg" style={{ color: 'rgba(1, 5, 27, 0.7)' }}>
              Choose the method that works best for you. We're here to help and respond quickly.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(1, 5, 27, 0.08)'
                }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{ color: '#01051B' }}>
                  {method.title}
                </h3>
                
                <p className="text-sm mb-4" style={{ color: 'rgba(1, 5, 27, 0.6)' }}>
                  {method.description}
                </p>
                
                <div className="font-medium" style={{ color: '#10b981' }}>
                  {method.contact}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section> 
    </div> 
  );
};

export default Contact;
