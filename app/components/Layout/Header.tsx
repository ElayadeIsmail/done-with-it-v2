import { Link, NavLink } from '@remix-run/react';
import { Button } from '../ui/Button';
import Logo from '../ui/Logo';

const Header = () => {
    return (
        <header className=' bg-black z-50 fixed h-20 inset-0 border-b border-textGray'>
            <div className='container h-20 flex items-center justify-between'>
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
                <div className='space-x-2'>
                    <Link to='/login'>
                        <Button variant='primary'>Login</Button>
                    </Link>
                    <Link to='/register'>
                        <Button variant='outline'>Register</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
