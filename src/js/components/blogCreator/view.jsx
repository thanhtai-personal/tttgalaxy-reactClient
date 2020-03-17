// import React, { PureComponent } from "react";
// import styled from './styled'
// import $ from 'jquery'
// import _ from 'lodash'


// class BlogView extends PureComponent {
//   constructor (props) {
//     super(props)
//     this.params = this.props.params
//     this.lang = props.language.blogView
//   }

//   componentWillMount () {
//     if (this.params && this.params.blogId) {
//       this.props.getBlogData(this.params.blogId)
//     }
//   }

  
//   componentWillReceiveProps(nextProps) {
//     if (nextProps.language !== this.props.language) {
//       this.lang = nextProps.language.blogView
//     }
//   }


//   render () {
//     let { title, writerData } = this.props
//     return (
//       <styled.viewWrapper>
//         {this.params && this.params.id && <div className="right-bar">
//         </div>}
//         {this.params && this.params.id && <div className="left-bar">
//         </div>}
//         <div className="main-content">
//           <p>{title}</p>
//           <br />
//           <div dangerouslySetInnerHTML={{__html: writerData}}></div>
//         </div>
//       </styled.viewWrapper>
//     )
//   }
// }

// export default BlogView