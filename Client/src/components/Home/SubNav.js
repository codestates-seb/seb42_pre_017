import React from 'react';
import Stack from './Stack';

export default function SubNav({onFilter,filter}) {
    const handleClick = () => {
    onFilter(filter)
    }
    return (
       <>
        <button 
                className={`border border-black rounded-full p-3 hover:scale-105 duration-300 shrink w-40
                            ${(filter === 'JavaScript' || filter === "TypeScript") ? 'flex items-center justify-center' :'' }`}
                onClick={handleClick}
                >
                {filter === "JavaScript" && <Stack stack='javascript'/>}
                {filter === "TypeScript" && <Stack stack='typescript'/>}
                <span 
                    className='font-semibold'>
                    {filter}
                </span>
        </button> 
       </>
    );
}

