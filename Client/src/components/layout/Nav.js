import React, { useState } from 'react';
import logo from '../../img/logo.png'
import {RxBell} from 'react-icons/rx'
import {FaRegUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import MyPageDropDown from '../Home/MyPageDropDown';

export default function Nav() {
    const [toggle ,setToggle] =useState(false)
    return (
        <nav className='flex justify-between max-w-screen-xl m-auto p-3 relative'>
           <Link to='/'
            className='cursor-pointer'
           >
             <img src={logo} alt="logo" />
           </Link>
            <div
                className='flex gap-7 text-2xl'
            >
                <button>
                새 글쓰기
                </button>
                <button>
                 <RxBell />
                </button>
                <button
                    onClick={()=>{setToggle(!toggle)}} 
                >
                    <FaRegUserCircle />
                </button>   
                {toggle && <MyPageDropDown/>}
            </div>
        </nav>
    );
}

