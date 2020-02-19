import React from 'react'


const Counter = (props) => {
  return (
    <div className="counter_area" id='projects'>
      <div className="container">
        <div className="row">
          <div className='col-xl-12 text-center'>
            <p style={{ fontSize: '36px', fontWeight: '600', color: 'white' }}> PROJECTS </p>
          </div>
          <div className='col-xl-12 text-center'>&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center" style={{ backgroundColor: 'white' }}>

            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center" style={{ backgroundColor: 'white' }}>

            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center" style={{ backgroundColor: 'white' }}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter