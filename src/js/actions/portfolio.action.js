import _ from 'lodash'
import { 
  UPDATE_PORTFOLIO_DATA
} from "../constants/action-types";

export const updatePortfolioData = (path, value) => {
  let data = {}
  data = _.set(data, path, value)
  return { type: UPDATE_PORTFOLIO_DATA, payload: data };
}