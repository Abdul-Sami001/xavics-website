// src/lib/prisma.js
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined'

// Only create Prisma instance if not in browser
const prisma = globalForPrisma.prisma || 
  (!isBrowser && new PrismaClient())

if (!isBrowser && process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export default prisma