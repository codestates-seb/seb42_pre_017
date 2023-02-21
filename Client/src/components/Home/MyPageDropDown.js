import React from 'react';

export default function MyPageDropDown() {
   
    return (
        <ul 
            className='absolute top-full right-0 z-10 bg-white p-1 text-lg'
            >
            <li>내작성글</li>
            <li>설정</li>
            <li>로그아웃</li>
        </ul>
    );
}
