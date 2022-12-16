import type { FC, ReactNode } from 'react';
import { cn } from '~/lib/utils';

interface SectionProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

const Section: FC<SectionProps> = ({
    children,
    title,
    subtitle,
    className = '',
}) => {
    return (
        <section
            className={cn(
                'flex container justify-center py-16 items-center flex-col',
                className,
            )}
        >
            {title && (
                <span className='text-appOrange mb-4 text-xl text-center font-semibold'>
                    {title}
                </span>
            )}

            {subtitle && (
                <h2 className='text-[42px] mb-20 font-bold text-center'>
                    {subtitle}
                </h2>
            )}
            {children}
        </section>
    );
};

export default Section;
