import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '~/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: 'primary' | 'outline' | 'secondary';
    children: ReactNode;
};

export const Button = ({
    variant = 'primary',
    children,
    className = '',
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={cn(`${className} rounded font-bold py-2 px-5`, {
                'bg-primary border-2 border-primary text-dark hover:bg-dark hover:text-primary transition-all':
                    variant === 'primary',
                'bg-dark border-2 border-primary text-primary hover:bg-primary hover:text-dark transition-all':
                    variant === 'outline',
                'bg-appBlue text-white': variant === 'secondary',
            })}
            {...rest}
        >
            {children}
        </button>
    );
};
