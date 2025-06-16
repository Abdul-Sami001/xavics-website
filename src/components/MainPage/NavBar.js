'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { label: 'About us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '/#tech' },
    { label: 'Team', href: '/#team' }
  ];

  return (
    <header className="w-full shadow-sm bg-[#F6F8FB] z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logoNav.png"
              alt="Logo"
              width={45}
              height={45}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Desktop Nav Links */}
       <ul className="hidden md:flex gap-8 font-medium text-base leading-[25px] text-gray-700">

          {navLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button
  className="w-[124px] h-[42px] rounded-[5px] text-sm font-semibold text-white bg-gradient-to-r from-[#66CBF8] to-[#538FDA] shadow hover:from-[#538FDA] hover:to-[#3b6da6] transition-all duration-300"
>
  Contact us
</button>

          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F6F8FB] shadow px-6 pb-6">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          <li>
  <Link href="/contact" onClick={() => setMenuOpen(false)}>
    <button
      className="w-full mt-2 h-[42px] rounded-[5px] text-sm font-semibold text-white bg-gradient-to-r from-[#66CBF8] to-[#538FDA] shadow hover:from-[#538FDA] hover:to-[#3b6da6] transition-all duration-300"
    >
      Contact us
    </button>
  </Link>
</li>

          </ul>
        </div>
      )}
    </header>
  );
}
