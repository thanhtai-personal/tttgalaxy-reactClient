import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import { RENDER_TYPE } from './constants/enums'

export const checkToken = () => {
  return !_.isNil(window.localStorage.getItem('jwtToken'))
}

export const getAuthenHeader = () => {
  return {
    'x-access-token': window.localStorage.getItem('jwtToken')
  }
}



export const renderModalConfirm = (data) => {
  return (
    <div className="modal fade" id={data.id}>
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{_.upperCase(data.title)}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            {data.content}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={data.onConfirm}>Confirm</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const renderSection = (data, isEditMode = false, htmlEvent) => {
  switch (data.renderType) {
    case RENDER_TYPE.Title:
      return <div className="row" key={`${data.name}-${data.id}`}><div className="col-sm-12 title">{data.name}</div></div>
    case RENDER_TYPE.TextWithLabel:
      return (
        <div className="row padding-top-10 word-break" key={`${data.name}-${data.id}`}>
          <div className="col-sm-4">
            {data.isEmptyData &&
              <input
                defaultValue={data.name} style={{ width: '100%', minWidth: '100px' }}
                placeholder="example: Email"
                onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'name', sectionId: data.id }) : () => { }} />
            }
            {!data.isEmptyData &&
              `${data.name}:`
            }
          </div>
          <div className={isEditMode ? "col-sm-7" : "col-sm-8"}>
            {isEditMode && data.name !== 'Email' ?
              data.name === 'Birth Date' && !_.isNil(data.value) ? 
                <DatePicker
                  selected={new Date(data.value ? moment(data.value).format('MM/DD/YYYY') : moment().format('MM/DD/YYYY'))}
                  onChange={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'value', sectionId: data.id, type: 'date-picker' }) : () => { }}
                />
              : <input defaultValue={data.value} style={{ width: '100%', minWidth: '100px' }}
                placeholder=""
                onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'value', sectionId: data.id }) : () => { }} />
              : data.name === 'Birth Date' && !_.isNil(data.value) ? moment(data.value).format('MM/DD/YYYY') : data.value
            }
          </div>
          {isEditMode && data.isEmptyData &&
            <div className="col-sm-1">
              <div className="btn-remove">
                <i className="fas fa-minus-square cursor-pointer"
                  title="remove this property"
                  onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.TextWithLabel, sectionId: data.id }) : () => { }}
                />
              </div>
            </div>
          }
        </div>
      )
    case RENDER_TYPE.ProgessBar:
      return (
        <React.Fragment key={`${data.name}-${data.id}`}>
          <div className="row" key={`${data.name}-${data.id}`}>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              {data.isEmptyData &&
                <input
                  className="width-100-100"
                  defaultValue={data.name || ""}
                  placeholder="ex: ReactJS"
                  onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.ProgessBar, path: 'name', sectionId: data.id }) : () => { }} />
              }{!data.isEmptyData &&
                data.name
              }
            </div>
            <div className={`${isEditMode ? "col-sm-7" : "col-sm-8"} padding-top-5`}>
              <div className="progress background-color-red">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: `${parseInt(data.progress)}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {isEditMode &&
              <div className="col-sm-1">
                <div className="btn-remove">
                  <i className="fas fa-minus-square cursor-pointer"
                    title="remove this property"
                    onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.ProgessBar, sectionId: data.id }) : () => { }}
                  />
                </div>
              </div>
            }
          </div>
          {isEditMode &&
            <div className="row" key={`${data.name}-edit-${data.id}`}>
              <div className="col-sm-1">
              </div>
              <div className="col-sm-3">
              </div>
              <div className="col-sm-8 padding-top-5">
                <input style={{ width: '30%', minWidth: '50px', maxWidth: '150px' }} type="number" defaultValue={parseInt(data.progress || '0')}
                  min={0} max={100}
                  maxLength={3}
                  placeholder="example: 70"
                  onChange={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.ProgessBar, path: 'progress', sectionId: data.id }) : () => { }} />
              </div>
            </div>
          }
        </React.Fragment>
      )
    case RENDER_TYPE.CardFullWidth:
      let descriptionRender = data.description
      if (!isEditMode) {
        let descriptionLine = _.split(descriptionRender ,"\n")
        descriptionRender = []
        if(!_.isEmpty(descriptionLine)) {
          descriptionLine.forEach((line, index) => {
            descriptionRender.push(line)
            if (index + 1 < descriptionLine.length) {
              descriptionRender.push(<br key={`card-br-${index}-${data.id}`}/>)
            }
          })
        }
      }
      return (
        <div className="card" style={{ width: '100%' }} key={`${data.name}-${data.id}`}  id={`card-${data.id}`}>
          <div className="card-body">
            {isEditMode ?
              <div className="row">
                <div className="col-sm-12">
                  <input style={{ width: '30%', minWidth: '100px' }}
                    placeholder="example: TiTan tech" defaultValue={data.title}
                    onChange={typeof htmlEvent.onChange === "function" ?
                      htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.CardFullWidth, path: 'title', sectionId: data.id }) : () => { }}
                  />
                </div>
              </div>
              : <h5 className="card-title">{data.title}</h5>}
            {isEditMode ?
              <div className="row">
                <div className="col-sm-12">
                  <input style={{ width: '30%', minWidth: '100px' }}
                    placeholder="example: 2 years" defaultValue={data.duringTime}
                    onChange={typeof htmlEvent.onChange === "function" ?
                      htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.CardFullWidth, path: 'duringTime', sectionId: data.id })
                      : () => { }}
                  />
                </div>
              </div>
              : <p className="card-text">** {data.duringTime}</p>
            }
            {isEditMode ?
              <div className="row">
                <div className="col-sm-12">
                  <textarea rows={3}
                    style={{ overflow: 'auto', width: '100%' }}
                    placeholder="example: i'm a fullstack developer" defaultValue={data.description}
                    onChange={typeof htmlEvent.onChange === "function" ?
                      htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.CardFullWidth, path: 'description', sectionId: data.id })
                      : () => { }}
                  />
                </div>
              </div>
              : <p className="card-text">{descriptionRender}</p>
            }
            {isEditMode &&
              <div className="btn-remove">
                <i className="fas fa-minus-square cursor-pointer"
                  title="remove this card"
                  onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.TextWithLabel, sectionId: data.id }) : () => { }}
                />
              </div>
            }
          </div>
        </div>
      )
    default:
      break;
  }
}

export const checkValidateObject = (objectData, tracker, conditionsChecking) => {
  if (_.isNull(objectData)) return
  if (_.isArray(objectData) && !_.isEmpty(objectData)) {
    objectData.forEach((subData) => {
      checkValidateObject(subData, tracker, conditionsChecking)
    })
  } else {
    if (!_.isNil(objectData) && !_.isNil(objectData.subData)) {
      checkValidateObject(objectData.subData, tracker, conditionsChecking)
    }
    if (_.isObject(objectData)) {
      conditionsChecking.forEach((functionChecking) => {
        if (typeof functionChecking === 'function' && !objectData.isDelete) {
          tracker.push(functionChecking(objectData))
        }
      })
    }
  }
}


export const convertPortfolioData = (data, desType) => {

  let resData = {}
  const dateField = ['birthDay', 'birthDate']
  if (desType === 'static') {
    resData = {
      userEducation: [],
      userExperience: [],
      userSkill: [],
      skill: [],
      group: [],
      groupSkill: [],
      education: [],
      school: [],
      educationSchool: []
    }
    resData.basicInfo = {
      profileImageUrl: data.profileImageUrl
    }
    data.basicInfo.forEach((bi) => {
      if (dateField.includes(_.camelCase(bi.name))) {
        if (!_.isNil(bi.value)) {
          resData.basicInfo[_.camelCase(bi.name)] = moment(bi.value).format('MM/DD/YYYY')
        } else {
          resData.basicInfo[_.camelCase(bi.name)] = null
        }
      } else {
        resData.basicInfo[_.camelCase(bi.name)] = bi.value
      }
    })
    data.skill.forEach((g) => {
      resData.group.push(
        {
          id: g.id,
          name: g.name,
          isDelete: !!g.isDelete
        }
      )
      if (_.isArray(g.subData)) {
        g.subData.forEach((s) => {
          resData.userSkill.push({
            userId: data.currentUser.id,
            skillId: s.id,
            progress: parseInt(s.progress || 0),
            isDelete: !!s.isDelete,
          })
          resData.skill.push({
            id: s.id,
            name: s.name,
            isDelete: !!s.isDelete
          })
          resData.groupSkill.push({
            groupId: g.id,
            skillId: s.id,
            isDelete: g.isDelete || s.isDelete,
          })
        })
      }
    })
    data.education.forEach((edu) => {
      resData.userEducation.push({
        userId: data.currentUser.id,
        educationId: edu.id,
        description: edu.description,
        duringTime: edu.duringTime,
        isDelete: !!edu.isDelete,
      })
      resData.school.push({
        id: edu.schoolId || '',
        name: edu.schoolName,
        description: edu.schoolDescription || '',
        isDelete: !!edu.isDelete
      })
      resData.education.push({
        id: edu.id || '',
        name: edu.name || _.camelCase(edu.title),
        title: edu.title,
        isDelete: !!edu.isDelete
      })
      resData.educationSchool.push({
        schoolId: edu.schoolId,
        educationId: edu.id,
        isDelete: !!edu.isDelete
      })
    })
    resData.experience = []
    data.experiences.forEach((exp) => {
      resData.userExperience.push({
        userId: data.currentUser.id,
        experienceId: exp.id,
        duringTime: exp.duringTime,
        description: exp.description,
        isDelete: !!exp.isDelete
      })
      resData.experience.push({
        id: exp.id || '',
        title: exp.title,
        name: _.camelCase(exp.title),
        isDelete: !!exp.isDelete
      })
    })
  }

  if (desType === 'dynamic') {
    const defaultPropertyKeys = ['id', 'password', 'profileImageUrl', 'createdAt', 'updatedAt', 'isDelete']
    resData.profileImageUrl = data.basicInfo.profileImageUrl
    resData.basicInfo = []
    Object.keys(data.basicInfo).forEach((k, index) => {
      if (!defaultPropertyKeys.includes(k)) {
        if(k === 'name') {
          resData.basicInfo.unshift({
            id: `${index}`,
            name: _.startCase(k),
            value: data.basicInfo[k],
            renderType: RENDER_TYPE.TextWithLabel,
          })
        } else {
          resData.basicInfo.push({
            id: `${index}`,
            name: _.startCase(k),
            value: data.basicInfo[k],
            renderType: RENDER_TYPE.TextWithLabel,
          })
        }
      }
    })
    resData.skill = []
    data.group.forEach((g, gIndex) => {
      let skillReturn = {
        subData: [],
        id: g.id,
        name: g.name,
        isBorderTop: gIndex !== 0,
        renderType: RENDER_TYPE.Title,
      }
      data.groupSkill.forEach((gs) => {
        if (gs.groupId === g.id) {
          let skillDataReturn = {
            id: gs.skillId,
            progress: gs.progress,
            renderType: RENDER_TYPE.ProgessBar,
          }
          let sData = data.skill.find((s) => s.id === gs.skillId)
          if (!_.isNil(sData)) {
            skillDataReturn.name = sData.name
          }
          let usData = data.userSkill.find((us) => us.skillId === sData.id)
          if (!_.isNil(usData)) {
            skillDataReturn.progress = usData.progress
          }
          skillReturn.subData.push(skillDataReturn)
        }
      })
      resData.skill.push(skillReturn)
    })
    resData.experiences = []
    data.experiences.forEach((exp) => {
      let expReturn = {
        id: exp.id,
        title: exp.title,
        name: exp.name,
        renderType: RENDER_TYPE.CardFullWidth,
      }
      let ueData = data.userExperience.find((ue) => ue.experienceId === exp.id)
      if (!_.isNil(ueData)) {
        expReturn.duringTime = ueData.duringTime
        expReturn.description = ueData.description
      }
      resData.experiences.push(expReturn)
    })
    resData.education = []
    data.education.forEach((edu) => {
      let eduReturn = {
        id: edu.id,
        title: edu.title,
        name: edu.name,
        renderType: RENDER_TYPE.CardFullWidth
      }
      let esData = data.educationSchool.find((es) => es.educationId === edu.id)
      if (!_.isNil(esData)) {
        let sData = data.school.find((s) => s.id === esData.schoolId)
        if (!_.isNil(sData)) {
          eduReturn.schoolId = esData.schoolId
          eduReturn.schoolName = sData.name
          eduReturn.schoolDescription = sData.description
        }
      }
      let ueData = data.userEducation.find((ue) => ue.educationId === edu.id)
      if (!_.isNil(ueData)) {
        eduReturn.duringTime = ueData.duringTime
        eduReturn.description = ueData.description
      }
      resData.education.push(eduReturn)
    })
  }

  return resData
}