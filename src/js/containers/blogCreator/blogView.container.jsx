import React, { Component } from "react";
import { connect } from "react-redux";
import BlogView from '../../components/blogCreator/view'
import action from './../../actions'


class BlogViewContainer extends Component {
  render() {
    const {
      language,
      writerData,
      getBlog,
      title
    } = this.props
    return (<BlogView 
      language={language}
      writerData={writerData}
      getBlog={getBlog}
      title={title}
    />)
  }
}

function mapStateToProps ({ blogCreator: { writerData, title }, common: { language } }) {
  return {
    language,
    writerData,
    title
  };
}

export default connect(
  mapStateToProps,
  {
    getBlog: action.getBlog
  }
)(BlogViewContainer);