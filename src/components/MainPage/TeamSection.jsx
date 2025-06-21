'use client';

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProfileCard from './ProfileCard';

const teamMembers = [
  {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
  {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
  {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
  {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
  {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
   {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  },
   {
    image: '/images/back1.jpg',
    name: 'Casey Arrington',
    title: '✔ Verified Expert in Product Management',
    role: 'Product Manager'
  }
];

export default function TeamSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 280; // 260px card + ~20px gap
    current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
  <section id="team" className="bg-[#FCFCFC] py-16 px-4 md:px-10">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Meet Talent in Our Network
    </h2>
    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
      We are the largest, globally-distributed network of top business, design,
      and technology talent, ready to tackle your most important initiatives.
    </p>
  </div>

  {/* Card Section + Arrows */}
  <div className="relative max-w-[1344px] mx-auto">

    {/* Left Arrow — just outside */}
    <button
      onClick={() => scroll('left')}
      className="absolute -left-9 top-1/2 -translate-y-1/2 z-10 bg-white p-3 shadow-md rounded-full hidden md:flex"
    >
      <FaChevronLeft size={20} />
    </button>

    {/* Right Arrow — just outside */}
    <button
      onClick={() => scroll('right')}
      className="absolute -right-9 top-1/2 -translate-y-1/2 z-10 bg-white p-3 shadow-md rounded-full hidden md:flex"
    >
      <FaChevronRight size={20} />
    </button>

    {/* Scrollable Card Container */}
    <div className="overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar px-1"
      >
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex-shrink-0 w-[260px]">
            <ProfileCard {...member} />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}
