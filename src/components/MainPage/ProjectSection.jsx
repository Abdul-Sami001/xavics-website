'use client';

import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'DriveUni',
    image: '/images/DriveUni.png',
    description:
      'A university smart transport solution built to digitize and simplify campus bus systems.',
    top: 'top-[211px]',
    left: 'left-[60px]',
  },
  {
    id: 2,
    title: 'Sift Ease',
    image: '/images/ShiftEase.png',
    description:
      'A smart transport solution for university campuses with simplified tracking.',
    top: 'top-[283px]',
    left: 'left-[506px]',
  },
  {
    id: 3,
    title: 'MedLink',
    image: '/images/Medlink.png',
    description:
      'A health-tech solution streamlining communication between patients and doctors.',
    top: 'top-[345px]',
    left: 'left-[952px]',
  },
];

export default function BuiltProjectsSection() {
  return (
    <section className="bg-[#F2F5F7] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1344px] mx-auto relative min-h-[800px]">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What We’ve Built
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            From idea to execution — explore the digital products and platforms our team has successfully launched and scaled.
          </p>
        </div>

        {/* Cards */}
        <div className="hidden md:block">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`absolute ${project.top} ${project.left} w-[332px] h-[373px] bg-white rounded-md shadow-md p-4 transition-transform hover:scale-105`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={332}
                height={216}
                className="rounded-md w-full h-[216px] object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-center">{project.title}</h3>
              <p className="text-sm text-gray-700 text-center mt-2">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile Stacked Layout */}
        <div className="md:hidden flex flex-col gap-6 items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full max-w-sm bg-white rounded-md shadow-md p-4"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={332}
                height={216}
                className="rounded-md w-full h-[216px] object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-900 text-center">{project.title}</h3>
              <p className="text-sm text-gray-700 text-center mt-2">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-[780px] flex justify-center">
          <Link href="#projects">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow-md transition">
              Show More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
