import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaBolt, FaUsers, FaShareAlt, FaLaptop, FaRegCheckCircle, FaChalkboardTeacher, FaBookReader, FaGraduationCap } from 'react-icons/fa';
import { FiTarget, FiCheckCircle } from 'react-icons/fi';

function FeaturesPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-28 px-4 bg-gradient-to-r from-light-blue via-white to-light-orange">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Powerful Features for <span className="text-deep-blue">Modern Educators</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Discover all the tools and capabilities that make Classly.uz the preferred platform for teachers in Uzbekistan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Makes Classly.uz Special</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our comprehensive set of features designed specifically for educational needs in Uzbekistan</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-light-blue rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-xl text-white mb-5">
                                <FaChalkboardTeacher className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Lesson Plans</h3>
                            <p className="text-gray-600">Generate comprehensive lesson plans tailored to your curriculum with our advanced AI technology.</p>
                        </div>

                        <div className="p-6 bg-light-orange rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange rounded-xl text-white mb-5">
                                <FaBookReader className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart CRM System</h3>
                            <p className="text-gray-600">Manage students, track progress, and organize teaching resources all in one intuitive platform.</p>
                        </div>

                        <div className="p-6 bg-light-blue rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-blue rounded-xl text-white mb-5">
                                <FaGraduationCap className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Uzbekistan Context</h3>
                            <p className="text-gray-600">Our platform is specifically designed for the educational environment and curriculum needs in Uzbekistan.</p>
                        </div>

                        <div className="p-6 bg-light-orange rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange rounded-xl text-white mb-5">
                                <FaShareAlt className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Sharing</h3>
                            <p className="text-gray-600">Share materials, assignments, and feedback with students and parents with just a few clicks.</p>
                        </div>

                        <div className="p-6 bg-light-blue rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-xl text-white mb-5">
                                <FaLaptop className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Device Access</h3>
                            <p className="text-gray-600">Access your account and materials from any device - desktop, tablet, or mobile - anywhere, anytime.</p>
                        </div>

                        <div className="p-6 bg-light-orange rounded-xl hover:shadow-lg transition duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-blue rounded-xl text-white mb-5">
                                <FiCheckCircle className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Content Tools</h3>
                            <p className="text-gray-600">Generate quizzes, worksheets, and study materials automatically with our powerful AI tools.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Table Section */}
            <section className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Compare Plans and Features</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find the perfect plan for your teaching needs</p>
                    </div>

                    {/* Mobile Pricing Cards - Visible on small screens */}
                    <div className="md:hidden space-y-8">
                        {/* Standard Plan */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard ($30)</h3>
                                <div className="space-y-3 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Daily Requests</span>
                                        <span className="font-medium">3</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Duration Customization</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Curriculum Templates</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Save & Download Plans</span>
                                        <FaCheck className="text-accent-blue" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Subject Variety</span>
                                        <span className="font-medium">3 subjects</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Grade Range</span>
                                        <span className="font-medium">1st–5th</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Email Support</span>
                                        <FaCheck className="text-accent-blue" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Early Access to Features</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Version History</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">PDF Export</span>
                                        <FaCheck className="text-accent-blue" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Team Collaboration</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link to="/signup?plan=standard" className="block w-full py-3 text-center bg-accent-blue text-white font-medium rounded-lg hover:bg-deep-blue transition-colors duration-300">
                                        Choose Standard
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pro Plan */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-deep-blue">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro ($60)</h3>
                                <div className="space-y-3 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Daily Requests</span>
                                        <span className="font-medium">5</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Duration Customization</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Curriculum Templates</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Save & Download Plans</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Subject Variety</span>
                                        <span className="font-medium">10+ subjects</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Grade Range</span>
                                        <span className="font-medium">1st–9th</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Email Support</span>
                                        <span className="font-medium">Priority</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Early Access to Features</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Version History</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">PDF Export</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Team Collaboration</span>
                                        <FaTimes className="text-red-500" />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link to="/signup?plan=pro" className="block w-full py-3 text-center bg-deep-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                        Choose Pro
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium ($75)</h3>
                                <div className="space-y-3 mt-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Daily Requests</span>
                                        <span className="font-medium">10</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Duration Customization</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Curriculum Templates</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Save & Download Plans</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Subject Variety</span>
                                        <span className="font-medium">All + Custom subjects</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Grade Range</span>
                                        <span className="font-medium">1st–12th</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Email Support</span>
                                        <span className="font-medium">VIP (WhatsApp/Telegram)</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Early Access to Features</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Plan Version History</span>
                                        <FaCheck className="text-green-500" />
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">PDF Export</span>
                                        <span className="font-medium">Premium Templates</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700">Team Collaboration</span>
                                        <span className="font-medium text-green-500">Yes (add co-teachers)</span>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <Link to="/signup?plan=premium" className="block w-full py-3 text-center bg-accent-blue text-white font-medium rounded-lg hover:bg-deep-blue transition-colors duration-300">
                                        Choose Premium
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Pricing Table - Visible on medium+ screens */}
                    <div className="hidden md:block overflow-hidden">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="py-4 px-6 text-left text-lg font-bold text-gray-900">Feature</th>
                                        <th className="py-4 px-6 text-center text-lg font-bold text-gray-900">Standard ($30)</th>
                                        <th className="py-4 px-6 text-center text-lg font-bold text-gray-900">Pro ($60)</th>
                                        <th className="py-4 px-6 text-center text-lg font-bold text-gray-900">Premium ($75)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Daily Requests</td>
                                        <td className="py-4 px-6 text-center">3</td>
                                        <td className="py-4 px-6 text-center">5</td>
                                        <td className="py-4 px-6 text-center">10</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-4 px-6 text-gray-800 font-medium">Plan Duration Customization</td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Curriculum Templates</td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-4 px-6 text-gray-800 font-medium">Save & Download Plans</td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-accent-blue" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Subject Variety</td>
                                        <td className="py-4 px-6 text-center">3 subjects</td>
                                        <td className="py-4 px-6 text-center">10+ subjects</td>
                                        <td className="py-4 px-6 text-center">All + Custom subjects</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-4 px-6 text-gray-800 font-medium">Grade Range</td>
                                        <td className="py-4 px-6 text-center">1st–5th</td>
                                        <td className="py-4 px-6 text-center">1st–9th</td>
                                        <td className="py-4 px-6 text-center">1st–12th</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Email Support</td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-accent-blue" /></td>
                                        <td className="py-4 px-6 text-center">Priority</td>
                                        <td className="py-4 px-6 text-center">VIP (WhatsApp/Telegram)</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-4 px-6 text-gray-800 font-medium">Early Access to Features</td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Plan Version History</td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="py-4 px-6 text-gray-800 font-medium">PDF Export</td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-accent-blue" /></td>
                                        <td className="py-4 px-6 text-center"><FaCheck className="mx-auto text-green-500" /></td>
                                        <td className="py-4 px-6 text-center">Premium Templates</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 text-gray-800 font-medium">Team Collaboration</td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center"><FaTimes className="mx-auto text-red-500" /></td>
                                        <td className="py-4 px-6 text-center text-green-500">Yes (add co-teachers)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Pricing Buttons for Desktop */}
                        <div className="mt-8 grid grid-cols-3 gap-8">
                            <Link to="/signup?plan=standard" className="py-3 text-center bg-accent-blue text-white font-medium rounded-lg hover:bg-deep-blue transition-colors duration-300">
                                Choose Standard
                            </Link>
                            <Link to="/signup?plan=pro" className="py-3 text-center bg-deep-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                                Choose Pro
                            </Link>
                            <Link to="/signup?plan=premium" className="py-3 text-center bg-accent-blue text-white font-medium rounded-lg hover:bg-deep-blue transition-colors duration-300">
                                Choose Premium
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-r from-accent-blue to-deep-blue text-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Transform Your Teaching?</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                        Join hundreds of educators in Uzbekistan using Classly.uz to save time and improve educational outcomes.
                    </p>
                    <Link to="/signup" className="inline-block py-4 px-8 bg-white text-deep-blue font-bold rounded-lg hover:bg-blue-50 shadow-lg transition duration-300 text-lg">
                        Start Your Free Trial
                    </Link>
                    <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial.</p>
                </div>
            </section>
        </div>
    );
}

export default FeaturesPage; 