import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import ScrollAnimations from '../components/ScrollAnimations';
import ParallaxSection from '../components/ParallaxSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Bridal Makeup',
    'Beauty Course',
    'Hair Extensions',
    'Microblading',
    'Hair Wigs',
    'Nail Art',
    'Tattoos',
    'Other'
  ];

  return (
    <div id="contact" className="py-12 sm:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-strawberry-50 to-rose-gold-50 py-12 sm:py-16 lg:py-20 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-gradient">Get in Touch</h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Ready to transform your look or start your beauty journey? We're here to help you every step of the way. 
              Contact us today to book your appointment or learn more about our services.
              </p>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <ScrollAnimations animation="slideInLeft">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-shimmer">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-strawberry-600 focus:border-transparent transition-all duration-300 hover-lift"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-strawberry-600 focus:border-transparent transition-all duration-300 hover-lift"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-strawberry-600 focus:border-transparent transition-all duration-300 hover-lift"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-strawberry-600 focus:border-transparent transition-all duration-300 hover-lift"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-strawberry-600 focus:border-transparent transition-all duration-300 resize-none hover-lift"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                    className="w-full bg-gradient-to-r from-strawberry-600 to-berry-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift hover-glow animate-pulse-glow flex items-center justify-center"
                >
                  <Send className="mr-2" size={18} />
                  Send Message
                </button>
                </form>
              </div>
            </ScrollAnimations>

            {/* Contact Info */}
            <ScrollAnimations animation="slideInRight" className="order-first lg:order-last">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-shimmer">Contact Information</h2>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 hover-lift group cursor-pointer">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-strawberry-600" />
                    </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      123 Beauty Street<br />
                      Anna Nagar, Madurai<br />
                      Tamil Nadu 625020
                    </p>
                  </div>
                  </div>
                
                  <div className="flex items-start space-x-3 sm:space-x-4 hover-lift group cursor-pointer">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-strawberry-600" />
                    </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-sm sm:text-base text-gray-600">+91 9876543210</p>
                    <p className="text-sm sm:text-base text-gray-600">+91 9876543211</p>
                  </div>
                  </div>
                
                  <div className="flex items-start space-x-3 sm:space-x-4 hover-lift group cursor-pointer">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-strawberry-600" />
                    </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600">info@strawberryartistry.com</p>
                    <p className="text-sm sm:text-base text-gray-600">bookings@strawberryartistry.com</p>
                  </div>
                  </div>
                
                  <div className="flex items-start space-x-3 sm:space-x-4 hover-lift group cursor-pointer">
                    <div className="bg-strawberry-100 p-3 rounded-lg group-hover:bg-strawberry-200 transition-colors duration-300">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-strawberry-600" />
                    </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">Monday - Sunday</p>
                    <p className="text-sm sm:text-base text-gray-600">9:00 AM - 9:00 PM</p>
                  </div>
                  </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="https://wa.me/919876543210"
                    className="w-full bg-green-600 text-white py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 hover-lift hover-glow flex items-center justify-center"
                >
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp Us
                </a>
                
                <a
                  href="tel:+919876543210"
                    className="w-full border-2 border-strawberry-600 text-strawberry-600 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-strawberry-600 hover:text-white hover-lift flex items-center justify-center"
                >
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>
              </div>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-champagne-50 to-rose-gold-50 animate-gradient-shift">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-gradient">Visit Our Salon</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Madurai, our salon is easily accessible and designed to provide 
              you with a luxurious beauty experience.
              </p>
            </div>
          </ScrollAnimations>
          
          <ScrollAnimations animation="scaleIn">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift hover-glow">
            <div className="h-64 sm:h-80 lg:h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                  <MapPin className="w-10 sm:w-12 h-10 sm:h-12 text-strawberry-600 mx-auto mb-3 sm:mb-4 animate-heartbeat" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Strawberryartistry</h3>
                <p className="text-sm sm:text-base text-gray-600">Anna Nagar, Madurai, Tamil Nadu</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Interactive map would be embedded here</p>
              </div>
            </div>
            </div>
          </ScrollAnimations>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimations animation="fadeIn">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-gradient">Frequently Asked Questions</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and booking process
              </p>
            </div>
          </ScrollAnimations>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <ScrollAnimations animation="slideInLeft" delay={0}>
              <div className="bg-strawberry-50 p-4 sm:p-6 rounded-lg hover-lift hover-glow group cursor-pointer">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">How far in advance should I book for bridal makeup?</h3>
                <p className="text-sm sm:text-base text-gray-600">We recommend booking at least 2-3 months in advance for bridal makeup, especially during wedding season. This ensures you get your preferred date and time for trials and the actual event.</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideInRight" delay={200}>
              <div className="bg-rose-gold-50 p-4 sm:p-6 rounded-lg hover-lift hover-glow group cursor-pointer">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">Do you provide trials for bridal makeup?</h3>
                <p className="text-sm sm:text-base text-gray-600">Yes, we offer trial sessions for all our bridal packages. This allows you to discuss your preferences, try different looks, and ensure you're completely satisfied with your chosen style.</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideInLeft" delay={400}>
              <div className="bg-champagne-50 p-4 sm:p-6 rounded-lg hover-lift hover-glow group cursor-pointer">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">What certifications do you provide for beauty courses?</h3>
                <p className="text-sm sm:text-base text-gray-600">Our beauty courses are certified and recognized in the industry. Students receive certificates upon completion, and we also provide job placement assistance to help kickstart your career.</p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideInRight" delay={600}>
              <div className="bg-strawberry-50 p-4 sm:p-6 rounded-lg hover-lift hover-glow group cursor-pointer">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-strawberry-600 transition-colors duration-300">Are your products safe and hygienic?</h3>
                <p className="text-sm sm:text-base text-gray-600">Absolutely! We use only premium, dermatologically tested products and maintain the highest standards of hygiene. All tools are sterilized, and we follow strict sanitation protocols.</p>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;