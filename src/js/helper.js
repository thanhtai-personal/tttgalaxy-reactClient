import React from 'react'
import _ from 'lodash'

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
              <input defaultValue={data.name} style={{ width: '100%', minWidth: '100px' }}
                placeholder="Property name"
                onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'name', sectionId: data.id }) : () => { }} />
            }
            {!data.isEmptyData &&
              `${data.name}:`
            }
          </div>
          <div className={isEditMode ? "col-sm-7" : "col-sm-8"}>
            {isEditMode ? 
              <input defaultValue={data.value} style={{ width: '100%', minWidth: '100px' }}
                placeholder="property value"
                onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'value', sectionId: data.id }) : () => { }} />
              : data.value
            }
          </div>
          {isEditMode && 
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
                  placeholder="skill name"
                  onBlur={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.ProgessBar, path: 'name', sectionId: data.id }) : () => { }} />
              }{!data.isEmptyData &&
                data.name
              }
            </div>
            <div className={`${isEditMode  ? "col-sm-7" : "col-sm-8"} padding-top-5`}>
              <div className="progress background-color-red">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: data.progress }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
                  placeholder="progress"
                  onChange={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.ProgessBar, path: 'progress', sectionId: data.id }) : () => { }} />
              </div>
            </div>
          }
        </React.Fragment>
      )
    case RENDER_TYPE.CardFullWidth:
      return (
        <div className="card" style={{ width: '100%' }} key={`${data.name}-${data.id}`}>
          <div className="card-body">
            {isEditMode ?
              <div className="row">
                <div className="col-sm-12">
                  <input style={{ width: '30%', minWidth: '100px' }}
                    placeholder="add new title" defaultValue={data.title}
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
                    placeholder="add during time" defaultValue={data.duringTime}
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
                    placeholder="add description" defaultValue={data.description}
                    onChange={typeof htmlEvent.onChange === "function" ?
                      htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.CardFullWidth, path: 'description', sectionId: data.id })
                      : () => { }}
                  />
                </div>
              </div>
              : <p className="card-text">{data.description}</p>
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
  }
}

export const checkValidateObject = (objectData, tracker, conditionsChecking) => {
  if(_.isArray(objectData)) {
    objectData.forEach((subData) => {
      checkValidateObject(subData, tracker, conditionsChecking)
    })
  } else {
    if(objectData.subData) {
      checkValidateObject(objectData.subData, tracker, conditionsChecking)
    }
    if(_.isObject(objectData)) {
      conditionsChecking.forEach((functionChecking) => {
        if(typeof functionChecking === 'function') {
          tracker.push(functionChecking(objectData))
        }
      })
    }
  }
}
