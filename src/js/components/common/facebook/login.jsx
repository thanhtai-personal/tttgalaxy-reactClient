import React from 'react'
import FacebookLogin from 'react-facebook-login';

const FacebookLoginButton = (props) => {
  
  const callBack = (_dataLogin) => {
    console.log('_dataLogin', _dataLogin)
  }

  const handleClickLogin = (event) => {
    console.log('event', event)
  }
  

  const {
    appId = '615969159253387',
    fields = 'name,email,picture',
    onClick = handleClickLogin,
    responseFacebook = callBack,
    autoLoad = true,
    scope='public_profile,user_friends',
    cookie = true,
    ...nestedProps
  } = props
  // note: valid nestedProps = size, returnScopes, xfbml, textButton, cssClass, redirectUri,
  //        version, icon, language, isMobile, isDisabled, tag, onFailure, state, authType, responseType
  return (
    <FacebookLogin
      appId={appId}
      autoLoad={autoLoad}
      fields={fields}
      onClick={onClick}
      callback={responseFacebook}
      cookie={cookie}
      scope={scope}
      {...nestedProps}
    />
  )
}
export default FacebookLoginButton