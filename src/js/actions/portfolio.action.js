import _ from 'lodash'
import { 
  UPDATE_PORTFOLIO_DATA
} from "../constants/action-types";

import { RENDER_TYPE } from './../constants/enums'

import store from './../store'

export const updatePortfolioData = (path, value) => {
  let data = {}
  data = _.set(data, path, value)
  return { type: UPDATE_PORTFOLIO_DATA, payload: data };
}

export const updatePortfolioDataWithObjectKey = (objectKey, data) => {
  let state = _.clone(store.getState().portfolio)
  if (data.renderType === RENDER_TYPE.ProgessBar) data.value = `${data.value.toString()}%`
  let objectData = state[objectKey]
  let getParentSectionIdIndex = 0
  const setDataToObject = (object, dataDefine) => {
    return object.map((obj) => {
      if (!_.isNil(obj.subData)) {
        if(obj.id === data.parentsSection[getParentSectionIdIndex]) {
          getParentSectionIdIndex = getParentSectionIdIndex + 1
          obj.subData = setDataToObject(obj.subData, dataDefine)
        }
      } else {
        if(obj.id === dataDefine.sectionId) {
          obj[dataDefine.path] = dataDefine.value
        }
      }
      return obj
    })
  }
  let newState = {}
  newState[objectKey] = setDataToObject(objectData, data)
  return { type: UPDATE_PORTFOLIO_DATA, payload: newState };
}