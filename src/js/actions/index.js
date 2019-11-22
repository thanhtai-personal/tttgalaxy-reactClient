
import * as loginAction from './login.action'
import * as signupAction from './signUp.action'
import * as commonAction from './common.action'
import * as portfolioAction from './portfolio.action'
import * as blogEdittorAction from './blogCreator.action'

const ActionService = {
  ...loginAction,
  ...signupAction,
  ...commonAction,
  ...portfolioAction,
  ...blogEdittorAction
}

export default ActionService
