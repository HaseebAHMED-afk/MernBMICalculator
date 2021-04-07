import React from 'react'
import Critical from '../Utils/Critical'
import High from '../Utils/High'
import Low from '../Utils/Low'
import Stable from '../Utils/Stable'
import './Card.css'

const BMICard = ({name,cnic,height,weight,bmi}) => {
    return (
        <div className='card' >
            <h1>Name: {name}</h1>
            <p>CNIC: {cnic} </p>
            <p>Height: {height} </p>
            <p>Weight: {weight} </p>
            <p>BMI: {bmi} </p>
            <p>Status : {
                bmi < 18.5 ? (<Low />): bmi > 18.5 && bmi < 25.4 ? (<Stable />) : bmi > 25.4 && bmi < 29.9 ? (<High />) : (<Critical />)
                } </p>
            
        </div>
    )
}

export default BMICard
