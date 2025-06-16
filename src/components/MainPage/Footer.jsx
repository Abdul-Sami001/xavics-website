import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#373A52] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/30 pb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <p className="text-sm leading-relaxed text-gray-300">
              Xavics step in to serve & to satisfy our clients in the best possible way. Here you will find a unique use of technology for challenging issues. Our aim is to provide service which is one of a kind. Our quality is our commitment to our customers as we never stop until the job is done.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Application Development</li>
              <li>Mobile & Web Solution</li>
              <li>Product Maintenance</li>
              <li>UI / UX Design</li>
              <li>Testing & QA</li>
              <li>Search Engine Optimization</li>
              <li>Team Augmentation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>Chandni Chowk, Rawalakot, Azad Kashmir, Pakistan</li>
              <li>+92 346 1553264</li>
              <li>xavics48@gmail.com</li>
              <li>www.xavics.com</li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-b border-white/30 pb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/images/XavicsLogo.png" alt="Xavics Logo" width={100} height={40} />
            <span className="ml-4 text-sm text-gray-300">The World's Top Software, On Demand<sup>®</sup></span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white bg-[#1DA1F2] p-2 rounded">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white bg-[#1877F2] p-2 rounded">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white bg-[#962fbf] p-2 rounded">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-400 mt-6">
          © 2024 Xavics. All rights reserved. | Designed with passion. | <a href="#" className="underline">Privacy Policy</a> | <a href="#" className="underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}