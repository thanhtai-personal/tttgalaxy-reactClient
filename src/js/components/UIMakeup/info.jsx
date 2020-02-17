import React, { Component } from "react";
import "./banner.scss";

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { title, content } = this.props
    return (
      <section className="section1 info">
        <h2>{title}</h2>
        {content}
      </section>
    );
  }
}

export default Info;
