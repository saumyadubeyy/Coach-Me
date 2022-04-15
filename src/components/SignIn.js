import React from 'react'
import "../css/SignIn.css"
import { TextField, ThemeProvider } from "@mui/material";
import MUITheme from '../theme/mui-theme';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='signIn'>
      <h1 style={{color: "#698f3f"}}>Sign In</h1>
      <div className='input'>
          <ThemeProvider theme={MUITheme}>
            <TextField
              variant='outlined'
              label='Email'
              name='email'
              id="outlined-error"
              fullWidth
            />
            <br />
            <TextField
              variant='outlined'
              label='Password'
              name='Password'
              id="outlined-error"
              fullWidth
            />
          </ThemeProvider>
        </div>
        <button className='button'>Sign In</button>
        <div className='signUp-text'>
          Don't have an account yet? <Link className='textt' to='/Coach-Me/signUp'>Sign Up</Link>
        </div>
    </div>
  )
}


export default SignIn