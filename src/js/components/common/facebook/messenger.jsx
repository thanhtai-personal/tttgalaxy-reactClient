import React from 'react'
import { useEffect } from 'react'

const FacebookMessenger = () => {

  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v6.0'
      })
    }
  
    let js, fjs = document.getElementsByTagName('script')[0]
    if (document.getElementById('facebook-jssdk')) return
    js = document.createElement('script')
    js.id = 'facebook-jssdk'
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
    fjs.parentNode.insertBefore(js, fjs)
  }, [])

  return (
    <div className="fb-customerchat" attribution='setup_tool' pageId='104839157812804' themeColor='#20cef5'></div>
  )
}

export default FacebookMessenger