import React from "react";
import { Avatar } from '@mui/material';
export default function Stack({ stack }) {
  return (
      <>
        {stack === '전체' || <div className="border border-gray-500 w-10 h-9 rounded-full flex items-center mr-2">
            <Avatar alt={stack} src={require(`../../img/${stack}-logo.png`)} sx={{width:'2.2rem', height:'2rem', marginLeft:'0.1rem'}}/>
       </div> }
      </>
  );
}
