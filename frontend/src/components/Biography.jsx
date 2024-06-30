import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="whoweare" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Medical clinic application which will allow to 
          manage rooms in the clinic, doctors, patients and appointments.
        </h3>
      </div>
    </div>

    </>
  )
}

export default Biography