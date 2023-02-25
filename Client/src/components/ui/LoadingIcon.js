import React, { useState } from 'react';

export default function LoadingIcon() {
    const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }
    return (  
    <>
        <button type="button" class="bg-indigo-500 ..." disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
         
        </svg>
        Processing...
      </button>
    </>
    );
}

