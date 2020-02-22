import React, { useState } from 'react'
import { CircularProgress } from '@material-ui/core'

const LoadingPage = (props) => {
  const { width='100vw', height='100vh', position='fixed' } = props
  return (
    <div className='loading-element' style={{ width, height, position }}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default LoadingPage