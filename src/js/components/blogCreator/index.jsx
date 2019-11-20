import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import { TabManagerWrapper } from 'window-tabs-management'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

class BlogCreator extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onInit={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
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