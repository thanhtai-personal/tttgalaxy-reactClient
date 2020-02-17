import React, { PureComponent } from "react";
import styled from './styled'
import $ from 'jquery'
import _ from 'lodash'
import CKEditor from 'ckeditor4-react'


class BlogCreator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default TabManagerWrapper(BlogCreator, 'blog-creator', { isActive: false })