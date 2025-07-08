'use client';

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const budgetOptions = [
  'Under $1,000',
  '$1,000 – $2,000',
  '$2,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000+',
  'Not Sure (add optional text input)',
];

export default function QuestionStepFour() {
  const [selected, setSelected] = useState('');
  const [customInput, setCustomInput] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-[734px]">
        {/* Step Label */}
        <p className="text-sm text-gray-500 mb-2">STEP 4 / 5</p>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-black">Project Budget</h1>
        <p className="text-sm text-gray-600 mb-6">
          Your budget helps us propose the right scope and tech.
        </p>

        {/* Options */}
        <div className="space-y-4">
          {budgetOptions.map((option, idx) => {
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

        {/* Conditional input field for "Not Sure" */}
        {selected === 'Not Sure (add optional text input)' && (
          <div className="mt-6">
            <label htmlFor="customBudget" className="block text-sm font-medium text-black mb-1">
              Please specify your estimated budget (optional)
            </label>
            <input
              id="customBudget"
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g., around $3000 or unsure yet"
              className="w-full border border-gray-400 rounded-sm p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}
