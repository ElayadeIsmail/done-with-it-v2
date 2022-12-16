import { Outlet } from '@remix-run/react';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
