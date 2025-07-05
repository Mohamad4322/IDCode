import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    company: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      country: 'United Arab Emirates',
      department: 'International office',
      city: 'Dubai',
      address: 'Business Bay, Dubai, UAE',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM'
    },
    {
      country: 'Netherlands',
      department: 'International office',
      city: 'Amsterdam',
      address: 'Zuidas District, Amsterdam, Netherlands',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    {
      country: 'United States',
      department: 'International office',
      city: 'New Jersey',
      address: 'Edison, New Jersey, United States',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
    },
    {
      country: 'Syria',
      department: 'International office',
      city: 'Damascus',
      address: 'Damascus, Syria',
      phone: '+1 (732) 797-8127',
      email: 'info@idcode-soft.com',
      hours: 'Sun - Thu: 9:00 AM - 6:00 PM'
    }
  ];

  const testimonials = [
    {
      quote: "The breadth of knowledge and understanding that ID Code has within its walls allows us to leverage that expertise to make superior deliverables for our customers. When you work with ID Code, you are working with the top 1% of the aptitude and engineering excellence of the whole country.",
      author: "Sam Fleming",
      position: "President, Fleming-AOD",
      rating: 5
    },
    {
      quote: "ID Code delivered exceptional results that exceeded our expectations. Their technical expertise and project management skills are outstanding.",
      author: "Sarah Johnson",
      position: "CTO, TechCorp",
      rating: 5
    },
    {
      quote: "Working with ID Code was a game-changer for our digital transformation. They understood our needs and delivered a solution that transformed our business.",
      author: "Michael Chen",
      position: "CEO, InnovateLab",
      rating: 5
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Contact Form Section */}
      <section className="py-20 text-white" style={{ backgroundColor: '#1e1d28' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-8 leading-tight">
              Get in touch to discuss your software vision with industry experts
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}> 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Full name *" 
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Phone number *" 
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Country *" 
                  value={formData.country} 
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none" 
                  name="country"
                  onChange={handleChange}
                  required
                />
              </div>
              <input 
                type="text" 
                placeholder="Company *" 
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none w-full" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
              <textarea 
                placeholder="Message *" 
                rows={4} 
                className="bg-transparent border-b border-gray-500 text-white placeholder-gray-400 py-2 focus:outline-none w-full resize-none" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <div className="flex items-start gap-2">
                <input 
                  type="checkbox" 
                  className="accent-blue-500 mt-1" 
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                />
                <label className="text-sm text-gray-300">I want to receive news and updates once in a while</label>
              </div>
              <p className="text-sm text-gray-400">
                We will add your info to our CRM for contacting you regarding your request. For more info please consult our{' '}
                <a href="#" className="underline">privacy policy</a>.
              </p>
              <button type="submit" className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all">
                Contact us →
              </button>
            </form>
          </div>

          {/* Right: Testimonial Card */}
          <div className="bg-white text-gray-800 rounded-2xl shadow-xl p-10">
            <p className="text-sm font-semibold text-gray-500 mb-2">What our customers say</p>
            
            <TestimonialSlider testimonials={testimonials} style="quotes" />
            <div className="flex items-center justify-center gap-4 mt-6 border-t pt-4">
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="p-2 border rounded-full hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Choose IDCode Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8 text-left">Why Choose IDCode?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl text-left">
              With over a decade of experience in software development, we deliver innovative solutions that drive business growth and digital transformation. Our global team of experts specializes in cutting-edge technologies, ensuring your projects are built with the latest industry standards and best practices.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">90+</div>
                <div className="text-gray-600 font-medium">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600 font-medium">Global Offices</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-20 bg-gray-900" style={{ backgroundColor: '#21202b' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6 text-left">Our Global Offices</h2>
            <p className="text-xl text-gray-300 max-w-3xl text-left">
              With offices across four continents, we provide round-the-clock support and local expertise to our global clientele.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="offices__address-item bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="offices__address-item-header mb-4">
                  <div className="offices__address-item-country title-h5 text-lg font-serif text-gray-900 mb-1 text-left">
                    {office.country}
                  </div>
                  <div className="offices__address-item-department description-n text-sm text-gray-600 text-left">
                    {office.department}
                  </div>
                </div>
                
                <div className="offices__address-item-content">
                  <h4 className="offices__address-item-title title-h4 text-2xl font-serif text-gray-900 mb-3 text-left">
                    {office.city}
                  </h4>
                  
                  <div className="offices__address-item-address description-n text-gray-600 mb-4 text-left">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 mt-1 text-gray-400 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                  </div>
                  
                  <div className="offices__address-item-phone description-n mb-3 text-left">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-gray-600 hover:text-blue-600">
                        {office.phone}
                      </a>
                    </div>
                  </div>

                  <div className="offices__address-item-email description-n mb-3 text-left">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-blue-600">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="offices__address-item-hours description-n mb-4 text-left">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                  
                  <a href="#contact-us" className="offices__address-item__btn btn-n btn-n--gray btn-n--small inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors text-sm font-medium">
                    <span className="btn-n__text">Contact us</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;