// src/app/projects/[id]/page.js
import prisma from '@/lib/prisma';
import Image from 'next/image';

export default async function ProjectDetail({ params }) {
  const project = await prisma.project.findUnique({
    where: { id: parseInt(params.id) }
  });

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="mt-4 text-gray-600">The requested project does not exist</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-gray-700 text-lg mb-8">{project.description}</p>
          
          <div className="prose max-w-none">
            {project.details && (
              <div dangerouslySetInnerHTML={{ __html: project.details }} />
            )}
          </div>
          
          <div className="mt-12">
            <a 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}