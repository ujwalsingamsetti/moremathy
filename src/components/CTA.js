import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const CTA = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <style jsx>{`
        .custom-placeholder::placeholder {
          font-weight: bold;
          color: #374151;
        }
      `}</style>
      <section id="contact" className="section-padding bg-bg-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-6">
              Questions? Ideas?
            </h2>
            <h3 className="text-2xl font-medium text-dark mb-8">
              Let's Connect!
            </h3>
            
            <p className="text-lg text-text-medium mb-8 leading-relaxed">
              If you're looking to collaborate or need more details, drop us a message and we'll connect with you.
            </p>
            
            <p className="text-lg font-medium text-dark">
              Reach out, and let's build a plan that delivers measurable impact.
            </p>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    placeholder="First Name *"
                    className="w-full px-4 py-3 border-0 rounded-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 custom-placeholder"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    placeholder="Last Name *"
                    className="w-full px-4 py-3 border-0 rounded-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 custom-placeholder"
                  />
                </div>
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email *"
                  className="w-full px-4 py-3 border-0 rounded-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 custom-placeholder"
                />
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="Phone Number *"
                  className="w-full px-4 py-3 border-0 rounded-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 custom-placeholder"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  maxLength={300}
                  placeholder="Write Your Message Here *"
                  className="w-full px-4 py-3 border-0 rounded-medium focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300 resize-none custom-placeholder"
                />
                <div className="text-right text-sm text-text-light mt-2">
                  {formData.message.length}/300
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  className="px-8 py-3 border-2 border-yellow text-dark rounded-full font-medium transition-all duration-300 hover:bg-yellow hover:text-dark"
                >
                  Cancel
                </button>
                <button className="bg-white text-dark px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-yellow hover:scale-105 hover:shadow-medium w-full sm:w-auto border-2 border-yellow flex items-center gap-3 group">
          Discover More
          <FaHeart className="text-yellow group-hover:text-dark transition-colors duration-300" />
        </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CTA;