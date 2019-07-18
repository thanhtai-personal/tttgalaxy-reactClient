import _ from 'lodash'
import { 
  UPDATE_PORTFOLIO_DATA
} from "../constants/action-types";

import uuidv1 from 'uuid/v1'
import { RENDER_TYPE } from './../constants/enums'

import store from './../store'

export const updatePortfolioData = (path, value) => {
  let data = {}
  data = _.set(data, path, value)
  return { type: UPDATE_PORTFOLIO_DATA, payload: data };
}

export const updatePortfolioDataWithObjectKey = (objectKey, data) => {
  let state = _.clone(store.getState().portfolio)
  if (data.renderType === RENDER_TYPE.ProgessBar && data.value) data.value = `${data.value.toString()}%`
  let objectData = state[objectKey]
  let getParentSectionIdIndex = 0
  const setDataToObject = (object, dataDefine) => {
    let resultObj =  object.map((obj) => {
      if (!_.isNil(obj.subData)) {
        if (dataDefine.isRemoveSub && _.isNil(data.parentsSection[getParentSectionIdIndex + 1])) {
          if(obj.id === data.parentsSection[getParentSectionIdIndex]) {
            obj.removeMe = true
          }
        }
        else if (dataDefine.isAddSection && _.isNil(data.parentsSection[getParentSectionIdIndex + 1])) {
          obj.isAddSectionToSubData = true
        } 
        else {
          if(obj.id === data.parentsSection[getParentSectionIdIndex]) {
            getParentSectionIdIndex = getParentSectionIdIndex + 1
            obj.subData = setDataToObject(obj.subData, dataDefine)
          }
        }
      } else {
        if (obj.id === dataDefine.sectionId) {
          if (!dataDefine.isRemove) {
            obj[dataDefine.path] = dataDefine.value
          } else {
            obj.removeMe = true
          }
        }
      }
      return obj
    })
    _.remove(resultObj, {
      removeMe: true
    })
    const addSection = (list) => {
      return list.map(obj => {
        if (obj.subData) {
          if (!obj.isAddSectionToSubData) {
            return addSection(obj.subData)
          } else {
            let dataDefault = { isEmptyData: true, id: uuidv1(), renderType: dataDefine.renderType }
            if(dataDefine.isAddSubData) dataDefault.subData = []
            obj.subData.push(dataDefault)
            obj.isAddSectionToSubData = null
          }
        }
        return obj
      })
    }
    if (dataDefine.isAddSection) {
      if(dataDefine.isAddToRoot) {
        let dataDefault = { isEmptyData: true, id: uuidv1(), renderType: dataDefine.renderType }
        if(dataDefine.isAddSubData) {
          dataDefault.subData = []
          dataDefault.isBorderTop = true
        }
        resultObj.push(dataDefault)
      } else {
        resultObj = addSection(resultObj)
      }
    }   
    return resultObj
  }
  let newState = {}
  newState[objectKey] = setDataToObject(objectData, data)
  return { type: UPDATE_PORTFOLIO_DATA, payload: newState }
}