import React, { Component } from "react";
import { connect } from "react-redux";

// import Blog from '../../components/blog/blog'
import Blog from '../../components/blog_v2'
// import Blog from '../../components/blog_v3'


class BlogContainer extends Component {
  render() {
    return (<Blog />)
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