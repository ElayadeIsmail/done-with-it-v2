import type { FC, ReactNode } from 'react';
import { getTrackBackground, Range } from 'react-range';
import type { IThumbProps, ITrackProps } from 'react-range/lib/types';

interface RangeInputProps {
    min: number;
    max: number;
    step?: number;
    onChange: (values: number[]) => void;
    values: number[];
    activeColor?: string;
    thumbColor?: string;
    bgColor?: string;
}

export const RangeInput = ({
    max,
    min,
    step = 1,
    onChange,
    values,
    activeColor = '#3ccf91',
    thumbColor = '#70dcae',
    bgColor = '#555',
}: RangeInputProps) => {
    return (
        <Range
            step={step}
            min={min}
            max={max}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
                <Track
                    children={children}
                    props={props}
                    background={getTrackBackground({
                        values: values,
                        colors: [activeColor, bgColor],
                        min,
                        max,
                    })}
                />
            )}
            renderThumb={({ props }) => (
                <Thumb props={props} backgroundColor={thumbColor} />
            )}
        />
    );
};

const Track: FC<{
    props: ITrackProps;
    children: ReactNode;
    background: string;
}> = ({ children, props, background }) => {
    return (
        <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
                ...props.style,
                height: '10px',
                display: 'flex',
                width: '100%',
                flex: 1,
            }}
        >
            <div
                ref={props.ref}
                style={{
                    height: '10px',
                    width: '100%',
                    borderRadius: '2px',
                    background,
                    alignSelf: 'center',
                }}
            >
                {children}
            </div>
        </div>
    );
};

const Thumb: FC<{ props: IThumbProps; backgroundColor: string }> = ({
    props,
    backgroundColor,
}) => {
    return (
        <div
            {...props}
            style={{
                ...props.style,
                height: '17px',
                width: '17px',
                borderRadius: '2px',
                backgroundColor,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 0,
                outline: 'none',
            }}
        ></div>
    );
};
