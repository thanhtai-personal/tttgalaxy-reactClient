import React from 'react'


const Portfolio = (props) => {
  return (
    <React.Fragment>
      <div className='portfolio_area portfolio_bg_1' id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='section_title white_text text-center'>
                <span>Portfolios</span>
                <h3>Some of my awesome <br />
                  stuffs here</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio_image_area'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-5 col-md-5'>
              <div className='single_Portfolio'>
                <div className='portfolio_thumb'>
                  <img src='template/melan/img/portfolio/1.png' alt='' />
                </div>
                <a href='img/portfolio/1.png' className='popup popup-image'></a>
                <div className='portfolio_hover'>
                  <div className='title'>
                    <h3>Product Design</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-7 col-md-7'>
              <div className='single_Portfolio'>
                <div className='portfolio_thumb'>
                  <img src='template/melan/img/portfolio/2.png' alt='' />
                </div>
                <a href='img/portfolio/2.png' className='popup popup-image'></a>
                <div className='portfolio_hover'>
                  <div className='title'>
                    <h3>Product Design</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-lg-4'>
              <div className='single_Portfolio'>
                <div className='portfolio_thumb'>
                  <img src='template/melan/img/portfolio/3.png' alt='' />
                </div>
                <a href='img/portfolio/3.png' className='popup popup-image'></a>
                <div className='portfolio_hover'>
                  <div className='title'>
                    <h3>Product Design</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-lg-4'>
              <div className='single_Portfolio'>
                <div className='portfolio_thumb'>
                  <img src='template/melan/img/portfolio/4.png' alt='' />
                </div>
                <a href='img/portfolio/4.png' className='popup popup-image'></a>
                <div className='portfolio_hover'>
                  <div className='title'>
                    <h3>Product Design</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-12 col-lg-4'>
              <div className='single_Portfolio'>
                <div className='portfolio_thumb'>
                  <img src='template/melan/img/portfolio/5.png' alt='' />
                </div>
                <a href='template/melan/img/portfolio/5.png' className='popup popup-image'></a>
                <div className='portfolio_hover'>
                  <div className='title'>
                    <h3>Product Design</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='more_portfolio text-center'>
                <a className='line_btn' href='#'>More Folio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

  )
}

export default Portfolio