import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import { TabManagerWrapper } from 'window-tabs-management'
import CKEditor from 'ckeditor4-react'


class BlogCreator extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <CKEditor
        data="<p>Hello from CKEditor</p>"
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          console.log({ event, editor });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    )
  }
}

export default TabManagerWrapper(BlogCreator, 'blog-creator', { isActive: false })