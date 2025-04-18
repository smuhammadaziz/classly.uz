import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaQuoteLeft,
  FaStar,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaSchool,
  FaArrowRight,
  FaPlayCircle,
} from "react-icons/fa";

function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Anisa Karimova",
      role: "English Teacher",
      location: "Tashkent",
      category: "teacher",
      image: "https://randomuser.me/api/portraits/women/79.jpg",
      quote:
        "Classly.uz has revolutionized my teaching workflow. Creating lesson plans used to take hours, now it's done in minutes with better quality and engagement for my students.",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      name: "Botir Sadullaev",
      role: "Learning Center Director",
      location: "Samarkand",
      category: "director",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The CRM features have simplified our administrative work tremendously. We can track student progress, manage classes, and communicate with parents all in one place.",
      rating: 5,
      featured: true,
    },
    {
      id: 3,
      name: "Malika Rakhimova",
      role: "Math Teacher",
      location: "Bukhara",
      category: "teacher",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "I was skeptical about AI tools at first, but Classly.uz has changed my perspective completely. The math problems and exercises it generates are high-quality and perfectly aligned with our curriculum.",
      rating: 5,
      featured: false,
    },
    {
      id: 4,
      name: "Jamshid Tursunov",
      role: "School Principal",
      location: "Namangan",
      category: "director",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      quote: `We've implemented Classly.uz across our entire school, and the results have been remarkable.Teacher satisfaction is up, and they report saving 5-10 hours per week on planning and administrative tasks.`,
      rating: 5,
      featured: false,
    },
    {
      id: 5,
      name: "Nilufar Azimova",
      role: "Science Teacher",
      location: "Andijan",
      category: "teacher",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      quote:
        "The science curriculum templates are outstanding. They include lab activities, safety instructions, and assessment questions that would take me days to prepare myself.",
      rating: 4,
      featured: false,
    },
    {
      id: 6,
      name: "Olim Khasanov",
      role: "Education Technology Specialist",
      location: "Tashkent",
      category: "other",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      quote:
        "From a technical perspective, Classly.uz stands out for its intuitive interface and reliability. The platform rarely experiences downtime, and updates are seamless.",
      rating: 5,
      featured: false,
    },
    {
      id: 7,
      name: "Zarina Umarova",
      role: "Primary School Teacher",
      location: "Fergana",
      category: "teacher",
      image: "https://randomuser.me/api/portraits/women/31.jpg",
      quote:
        "Working with young students requires a lot of creativity and patience. Classly.uz helps me generate engaging activities that keep my energetic first graders focused and learning.",
      rating: 5,
      featured: false,
    },
    {
      id: 8,
      name: "Rustam Alimov",
      role: "Private Tutor",
      location: "Samarkand",
      category: "other",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote:
        "As an independent tutor, I need to be efficient with my time. Classly.uz allows me to prepare customized lessons for each student without spending my entire weekend planning.",
      rating: 4,
      featured: false,
    },
  ];

  const filteredTestimonials =
    activeCategory === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Stats data
  const stats = [
    {
      value: "1,200+",
      label: "Educators",
      icon: <FaChalkboardTeacher className="text-accent-blue text-3xl mb-2" />,
    },
    {
      value: "350+",
      label: "Schools",
      icon: <FaSchool className="text-deep-blue text-3xl mb-2" />,
    },
    {
      value: "42,000+",
      label: "Students Impacted",
      icon: <FaGraduationCap className="text-accent-orange text-3xl mb-2" />,
    },
  ];

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`${
          i < rating ? "text-yellow-400" : "text-gray-300"
        } inline-block`}
      />
    ));
  };

  return (
    <div className="bg-white">
      {/* Hero Section - Different style from other pages */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-tr from-accent-blue via-white to-light-orange">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-light-blue rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-light-orange rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-deep-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Users <span className="text-accent-blue">Love</span> Classly.uz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See what educators across
            Uzbekistan are saying about our platform.
          </p>
        </div>
      </section>

      {/* Featured Testimonials - Showcase design */}
      <section className="py-20 px-4 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="relative bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent-blue rounded-full flex items-center justify-center">
                    <FaQuoteLeft className="text-white" />
                  </div>
                  <div className="mb-6 pl-6">
                    <p className="text-xl italic text-gray-700 leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-light-blue"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">
                        {testimonial.role}, {testimonial.location}
                      </p>
                      <div className="mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Creative visual */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-light-blue">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Educators Nationwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our growing community of teachers and educational institutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md transform hover:scale-105 transition-all duration-300"
              >
                {stat.icon}
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Testimonials - With filter tabs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Real feedback from educators using Classly.uz every day
            </p>

            {/* Category Tabs */}
            <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-lg mb-8">
              <button
                className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                  activeCategory === "all"
                    ? "bg-white shadow-sm text-deep-blue"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Reviews
              </button>
              <button
                className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                  activeCategory === "teacher"
                    ? "bg-white shadow-sm text-deep-blue"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveCategory("teacher")}
              >
                Teachers
              </button>
              <button
                className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                  activeCategory === "director"
                    ? "bg-white shadow-sm text-deep-blue"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveCategory("director")}
              >
                Directors & Principals
              </button>
              <button
                className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                  activeCategory === "other"
                    ? "bg-white shadow-sm text-deep-blue"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveCategory("other")}
              >
                Other Professionals
              </button>
            </div>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-yellow-400">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-2 italic">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonial Section - Visual interest */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Watch Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear directly from educators about their experience with
              Classly.uz
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            {/* This would be a real video in production - using placeholder image */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <FaPlayCircle className="text-6xl mx-auto mb-4 text-accent-blue hover:text-deep-blue cursor-pointer transition-colors" />
                <h3 className="text-2xl font-bold mb-2">
                  Teacher Success Stories
                </h3>
                <p className="text-gray-300 max-w-lg mx-auto">
                  Watch how Classly.uz transformed the teaching experience for
                  educators across Uzbekistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Unique design */}
      <section className="py-20 px-4 bg-gradient-to-br from-deep-blue to-accent-blue text-white relative">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-8 border-white opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full border-8 border-white opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto relative text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Experience the platform that's transforming education across
            Uzbekistan.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center py-4 px-8 bg-white text-deep-blue font-bold rounded-lg hover:bg-blue-50 shadow-lg transition duration-300 text-lg"
          >
            Start Your Free Trial <FaArrowRight className="ml-2" />
          </Link>
          <p className="mt-4 text-sm opacity-80">
            No credit card required. 14-day trial.
          </p>
        </div>
      </section>
    </div>
  );
}

export default TestimonialsPage;

// Adding this component would require some animation CSS
// These would be added to your global CSS
/*
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/
