import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
export default function Input({type}) {
    return (
        <Grid item xs={12}> 
        <TextField
                  required
                  fullWidth
                  id={type}
                  label={type}
                  name={type}
                  type={type}
                 className='textField-radius'
                 autoComplete={type}
        />
        </Grid>   
    );
}

