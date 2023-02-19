import React from 'react';
import {AiOutlineHeart, AiOutlineSwitcher} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
export default function Card({data}) {
    const navigate = useNavigate()
    const {id,title,content,author,likes,updatedAt,stack,answer} =data
    const handleClick = () => {
        navigate(`/postdetail/${data.id}`)
    }
    return (

        <li 
        onClick={handleClick} 
        className='border-2 border-gray-400 rounded-2xl cursor-pointer
                    hover:scale-105 duration-300 w-30 h-[20rem] p-3 flex flex-col justify-between
                    '
          >
            <div
            className='flex flex-col justify-center items-start gap-3 text-darkMode'
            >
                <div className='opacity-50 mb-3 text-sm mt-3 '>등록날짜 | {updatedAt}</div>
                <div className=' font-semibold'>
                    {title}
                </div>
                <div className='bg-gray-300 rounded-2xl p-1 text-sm'>{stack}</div>
                <div>스택아이콘</div>
                <div className='line-clamp-2'>{content}</div>
                
            </div>
            <div className='flex justify-between mb-3'>
                 <div className='font-semibold'>{author}</div>
                 <div className='flex gap-1'>
                     <div className='flex gap-1'>< AiOutlineHeart />{likes}</div>
                     <div className='flex gap-1'><AiOutlineComment />{answer.length}</div>
                 </div>
             </div>
        </li>
    );
}

