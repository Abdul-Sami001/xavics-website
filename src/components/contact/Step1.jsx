'use client';

import { FaArrowRight } from 'react-icons/fa';

const options = [
  { label: 'Website (Landing / CMS / Corporate)', subtext: 'Web, Mobile, UI/UX, Branding, and Visual Designer...', selected: true },
  { label: 'WebApplication' },
  { label: 'UI/UX Design (Figma Only)' },
  { label: 'Website (Landing / CMS / Corporate)' },
  { label: 'Backend System or API' },
  { label: 'SaaS Product' },
  { label: 'Something Else (with input field if selected)' }
];

export default function QuestionStepOne() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-[718px]">
        {/* STEP Title */}
        <p className="text-sm text-gray-500 mb-2">STEP 1 / 5</p>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-black mb-6">What you want to develop?</h1>

        {/* Options */}
        <div className="space-y-4">
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={`w-full h-[65px] rounded-[5px] px-6 flex justify-between items-center shadow-md cursor-pointer transition-all duration-200 ${
                opt.selected
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              <div>
                <p className="font-medium text-base">{opt.label}</p>
                {opt.subtext && (
                  <p className="text-sm text-white/80 mt-1">{opt.subtext}</p>
                )}
              </div>
              <FaArrowRight className={`text-lg ${opt.selected ? 'text-white' : 'text-black'}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
