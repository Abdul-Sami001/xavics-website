'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BuiltProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const cardsPerSlide = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.minHeight = 'auto';
      containerRef.current.style.minHeight = containerRef.current.scrollHeight + 'px';
    }
  }, [projects]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (!res.ok) throw new Error('Failed to fetch projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerSlide, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + cardsPerSlide, projects.length - cardsPerSlide)
    );
  };

  return (
    <section className="bg-[#F2F5F7] py-20 px-4 sm:px-6 lg:px-8">
      <div
        ref={containerRef}
        className="max-w-[1344px] mx-auto relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We've Built
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            From idea to execution — explore the digital products and platforms our team has successfully launched and scaled.
          </p>
        </div>

        {error && <p className="text-red-500 text-center mb-6">{error}</p>}

        {/* Carousel Wrapper */}
        <div className="relative overflow-x-visible">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
            }`}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="overflow-hidden py 4">
            <div
              className="flex transition-transform duration-500 w-full"
              style={{
                transform: `translateX(-${(currentIndex / cardsPerSlide) * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`flex-shrink-0 w-full md:w-1/3 px-4 transition-all duration-300 ${
  index % 3 === 0 ? 'md:mt-0' :
  index % 3 === 1 ? 'md:mt-10' :
  'md:mt-20'
}`}

                >
                  <Link href={`/projects/${project.id}`} className="block">
                    <div className="h-56 w-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="p-4 bg-white rounded-b-md shadow-md min-h-[160px] flex flex-col justify-center">
                      <h3 className="font-bold text-gray-900 text-center">{project.title}</h3>
                      <p className="text-sm text-gray-600 mt-2 text-center">
                        {project.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerSlide >= projects.length}
            className={`absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-md ${
              currentIndex + cardsPerSlide >= projects.length
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100'
            }`}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
