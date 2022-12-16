import type { FC } from 'react';
import { cn } from '~/lib/utils';
import { Section } from '../ui';

const STATS_DATA = [
    {
        bg: 'bg-gradient-to-br from-[#2664C5] to-[#307DF6] ',
        number: '+200.000',
        title: 'Members',
    },
    {
        bg: 'bg-gradient-to-br from-[#EE8437] to-[#FFA800]',
        number: '+500.000',
        title: 'Sold Item',
    },
    {
        bg: 'bg-gradient-to-br from-[#429497] to-[#23BA8C]',
        number: '+500.000',
        title: 'Happy Users',
    },
    {
        bg: 'bg-gradient-to-br from-[#EB1243] to-[#F05B6B]',
        number: '+10.000.000',
        title: 'Listing',
    },
];

const Stats = () => {
    const stats = STATS_DATA.map((stat) => (
        <StatsItem key={stat.title} {...stat} />
    ));
    return (
        <Section title='Fun Facts' subtitle='Statistic About Us'>
            <div className='grid grid-cols-4 gap-4 w-full'>{stats}</div>
        </Section>
    );
};

export default Stats;

interface StatsItemProps {
    bg: string;
    number: string;
    title: string;
}

const StatsItem: FC<StatsItemProps> = ({ bg, number, title }) => {
    return (
        <div
            className={cn(
                'rounded-md flex items-center justify-center flex-col p-10 hover:-translate-y-1 hover:shadow-lg transition duration-300',
                bg,
            )}
        >
            <h3 className='text-2xl font-semibold mb-1'>{number}</h3>
            <span className='text-xl'>{title}</span>
        </div>
    );
};
