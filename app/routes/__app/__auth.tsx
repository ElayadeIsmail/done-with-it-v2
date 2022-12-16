import { Outlet } from '@remix-run/react';
import styles from 'react-phone-input-2/lib/style.css';

export const links = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

const AuthLayout = () => {
    return (
        <main className='min-h-screen pt-20 flex'>
            <div className='w-1/2 bg-[url(/images/auth.jpg)] bg-cover'></div>
            <div className='w-1/2 flex items-center justify-center px-20'>
                <Outlet />
            </div>
        </main>
    );
};

export default AuthLayout;
