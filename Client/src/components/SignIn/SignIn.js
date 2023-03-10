import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Input from '../ui/Input';
import { getUser, login } from '../../util/data';
function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          My Overflow
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const theme = createTheme();
export default function SignIn({onClose}) {
  const [ErrorBar,setErrorBar] = useState(false)
  const [text,setText] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if(data.get('email').trim().length === 0 ||
        data.get('password').trim().length === 0) {
          setErrorBar(true)
          return;
        }
        setErrorBar(false)
        setText({
          email: data.get('email'),
          password: data.get('password'),
        });
        onClose(isOpen=>!isOpen)
        login() //로그인이 되면서
      };  
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
              sx={{
                width:'100%',
                height:'100%',
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                <img src={"/images/logo.png"} alt="logo" className="w-[170px] inline-block " />
                <span>에 오신것을 환영합니다 !</span>
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,margin:0}}>
              <Grid container spacing={2}> 
                <Input type='email' />
                <Input type='password' />
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                {ErrorBar &&<div className='text-gray-700 text-center font-thin'>모든항목을 작성해주세요</div>}
                <Grid sx={{ mt: 3, mb: 2 }} >
                  아직 회원이 아니신가요? <Link>회원가입</Link>
                </Grid>
              </Box>   
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}

