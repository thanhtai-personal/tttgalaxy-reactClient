/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux'
import News from './../components/news'

class NewsContainer extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return <News />
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer)


