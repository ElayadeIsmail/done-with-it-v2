const Hero = () => {
    return (
        <div className='w-full h-screen pt-24 container flex'>
            <div className='w-1/2 flex space-y-4 flex-col justify-center pr-8'>
                <h1 className='text-7xl font-bold leading-[1.15]'>
                    The <span className='text-primary'>Safest</span> Way <br />
                    To <span className='text-primary'>Buy</span> and{' '}
                    <span className='text-primary'>Sell</span> <br />
                    Items
                </h1>
                <p className='text-2xl font-semibold leading-[1.1]'>
                    Use NAME interactive design tools.{' '}
                    <span className='text-textGray'>
                        It's ton of customization options to customize anything
                    </span>
                </p>
                <span className='font-bold text-xl text-appBlue'>
                    *Join over 7,000 satisfied customers.
                </span>
            </div>
            <div className='w-1/2 flex items-center justify-center py-4'>
                <div className='relative w-full h-full overflow-hidden'>
                    <img
                        className='block w-full object-cover duration-1000 transition-transform hover:scale-105'
                        alt='hero'
                        src='/images/hero.jpg'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
