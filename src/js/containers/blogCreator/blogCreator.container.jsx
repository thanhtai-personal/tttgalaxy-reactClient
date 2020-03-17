// import React, { Component } from "react";
// import { connect } from "react-redux";
// import BlogCreator from '../../components/blogCreator'
// import action from './../../actions'


// class BlogCreatorContainer extends Component {
//   render() {
//     const {
//       language,
//       setWriterData,
//       setTitle,
//       submitBlog,
//       writerData,
//       submittedSuccess,
//       title
//     } = this.props
//     return (<BlogCreator 
//       language={language}
//       setWriterData={setWriterData}
//       writerData={writerData}
//       submitBlog={submitBlog}
//       submittedSuccess={submittedSuccess}
//       setTitle={setTitle}
//       title={title}
//     />)
//   }
// }

// function mapStateToProps ({ blogCreator: { writerData, submittedSuccess, title }, common: { language } }) {
//   return {
//     language,
//     writerData,
//     submittedSuccess,
//     title
//   };
// }

// export default connect(
//   mapStateToProps,
//   {
//     setWriterData: action.setWriterData,
//     submitBlog: action.submitBlog,
//     setTitle: action.setTitle
//   }
// )(BlogCreatorContainer);