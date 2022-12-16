import React from 'react';
import { cn } from '~/lib/utils';

const Separator: React.FC<{ text?: string; className?: string }> = ({
    text,
    className = '',
}) => {
    if (!text)
        return (
            <div
                className={cn(
                    'h-[1px] w-full inline-block bg-textGray',
                    className,
                )}
            />
        );
    return (
        <div className={cn('w-full flex items-center gap-4 my-8', className)}>
            <div className='h-[1px] bg-textGray w-full' />
            <span className='text-textGray'>{text}</span>
            <div className='h-[1px] bg-textGray w-full' />
        </div>
    );
};

export default Separator;
