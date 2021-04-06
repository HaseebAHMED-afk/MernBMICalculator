import React,{useState} from 'react'
import { Button, TextField, Typography } from '@material-ui/core';
import './App.css';
import BMICard from './Components/BMICard';


function App() {

  const [name , setName ] = useState('')
  const [CNIC , setCNIC ] = useState('')
  const [height , setHeight ] = useState(0)
  const [weight , setWeight ] = useState(0)
  const [BMI , setBMI] = useState(0);


  const handleSubmit = () =>{
    calculateBMI(height , weight);

    let data = {
      name,
      CNIC,
      height,
      weight,
      BMI
    }

    console.log(data);
  }

  const calculateBMI = (height , weight) =>{
    let newHeight = height / 100;
    let result = weight / (newHeight^2);
    setBMI(result);
  }


  return (
    <div className='page' >
      <Typography variant='h2' >BMI</Typography>
      <Typography variant='h4' >Calculator</Typography>
       <div className='input-section' >
      <TextField variant='outlined' value={name} onChange={(e) => setName(e.target.value)} className='input-elem' color='secondary' label='Name'  />
      <TextField variant='outlined' value={CNIC} onChange= {(e) => setCNIC(e.target.value)}  className='input-elem' color='secondary' label='CNIC' />
      <div className='input-data' >
      <TextField variant='outlined' value={height} onChange={(e)=>setHeight(e.target.value)} type='number' className='input-elem-data'  color='secondary' label='Heigth (cm)' />
      <TextField variant='outlined' value={weight}  onChange={(e)=> setWeight(e.target.value)} type='number' className='input-elem-data' color='secondary' label='Weight (kg)' />
      </div>
      <Button variant='contained' color='secondary' onClick={handleSubmit}>Submit</Button>
    </div>
    <BMICard />
    </div>
   
  );
}

export default App;
