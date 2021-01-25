import { colors } from '@material-ui/core';
import { FormatSize } from '@material-ui/icons';
import React from 'react';
import fault from '../component/fault.jpg';
import './style2.css';

const ConnectErr  = () => (
  <div className="styleNotFound" >
    <img className='con-error-image' alt='check your connection' src={fault} />
    <h1>!صفحه مورد‌نظر یافت نشد</h1>
    <button style={{marginTop:'40px'}, {colors:'default'} , {FormatSize:'20px' }}  >Refresh</button>
  </div>
);
 export default ConnectErr;


 
   


