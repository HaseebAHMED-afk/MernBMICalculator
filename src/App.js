import React from 'react'
import { TextField, Typography } from '@material-ui/core';
import './App.css';
import BMICard from './Components/BMICard';

function App() {
  return (
    <div className='page' >
      <Typography variant='h2' >BMI</Typography>
      <Typography variant='h4' >Calculator</Typography>
       <div className='input-section' >
      <TextField variant='outlined' className='input-elem' color='secondary' label='Name'  />
      <TextField variant='outlined' className='input-elem' color='secondary' label='CNIC' />
      <div className='input-data' >
      <TextField variant='outlined' type='number' className='input-elem-data'  color='secondary' label='Heigth (cm)' />
      <TextField variant='outlined' type='number' className='input-elem-data' color='secondary' label='Weight (kg)' />
      </div>
    </div>
    <BMICard />
    <BMICard />
    <BMICard />
    <BMICard />
    <BMICard />
    <BMICard />
    </div>
   
  );
}

export default App;
