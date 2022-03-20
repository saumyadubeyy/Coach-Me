import React, { useState } from 'react'
import "../css/ContactUs.css"
import man from "../assets/contact-us.jpg"
import { TextField, ThemeProvider } from "@mui/material";
import MUITheme from '../theme/mui-theme';
import {Link} from 'react-router-dom'

const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [message, setMessage] = useState("")
    const [incomplete, setIncomplete] = useState(false)
    const [sent, setSent] = useState(false)

    const incompleteForm = () => {
        if(name === "" || email ==="" || mobile === "" || message === "") {
            setIncomplete(true)
            return true;
        } else {
            setIncomplete(false);
            return false;
        }
    }

    const checkError = (check) => {
        if (incomplete && check === "") {
          return true;
        } else {
          return false;
        }
    };

    const validateMobile = (mobile) => {
        if(mobile === ""){
          return false;
        } else {
          // const pattern = /^[0]?[789]\d{9}$/;
          const pattern = /^[6-9]\d{9}$/ ;
          if(pattern.test(mobile))
            return false;
          else
            return true;
        }
      }
    
    const validateEmail = (email) => {
        if (email === "") {
          return false;
        } else {
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !re.test(String(email).toLowerCase());
        }
      };
    
    const handleSubmit = () => {
        if (incompleteForm() || validateMobile(mobile) || validateEmail(email)) {
            console.log("submitted")   
        }
        else {
            setName("")
            setEmail("")
            setMobile("")
            setMessage("")
            setSent(true)
        } 
    }


    return (
        <div className='contact-us'>
            {
                !sent ? 
                <>
                    <div className='contact-us-text'>Contact Us</div>
            <div className='holder'>
                <img src={man} alt="" />
                <div className='form'>
                    <ThemeProvider theme={MUITheme}>
                        <div className='inputs'>
                            <TextField 
                                className='input'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                variant='outlined'
                                label='First Name'
                                name='First Name'
                                error={checkError(name)}
                                id="outlined-error"
                            />
                            <TextField 
                                className='input'
                                variant='outlined'
                                label='Email ID'
                                name='Email ID'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={checkError(email) || validateEmail(email)}
                            />
                            <TextField 
                                className='input'
                                variant='outlined'
                                label='Mobile Number'
                                name='Mobile Number'
                                inputProps={{maxLength : 10, minLength : 10}}
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                error={checkError(mobile) || validateMobile(mobile)}
                            />
                            <TextField 
                                className='input'
                                variant='outlined'
                                label='Message'
                                name='Message'
                                value={message}
                                multiline
                                minRows={3}
                                onChange={(e) => setMessage(e.target.value)}
                                error={checkError(message)}
                            />
                        </div>
                    </ThemeProvider>
                    <div className='button'>
                        <button onClick={handleSubmit}>Send Message</button>
                    </div>
                </div>
            </div>
                </>
                :
                <>
                    <div>Sent successfully</div>
                    <div onClick={() => setSent(false)}>Send New Message</div>
                </>
            }
        </div>
    )
}

export default ContactUs
