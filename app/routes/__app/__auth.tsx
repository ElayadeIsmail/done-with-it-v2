import type { LoaderArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import styles from 'react-phone-input-2/lib/style.css';
import { getUserId } from '~/lib/session.server';

export const links = () => {
    return [{ rel: 'stylesheet', href: styles }];
};

export const loader = async ({ request }: LoaderArgs) => {
    const userId = await getUserId(request);
    if (userId) return redirect('/');
    return null;
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
