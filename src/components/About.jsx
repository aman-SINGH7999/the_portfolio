'use client';

import { useState } from 'react';
import { User, Heart, Coffee, MapPin, Calendar, Award, Target, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: User },
    { id: 'values', label: 'Values', icon: Heart },
    { id: 'journey', label: 'Journey', icon: Target },
  ];

  const stats = [
    { number: '1+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee },
    { number: '24/7', label: 'Learning Mode', icon: Lightbulb },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and creative solutions.',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Quality',
      description: 'Delivering excellence through attention to detail and best practices.',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Collaboration',
      description: 'Building better products through teamwork and communication.',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      title: 'Growth',
      description: 'Embracing challenges as opportunities to learn and improve.',
      gradient: 'from-orange-400 to-red-500'
    },
  ];

  const timeline = [
  {
    year: '2020',
    title: 'Started B.Tech at IIIT Ranchi',
    description: 'Began my journey in Computer Science & Engineering at Indian Institute of Information Technology, Ranchi.'
  },
  {
    year: '2021',
    title: 'Exploring DSA & Problem Solving',
    description: 'Solved 700+ problems on LeetCode, building strong foundations in Data Structures & Algorithms.'
  },
  {
    year: '2023',
    title: 'First Real Projects',
    description: 'Started working on personal and freelance projects, applying my knowledge to create real-world solutions.'
  },
  {
    year: '2024',
    title: 'Full Stack Development',
    description: 'Dived deep into MERN stack and built end-to-end web applications with scalable backend and modern frontend.'
  },
  {
    year: '2025',
    title: 'Working professional',
    description: 'Joined Geogo Info Tech, Varanasi as a Web Developer, contributing to building and optimizing modern web applications.'
  },
];


  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-4">
            <User size={16} />
            About Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get to Know{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              The Person
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Behind every great project is a passionate developer with a story to tell.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-cyan-400" size={24} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'story' && (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Passionate Developer & Creative Problem Solver
                  </h3>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      I am from Sonbhadra, Uttar Pradesh, and my journey into technology began with a curiosity to understand how the web 
                      actually works. This curiosity soon transformed into a passion for building impactful digital solutions.
                    </p>
                    <p>
                      I completed my graduation in Computer Science and Engineering from the Indian 
                      Institute of Information Technology, Ranchi (IIIT Ranchi). During my learning years, I consistently challenged myself with 
                      problem-solving — having solved 700+ problems on LeetCode, which sharpened my analytical and coding skills.
                    </p>
                    <p>
                      Today, I work as a Full Stack Developer, crafting applications where scalable backend systems meet intuitive front-end experiences. 
                      For me, development is not just about writing code, but about transforming ideas into meaningful, user-friendly solutions.
                    </p>
                    
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-slate-400">
                    <MapPin size={16} />
                    <span>Varanasi, Uttar Pardesh, India</span>
                  </div>
                </div>
                <div className="relative ">
                  <div className="w-full h-96 ">
                    <Image
                      src="/aman-singh.jpeg"
                      alt="Profile picture"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Heart className="text-white" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'journey' && (
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.year.slice(-2)}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-600 mt-4"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="text-cyan-400 font-semibold mb-1">{item.year}</div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;