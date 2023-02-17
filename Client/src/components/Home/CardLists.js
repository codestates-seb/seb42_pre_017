import React from 'react';
import Card from './Card';
import SubNav from './SubNav';
export default function CardLists() {
    return (
        <section>
            <SubNav />
            <ul>
                <li><Card /></li>
            </ul>
        </section>
    );
}

