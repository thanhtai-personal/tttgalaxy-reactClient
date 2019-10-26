import React, { Component } from "react";
import { connect } from "react-redux";

import BlogMobi from '../../components/blog/blog'
import Blog from '../../components/blog_v2'


class BlogContainer extends Component {
  render() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
    ? (<BlogMobi />) : (<Blog />)
  }
}

function mapStateToProps ({listGame: { } }) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {  }
)(BlogContainer);