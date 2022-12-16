import type { FC, InputHTMLAttributes } from 'react';
import type { UseFormRegister } from 'react-hook-form';
import { cn } from '~/lib/utils';
import InputError from './InputError';
import Label from './Label';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    name: string;
    error?: string;
    register?: UseFormRegister<any>;
}

const Input: FC<InputProps> = ({
    label,
    name,
    className = '',
    register,
    error,
    type = 'text',
    ...rest
}) => {
    const registerOptions = register ? register(name) : {};
    return (
        <div className='flex flex-col'>
            <Label title={label} htmlFor={name} />
            <input
                className={cn(
                    ' bg-dark border-2  transition-all focus:border-primary border-black min-h-[44px] text-sm rounded-md shadow-lg w-full py-[7px] px-3',
                    className,
                )}
                id={name}
                type={type}
                {...rest}
                {...registerOptions}
            />
            <InputError message={error} />
        </div>
    );
};

export default Input;
