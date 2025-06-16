// app/TeamSection.jsx
'use client';

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
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#FCFCFC] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Talent in Our Network</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We are the largest, globally-distributed network of top business, design,
          and technology talent, ready to tackle your most important initiatives.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, idx) => (
          <ProfileCard key={idx} {...member} />
        ))}
      </div>
    </section>
  );
}
