// src/app/api/projects/route.js
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return Response.json(projects)
  } catch (error) {
    return new Response("Internal error", { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    const project = await prisma.project.create({
      data: {
        title: body.title,
        image: body.image,
        description: body.description,
        top: body.top,
        left: body.left,
        details: body.details,
      },
    });

    return new Response(JSON.stringify(project), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to create project' }),
      { status: 500 }
    );
  }
}