import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Input from '../ui/Input';
import SignIn from '../SignIn/SignIn';
import { Link } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to='/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();
export default function SignUp() {
    const [ErrorBar,setErrorBar] = useState('')
  const [text,setText] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(data.get('email').trim().length === 0 ||
        data.get('password').trim().length === 0 || 
        data.get('nickname').trim().length === 0 ) {
          setErrorBar('모든항목을 작성해주세요')
          return;
        }
    if(data.get('password') !== data.get('text_confirm')){
        setErrorBar('비밀번호가 일치하지 않습니다')
    }
    setText({
        email: data.get('email'),
        password: data.get('password'),
        });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4"  >
          <img src={"/images/logo.png"} alt="logo" className="w-[180px] inline-block " />
           <span className='text-xl'>에 오신것을 환영합니다 !</span>
          </Typography>
          <h1 className='text-lg mb-3 text-gray-500'>회원가입에 필요한 정보를 입력해주세요</h1>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Input type='nickname'/>
                <Input type='email'/>
                <Input type='password'/>
                <Input type='text_confirm'/>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            {<div className='text-gray-700 text-center font-thin'>{ErrorBar}</div>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to='/'>
                  이미 회원이신가요?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}