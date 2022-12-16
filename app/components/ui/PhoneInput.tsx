import React, { useState } from 'react';
import InputPhone from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { cn } from '~/lib/utils';
import InputError from './InputError';
import Label from './Label';

interface IPhoneProps {
    onChange: (value: string) => void;
    error?: string;
}

const PhoneInput: React.FC<IPhoneProps> = ({ onChange, error }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className='flex flex-col mb-4'>
            <Label htmlFor='phone' title='Phone Number' />
            <InputPhone
                country={'ma'}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder='Enter Your Phone Number'
                containerClass={cn(
                    'flex items-center border-2 border-dark w-full rounded-md',
                    {
                        'border-primary': !error && isFocused,
                        'border-red-600': !!error,
                    },
                )}
                inputStyle={{
                    height: '2.5rem !important',
                    border: 0,
                    width: '100% ',
                    outline: 'none',
                    flex: '1',
                    minHeight: '44px',
                    backgroundColor: '#222',
                }}
                buttonStyle={{
                    border: 0,
                    width: '3rem',
                    height: '40px',
                    backgroundColor: '#222',
                }}
                dropdownStyle={{
                    width: '600px',
                    background: '#222',
                    color: '#FFF',
                }}
                buttonClass='hover:border-0  hover:bg-dark hover:ring-0 focus:bg-dark focus:ring-0 active:bg-dark'
                onChange={onChange}
            />
            <InputError message={error} />
        </div>
    );
};

export default PhoneInput;
