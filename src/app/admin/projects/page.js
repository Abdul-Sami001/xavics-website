// src/app/admin/projects/page.js
// ✅ Correct:
import prisma from '@/lib/prisma';

import Link from 'next/link';
import { Pencil, Trash2 } from 'lucide-react';

export default async function ProjectsAdmin() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Projects</h1>
        <Link 
          href="/admin/new" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add New Project
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img 
                        className="h-10 w-10 rounded-md object-cover" 
                        src={project.image} 
                        alt={project.title} 
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {project.title}
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">
                        {project.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/admin/projects/${project.id}/edit`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Pencil size={18} />
                    </Link>
                    <button
                      // Implement delete functionality
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}