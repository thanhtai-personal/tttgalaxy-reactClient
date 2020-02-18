import React from 'react'


const Counter = (props) => {
  return (
    <div className="counter_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center">
              <h3>
                <span className="counter" >520 </span><span>+</span>
              </h3>
              <p>Total Projects</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center">
              <h3>
                <span className="counter">244 </span>
              </h3>
              <p>On Going Projects</p>
            </div>
          </div>
          <div className="col-xl-4 col-md-4">
            <div className="single_counter text-center">
              <h3>
                <span className="counter" >95 </span> <span>%</span>
              </h3>
              <p>Job Success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter