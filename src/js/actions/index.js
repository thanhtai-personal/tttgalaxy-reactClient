
import * as loginAction from './login.action'
import * as signupAction from './signup.action'
import * as commonAction from './common.action'

const ActionService = {
  ...loginAction,
  ...signupAction,
  ...commonAction
}

export default ActionService
