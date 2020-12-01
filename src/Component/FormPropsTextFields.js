import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style1.css'
import { Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  function CheckUserEmpty(){
    if(document.getElementById('standard-required').value === ''){
        alert("لطفا شماره دانشجویی خود را وارد کنید")
        return false;
        }
        return true
      }
  function checkPasswordEmpty(){
    if(document.getElementById('standard-password-input').value === ''){
       alert("لطفا رمز عبور خود را وارد کنید")
      return false;
        }
        return true
}


  const classes = useStyles();
  
  





  return (
    <div className='container'>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField required id="standard-required" label="user name " 
          onChange={this.CheckUserEmpty}
          fullWidth />       
          <TextField
          required id="standard-password-input"
          label="Password"
          onChange={checkPasswordEmpty}
          type="password"
          autoComplete="current-password"
          fullWidth
          />
        </div>
        <div> 
          <Button variant="contained" style={{marginTop:'30px'} } color="primary" fullWidth /*onClick={this.CheckEmpty}*/ >LOG IN</Button>
        </div>
      </form>
    </div>
  );
}


