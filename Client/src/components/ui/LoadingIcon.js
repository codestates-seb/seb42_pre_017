import React, { useState } from 'react';

export default function LoadingIcon() {
    const [loading, setLoading] = useState(true);
  function handleClick() {
    setLoading(true);
  }
    return (  
    <>
        {/* <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          <span>Send</span>
        </LoadingButton> */}
    </>
    );
}

