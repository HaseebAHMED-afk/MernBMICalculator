import React from 'react'
import './Card.css'

const BMICard = ({name,cnic,height,weight,bmi,status}) => {
    return (
        <div className='card' >
            <h1>Name</h1>
            <p>CNIC</p>
            <p>Height</p>
            <p>Weight</p>
            <p>BMI</p>
            <p>Status</p>
        </div>
    )
}

export default BMICard
