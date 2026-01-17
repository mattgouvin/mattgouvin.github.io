import React from 'react';

const Hero = () => {
  const subtitle = "Building scalable backend systems, developing AI tooling that improves team productivity, and advancing AI-native software engineering practices.";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {/* Gradient blobs */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-300 to-blue-200 rounded-full mix-blend-multiply filter blur-[100px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-200 to-blue-300 rounded-full mix-blend-multiply filter blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-gradient-to-r from-blue-300 to-blue-200 rounded-full mix-blend-multiply filter blur-[100px]" />
        </div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center">
        {/* Headshot */}
        <div className="mb-10">
          <div className="relative w-52 h-52 mx-auto">
            {/* Glow ring */}
            <div className="absolute -inset-3 rounded-full bg-blue-500 opacity-50 blur-xl" />
            <div className="absolute -inset-1 rounded-full bg-blue-500 opacity-75" />

            {/* Image */}
            <div className="relative w-full h-full overflow-hidden rounded-full">
              <img
                src="/headshot.jpg"
                alt="Matt Gouvin"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <div>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-display font-extrabold mb-6 tracking-tight text-blue-600">
            Matt Gouvin
          </h1>
        </div>

        {/* Title */}
        <div>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
            <span className="text-gray-700">
              Software Engineer
            </span>
          </p>
        </div>

        {/* Subtitle */}
        <div className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          <span>{subtitle}</span>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center items-center mb-16">
          <a
            href="https://www.linkedin.com/in/matthew-gouvin/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-semibold rounded-2xl shadow-2xl shadow-blue-500/25 hover:bg-blue-700 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>View LinkedIn</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
