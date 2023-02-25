import React from "react";

export default function MyPageDropDown({onClick}) {
  return (
    <ul className="absolute top-full right-[-15px] mt-1 z-10 bg-white p-1 text-lg ease-in-out">
      <li className='cursor-pointer'>내작성글</li>
      <li className='cursor-pointer'>설정</li>
      <li
       onClick={onClick}
       className='cursor-pointer'
       >로그아웃
       </li>
    </ul>
  );
}
