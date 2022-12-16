import { Outlet } from '@remix-run/react';

const AuthLayout = () => {
    return (
        <main className='min-h-screen pt-20 flex'>
            <div className='w-1/2 bg-[url(/images/auth.jpg)] bg-cover'></div>
            <div className='w-1/2'>
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout;
