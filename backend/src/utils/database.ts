import { PrismaClient } from "@prisma/client";

const globalForPrisma = (globalThis as any).prisma || undefined;

export const prisma = globalForPrisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  (globalThis as any).prisma = prisma;
}
