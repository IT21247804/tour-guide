'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Star, Users, Camera, ChevronDown, Play, Award, Globe, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface VisibilityState {
  [key: string]: boolean;
}

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

export default function LandingPage() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const sectionsRef = useRef<SectionRefs>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    Object.values(sectionsRef.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const parallaxOffset = scrollY * 0.5;
  const heroParallax = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      {/* Navigation */}
      
<nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 transition-all duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-2">
        <MapPin className="w-8 h-8 text-cyan-400" />
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          TourGuide
        </span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
        <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Reviews</a>
        <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
      </div>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="px-4 py-2 text-cyan-400 hover:text-white transition-colors">
            Sign In
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${heroParallax}px)` }}
        >
          <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
          <div className="mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm mb-4">
              🌟 Discover Amazing Places
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Explore
            </span>
            <br />
            <span className="text-white">The World</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            Your personal AI-powered tour guide for unforgettable adventures and hidden gems around the globe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              Start Your Journey
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group flex items-center px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all">
              <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative" id="stats" ref={el => { sectionsRef.current['stats'] = el; }}>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50K+', label: 'Happy Travelers', icon: Users },
              { number: '200+', label: 'Destinations', icon: Globe },
              { number: '4.9', label: 'Average Rating', icon: Star },
              { number: '99%', label: 'Success Rate', icon: Award }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible['stats'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        ref={el => { sectionsRef.current['features'] = el; }}
        className="py-20 relative"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 transform transition-all duration-1000 ${
              isVisible['features'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Amazing Features
              </span>
            </h2>
            <p className={`text-xl text-gray-300 max-w-2xl mx-auto transform transition-all duration-1000 delay-200 ${
              isVisible['features'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              Discover what makes our tour guide app the perfect companion for your adventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: 'Smart Navigation',
                description: 'AI-powered route optimization with real-time traffic updates and hidden shortcuts',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Camera,
                title: 'AR Experiences',
                description: 'Augmented reality features that bring historical sites and landmarks to life',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'Your data and location are protected with end-to-end encryption and privacy controls',
                color: 'from-green-500 to-teal-500'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible['features'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        ref={el => { sectionsRef.current['testimonials'] = el; }}
        className="py-20 relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
          style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-6 transform transition-all duration-1000 ${
              isVisible['testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              What Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                location: 'New York, USA',
                rating: 5,
                text: 'This app completely transformed my European adventure! The AI recommendations were spot-on.',
                avatar: '👩‍💼'
              },
              {
                name: 'Miguel Rodriguez',
                location: 'Barcelona, Spain',
                rating: 5,
                text: 'As a local guide, I love how this app helps tourists discover hidden gems in my city.',
                avatar: '👨‍🎨'
              },
              {
                name: 'Yuki Tanaka',
                location: 'Tokyo, Japan',
                rating: 5,
                text: 'The offline maps and cultural insights made exploring rural Japan absolutely incredible.',
                avatar: '👩‍💻'
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 transform ${
                  isVisible['testimonials'] ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
               <p className="text-gray-300 italic">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Explore?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered amazing places with our AI-powered guide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              Download Now - Free
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <MapPin className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              TourGuide
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Discover the world with confidence. Your adventure starts here.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}