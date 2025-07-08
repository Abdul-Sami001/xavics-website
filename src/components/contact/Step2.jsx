'use client';

import { useState } from 'react';

export default function QuestionStepTwo() {
  const [input, setInput] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="w-full max-w-[718px]">
        {/* Step Text */}
        <p className="text-sm text-gray-500 mb-2">STEP 2 / 5</p>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-black mb-6">
          What is your project&apos;s goal or main problem to solve?
        </h1>

        {/* Sub-label */}
        <label htmlFor="project-goal" className="block text-sm font-medium text-black mb-2">
          What problem are you solving? What outcome do you want?
        </label>

        {/* Textarea */}
        <textarea
          id="project-goal"
          rows="5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-400 rounded-sm p-3 text-base text-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Describe your MVP or goal..."
        />
      </div>
    </div>
  );
}
