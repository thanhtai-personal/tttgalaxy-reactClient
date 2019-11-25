import React, { PureComponent } from "react";
import styled from './styled'
import _ from 'lodash'


class BlogsView extends PureComponent {
  constructor (props) {
    super(props)
    this.params = this.props.params
    this.lang = props.language.blogList
  }

  componentWillMount () {
    this.props.getBlogs(this.params.userId)
  }

  
  componentWillReceiveProps(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.lang = nextProps.language.blogList
    }
  }


  render () {
    let { listBlog } = this.props
    return (
      <styled.viewWrapper>
      </styled.viewWrapper>
    )
  }
}

export default BlogsView