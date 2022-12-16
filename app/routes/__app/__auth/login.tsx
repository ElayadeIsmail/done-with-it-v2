import { Form, Link } from '@remix-run/react';
import { Button, Input, Separator } from '~/components/ui';

const Login = () => {
    return (
        <Form autoComplete='off' className='w-full flex flex-col space-y-4'>
            <h1 className='font-bold text-5xl text-center text-primary mb-4'>
                Login
            </h1>
            <span className='mb-4 h-[1px] w-full inline-block bg-textGray'></span>
            <Input
                name='email'
                type='email'
                label='Email'
                placeholder='Enter Your Email'
                autoComplete='off'
            />
            <div className='flex flex-col'>
                <Input
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Enter Your Password'
                />
                <Link to={'/'} className='text-right text-xs text-primary mt-1'>
                    Forgot Password?
                </Link>
            </div>
            <Button variant='primary'>Submit</Button>
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
