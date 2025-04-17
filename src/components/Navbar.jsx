import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <div className="bg-gradient-to-r from-accent-blue to-deep-blue w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                                C
                            </div>
                            <span className="ml-2 text-xl font-bold text-gray-900">Classly.uz</span>
                        </Link>
                        <div className="hidden md:ml-12 md:flex md:space-x-8">
                            <Link to="/features" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-accent-blue border-b-2 border-transparent hover:border-accent-blue transition duration-200">
                                Features
                            </Link>
                            <Link to="/pricing" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-accent-blue border-b-2 border-transparent hover:border-accent-blue transition duration-200">
                                Pricing
                            </Link>
                            <Link to="/testimonials" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-accent-blue border-b-2 border-transparent hover:border-accent-blue transition duration-200">
                                Testimonials
                            </Link>
                            <Link to="/about" className="inline-flex items-center px-1 pt-1 text-gray-700 hover:text-accent-blue border-b-2 border-transparent hover:border-accent-blue transition duration-200">
                                About
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-2">
                        <Link to="/login" className="px-3 py-2 text-gray-700 hover:text-accent-blue font-medium transition duration-200">
                            Log in
                        </Link>
                        <Link to="/signup" className="ml-4 px-4 py-2 bg-accent-blue hover:bg-deep-blue text-white rounded-lg font-medium shadow-sm hover:shadow-md transition duration-200">
                            Get Started
                        </Link>
                    </div>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-blue"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <FaTimes className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <FaBars className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            <div className={`md:hidden transition duration-200 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
                <div className="pt-2 pb-3 space-y-1 bg-white border-t shadow-inner">
                    <Link to="/features" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-accent-blue hover:bg-gray-50">
                        Features
                    </Link>
                    <Link to="/pricing" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-accent-blue hover:bg-gray-50">
                        Pricing
                    </Link>
                    <Link to="/testimonials" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-accent-blue hover:bg-gray-50">
                        Testimonials
                    </Link>
                    <Link to="/about" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-700 hover:text-accent-blue hover:bg-gray-50">
                        About
                    </Link>
                    <div className="mt-4 flex flex-col space-y-2 px-3">
                        <Link to="/login" className="px-3 py-2 text-base font-medium text-gray-700 hover:text-accent-blue rounded-md hover:bg-gray-50">
                            Log in
                        </Link>
                        <Link to="/signup" className="px-3 py-2 text-base font-medium text-white bg-accent-blue hover:bg-deep-blue rounded-md shadow-sm">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 