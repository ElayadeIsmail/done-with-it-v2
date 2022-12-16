import type { FC } from 'react';
import { Fast, Money, Secure } from '~/icons';
import { cn } from '~/lib/utils';

const services = [
    {
        Icon: <Money className='h-14 w-14' />,
        title: 'Money',
        className: 'bg-appPurple',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt nemo porro ut. Sequi incidunt illum ad, corporis, sit ipsam maiores alias officiis consectetur dignissimos qui velit harum facilis magni.',
    },
    {
        Icon: <Secure className='h-14 w-14' />,
        title: 'Secure',
        className: 'bg-appOrange',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt nemo porro ut. Sequi incidunt illum ad, corporis, sit ipsam maiores alias officiis consectetur dignissimos qui velit harum facilis magni.',
    },
    {
        Icon: <Fast className='h-14 w-14' />,
        title: 'Fast',
        className: 'bg-primary',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sunt nemo porro ut. Sequi incidunt illum ad, corporis, sit ipsam maiores alias officiis consectetur dignissimos qui velit harum facilis magni.',
    },
];

const Services = () => {
    const items = services.map((service) => (
        <ServiceItem key={service.title} {...service} />
    ));
    return (
        <div className='h-screen  flex container justify-center flex-col'>
            <span className='text-appOrange mb-4 text-xl font-semibold'>
                Our Services
            </span>

            <h2 className='text-[42px] mb-20 font-bold'>
                We help users build their websites
            </h2>
            <div className='grid grid-cols-3 gap-8'>{items}</div>
        </div>
    );
};

export default Services;

interface IServiceItem {
    className: string;
    Icon: JSX.Element;
    title: string;
    description: string;
}

const ServiceItem: FC<IServiceItem> = ({
    className,
    Icon,
    title,
    description,
}) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center space-y-3',
            )}
        >
            <div
                className={cn(
                    'rounded-full flex items-center justify-center w-28 h-28',
                    className,
                )}
            >
                {Icon}
            </div>
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='text-textGray text-sm text-center font-semibold'>
                {description}
            </p>
        </div>
    );
};
