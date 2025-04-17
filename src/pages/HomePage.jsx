import React from 'react';
import { Link } from 'react-router-dom';
import { FaBolt, FaUsers, FaShareAlt, FaLaptop, FaRegCheckCircle, FaQuoteLeft, FaArrowRight, FaStar, FaChalkboardTeacher, FaBookReader, FaGraduationCap } from 'react-icons/fa';
import { FiTarget, FiCheckCircle } from 'react-icons/fi';

function HomePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 sm:py-28 px-4 bg-gradient-to-r from-light-blue via-white to-light-orange">
                <div className="absolute inset-0 bg-[url('https://billzwp.billz.work/wp-content/uploads/2022/02/seo-image.png')] opacity-5 bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="w-full lg:w-1/2 text-left lg:pr-12 mb-10 lg:mb-0">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                                AI-Powered <span className="text-deep-blue">Education</span> Platform
                            </h1>
                            <h2 className="text-xl text-gray-600 mt-6 mb-8 max-w-lg">
                                Generate tailored lesson plans, quizzes, and manage your classroom with our AI tools designed specifically for teachers in Uzbekistan.
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/signup"
                                    className="bg-deep-blue hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg shadow-lg hover:shadow-blue-200/50 transition duration-300 inline-flex items-center"
                                >
                                    Start Free Trial <FaArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link
                                    to="/features"
                                    className="bg-white hover:bg-gray-50 text-gray-800 font-medium px-8 py-3.5 rounded-lg border border-gray-300 hover:border-gray-400 shadow-sm transition duration-300 inline-flex items-center"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative mx-auto w-full max-w-lg">
                                <div className="absolute -top-8 -left-8 w-72 h-72 bg-light-blue rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                                <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-light-orange rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
                                <div className="relative">
                                    <img
                                        src="https://billzwp.billz.work/wp-content/uploads/2022/02/seo-image.png"
                                        alt="Classly.uz Platform"
                                        className="relative rounded-lg shadow-2xl border border-gray-200 z-10"
                                    />
                                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-light-blue/30 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Highlight Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-light-blue rounded-xl hover:shadow-lg transition duration-300 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-blue rounded-xl text-white mb-5">
                                <FaChalkboardTeacher className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">AI Lesson Plans</h3>
                            <p className="text-gray-600">Create comprehensive lesson plans in seconds tailored to your curriculum.</p>
                        </div>
                        <div className="p-6 bg-light-orange rounded-xl hover:shadow-lg transition duration-300 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-orange rounded-xl text-white mb-5">
                                <FaBookReader className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart CRM</h3>
                            <p className="text-gray-600">Manage students, track progress, and organize teaching resources easily.</p>
                        </div>
                        <div className="p-6 bg-light-blue rounded-xl hover:shadow-lg transition duration-300 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-blue rounded-xl text-white mb-5">
                                <FaGraduationCap className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Local Context</h3>
                            <p className="text-gray-600">Designed specifically for the educational environment in Uzbekistan.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Features Section */}
            <section className="py-20 sm:py-28 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Save Time, Teach Smarter</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to streamline your workflow and focus on what matters most - your students.</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-accent-blue">
                        <FaBolt className="text-3xl text-accent-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Lesson Plans</h3>
                        <p className="text-gray-600">Generate engaging, curriculum-aligned lesson plans in seconds using our advanced AI technology.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-accent-orange">
                        <FaUsers className="text-3xl text-accent-orange mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Simple School CRM</h3>
                        <p className="text-gray-600">Manage student profiles, track progress, and organize teacher resources in one intuitive platform.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-deep-blue">
                        <FaShareAlt className="text-3xl text-deep-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">One-Click Sharing</h3>
                        <p className="text-gray-600">Distribute materials, assignments, and feedback effortlessly across classes or individually.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-accent-blue">
                        <FaLaptop className="text-3xl text-accent-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Device Access</h3>
                        <p className="text-gray-600">Use Classly.uz seamlessly on desktop, tablet, or mobile devices anywhere, anytime.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-deep-blue">
                        <FiTarget className="text-3xl text-deep-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Uzbekistan</h3>
                        <p className="text-gray-600">Tailored features and support specifically for the local educational context and curriculum.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-t-4 border-accent-orange">
                        <FiCheckCircle className="text-3xl text-accent-orange mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">AI Content Tools</h3>
                        <p className="text-gray-600">Generate quizzes, study guides, worksheets and other materials automatically with AI.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 sm:py-28 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Teachers Are Saying</h2>
                    <p className="text-lg text-gray-600">Join hundreds of satisfied educators across Uzbekistan.</p>
                </div>
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                    <div className="bg-light-blue/30 p-8 rounded-lg shadow-sm relative">
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-accent-blue opacity-20">
                            <FaQuoteLeft className="text-6xl" />
                        </div>
                        <div className="relative">
                            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"Classly.uz has revolutionized my teaching workflow. Creating lesson plans used to take hours, now it's done in minutes with better quality and engagement for my students."</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    AK
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Anisa Karimova</p>
                                    <p className="text-gray-600 text-sm">English Teacher, Tashkent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light-orange/30 p-8 rounded-lg shadow-sm relative">
                        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-accent-orange opacity-20">
                            <FaQuoteLeft className="text-6xl" />
                        </div>
                        <div className="relative">
                            <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"The CRM features have simplified our administrative work tremendously. We can track student progress, manage classes, and communicate with parents all in one place."</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                    BS
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Botir Sadullaev</p>
                                    <p className="text-gray-600 text-sm">Learning Center Director, Samarkand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 sm:py-28 px-4 bg-gradient-to-b from-gray-50 to-white" id="pricing">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">Simple, transparent pricing for individual teachers and institutions.</p>
                </div>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center">
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 max-w-md">
                        <div className="bg-white h-full rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Standard</h3>
                                <p className="text-gray-600 mb-6">For individual teachers just getting started</p>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">$30</span>
                                    <span className="text-gray-600 ml-2 mb-1">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">AI Lesson Plan Generator</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Basic CRM Features</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">5GB Storage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Email Support</span>
                                    </li>
                                </ul>
                                <Link to="/signup?plan=standard" className="block w-full py-3 px-6 text-center bg-white text-accent-blue border-2 border-accent-blue font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                    Choose Standard
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0 md:-mt-4 max-w-md relative">
                        <div className="absolute top-0 inset-x-0 flex justify-center">
                            <span className="bg-deep-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-md transform -translate-y-1/2">
                                Most Popular
                            </span>
                        </div>
                        <div className="bg-white h-full rounded-2xl shadow-xl border-2 border-deep-blue overflow-hidden transition-all duration-300 hover:shadow-2xl">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                                <p className="text-gray-600 mb-6">For professionals needing more power</p>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">$60</span>
                                    <span className="text-gray-600 ml-2 mb-1">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-deep-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">All Standard Features</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-deep-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">AI Quiz & Content Generation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-deep-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Enhanced CRM Features</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-deep-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">15GB Storage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-deep-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Priority Support</span>
                                    </li>
                                </ul>
                                <Link to="/signup?plan=pro" className="block w-full py-3 px-6 text-center bg-deep-blue text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                                    Choose Pro
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 max-w-md">
                        <div className="bg-white h-full rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl">
                            <div className="bg-light-blue p-2"></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
                                <p className="text-gray-600 mb-6">For institutions and power users</p>
                                <div className="flex items-end mb-6">
                                    <span className="text-5xl font-bold text-gray-900">$75</span>
                                    <span className="text-gray-600 ml-2 mb-1">/month</span>
                                </div>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">All Pro Features</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Custom AI Model Tuning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Dedicated Support Manager</span>
                                    </li>
                                    <li className="flex items-start">
                                        <FiCheckCircle className="text-accent-blue mt-1 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Unlimited Storage</span>
                                    </li>
                                </ul>
                                <Link to="/signup?plan=premium" className="block w-full py-3 px-6 text-center bg-white text-accent-blue border-2 border-accent-blue font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300">
                                    Choose Premium
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-r from-accent-blue to-deep-blue text-white">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">Transform Your Teaching Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                        Join hundreds of educators in Uzbekistan already simplifying their workflow with Classly.uz.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-block py-4 px-8 bg-white text-deep-blue font-bold rounded-lg hover:bg-blue-50 shadow-lg hover:shadow-xl transition duration-300 text-lg"
                    >
                        Start Your Free Trial
                    </Link>
                    <p className="mt-4 text-sm opacity-80">No credit card required. 14-day free trial.</p>
                </div>
            </section>
        </div>
    );
}

export default HomePage;

// Helper component for grid pattern (add if needed, or define inline style)
const GridPattern = () => (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full stroke-gray-200 fill-gray-100/50 [mask-image:radial-gradient(40rem_30rem_at_top,white,transparent)]">
        <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x="50%" y="0" patternTransform="translate(0 -1)">
                <path d="M.5 40V.5H40" fill="none"></path>
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
    </svg>
); 