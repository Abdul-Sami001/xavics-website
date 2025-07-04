import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { useState } from 'react';

const reviews = [
  {
    quote: "I have been working with Xavics engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like 'outsiders'. Xavics as an organization has been professional and easy to work with.",
    name: "Ian Stokes-Rees",
    rating: 5
  },
  {
    quote: "I have been working with Xavics engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like 'outsiders'. Xavics as an organization has been professional and easy to work with.",
    name: "Emily Carter",
    rating: 5
  },
  {
    quote: "I have been working with Xavics engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like 'outsiders'. Xavics as an organization has been professional and easy to work with.",
    name: "Arjun Mehta",
    rating: 5
  },
  {
    quote: "I have been working with Xavics engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like 'outsiders'. Xavics as an organization has been professional and easy to work with.",
    name: "Laura Kim",
    rating: 5
  }
];

const ReviewCard = ({ quote, name, rating }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white shadow-md rounded-[5px] p-4 w-[253px] h-auto min-h-[285px] flex flex-col justify-between text-left">
      <div>
        <div className="text-blue-600 text-xl mb-2">
          <FaQuoteLeft />
        </div>
        <p className={`text-xs text-gray-800 leading-relaxed ${expanded ? '' : 'line-clamp-6'}`}>
          {quote}
        </p>
        <button
          className="mt-2 text-[10px] text-blue-600 underline"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      </div>

      <div className="mt-4">
        <div className="flex items-center text-yellow-500 mb-1 text-sm">
          {Array(rating).fill().map((_, i) => <FaStar key={i} />)}
        </div>
        <p className="font-semibold text-sm text-gray-900">{name}</p>
      </div>
    </div>
  );
};

export default function ClientReviewSection() {
  return (
    <section className="py-16 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Clients’ Satisfaction is Our Top Priority
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6 text-sm">
          We have a reputation for helping clients around the world find success on their most important projects
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700 mb-2">
          <span>🌐 <strong>14+</strong> Countries Served</span>
          <span>⚙️ <strong>25+</strong> Clients Served</span>
        </div>

        <p className="text-sm text-[#574D4D] mb-10">
          Our customers say <strong>Excellent</strong> ⭐⭐⭐⭐⭐ 4.8 out of 5 based on 1,691 reviews
        </p>

        {/* Review Cards Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}
