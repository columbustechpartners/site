"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Globe,
  Brain,
  Cog,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const portfolioItems = [
    {
      title: "Scioto Football",
      description:
        "Modern Next.js website for Dublin Scioto High School's football program, featuring real-time stats, schedules, and team information.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      category: "Website Development",
      image: "/portfolio/scioto-football.png",
      link: "https://sciotofootball.com",
    },
    {
      title: "Automated Employee Directory",
      description:
        "Backend automation system for Dublin City Schools that syncs administrator and staff data from HR systems into a centralized Google Sheet.",
      tech: ["Python", "Google APIs", "Automation"],
      category: "Business Automation",
      image: "/portfolio/sheet-automation.png",
    },
    {
      title: "The Green Fork Cafe",
      description:
        "Elegant React-based website for a local cafe featuring online menu, location details, and customer engagement features.",
      tech: ["React", "JavaScript", "CSS"],
      category: "Website Development",
      image: "/portfolio/green-fork-cafe.png",
    },
  ];

  const testimonials = [
    {
      name: "Samuel Martinez",
      role: "Owner, Sam's Renovations",
      content:
        "They did an outstanding job creating our company website. They were professional, attentive to our needs, and delivered a product that truly represents our brand. Highly recommended!",
      rating: 5,
    },
    {
      name: "Alex Place",
      role: "Head Football Coach, Dublin Scioto High School",
      content:
        "The team delivered a stunning website that exceeded our expectations. Communication was excellent throughout the project, and they truly understood our vision.",
      rating: 5,
    },
    {
      name: "Cassie Dietrich",
      role: "Public Information Officer, Dublin City Schools",
      content:
        "Their automation solution saved us countless hours of manual data entry. The system is reliable, efficient, and has transformed our workflow completely.",
      rating: 5,
    },
    {
      name: "Hicham El Oufir",
      role: "Manager, M&M Food Mart",
      content:
        "The custom inventory system our station received has been excellent. It's very user-friendly and has saved us a lot of time in managing our stock. The solution fits our needs perfectly.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Owner, The Green Fork Cafe",
      content:
        "Professional, creative, and responsive. They built us a beautiful website that perfectly captures our cafe's atmosphere. Our online presence has never been stronger!",
      rating: 5,
    },
  ];

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description:
        "Harness the power of artificial intelligence to automate tasks, gain insights, and transform your business operations with cutting-edge AI technology.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Automation",
      description:
        "Streamline your workflows with custom automation solutions that save time, reduce errors, and boost productivity across your organization.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Website Development",
      description:
        "Beautiful, responsive websites built with modern frameworks like Next.js and React. Fast, SEO-optimized, and designed to convert visitors into customers.",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Custom Business Tools",
      description:
        "Tailored software solutions designed specifically for your business needs. From data management to process optimization, we build tools that work for you.",
    },
  ];

  const projectPricing = [
    {
      category: "Website Development",
      startingPrice: "$250",
      description: "Custom websites built with modern technologies",
      features: [
        "Responsive Design (Mobile & Desktop)",
        "SEO Optimization",
        "Contact Forms & Integration",
        "Basic SEO Setup",
        "2 Weeks Development Time",
      ],
      examples: ["Business Websites", "Portfolio Sites", "Landing Pages"],
    },
    {
      category: "Business Automation",
      startingPrice: "$350",
      description: "Streamline your business processes with custom automation",
      features: [
        "Workflow Automation",
        "Data Sync Between Systems",
        "Custom Dashboard",
        "Report Generation",
        "API Development",
        "3-5 Weeks Development Time",
      ],
      examples: ["CRM Automation", "Data Processing", "Workflow Systems"],
    },
    {
      category: "Customized AI Solutions",
      startingPrice: "$500",
      description: "Intelligent automation and machine learning solutions",
      features: [
        "Custom AI Model Development",
        "Data Analysis & Processing",
        "Natural Language Processing",
        "Predictive Analytics",
        "API Integration",
        "4-6 Weeks Development Time",
      ],
      examples: ["Chatbots", "Data Analysis Tools", "Predictive Models"],
    },
    {
      category: "Custom Business Tools",
      startingPrice: "$500",
      description: "Tailored software solutions for your specific needs",
      features: [
        "Custom Database Design",
        "User Management System",
        "Real-time Updates",
        "Advanced Analytics",
        "Multi-platform Support",
        "5-8 Weeks Development Time",
      ],
      examples: ["Internal Tools", "Management Systems", "Custom CRMs"],
    },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Happy Clients", value: "12+" },
    { label: "Technologies", value: "20+" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white font-manrope">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Columbus Tech Partners",
            description:
              "Professional web development, AI solutions, and business automation services in Columbus, Ohio",
            url: "https://columbustechpartners.com",
            telephone: "+1-220-219-6064",
            email: "contact@columbustechpartners.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Columbus",
              addressRegion: "Ohio",
              addressCountry: "US",
            },
            serviceType: [
              "Web Development",
              "AI Solutions",
              "Business Automation",
              "Custom Software Development",
            ],
            areaServed: "Columbus, Ohio and worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Technology Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Development",
                    description:
                      "Custom websites built with modern technologies",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Business Automation",
                    description:
                      "Streamline your business processes with custom automation",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Navigation */}
      <header role="banner">
        <nav
          aria-label="Main navigation"
          className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2"
              >
                <Code2 className="w-8 h-8 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Columbus Tech Partners
                </span>
              </motion.div>

              {/* Desktop Menu */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex gap-8"
              >
                {[
                  "Home",
                  "Portfolio",
                  "Testimonials",
                  "Services",
                  "Pricing",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="md:hidden mt-4"
                role="menu"
              >
                {[
                  "Home",
                  "Portfolio",
                  "Testimonials",
                  "Services",
                  "Pricing",
                  "Contact",
                ].map((item) => (
                  <button
                    key={item}
                    role="menuitem"
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section
          id="home"
          aria-label="Introduction to Columbus Tech Partners"
          className="min-h-screen flex items-center justify-center px-6 pt-20"
        >
          <div className="max-w-7xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                  2+ Years of Excellence in Web Development
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 p-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Transform Your Vision
                <br />
                Into Digital Reality
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
                Professional web development, AI solutions, and business
                automation services in Columbus, Ohio. We craft cutting-edge
                websites and tools that drive results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("portfolio")}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                  aria-label="View our portfolio of work"
                >
                  View Our Work <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 bg-slate-800 rounded-lg font-semibold border border-slate-700 hover:border-cyan-500 transition-colors"
                  aria-label="Get in touch with us"
                >
                  Get In Touch
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
                aria-label="Company statistics"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          aria-label="Our Portfolio of Work"
          className="py-20 px-6"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Web Development Portfolio
              </h2>
              <p className="text-slate-400 text-lg">
                Recent projects that showcase our expertise in web development
                and business automation
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item, index) => (
                <motion.article
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group"
                >
                  {item.link ? (
                    <Link
                      href={item.link}
                      target="_blank"
                      aria-label={`View ${item.title} project`}
                    >
                      <div
                        className={`h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 relative overflow-hidden cursor-pointer`}
                      >
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.category} project by Columbus Tech Partners`}
                          width={400}
                          height={300}
                          className="transition-transform duration-300 transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="text-sm text-cyan-400 font-semibold">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div>
                      <div className="h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 relative overflow-hidden cursor-default">
                        <Image
                          src={item.image}
                          alt={`${item.title} - ${item.category} project by Columbus Tech Partners`}
                          width={400}
                          height={300}
                          className="transition-transform duration-300 transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="text-sm text-cyan-400 font-semibold">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-400 mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          aria-label="Client Testimonials"
          className="py-20 px-6 bg-slate-900/50"
          itemScope
          itemType="https://schema.org/Review"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Client Testimonials
              </h2>
              <p className="text-slate-400 text-lg">
                What our clients say about working with Columbus Tech Partners
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 border border-slate-700"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                <p
                  className="text-xl text-slate-300 mb-6 italic"
                  itemProp="reviewBody"
                >
                  "{testimonials[activeTestimonial].content}"
                </p>

                <div itemScope itemType="https://schema.org/Person">
                  <div className="font-semibold text-lg" itemProp="name">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-cyan-400" itemProp="jobTitle">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 bg-slate-800 rounded-full hover:bg-cyan-500 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" aria-label="Our Services" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Technology Services
              </h2>
              <p className="text-slate-400 text-lg">
                Comprehensive web development and automation solutions tailored
                to your business needs
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  itemScope
                  itemType="https://schema.org/Service"
                >
                  <div className="text-cyan-400 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-slate-400" itemProp="description">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          aria-label="Project Pricing"
          className="py-20 px-6 bg-slate-900/50"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Project-Based Pricing
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Every project is unique. Prices may vary depending on the
                complexity, features, and timeline of your specific
                requirements.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {projectPricing.map((project, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <h3 className="text-2xl font-bold mb-2" itemProp="name">
                    {project.category}
                  </h3>
                  <div
                    className="text-3xl font-bold text-cyan-400 mb-4"
                    itemProp="price"
                  >
                    {project.startingPrice}
                    <span className="text-sm text-slate-400 font-normal">
                      {" "}
                      starting
                    </span>
                  </div>
                  <p className="text-slate-400 mb-6" itemProp="description">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-slate-300">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-slate-300">
                      Examples:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.examples.map((example, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-cyan-500/10 rounded text-xs text-cyan-400"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-slate-400 italic">
                All projects include free consultation, project planning, and
                post-launch support. Contact us for a detailed quote tailored to
                your specific needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-label="Start Your Project" className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-slate-100">
              Let's bring your ideas to life with cutting-edge technology and
              expert craftsmanship.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              aria-label="Get started with your project"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          aria-label="Contact Information"
          className="py-20 px-6 bg-slate-900/50"
          itemScope
          itemType="https://schema.org/ContactPoint"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-lg">
                Let's discuss how we can help transform your business with our
                web development services
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" itemProp="email">
                    <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-slate-400">
                        contact@columbustechpartners.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" itemProp="telephone">
                    <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-slate-400">+1 (220) 219-6064</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4" itemProp="address">
                    <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-slate-400">Columbus, Ohio</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-6" aria-label="Contact form">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      aria-label="Your name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                      aria-label="Your email"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      aria-label="Your message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                    aria-label="Send message"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer
        role="contentinfo"
        className="py-8 px-6 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Columbus Tech Partners. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
