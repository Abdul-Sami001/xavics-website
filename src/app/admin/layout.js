// src/app/admin/layout.js
export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold">Admin Portal</h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
}