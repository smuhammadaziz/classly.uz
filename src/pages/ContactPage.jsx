import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserAlt, FaPaperPlane, FaCheck, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    setSubmitted(true);

    // Reset form after submission (simulating successful submission)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-tr from-accent-blue via-white to-light-orange">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-light-orange rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-accent-blue">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We'd love to hear from you! Whether you have a question, feedback, or want to join our team, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 px-4 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-5 rounded-lg mb-6 flex items-center">
                  <FaCheck className="text-green-500 mr-3" />
                  <span>Thank you for your message! We'll get back to you soon.</span>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUserAlt className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-accent-blue hover:bg-deep-blue text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <FaPaperPlane className="mr-2" /> Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-light-blue to-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email Us</p>
                      <a href="mailto:info@classly.uz" className="text-gray-800 font-medium hover:text-accent-blue transition">info@classly.uz</a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Call Us</p>
                      <a href="tel:+998712345678" className="text-gray-800 font-medium hover:text-accent-blue transition">+998 71 234 56 78</a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Visit Us</p>
                      <p className="text-gray-800 font-medium">123 Innovation Avenue, Tashkent, Uzbekistan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-r from-white to-light-orange p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Office Hours</h2>
                <p className="text-gray-600 mb-6">Our team is available to help during these hours:</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Weekdays</h3>
                    <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Weekends</h3>
                    <p className="text-gray-600">Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all duration-300">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Us</h2>
            <p className="text-gray-600">Visit our office in the heart of Tashkent</p>
          </div>

          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden shadow-md">
            {/* Replace the div below with an actual map component like Google Maps */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <p className="text-gray-600">Map will be embedded here</p>
              {/* For actual implementation:
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264088752!2d69.1392822!3d41.3108238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1650123456789!5m2!1sen!2s" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe> 
                            */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Support Section (optional) */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Immediate Support?</h2>
          <p className="text-gray-600 mb-8">
            Our support team typically responds within 24 hours. For faster assistance, check our FAQ section or reach out via phone during business hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-white text-accent-blue border-2 border-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors duration-300">
              View FAQs
            </a>
            <a href="tel:+998712345678" className="px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-deep-blue transition-colors duration-300">
              Call Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage; 