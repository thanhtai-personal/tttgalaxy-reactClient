import React from 'react'


const Slider = (props) => {
  return (
    <div className="slider_area">
        <div className="single_slider  d-flex align-items-center slider_bg_1">
            <div className="shap_pattern d-none d-lg-block">
                <img src="/img/grid.jpg" alt=""/>
            </div>
            <div className="social_links">
                <ul>
                    <li><a href="#"> <i className="fas fa-facebook"></i> </a></li>
                    <li><a href="#"> <i className="fas fa-twitter"></i> </a></li>
                    <li><a href="#"> <i className="fas fa-instagram"></i> </a></li>
                </ul>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="slider_text text-center">
                            <h3>
                                Hello, I'm Tai Tran
                            </h3>
                            <span>Web developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider