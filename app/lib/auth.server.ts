import bcrypt from 'bcryptjs';
import { prisma } from './database.server';
import type { LoginSchema, RegisterSchema } from './validation/auth';

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

export const register = async ({
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
}: RegisterSchema) => {
    const passwordHash = await bcrypt.hash(password, HASH_SALT);
    const user = await prisma.user.create({
        data: {
            firstName,
            lastName,
            email,
            phone: phoneNumber,
            password: passwordHash,
        },
    });
    return { id: user.id, email: user.email };
};
