import type { ActionArgs } from '@remix-run/node';
import { Form, Link } from '@remix-run/react';
import { Button, Input, PhoneInput, Separator } from '~/components/ui';
import { register } from '~/lib/auth.server';
import { prisma } from '~/lib/database.server';
import { badRequest } from '~/lib/request.server';
import { createUserSession } from '~/lib/session.server';
import { registerSchema } from '~/lib/validation/auth';

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    const result = registerSchema.safeParse(form);
    if (!result.success) return badRequest({ message: 'Invalid Inputs' });
    const inputs = result.data;
    const existingUser = await prisma.user.findUnique({
        where: {
            email: inputs.email,
        },
    });
    if (existingUser) return badRequest({ message: 'Email Already In use' });
    const user = await register(inputs);
    if (!user)
        return badRequest({
            message: `Something went wrong trying to create a new user.`,
        });
    return createUserSession(user.id, '/');
};

const Register = () => {
    return (
        <Form
            autoComplete='off'
            className='w-full flex flex-col space-y-4 overflow-hidden'
        >
            <h1 className='font-bold text-5xl text-center text-primary mb-4'>
                Register
            </h1>
            <span className='mb-4 h-[1px] w-full inline-block bg-textGray'></span>
            <div className='grid grid-cols-2 gap-4'>
                <Input
                    name='firstName'
                    type='text'
                    label='First Name'
                    placeholder='Enter Your First Name'
                    autoComplete='off'
                />
                <Input
                    name='lastName'
                    type='text'
                    label='Last Name'
                    placeholder='Enter Your Last Name'
                    autoComplete='off'
                />
            </div>
            <Input
                name='email'
                type='email'
                label='Email'
                placeholder='Enter Your Email'
                autoComplete='off'
            />
            <PhoneInput onChange={() => {}} />
            <Input
                name='password'
                type='password'
                label='Password'
                placeholder='Enter Your Password'
            />
            <Input
                name='confirmPassword'
                type='password'
                label='Confirm Password'
                placeholder='Enter Your Password'
            />

            <Button variant='primary'>Submit</Button>
            <Separator text='OR' />
            <span className='text-sm text-center'>
                Already have an account?{' '}
                <Link className='text-primary ml-1' to='/login'>
                    Login
                </Link>
            </span>
        </Form>
    );
};

export default Register;
