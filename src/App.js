import React,{useState, useEffect} from 'react'
import { Button, TextField, Typography } from '@material-ui/core';
import './App.css';
import BMICard from './Components/BMICard';
import axios from 'axios'

function App() {

  const [name , setName ] = useState('')
  const [CNIC , setCNIC ] = useState('')
  const [height , setHeight ] = useState(0)
  const [weight , setWeight ] = useState(0)

  let [data,setData] = useState(null)

  useEffect(()=>{
    const fetchData = async () =>{
      const {data} = await axios.get('http://localhost:5000');
      setData(data);
    }

    fetchData();
  }, [])

  const handleSubmit = async () =>{
   
    let newHeight = height / 100;
    let result = weight / (newHeight^2);

    let data = {
      name,
      CNIC,
      height,
      weight,
      BMI: result
    }


     await axios.post('http://localhost:5000', data).then((response) =>console.log(response)).catch((err) => console.log(err));
     await window.location.reload();
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
    {
      data && data.map((card,i) => (
        <BMICard key={i} name={card.name} cnic={card.CNIC} height={card.height} weight={card.weight} bmi={card.BMI}  />
      ))
    }
    
    </div>
   
  );
}

export default App;
