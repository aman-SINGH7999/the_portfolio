'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Palette, Zap } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  
  const strings = ['Full Stack Developer', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    const currentString = strings[currentStringIndex];
    
    if (currentIndex < currentString.length) {
      const timeout = setTimeout(() => {
        setText(currentString.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setText('');
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentStringIndex, strings]);

  const floatingElements = [
    { icon: Code, delay: 0, x: '10%', y: '20%' },
    { icon: Palette, delay: 1, x: '80%', y: '30%' },
    { icon: Zap, delay: 2, x: '15%', y: '70%' },
    { icon: Sparkles, delay: 3, x: '75%', y: '80%' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map(({ icon: Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute hidden lg:block animate-bounce"
          style={{
            left: x,
            top: y,
            animationDelay: `${delay}s`,
            animationDuration: '3s'
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center">
            <Icon className="text-cyan-400" size={24} />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            AMAN SINGH
          </span>
        </h1>

        {/* Animated Role */}
        <div className="mb-8 h-16 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
            I'm a{' '}
            <span className="text-cyan-400 border-r-2 border-cyan-400 animate-pulse">
              {text}
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with passion and precision. I transform ideas into elegant, 
          functional solutions that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link href={"#projects"} className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              View My Work
              <Sparkles className="group-hover:rotate-12 transition-transform duration-300" size={20} />
            </span>
          </Link>
          <Link href={'/Resume_Aman.pdf'} download={"Aman_Singh_Resume.pdf"} className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500 hover:text-white transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            Download Resume
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center">
          <span className="text-slate-500 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="text-cyan-400 animate-bounce" size={24} />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  );
};

export default Hero;