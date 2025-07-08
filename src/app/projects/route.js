// src/app/api/projects/[id]/route.js
import prisma from '@/lib/prisma';

export async function GET(req, { params }) {
  try {
    const id = parseInt(params.id)
    const project = await prisma.project.findUnique({ where: { id } })
    return project 
      ? Response.json(project)
      : new Response("Project not found", { status: 404 })
  } catch (error) {
    return new Response("Internal error", { status: 500 })
  }
}