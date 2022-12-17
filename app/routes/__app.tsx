import type { LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Footer from '~/components/Layout/Footer';
import Header from '~/components/Layout/Header';
import { getUser } from '~/lib/session.server';

export const loader = async ({ request }: LoaderArgs) => {
    const user = await getUser(request);
    return json(user);
};

export default function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
