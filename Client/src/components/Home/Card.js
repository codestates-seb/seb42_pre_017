import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
export default function Card() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/postdetail/:id`)
    }
    return (

        <div 
        onClick={handleClick} 
        className='border-2 border-gray-400 rounded-2xl cursor-pointer
                    hover:scale-105 duration-300 w-30 h-[20rem] p-3 flex flex-col justify-between
                    '
          >
            <div
            className='flex flex-col justify-center items-start gap-3 text-darkMode'
            >
                <div className='opacity-50 mb-3 text-sm mt-3 '>등록날짜 | 2022.10.23</div>
                <div className=' font-semibold'>
                    제목이다아아아ㅏㅏㅇ아아아아아ㅏㅏㅏㅏㅏㅏㅏㅏㅏ
                </div>
                <div className='bg-gray-300 rounded-2xl p-1 text-sm'>기술스택</div>
                <div>스택아이콘</div>
                <div>질문내용</div>
                
            </div>
            <div className='flex justify-between mb-3'>
                 <div className='font-semibold'>닉네임</div>
                 <div className='flex'>
                     < AiOutlineHeart />
                     <AiOutlineComment />
                 </div>
             </div>
        </div>
    );
}

