import React, { Component } from "react";
import "./banner.scss";

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <section className="section1 info">
        <h2> Personal Information <br /></h2>
        <div className="info-content">
          a  <br />
          a  <br />
          a  <br />
          a  <br />
          a  <br />
          a  <br />
          a  <br />
          a  <br />
        </div>
      </section>
    );
  }
}

export default Info;
