import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaChevronDown, FaChevronUp, FaStar, FaBolt, FaHeadset, FaShieldAlt, FaRegCalendarAlt } from 'react-icons/fa';

function PricingPage() {
    const [activeTab, setActiveTab] = useState('monthly');
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        if (expandedFaq === index) {
            setExpandedFaq(null);
        } else {
            setExpandedFaq(index);
        }
    };

    const faqs = [
        {
            question: "Can I switch between plans?",
            answer: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect immediately."
        },
        {
            question: "Is there a free trial available?",
            answer: "Absolutely! We offer a 14-day free trial on all plans with no credit card required. You can test all the features before committing."
        },
        {
            question: "Do you offer discounts for educational institutions?",
            answer: "Yes, we offer special pricing for schools and educational institutions. Contact our sales team for more information on bulk licenses."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayMe, Click, and bank transfers for institutional purchases in Uzbekistan."
        },
        {
            question: "Can I request a refund?",
            answer: "We offer a 30-day money-back guarantee if you're not satisfied with our service for any reason."
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section - Different style from Features page */}
            <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-light-blue">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Simple, Transparent <span className="text-accent-blue">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Choose the perfect plan for your teaching needs with no hidden fees
                    </p>

                    {/* Pricing Toggle - New element */}
                    <div className="inline-flex items-center bg-gray-100 p-1 rounded-full mb-12">
                        <button
                            className={`py-2 px-6 rounded-full text-sm font-medium transition ${activeTab === 'monthly'
                                    ? 'bg-white shadow-sm text-deep-blue'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setActiveTab('monthly')}
                        >
                            Monthly
                        </button>
                        <button
                            className={`py-2 px-6 rounded-full text-sm font-medium transition ${activeTab === 'annual'
                                    ? 'bg-white shadow-sm text-deep-blue'
                                    : 'text-gray-500 hover:text-gray-700'
                                }`}
                            onClick={() => setActiveTab('annual')}
                        >
                            Annual <span className="text-accent-orange text-xs ml-1">Save 20%</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Pricing Cards - Visually different from Features page */}
            <section className="py-16 px-4 -mt-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Standard Plan */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                            <div className="p-8 relative">
                                <div className="text-accent-blue opacity-10 absolute right-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <div className="inline-block px-4 py-1 rounded-full bg-light-blue text-accent-blue text-xs font-semibold mb-4">
                                    STANDARD
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Essentials</h3>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">${activeTab === 'monthly' ? '30' : '288'}</span>
                                    <span className="text-gray-500 ml-2">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-gray-600 mb-6">Perfect for individual teachers just getting started.</p>
                                <Link to="/signup?plan=standard" className="block w-full py-3 px-6 text-center bg-white text-accent-blue border-2 border-accent-blue font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                    Get Started
                                </Link>
                            </div>
                            <div className="bg-gray-50 px-8 py-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-blue mr-2 flex-shrink-0" /> 3 daily AI requests
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-blue mr-2 flex-shrink-0" /> 3 subject areas
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-blue mr-2 flex-shrink-0" /> Grades 1-5 curriculum
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-blue mr-2 flex-shrink-0" /> Basic PDF exports
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-blue mr-2 flex-shrink-0" /> Email support
                                    </li>
                                    <li className="flex items-center text-gray-500">
                                        <FaTimes className="text-gray-400 mr-2 flex-shrink-0" /> <span className="line-through">Plan customization</span>
                                    </li>
                                    <li className="flex items-center text-gray-500">
                                        <FaTimes className="text-gray-400 mr-2 flex-shrink-0" /> <span className="line-through">Version history</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-3 transition-all duration-300 relative z-10 scale-105 md:scale-100 md:hover:scale-105">
                            <div className="absolute top-0 inset-x-0">
                                <div className="h-1 w-full bg-deep-blue"></div>
                                <div className="flex justify-center">
                                    <span className="inline-flex items-center px-4 py-1 rounded-b-lg bg-deep-blue text-white text-xs font-bold uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 pt-12 relative">
                                <div className="text-deep-blue opacity-10 absolute right-4 top-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                                    </svg>
                                </div>
                                <div className="inline-block px-4 py-1 rounded-full bg-light-blue text-deep-blue text-xs font-semibold mb-4">
                                    PRO
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect for Professionals</h3>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">${activeTab === 'monthly' ? '60' : '576'}</span>
                                    <span className="text-gray-500 ml-2">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-gray-600 mb-6">Enhanced features for dedicated educators.</p>
                                <Link to="/signup?plan=pro" className="block w-full py-3 px-6 text-center bg-deep-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                                    Get Started
                                </Link>
                            </div>
                            <div className="bg-gray-50 px-8 py-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> 5 daily AI requests
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> 10+ subject areas
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> Grades 1-9 curriculum
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> Advanced PDF exports
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> Priority support
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> Plan customization
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-deep-blue mr-2 flex-shrink-0" /> Version history
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
                            <div className="p-8 relative">
                                <div className="text-accent-orange opacity-10 absolute right-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <div className="inline-block px-4 py-1 rounded-full bg-light-orange text-accent-orange text-xs font-semibold mb-4">
                                    PREMIUM
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Solution</h3>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">${activeTab === 'monthly' ? '75' : '720'}</span>
                                    <span className="text-gray-500 ml-2">/{activeTab === 'monthly' ? 'month' : 'year'}</span>
                                </div>
                                <p className="text-gray-600 mb-6">Everything you need plus team collaboration.</p>
                                <Link to="/signup?plan=premium" className="block w-full py-3 px-6 text-center bg-white text-accent-orange border-2 border-accent-orange font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300">
                                    Get Started
                                </Link>
                            </div>
                            <div className="bg-gray-50 px-8 py-6">
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> 10 daily AI requests
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> All + custom subjects
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> Grades 1-12 curriculum
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> Premium PDF templates
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> VIP support (WhatsApp)
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> Team collaboration
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <FaCheck className="text-accent-orange mr-2 flex-shrink-0" /> Advanced analytics
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section - New element */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-light-blue">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Classly.uz</h2>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto">We provide more than just teaching tools - we're your partner in educational excellence</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-light-blue rounded-full text-accent-blue mb-5">
                                <FaBolt className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Time-Saving</h3>
                            <p className="text-gray-600">Save up to 70% of your lesson planning time with our AI tools</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-light-blue rounded-full text-deep-blue mb-5">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Data</h3>
                            <p className="text-gray-600">Your data is encrypted and protected with enterprise-grade security</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-light-orange rounded-full text-accent-orange mb-5">
                                <FaHeadset className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Local Support</h3>
                            <p className="text-gray-600">Dedicated support team based in Uzbekistan ready to help</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-light-orange rounded-full text-accent-orange mb-5">
                                <FaRegCalendarAlt className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Regular Updates</h3>
                            <p className="text-gray-600">New features and improvements added every month</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section - New element */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">Everything you need to know about our pricing and plans</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`border rounded-lg overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'border-accent-blue shadow-md' : 'border-gray-200'
                                    }`}
                            >
                                <button
                                    className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                    {expandedFaq === index ?
                                        <FaChevronUp className="text-accent-blue" /> :
                                        <FaChevronDown className="text-gray-400" />
                                    }
                                </button>
                                <div
                                    className={`px-5 overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-40 pb-5' : 'max-h-0'
                                        }`}
                                >
                                    <p className="text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - New design */}
            <section className="py-20 px-4 bg-gradient-to-r from-deep-blue to-accent-blue text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <svg className="absolute left-0 top-0 h-full transform -translate-x-1/2" width="800" height="800" fill="none" viewBox="0 0 800 800">
                        <circle cx="400" cy="400" r="400" fill="white" />
                    </svg>
                    <svg className="absolute right-0 bottom-0 h-full transform translate-x-1/3 translate-y-1/3" width="800" height="800" fill="none" viewBox="0 0 800 800">
                        <circle cx="400" cy="400" r="400" fill="white" />
                    </svg>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="md:flex items-center justify-between">
                        <div className="md:w-7/12 mb-10 md:mb-0">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start Your Teaching Transformation Today</h2>
                            <p className="text-xl opacity-90 mb-6 md:mb-0">
                                Join educators across Uzbekistan who are saving time and improving student outcomes with Classly.uz
                            </p>
                        </div>
                        <div className="md:w-4/12 text-center md:text-right">
                            <Link to="/signup" className="inline-block py-4 px-8 bg-white text-deep-blue font-bold rounded-lg hover:bg-blue-50 shadow-lg transition duration-300 text-lg">
                                Start Free Trial
                            </Link>
                            <p className="mt-4 text-sm opacity-80">No credit card required. 14-day trial.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PricingPage; 