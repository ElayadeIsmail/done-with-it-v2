import { PrismaClient } from '@prisma/client';

declare global {
    var __db: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.__db) {
        global.__db = new PrismaClient();
    }
    prisma = global.__db;
}

export { prisma };
