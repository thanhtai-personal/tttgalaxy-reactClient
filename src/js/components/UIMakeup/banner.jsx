import React, { Component } from "react";
import "./banner.scss";

class Banner extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <section className="section1">
        <div className="img-container">
          <img src="https://res.cloudinary.com/di6vua0hr/image/upload/v1561097503/web_images/tttbanner2_mba4ti.png" alt="banner" />
          <div className="slogan">
            <h2 className="slogan-1">
              TTT Galaxy
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
