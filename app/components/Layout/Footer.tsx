import { Facebook, Instagram, Youtube } from '~/icons';
import { Button, Logo } from '../ui';

const Footer = () => {
    return (
        <footer className='border-t border-textGray'>
            <div className='container py-20 flex'>
                <div className='w-1/2 flex flex-col space-y-4'>
                    <Logo />
                    <h4 className='text-3xl font-bold'>
                        Together We Are Making An Impact.
                    </h4>
                </div>
                <div className='w-1/2 flex flex-col space-y-4'>
                    <div className='flex items-center justify-between'>
                        <a
                            href='/'
                            className='uppercase text-textGray text-sm font-semibold hover:text-white'
                        >
                            PRIVACY POLICY
                        </a>
                        <a
                            href='/'
                            className='uppercase text-textGray text-sm font-semibold hover:text-white'
                        >
                            TERM & CONDITION
                        </a>
                        <a
                            href='/'
                            className='uppercase text-textGray text-sm font-semibold hover:text-white'
                        >
                            ABOUT US
                        </a>
                        <a
                            href='/'
                            className='uppercase text-textGray text-sm font-semibold hover:text-white'
                        >
                            FAQ
                        </a>
                    </div>
                    <div className='flex w-full items-center space-x-4'>
                        <input
                            type='email'
                            placeholder='Subscribe To Our News Letter'
                            className='flex-1 py-2.5 px-2 rounded-lg bg-dark text-sm transition-all focus:border-[3px] border-primary outline-0 focus:outline-none'
                        />
                        <Button variant='primary'>Subscribe</Button>
                    </div>
                    <div className='flex w-full items-center justify-between'>
                        <span className='flex items-center space-x-3'>
                            <a href='/' className='cursor-pointer'>
                                <Facebook fill='#ffffff80' />
                            </a>
                            <a href='/' className='cursor-pointer'>
                                <Instagram fill='#ffffff80' />
                            </a>
                            <a href='/' className='cursor-pointer'>
                                <Youtube fill='#ffffff80' />
                            </a>
                        </span>
                        <span className='text-sm text-textGray'>
                            © {new Date().getFullYear()} All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
