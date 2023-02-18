import React from 'react';
import Card from './Card';
import SubNav from './SubNav';
export default function CardLists() {
    return (
        <section
        className='max-w-screen-2xl m-auto p-5'
        >
            <SubNav />
            <ul
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
                            basis-2/3 ' 
            >
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
            </ul>
        </section>
    );
}

