import React, { useCallback, useEffect, useState } from 'react';
import Stack from './Stack';

export default function SubNav({onFilter,filter,onClick,click}) {
    const [toggle,setToggle] = useState(false)
    console.log(filter);
    const handleClick = () => {
    // const lower = filter === '전체' ? "전체" : filter.toLowerCase()
    onFilter(filter)
    if(toggle) {
        setToggle(!toggle)
       filter === '전체' || onClick(click.filter(stack =>stack !== filter))
    }else{
        setToggle(!toggle)
        filter === '전체' ||  onClick([...click,filter])
    }
    
    
    }
    console.log(click);
    // useCallback( () => {
        // let filterdData = click.reduce((pre,cur)=>{
        //     const js = cur === 'javascript'
        //     const ts = cur === 'typescript'
        //     const java = cur === 'java'
        //     const react = cur === 'react'
        //     const spring = cur === 'spring'
        //     console.log(cur);
            
        //     // if(pre.length === 0 && pre.filter(pre=>pre===cur))return ;
        //     // if(toggle === false){ 
        //     //     return ;
        //     // }
        //     if(js || ts || java || react || spring){
        //     pre.push(cur)
            
        //     }
        //     console.log(pre);
        //     return pre
        // },[])
        // console.log(filterdData);
        //  onClick(filterdData)
    // },[click,toggle])
  
    

   
    const lowerWord = new RegExp(filter,'gi')
    return (
       <>
        <button 
                className={`border border-black rounded-full p-3 hover:scale-105 duration-300 shrink w-40
                             flex items-center justify-center`}
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

