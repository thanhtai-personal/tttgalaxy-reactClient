import React from 'react'
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = (props) => {

  const callBack = (_dataLogin) => {
    console.log('_dataLogin', _dataLogin)
  }


  const {
    clientId = '404281480421-kklmi4kdtdr3k44bsd81pp2io5tc73dt.apps.googleusercontent.com',
    onSuccess = callBack,
    onFailure = callBack,
    cookiePolicy = 'single_host_origin',
    isSignedIn = true,
    ...nestedProps
  } = props
  // note: valid nestedProps = ...
  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={cookiePolicy}
      isSignedIn={isSignedIn}
      {...nestedProps}
    />
  )
}
export default GoogleLoginButton