import type { FC } from 'react';
import { Fast, Money, Secure } from '~/icons';
import { cn } from '~/lib/utils';
import { Section } from '../ui';

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
        <Section
            className='h-screen'
            title='Our Services'
            subtitle='We help users build their websites'
        >
            <div className='grid grid-cols-3 gap-8'>{items}</div>
        </Section>
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
