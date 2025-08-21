"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = ['all', 'web', 'mobile', 'fullstack'];

  const projects = [
    {
      id: 1,
      title: "software solutions and services Provider",
      description: "Developed a comprehensive software solutions and services website using the MERN stack, showcasing multiple offerings and case studies to attract potential clients",
      image: "/nighthawk.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      demoUrl: "https://nighthawk-mu.vercel.app/",
      codeUrl: "https://github.com/aman-SINGH7999/Nighthawk",
      featured: true
    },
    {
      id: 2,
      title: "Chat App",
      description: "Developed a dynamic, real-time chat application using the MERN Stack and Socket.io.",
      image: "/chat.png",
      category: "fullstack",
      technologies: ["React.js", "Socket.io", "Node.js", "MongoDB", "Tailwind"],
      demoUrl: "https://chat-app-client-aky8.onrender.com/",
      codeUrl: "https://github.com/aman-SINGH7999/chat_app_client",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Mobile App",
      description: "Cross-platform mobile app for Social Media user interface ",
      image: "/social.jpeg",
      category: "mobile",
      technologies: ["React Native", "Nativewind", "Redux", "Typescript"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and interactive elements.",
      image: "/portfolio.png",
      category: "web",
      technologies: ["Next.js", "Framer Motion", "Tailwind"],
      demoUrl: "https://the-portfolio-eight.vercel.app/",
      codeUrl: "https://github.com/aman-SINGH7999/the_portfolio",
      featured: false
    },
    {
      id: 5,
      title: "Gaming website",
      description: "Developed a modern Gaming Platform User Interface using Next.js and Tailwind",
      image: "/game.png",
      category: "web",
      technologies: ["Next.js", "Tailwind", "javascript"],
      demoUrl: "https://my-app-vert-iota.vercel.app/",
      codeUrl: "https://github.com/aman-SINGH7999/my-app",
      featured: true
    },
    {
      id: 6,
      title: "Notes",
      description: "Developed a modern notes manage application using Next.js and mongoDB.",
      image: "/notes.png",
      category: "web",
      technologies: ["Next.js", "Tailwind", "MongoDB", "Mongoose"],
      demoUrl: "https://prepare-yourself.vercel.app/",
      codeUrl: "https://github.com/aman-SINGH7999/prepare-yourself",
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions and creative implementations across various technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 backdrop-blur-lg border border-white/10 rounded-full p-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 h-full">
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Project Links */}
                  <div className={`absolute inset-0 flex items-center justify-center space-x-4 transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.demoUrl}
                      className="bg-gray-900/60 backdrop-blur-sm border border-gray-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800/60 hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeUrl}
                      className="bg-gray-900/60 backdrop-blur-sm border border-gray-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800/60 hover:scale-105"
                    >
                      View Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-200 text-sm rounded-full font-medium"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Category Tag */}
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400">Available</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1">
            <Link href={'https://github.com/aman-SINGH7999'} className="relative z-10">View More Projects</Link>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;