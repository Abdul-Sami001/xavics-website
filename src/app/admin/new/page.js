// src/app/admin/projects/new/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProject() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    title: '',
    image: '',
    description: '',
     top: '',
    details: '',
    left: '',
   
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {'Content-Type': 'application/json'},
      });

      if (res.ok) {
        router.push('/admin/projects');
      } else {
        throw new Error('Failed to create project');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating project');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image URL
          </label>
          <input
            type="text"
            required
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Short Description
          </label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[100px]"
          />
        </div>
        <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Top (optional field or boolean?)
  </label>
  <input
    type="text"
    value={form.top}
    onChange={(e) => setForm({ ...form, top: e.target.value })}
    className="w-full px-4 py-2 border rounded-md"
  />
</div>
      <div>
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Left (optional field or boolean?)
  </label>
  <input
    type="text"
    value={form.left}
    onChange={(e) => setForm({ ...form, left: e.target.value })}
    className="w-full px-4 py-2 border rounded-md"
  />
</div>


        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Detailed Content (HTML)
          </label>
          <textarea
            value={form.details}
            onChange={(e) => setForm({ ...form, details: e.target.value })}
            className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 min-h-[200px] font-mono text-sm"
            placeholder="<p>Detailed description...</p>"
          />
        </div>
        
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => router.push('/admin/projects')}
            className="px-4 py-2 border rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Creating...' : 'Create Project'}
          </button>
        </div>
      </form>
    </div>
  );
}