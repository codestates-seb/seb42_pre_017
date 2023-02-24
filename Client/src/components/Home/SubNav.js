import React,{useState} from 'react';
import Stack from './Stack';

export default function SubNav({text,onFilter,filter,onClick,click}) {
    const isAll = filter === '전체'
    const [toggle,setToggle] = useState(isAll ? true :false)
    const handleClick = () => {
    onFilter(filter)
    if(toggle) {
        setToggle(!toggle)
        isAll && onFilter('전체')
        isAll && onClick([]) 
        isAll || onClick(click.filter(stack =>stack !== filter))
    }else{
        setToggle(!toggle)
        isAll && onFilter('전체') 
        isAll && onClick([]) 
        isAll ||  onClick([...click,filter])
    }
    }
    console.log(text, 'text');
    return (
       <>
        <button 
                className={`border border-black ${ (isAll && toggle) || (!isAll && toggle) && 'bg-slate-500 text-white'} rounded-full p-3 hover:scale-105 duration-300 shrink w-40
                             flex items-center justify-center ${isAll && 'mb-4 h-16'} `}
                onClick={handleClick}
                >
                {filter &&  <Stack stack={filter}/>}
                <span 
                    className='font-semibold'>
                    {filter}
                </span>
        </button> 
       </>
    );
}

