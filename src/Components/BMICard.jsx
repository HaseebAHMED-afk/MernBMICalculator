import React from 'react'
import Critical from '../Utils/Critical'
import High from '../Utils/High'
import Low from '../Utils/Low'
import Moderate from '../Utils/Moderate'
import Stable from '../Utils/Stable'
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
            {/* <Low />
            <Moderate />
            <Stable />
            <High />
            <Critical /> */}
        </div>
    )
}

export default BMICard
