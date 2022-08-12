import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import './Singup.css'




export default function Singup() {
    const {register,handleSubmit,formState:{errors}}=useForm({
        mode:"onChange",
    });
    let [state,setState]=useState(false)
    const onSubmit = (data) => {console.log(data);
            
             setState(true);
    }
    console.log(errors);
  return (
    <div className="con">
        

    <div className='formd'>
    <form onSubmit={handleSubmit(onSubmit)}>
               <TextField id="outlined-basic" label="User Name" variant="outlined" {...register("uname", {required:"plz enter your name",minLength:{
                value:4,
                message:"Enter a vaild name more than four character"
               }})}/><br/>
               {errors.uname && <span>{errors.uname.message}</span>}<br/>
               <TextField id="outlined-basic" label="Email" variant="outlined" {...register("email",{required:"Enter your email",pattern:{
                value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message:"Enter correct mail"
                }})} /><br/>
                               {errors.email && <span>{errors.email.message}</span>}<br/>

               <TextField id="outlined-basic" label="Password" variant="outlined" type="password" {...register("pass",{required:"enter password",pattern:{
                value:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g,
                message:"Enter Strong Password with uppercase,lowercase,numeric and special characters"
               }})}/><br/>
                               {errors.pass && <span>{errors.pass.message}</span>}<br/>

                               <Button type='submit' variant="contained">Singup</Button>


  
    </form>
    </div>
               <div>
            {  state==true &&
               <Alert severity="success">User Details are Submittes</Alert>
            }
               </div>
    </div>
  )
}
