import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import { TabManagerWrapper } from 'window-tabs-management'
import CKEditor from 'ckeditor4-react'


class BlogCreator extends PureComponent {
  constructor (props) {
    super(props)
    this.lang = props.language.blogCreator
  }

  render () {
    const { writerData, setWriterData, submitBlog } = this.props
    return (
      <styled.editorWrapper>
        <div className="right-bar">
          <button onClick={() => {submitBlog(writerData)}}>{this.lang.submit}</button>
          <button onClick={() => { }}>{this.lang.preview}</button>
        </div>
        <div className="content-wrapper">
          <CKEditor
            data={writerData}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event) => {
              let data = event.editor.getData()
              setWriterData(data)
            }}
            onBlur={(event) => {
              console.log('Blur.', event);
            }}
            onFocus={(event) => {
              console.log('Focus.', event);
            }}
            config={{
              height: '80vh'
            }}
          />
        </div>
      </styled.editorWrapper>
    )
  }
}

export default TabManagerWrapper(BlogCreator, 'blog-creator', { isActive: false })