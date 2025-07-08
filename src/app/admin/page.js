// src/app/admin/page.js
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/projects"
          className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-medium">Manage Projects</h3>
          <p className="text-gray-600 mt-2">View, create, and edit projects</p>
        </Link>
      </div>
    </div>
  );
}