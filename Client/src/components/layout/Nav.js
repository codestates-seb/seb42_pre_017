import React from 'react';
import logo from '../../img/logo.png'
import {RxBell} from 'react-icons/rx'
import {FaRegUserCircle} from 'react-icons/fa'
export default function Nav() {
    return (
        <nav className='flex justify-between max-w-screen-xl m-auto p-3'>
           <div
            className=''
           >
             <img src={logo} alt="logo" />
           </div>
            <div
                className='flex gap-5 text-2xl'
            >
                <button>
                새 글쓰기
                </button>
                <button>
                 <RxBell />
                </button>
                <button>
                 <FaRegUserCircle />
                </button>
            </div>
        </nav>
    );
}

