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
            className={cn(`${className} rounded font-bold py-3 px-5`, {
                'bg-primary text-white': variant === 'primary',
                'border-black/20 border bg-dark text-white':
                    variant === 'outline',
                'bg-appBlue text-white': variant === 'secondary',
            })}
            {...rest}
        >
            {children}
        </button>
    );
};
