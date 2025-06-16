'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function TechStackSection() {
  return (
    <section  id="tech" className="bg-[#F8F8FB] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Tech Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We leverage cutting-edge technologies to build robust, scalable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <Image 
                  src="/images/web-icon.svg" 
                  alt="Web" 
                  width={24} 
                  height={24} 
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Web Technologies</h3>
            </div>
            
            {/* Backend */}
            <div className="mb-8">
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <h4 className="text-md font-medium text-gray-800">Backend</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6 items-center">
                <TechIcon src="/images/social .png" alt=".NET" />
                <TechIcon src="/images/nodejs.png" alt="Node.js" />
                <TechIcon src="/images/python.png" alt="Python" />
                <TechIcon src="/images/java.png" alt="Java" />
                <TechIcon src="/images/typescript.png" alt="TypeScript" />
              </div>
            </div>
            
            {/* Frontend */}
            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                <h4 className="text-md font-medium text-gray-800">Frontend</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6 items-center">
                <TechIcon src="/images/react.png" alt="React" />
                <TechIcon src="/images/angular.png" alt="Angular" />
                <TechIcon src="/images/vue.png" alt="Vue" />
                <TechIcon src="/images/Vite.png" alt="Vite" />
                <TechIcon src="/images/nextjs.png" alt="Next.js" />
              </div>
            </div>
          </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* ✅ Android (moved to top and spans full width) */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white rounded-xl shadow-md p-6 border border-gray-200 md:col-span-2"
  >
    <div className="flex items-center mb-6">
      <div className="bg-green-100 p-2 rounded-lg mr-4">
        <Image 
          src="/images/android-icon.svg" 
          alt="Android" 
          width={24} 
          height={24} 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Android</h3>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6 items-start justify-start">
      <TechIcon src="/images/react.png" alt="Kotlin" />
      <TechIcon src="/images/react.png" alt="Java" />
      <TechIcon src="/images/react.png" alt="Android Studio" />
    </div>
  </motion.div>

  {/* ✅ iOS (now below Android) */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
  >
    <div className="flex items-center mb-6">
      <div className="bg-purple-100 p-2 rounded-lg mr-4">
        <Image 
          src="/images/apple-icon.svg" 
          alt="iOS" 
          width={24} 
          height={24} 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">iOS</h3>
    </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-6 items-start justify-start">
      <TechIcon src="/images/swift.png" alt="Swift" />
      <TechIcon src="/images/objectivec.png" alt="Objective-C" />
    </div>
  </motion.div>

  {/* ✅ Cross Platform (now below Android) */}
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
  >
    <div className="flex items-center mb-6">
      <div className="bg-green-100 p-2 rounded-lg mr-4">
        <Image 
          src="/images/cross-platform-icon.svg" 
          alt="Cross Platform" 
          width={24} 
          height={24} 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">Cross Platform</h3>
    </div>

    <div className="grid grid-cols-2 gap-x-6 gap-y-6 items-start justify-start">
      <TechIcon src="/images/flutter.png" alt="Flutter" />
      <TechIcon src="/images/react.png" alt="React Native" />
    </div>
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
}

// Reusable Tech Icon Component
const TechIcon = ({ src, alt }) => (
  <motion.div 
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center justify-center"
  >
    <div className="bg-gray-100 rounded-lg w-16 h-16 flex items-center justify-center">
      <Image 
        src={src} 
        alt={alt} 
        width={40} 
        height={40} 
        className="object-contain max-w-full max-h-full"
      />
    </div>
    <span className="text-xs text-gray-600 mt-2 text-center h-[32px] leading-snug">
      {alt}
    </span>
  </motion.div>
);
