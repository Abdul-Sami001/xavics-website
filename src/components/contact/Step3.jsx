'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const timelineOptions = [
  'ASAP (2–4 weeks)',
  '1–2 Months',
  '3–6 Months',
  '6–12 months',
  'No Deadline Yet',
];

export default function QuestionStepThree() {
  const [selected, setSelected] = useState('ASAP (2–4 weeks)');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-[725px]">
        {/* Step Indicator */}
        <p className="text-sm text-gray-500 mb-2">STEP 3 / 5</p>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-black mb-6">Project Timeline</h1>

        {/* Timeline Options */}
        <div className="space-y-4">
          {timelineOptions.map((option, idx) => {
            const isActive = selected === option;
            return (
              <div
                key={idx}
                onClick={() => setSelected(option)}
                className={`w-full h-[65px] px-6 flex justify-between items-center rounded-[5px] shadow-md cursor-pointer transition-all duration-200 
                ${isActive ? 'bg-blue-600 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
              >
                <p className="text-base font-medium">{option}</p>
                <FaArrowRight className={`${isActive ? 'text-white' : 'text-black'} text-lg`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
