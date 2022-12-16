import { zodResolver } from '@hookform/resolvers/zod';
import type { ActionArgs } from '@remix-run/node';
import {
    Form,
    Link,
    useActionData,
    useSubmit,
    useTransition as useNavigation,
} from '@remix-run/react';
import { useForm } from 'react-hook-form';
import { Button, ErrorMessage, Input, Separator } from '~/components/ui';
import { login } from '~/lib/auth.server';
import { badRequest } from '~/lib/request.server';
import { createUserSession } from '~/lib/session.server';
import type { LoginSchema } from '~/lib/validation/auth';
import { loginSchema } from '~/lib/validation/auth';

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const form = Object.fromEntries(formData);
    const result = loginSchema.safeParse(form);
    if (!result.success) return badRequest({ message: 'Invalid Inputs' });
    const user = await login(result.data);
    if (!user) return badRequest({ message: 'Invalid Credentials' });
    return createUserSession(user.id, '/');
};

const Login = () => {
    const submit = useSubmit();
    const { state } = useNavigation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const data = useActionData<typeof action>();

    const onSubmit = (data: LoginSchema) => {
        submit(data, {
            method: 'post',
        });
    };

    const isSubmitting = state !== 'idle';
    return (
        <Form
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
            className='w-full flex flex-col space-y-4'
        >
            <h1 className='font-bold text-5xl text-center text-primary mb-4'>
                Login
            </h1>
            <span className='mb-4 h-[1px] w-full inline-block bg-textGray'></span>
            <ErrorMessage message={data?.message} />
            <Input
                name='email'
                type='email'
                label='Email'
                placeholder='Enter Your Email'
                autoComplete='off'
                register={register}
                error={errors.email?.message}
            />
            <div className='flex flex-col'>
                <Input
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Enter Your Password'
                    register={register}
                    error={errors.password?.message}
                />
                <Link to={'/'} className='text-right text-xs text-primary mt-1'>
                    Forgot Password?
                </Link>
            </div>
            <Button disabled={isSubmitting} variant='primary'>
                {isSubmitting ? 'Authenticating ...' : 'Submit'}
            </Button>
            <Separator text='OR' />
            <span className='text-sm text-center'>
                Don't have an account?{' '}
                <Link className='text-primary ml-1' to='/register'>
                    Register
                </Link>
            </span>
        </Form>
    );
};

export default Login;
