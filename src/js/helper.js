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



export const renderModal = (data) => {
  return (
    <div className="modal fade" id={data.key}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{_.upperCase(data.key)}</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
            {data.key}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
        <div className="row padding-top-5 word-break" key={`${data.name}-${data.id}`}>
          <div className="col-sm-4">
            {data.name}:
          </div>
          <div className={isEditMode ? "col-sm-7" : "col-sm-8"}>
            {!isEditMode ? data.value 
              : <input defaultValue={ data.value } style={{ width: '100%', minWidth: '100px' }}
                onChange={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.TextWithLabel, path: 'value', sectionId: data.id }) : () => { }} />
            }
          </div>
          {isEditMode &&
            <div className="col-sm-1">
              <div className="btn-remove">
                <i className="fas fa-minus-square"
                  onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.TextWithLabel, sectionId: data.id }) : () => { }}
                />
              </div>
            </div>
          }
          
        </div>
      )
    case RENDER_TYPE.ProgessBar:
      return (
        <React.Fragment  key={`${data.name}-${data.id}`}>
          <div className="row" key={`${data.name}-${data.id}`}>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              {data.name}
            </div>
            <div className={`${isEditMode ? "col-sm-7" : "col-sm-8"} padding-top-5`}>
              <div className="progress background-color-red">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: data.progress }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
            {isEditMode && 
                <div className="col-sm-1">
                  <div className="btn-remove">
                    <i className="fas fa-minus-square"
                      onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.TextWithLabel, sectionId: data.id }) : () => { }}
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
                <input style={{ width: '30%', minWidth: '50px', maxWidth: '150px'}} type="number" defaultValue={parseInt(data.progress)} 
                  min={0} max={100}
                  onChange={typeof htmlEvent.onChange === "function" ? htmlEvent.onChange.bind(null, { renderType: RENDER_TYPE.ProgessBar, path: 'progress', sectionId: data.id }) : () => {}} />
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
              <i className="fas fa-minus-square"
                onClick={typeof htmlEvent.onRemove === "function" ? htmlEvent.onRemove.bind(null, { renderType: RENDER_TYPE.TextWithLabel, sectionId: data.id }) : () => { }}
              />
            </div>
          }
          </div>
        </div>
      )
  }
}
