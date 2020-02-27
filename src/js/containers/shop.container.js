import React, { Component } from "react";
import { connect } from "react-redux";

import ShopComponent from './../components/shopping'


class Shop extends Component {
  render() {
    return (
      <ShopComponent />
    )
  }
}

function mapStateToProps ({}) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {  }
)(Shop);