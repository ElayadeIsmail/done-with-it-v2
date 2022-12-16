import React from 'react';

const InputError: React.FC<{ message?: string }> = ({ message }) => {
    if (!message) return <></>;
    return <span className='mt-0.5 text-xs text-red-600'>{message}</span>;
};

export default InputError;
