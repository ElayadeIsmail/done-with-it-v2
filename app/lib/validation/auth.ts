import zod from 'zod';

export const loginSchema = zod.object({
    email: zod
        .string({ required_error: 'Email is required' })
        .min(1, 'Email is required')
        .email('Email must be valid'),
    password: zod
        .string({ required_error: 'Password is required' })
        .min(1, 'Password is required'),
});

export type LoginSchema = zod.infer<typeof loginSchema>;
