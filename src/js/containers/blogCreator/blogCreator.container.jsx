import React, { Component } from "react";
import { connect } from "react-redux";
import BlogCreator from '../../components/blogCreator'


class BlogCreatorContainer extends Component {
  render() {
    return (<BlogCreator />)
  }
}

function mapStateToProps ({ blogCreator: { } }) {
  return {
  };
}

export default connect(
  mapStateToProps,
  {  }
)(BlogCreatorContainer);