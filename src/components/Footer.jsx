import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="bg-gradient-to-r from-accent-blue to-deep-blue w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                C
                            </div>
                            <span className="text-xl font-bold text-gray-900">Classly.uz</span>
                        </Link>
                        <p className="text-gray-600 text-sm mb-4">
                            Empowering education in Uzbekistan with innovative classroom management tools.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-500 hover:text-accent-blue">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-deep-blue">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-accent-blue">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-500 hover:text-deep-blue">
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/features" className="text-gray-600 hover:text-accent-blue">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" className="text-gray-600 hover:text-deep-blue">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/testimonials" className="text-gray-600 hover:text-accent-blue">
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link to="/guides" className="text-gray-600 hover:text-deep-blue">
                                    Guides
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="text-gray-600 hover:text-accent-blue">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="text-gray-600 hover:text-deep-blue">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="text-gray-600 hover:text-accent-blue">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 hover:text-deep-blue">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-1">
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/help" className="text-gray-600 hover:text-accent-blue">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-600 hover:text-deep-blue">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-600 hover:text-accent-blue">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-600 hover:text-deep-blue">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} Classly.uz. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer; 