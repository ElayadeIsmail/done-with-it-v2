import bcrypt from 'bcryptjs';
import { prisma } from './database.server';
import type { LoginSchema } from './validation/auth';

const HASH_SALT = 12;

export const login = async ({ email, password }: LoginSchema) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });
    if (!user) return null;
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return null;
    return { id: user.id, email: user.email };
};
