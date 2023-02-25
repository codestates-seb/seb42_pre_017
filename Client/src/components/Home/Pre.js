import React from 'react';
import { Avatar } from '@mui/material';
import typescript from '../../img/typescript-logo.png'
export default function Pre({stack}) {
    return (
        <div className="border border-yellow-500 w-10 h-10 rounded-full flex items-center">
        <Avatar alt="Remy Sharp" src={require(`../../img/${stack}-logo.png`)}/>
        </div>
    );
}

