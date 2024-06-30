import React from 'react'

const Hero = ({ title, imageUrl}) => {
  return (
    <>
        <div className="hero container">
            <div className="banner">
                <h1>{title}</h1>
                <p>
                Medical clinic application which will allow to 
                manage rooms in the clinic, doctors, patients and appointments.
                </p>
            </div>
            <div className="banner">
                <img src={imageUrl} alt="hero"/>
                <span>
                    <img src="/Vector.png" alt="vector" />
                </span>
            </div>
        </div>
    </>
  )
}

export default Hero