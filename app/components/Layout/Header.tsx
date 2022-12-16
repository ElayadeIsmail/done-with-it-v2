import { NavLink } from '@remix-run/react';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
    return (
        <header className='container bg-black z-50 fixed inset-0 h-20 flex items-center justify-between'>
            <Logo />
            <ul className='flex space-x-4 font-semibold'>
                <NavLink className='hover:text-primary' to='/explore'>
                    Explore
                </NavLink>
                <NavLink className='hover:text-primary' to='/explore'>
                    Listings
                </NavLink>
                <NavLink className='hover:text-primary' to='/explore'>
                    How It Works
                </NavLink>
                <NavLink className='hover:text-primary' to='/explore'>
                    Contact
                </NavLink>
            </ul>
            <Button variant='primary'>Login</Button>
        </header>
    );
};

export default Header;
