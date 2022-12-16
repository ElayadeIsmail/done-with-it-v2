import type { FC } from 'react';
import { Section } from '../ui';

const TESTIMONIALS_DATA = [
    {
        img: '/images/user-1.jpeg',
        name: 'Leigh',
        content: 'Sold my phone in 1 day!',
    },
    {
        img: '/images/user-2.jpeg',
        name: 'Alicia',
        content: 'Perfect! fast and easy',
    },
    {
        img: '/images/user-3.jpeg',
        name: 'Sam',
        content:
            'Great experience, my jacket sold the same day I uploaded it. Very happy customer, thank you.',
    },
];

const Testimonials = () => {
    const items = TESTIMONIALS_DATA.map((testimonial) => (
        <TestimonialItem key={testimonial.img} {...testimonial} />
    ));
    return (
        <Section title='Testimonials' subtitle='Clients About Us'>
            <div className='grid grid-cols-3 gap-4 px-4'>{items}</div>
        </Section>
    );
};

export default Testimonials;

interface TestimonialItemProps {
    img: string;
    name: string;
    content: string;
}

const TestimonialItem: FC<TestimonialItemProps> = ({ content, img, name }) => {
    return (
        <div className='bg-dark rounded-md flex  justify-center flex-col p-4 hover:-translate-y-1 hover:shadow-lg transition duration-300'>
            <div className='flex items-center space-x-4 mb-4'>
                <img src={img} alt={name} className='w-14 h-14 rounded-full' />
                <div className='flex flex-col justify-center'>
                    <span className='text-sm'>{name}</span>
                    <span className='text-textGray  text-xs'>
                        About a month ago
                    </span>
                </div>
            </div>
            <p className='text-textGray text-sm'>{content}</p>
        </div>
    );
};
