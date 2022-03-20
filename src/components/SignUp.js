import React from 'react'
import "../css/SignUp.css"
import { TextField, ThemeProvider } from "@mui/material";
import MUITheme from '../theme/mui-theme';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='signUp'>
      <h1 style={{color : "#698f3f"}}>Sign Up</h1>
      <div className='input'>
        <ThemeProvider theme={MUITheme}>
          <TextField
            variant='outlined'
            label='First Name'
            name='firstName'
            id="outlined-error"
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Last Name'
            name='lastName'
            id="outlined-error"
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Email'
            name='email'
            id="outlined-error"
            fullWidth
          />
          <TextField
            variant='outlined'
            label='Mobile Number'
            name='mobileNumber'
            id="outlined-error"
            fullWidth
          />
          <TextField
            type="date"
            variant='outlined'
            label="Date of Birth"
            InputLabelProps={{ shrink: true }}
            name='mobileNumber'
            fullWidth
            id='date'
          />
        </ThemeProvider>
      </div>
      <button className='button'>Sign Up</button>
      <div className='signIn-text'>
          Already have an account? <Link className='text' to='/signIn'>Sign In</Link>
        </div>
    </div>
  )
}

export default SignUp