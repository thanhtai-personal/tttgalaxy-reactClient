import React, { Component } from "react";
import { connect } from "react-redux";
import BlogCreator from '../../components/blogCreator'
import action from './../../actions'


class BlogCreatorContainer extends Component {
  render() {
    const {
      language,
      setWriterData,
      submitBlog,
      writerData,
      submitedSuccess
    } = this.props
    return (<BlogCreator 
      language={language}
      setWriterData={setWriterData}
      writerData={writerData}
      submitBlog={submitBlog}
      submitedSuccess={submitedSuccess}
    />)
  }
}

function mapStateToProps ({ blogCreator: { writerData, submitedSuccess }, common: { language } }) {
  return {
    language,
    writerData,
    submitedSuccess
  };
}

export default connect(
  mapStateToProps,
  {
    setWriterData: action.setWriterData,
    submitBlog: action.submitBlog
  }
)(BlogCreatorContainer);