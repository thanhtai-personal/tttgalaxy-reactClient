// import React, { Component } from "react";
// import { connect } from "react-redux";
// import BlogsView from '../../components/blogCreator/listView'
// import action from './../../actions'


// class BlogsViewContainer extends Component {
//   render() {
//     const {
//       language,
//       getBlogs,
//       listBlog
//     } = this.props
//     return (<BlogsView 
//       language={language}
//       getBlogs={getBlogs}
//       listBlog={listBlog}
//     />)
//   }
// }

// function mapStateToProps ({ blogCreator: { listBlog }, common: { language } }) {
//   return {
//     language,
//     listBlog
//   };
// }

// export default connect(
//   mapStateToProps,
//   {
//     getBlogs: action.getBlogs
//   }
// )(BlogsViewContainer);