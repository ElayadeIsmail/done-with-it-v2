import validator from 'validator';
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

export const registerSchema = zod
    .object({
        firstName: zod
            .string({ required_error: 'FirstName is required' })
            .min(1, 'FirstName is required'),
        lastName: zod
            .string({ required_error: 'lastName is required' })
            .min(1, 'lastName is required'),
        phoneNumber: zod
            .string({ required_error: 'phone Number is required' })
            .refine(validator.isMobilePhone, 'Phone Number Must be Valid'),
        email: zod
            .string({ required_error: 'Email is required' })
            .min(1, 'Email is required')
            .email('Email must be valid'),
        password: zod
            .string({ required_error: 'Password is required' })
            .min(1, 'Password is required'),
        confirmPassword: zod
            .string({
                required_error: 'Confirm Password is required',
            })
            .min(1, 'Confirm Password is required'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'], // path of error
    });

export type RegisterSchema = zod.infer<typeof registerSchema>;
