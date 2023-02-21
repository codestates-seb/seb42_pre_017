
import React, { useEffect, useState } from 'react';
import { getAllData, getJavadcript, getTypeScript } from '../../util/data';
import Card from './Card';
import SubNav from './SubNav';
import PopularTap from './PopularTap'
const filteredTap = ['전체','JavaScript','TypeScript'] 
export default function CardLists() {
    const [data,setData] = useState()
    const [filter,setFilter] = useState('전체')
  useEffect(()=>{
    if(filter === 'JavaScript'){
        getJavadcript().then(res=>setData(res))
    }else if(filter === 'TypeScript'){
        getTypeScript().then(res=>setData(res))
    }else{
        getAllData().then(res=>setData(res))
    } 
  },[filter])
    return (
        <section
        className='max-w-screen-2xl m-auto p-5'
        >
                <PopularTap />
            <nav className='gap-6 mb-4 flex'>    
               {filteredTap.map((filter,idx)=>
               <SubNav key={idx} data={data} onData={setData} filter={filter} onFilter={setFilter}/>)}
            </nav>   
                 <ul
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
                                basis-2/3 ' 
                >
                    {data &&  data.map(data=><Card key={data.questionId} data={data}/>)}
                </ul>
        </section>
        
    );
}

