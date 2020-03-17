// import React, { PureComponent } from "react";
// import styled from './styled'
// import $ from 'jquery'
// import _ from 'lodash'
// import { TabManagerWrapper } from 'window-tabs-management'
// import CKEditor from 'ckeditor4-react'
// import PreviewMode from './view'


// class BlogCreator extends PureComponent {
//   constructor(props) {
//     super(props)
//     this.lang = props.language.blogCreator
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChangeTitle = this.handleChangeTitle.bind(this)
//     this.state = {
//       previewMode: false
//     }
//   }


//   componentWillReceiveProps(nextProps) {
//     if (nextProps.language !== this.props.language) {
//       this.lang = nextProps.language.blogCreator
//     }
//   }

//   handleSubmit() {
//     this.props.submitBlog()
//   }

//   handleChangeTitle(event) {
//     const { setTitle } = this.props
//     setTitle(event.target.value)
//   }

//   render() {
//     const { title, writerData, setWriterData } = this.props
//     return (
//       <styled.editorWrapper>
//         <div className="right-bar">
//           <button onClick={this.handleSubmit}>{this.lang.submit}</button>
//           <button onClick={() => { this.setState({ previewMode: !this.state.previewMode }) }}>{this.state.previewMode ? this.lang.edit : this.lang.preview}</button>
//         </div>
//         {
//           this.state.previewMode ?
//             <PreviewMode title={title} writerData={writerData} language={this.props.language.blogView} />
//             : <div className="content-wrapper">
//               <styled.label>{this.lang.title}</styled.label>
//               <styled.input type="text" value={title} onChange={this.handleChangeTitle}></styled.input>
//               <CKEditor
//                 data={writerData}
//                 onBeforeLoad={ ( CKEDITOR ) => ( CKEDITOR.disableAutoInline = true ) }
//                 onInit={editor => {
//                   // You can store the "editor" and use when it is needed.
//                   console.log('Editor is ready to use!', editor);
//                 }}
//                 onChange={(event) => {
//                   let data = event.editor.getData()
//                   setWriterData(data)
//                 }}
//                 onBlur={(event) => {
//                   console.log('Blur.', event);
//                 }}
//                 onFocus={(event) => {
//                   console.log('Focus.', event);
//                 }}
//                 config={{
//                   height: '80vh'
//                 }}
//               />
//             </div>
//         }
//       </styled.editorWrapper>
//     )
//   }
// }

// export default TabManagerWrapper(BlogCreator, 'blog-creator', { isActive: false })