import { useState } from 'react';
import { RangeInput } from '~/components/ui/RangeInput';

const Listings = () => {
    const [values, setValues] = useState([400]);
    return (
        <div className='container'>
            <div className='relative flex overflow-hidden'>
                <div className='w-1/3  pt-24  relative'>
                    <div className='fixed'>
                        <h2>Filter Options</h2>
                        <RangeInput
                            max={20000}
                            min={150}
                            onChange={setValues}
                            values={values}
                        />
                    </div>
                </div>
                <div className='w-2/3 pt-24 h-[8000px] bg-lightRed ml-auto'></div>
            </div>
        </div>
    );
};

export default Listings;
