import React from 'react';
import {DiJavascript1} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
export default function SubNav() {
    return (
        <nav className='flex gap-2'>
        <button className='border border-black rounded-full p-3 flex items-center'>
            <div className='border border-yellow-500 w-10 h-10 rounded-full flex items-center'>
                < DiJavascript1 
                className='bg-yellow-500 
                            rounded-full w-8 h-8 p-1 ml-0.5 mt-0.'
                />
            </div>
            <span className='font-semibold'>
                JavaScript
            </span>
        </button> 
        <button className='border border-black rounded-full p-3 flex items-center'>
            <div className='border border-blue-700 w-10 h-10 rounded-full flex items-center justify-center  mr-1'>
                < SiTypescript
                 className='text-blue-700
                             rounded-full w-8 h-8'
                />
            </div>
            <div className='font-semibold'>TypeScript</div>
        </button>  
    </nav>
    );
}

