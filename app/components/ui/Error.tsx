import type { FC } from 'react';

const ErrorMessage: FC<{ message?: string }> = ({ message }) => {
    if (!message) return <></>;
    return (
        <div className='bg-red-600 text-white font-semibold p-3 w-full rounded-md text-center'>
            <span>{message}</span>
        </div>
    );
};

export default ErrorMessage;
