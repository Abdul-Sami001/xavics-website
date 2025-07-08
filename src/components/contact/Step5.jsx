'use client';

import { useState } from 'react';

export default function QuestionStepFive() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    file: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      body.append(key, value)
    );

    const res = await fetch('/api/contact', {
      method: 'POST',
      body,
    });

    if (res.ok) {
      setMessage('Submitted successfully!');
      setFormData({ fullName: '', email: '', company: '', file: null });
    } else {
      setMessage('Something went wrong.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 text-center"
      >
        <p className="text-sm text-gray-500">STEP 5 / 5</p>
        <h1 className="text-2xl font-semibold text-black mb-4">
          How can we contact you?
        </h1>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-400 p-3 text-sm rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-400 p-3 text-sm rounded"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name (optional)"
          value={formData.company}
          onChange={handleChange}
          className="w-full border border-gray-400 p-3 text-sm rounded"
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="w-full border border-gray-400 p-3 text-sm rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Contact us
        </button>

        <p className="text-sm text-gray-500 mt-2">We'll reply within 24 hours</p>
        {message && <p className="text-sm mt-2 text-blue-600">{message}</p>}
      </form>
    </div>
  );
}
