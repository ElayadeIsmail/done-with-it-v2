import React from 'react';

interface LabelProps {
    title?: string;
    htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, title }) => {
    if (!title) return <></>;
    return (
        <label className='text-sm mb-1' htmlFor={htmlFor}>
            {title}
        </label>
    );
};

export default Label;
