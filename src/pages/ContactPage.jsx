import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function ContactPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6 text-center">We'd love to hear from you! Reach out using the details below.</p>

                <div className="space-y-4">
                    <div className="flex items-center">
                        <FaEnvelope className="text-light-blue mr-3" size={20} />
                        <a href="mailto:info@classly.uz" className="text-gray-700 hover:text-light-blue">info@classly.uz</a>
                    </div>
                    <div className="flex items-center">
                        <FaPhone className="text-light-blue mr-3" size={20} />
                        <a href="tel:+998XXXXXXXXX" className="text-gray-700 hover:text-light-blue">+998 XX XXX XX XX</a> {/* Replace with actual phone */}
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-light-blue mr-3" size={20} />
                        <span className="text-gray-700">Tashkent, Uzbekistan</span> {/* Replace with actual address */}
                    </div>
                </div>

                {/* Optional: Add a contact form later */}
                {/* <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-blue focus:border-light-blue" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-blue focus:border-light-blue" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-light-blue focus:border-light-blue"></textarea>
          </div>
          <button type="submit" className="w-full bg-light-blue text-white px-4 py-2 rounded-md hover:bg-blue-400 transition duration-300">
            Send Message
          </button>
        </form> */}
            </div>
        </div>
    );
}

export default ContactPage; 