
import * as loginActions from './login.action'
import * as signupActions from './signUp.action'
import * as commonActions from './common.action'

const ActionService = {
  ...loginActions,
  ...signupActions,
  ...commonActions,
}

export default ActionService
