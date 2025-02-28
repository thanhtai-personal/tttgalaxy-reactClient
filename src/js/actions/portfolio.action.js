import _ from 'lodash'
import {
  UPDATE_PORTFOLIO_DATA,
  SUBMIT_PORTFOLIO_DATA,
  GET_PORTFOLIO_DATA,
  UPDATE_PUBLIC_PROFILE
} from "../constants/action-types";

import uuidv1 from 'uuid/v1'
import { RENDER_TYPE } from './../constants/enums'

import store from './../store'

import {
  checkValidateObject
} from './../helper'

export const updatePortfolioData = (path, value) => {
  let data = {}
  data = _.set(data, path, value)
  if (path === 'publicProfile') {
    return { type: UPDATE_PUBLIC_PROFILE, payload: data };
  }
  return { type: UPDATE_PORTFOLIO_DATA, payload: data };
}

export const getPortfolioData = (publicKey) => {
  return { type: GET_PORTFOLIO_DATA, payload: { publicKey: publicKey } };
}

export const updatePortfolioDataWithObjectKey = (objectKey, data) => {
  let state = _.clone(store.getState().portfolio)
  if (data.renderType === RENDER_TYPE.ProgessBar && data.value && data.path === 'progress') {
    if(parseInt(data.value > 100)) data.value = '100'
    data.value = `${data.value.toString()}%`
  }
  let objectData = state[objectKey]
  let getParentSectionIdIndex = 0
  const setDataToObject = (object, dataDefine) => {
    let resultObj = object.map((obj) => {
      if (_.isEmpty(data.parentsSection) && obj.id === dataDefine.sectionId) {
        obj[dataDefine.path] = dataDefine.value
      }
      if (!_.isNil(obj.subData)) {
        if ((dataDefine.isRemoveSub || dataDefine.isAddSection) && _.isNil(data.parentsSection[getParentSectionIdIndex + 1])) {
          if (obj.id === data.parentsSection[getParentSectionIdIndex]) {
            if (dataDefine.isAddSection) {
              obj.isAddSectionToSubData = true
            } else if (dataDefine.isRemoveSub) {
              obj.isDelete = true
            }
          }
        }
        else {
          if (obj.id === data.parentsSection[getParentSectionIdIndex]) {
            getParentSectionIdIndex = getParentSectionIdIndex + 1
            obj.subData = setDataToObject(obj.subData, dataDefine)
          }
        }
      } else {
        if (obj.id === dataDefine.sectionId) {
          if (!dataDefine.isRemove) {
            obj[dataDefine.path] = dataDefine.value
          } else {
            obj.isDelete = true
          }
        }
      }
      return obj
    })
    const addSection = (list) => {
      return list.map(obj => {
        if (obj.subData) {
          if (!obj.isAddSectionToSubData) {
            obj.subData = addSection(obj.subData)
          } else {
            let dataDefault = { isEmptyData: true, id: uuidv1(), renderType: dataDefine.renderType }
            if (dataDefine.isAddSubData) dataDefault.subData = []
            obj.subData.push(dataDefault)
            obj.isAddSectionToSubData = null
          }
        }
        return obj
      })
    }

    if (dataDefine.isAddSection) {
      if (dataDefine.isAddToRoot) {
        let dataDefault = { isEmptyData: true, id: uuidv1(), renderType: dataDefine.renderType }
        if (dataDefine.isAddSubData) {
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

export const submitDataUpdatePortfolio = () => {
  let payload = store.getState().portfolio,
  keyList = Object.keys(payload)
  const removeIsEmptyData = (objectData) => {
    if (_.isNil(objectData)) return
    if(_.isArray(objectData)) {
      objectData.forEach((subData) => {
        removeIsEmptyData(subData)
      })
    } else {
      if(!_.isNil(objectData.subData)) {
        removeIsEmptyData(objectData.subData)
      }
      if(_.isObject(objectData) && objectData.isEmptyData) {
        objectData.isEmptyData = false
      }
    }
  }
  keyList.forEach((key) => {
    removeIsEmptyData(payload[key])
  })
  return { type: SUBMIT_PORTFOLIO_DATA, payload }
}

export const validateDataUpdate = () => {
  return new Promise((resolve, reject) => {
    let dataValidate = store.getState().portfolio,
    validateObj = [],
    listKeys = Object.keys(dataValidate)
    const conditionsChecking = [
      (data) => {
        if(!_.isObject(data)) {
          return { validated: true, message: 'data is not object' }
        }
        if(_.isEmpty(data)) {
          return { validated: true, message: 'data is empty array' }
        }
        if ((_.isNil(data.name) || data.name.trim() === "") && (_.isNil(data.title) || data.title.trim() === "")) {
          return { validated: true, errorMessage: 'name of field cannot be null' }
        }
        return { validated: true, message: '' }
      },
      (data) => {
        if (data.renderType === RENDER_TYPE.ProgessBar) {
          if (_.isNil(data.progress)
            || data.progress.trim() === ""
            || parseInt(data.progress) > 100
            || parseInt(data.progress) < 0
          ) {
           return { validated: false, errorMessage: 'invalid progress' }
          }
        }
        return { validated: true, message: '' }
      }
    ]
    listKeys.forEach((key) => {
      checkValidateObject(dataValidate[key], validateObj, conditionsChecking)
    })
    let resultObj = { validated: true, message: 'success' }
    let isReject = false
    validateObj.forEach(_validateObj => {
      if(!_validateObj.validated) {
        resultObj = _validateObj
        isReject = true
      }
    })
    if(isReject) {
      reject(resultObj)
    }
    return resolve(resultObj)
  })
}