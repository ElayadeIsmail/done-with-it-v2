import { Link } from '@remix-run/react';
import type { FC } from 'react';
import { cn } from '~/lib/utils';
import { Section } from '../ui';

const CATEGORIES_DATA = [
    {
        cover: '/images/electronic.jpg',
        title: 'Electronic',
        link: '/',
        bg: 'bg-lightRed',
    },
    {
        cover: '/images/clothing.jpg',
        title: 'Clothing',
        link: '/',
        bg: 'bg-appPurple',
    },
    {
        cover: '/images/furniture.jpg',
        title: 'Furniture',
        link: '/',
        bg: 'bg-appOrange',
    },
    {
        cover: '/images/accessories.jpg',
        title: 'Accessories',
        link: '/',
        bg: 'bg-appBlue',
    },
];

const Categories = () => {
    const items = CATEGORIES_DATA.map((category) => (
        <CategoryItem key={category.cover} {...category} />
    ));
    return (
        <Section
            className='py-16'
            title='Categories'
            subtitle='Popular Categories'
        >
            <div className='grid grid-cols-2 gap-8 mx-auto max-w-[80%]'>
                {items}
            </div>
        </Section>
    );
};

export default Categories;

interface CategoryProps {
    cover: string;
    title: string;
    link: string;
    bg: string;
}

const CategoryItem: FC<CategoryProps> = ({ bg, cover, link, title }) => {
    return (
        <Link to={link} className='flex flex-col'>
            <div className='relative overflow-hidden '>
                <img
                    src={cover}
                    className='w-full rounded-md max-h-[500px] mb-2 duration-1000 transition-transform hover:scale-105'
                    alt=''
                />
            </div>
            <span
                className={cn(
                    'py-2 px-5 rounded-md font-bold text-sm w-fit ',
                    bg,
                )}
            >
                {title}
            </span>
        </Link>
    );
};
