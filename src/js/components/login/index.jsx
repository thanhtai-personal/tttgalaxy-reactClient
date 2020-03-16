import React, { Suspense } from 'react'
import LoadingPage from './../common/loadingPage'
import { LoginButtonStyled } from './styled'

const FacebookLoginButton = React.lazy(() => import('./../common/facebook/login'))
const GoogleLoginButton = React.lazy(() => import('./../common/google/login'))

const LoginComponent = (props) => {
  return (
    <React.Fragment>
      <LoginButtonStyled className={props.className || ''}>
        <Suspense fallback={() => <LoadingPage />}>
          <FacebookLoginButton
            icon='fa-facebook'
          />
        </Suspense>
      </LoginButtonStyled>
      <LoginButtonStyled className={props.className || ''}>
        <Suspense fallback={() => <LoadingPage />}>
          <GoogleLoginButton
            buttonText='LOGIN WITH GOOGLE'
          />
        </Suspense>
      </LoginButtonStyled>
    </React.Fragment>
  )
}

export default LoginComponent