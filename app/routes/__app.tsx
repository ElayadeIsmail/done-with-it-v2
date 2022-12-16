import { Outlet } from '@remix-run/react';
import Header from '~/components/Layout/Header';

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}
