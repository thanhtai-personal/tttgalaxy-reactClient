import React, { PureComponent } from "react";

import {
  renderSection,
  renderModalConfirm
} from './../../helper'

// import { RENDER_TYPE } from './../../constants/enums'

import _ from 'lodash'

import './portfolio.scss'
import { RENDER_TYPE } from "../../constants/enums";


class Content extends PureComponent {
  constructor(props) {
    super(props)
    this.buildSection = this.buildSection.bind(this)
    this.renderSection = renderSection.bind(this)
    this.revertData = this.revertData.bind(this)
    this.state = {
      openEditMode: false
    }
  }

  onChangeBasicInfo(listParentSection, data, event) {
    this.props.updateDataWithObjectKey('basicInfo', { ...data, value: event.target.value, parentsSection: listParentSection })
  }

  onChangeEducation(listParentSection, data, event) {
    this.props.updateDataWithObjectKey('education', { ...data, value: event.target.value, parentsSection: listParentSection })
  }

  onChangeExperience(listParentSection, data, event) {
    this.props.updateDataWithObjectKey('experiences', { ...data, value: event.target.value, parentsSection: listParentSection })
  }

  onChangeSkill(listParentSection, data, event) {
    this.props.updateDataWithObjectKey('skill', { ...data, value: event.target.value, parentsSection: listParentSection })
  }

  onRemoveBasicInfo(listParentSection, data) {
    this.props.updateDataWithObjectKey('basicInfo', { ...data, parentsSection: listParentSection, isRemove: true })
  }

  onRemoveEducation(listParentSection, data) {
    this.props.updateDataWithObjectKey('education', { ...data, parentsSection: listParentSection, isRemove: true })
  }

  onRemoveExperience(listParentSection, data) {
    this.props.updateDataWithObjectKey('experiences', { ...data, parentsSection: listParentSection, isRemove: true })
  }

  onRemoveSkill(listParentSection, data) {
    this.props.updateDataWithObjectKey('skill', { ...data, parentsSection: listParentSection, isRemove: true })
  }

  onRemoveSubData(listParentSection) {
    this.props.updateDataWithObjectKey('skill', { parentsSection: listParentSection, isRemoveSub: true })
  }

  onAddSection(key, listParentSection, data) {
    this.props.updateDataWithObjectKey(key, { ...data, parentsSection: listParentSection})
  }
  
  buildSection(data, htmlEvent) {
    let { state: { openEditMode } } = this
    const renderListSection = (sectionList, parentsSection = []) => {
      return sectionList.map((section) => {
        if (!_.isNil(section.subData)) {
          parentsSection.push(section.id)
          return (
            <React.Fragment key={`${section.name}-data-${section.id}`}>
              <div className={`row ${section.isBorderTop ? `border-top ${openEditMode ? "margin-top-30" : ""}` : ""}`}>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-3">
                  <p>
                    {openEditMode ?
                      <input
                        placeholder="title"
                        defaultValue={section.name}
                        onChange={typeof htmlEvent.onChange === "function" ?
                          htmlEvent.onChange.bind(null, [], { path: 'name', sectionId: section.id }) : () => { }}
                    />
                    :<b>{section.name}</b>
                    }</p>
                </div>
                <div className="col-sm-8">
                </div>
              </div>
              {renderListSection(section.subData, JSON.parse(JSON.stringify(parentsSection)))}
              {openEditMode && 
              <div className="btn-remove float-left">
                <i className="fas fa-minus-square"
                  onClick={typeof htmlEvent.onRemoveSubData === "function" ?
                  htmlEvent.onRemoveSubData.bind(null, JSON.parse(JSON.stringify(parentsSection))) : () => { }}
                />
                <i className="fas fa-plus-square" 
                  onClick={typeof htmlEvent.onAddSection === "function" ?
                  htmlEvent.onAddSection.bind(null, JSON.parse(JSON.stringify(parentsSection)), { isAddSection: true, renderType: RENDER_TYPE.ProgessBar}) : () => { }}
                />
              </div>}
            </React.Fragment>
          )
        }
        return this.renderSection(section, this.state.openEditMode, 
          { 
            onChange: htmlEvent.onChange.bind(null, parentsSection),
            onRemove: htmlEvent.onRemove.bind(null, parentsSection)
          })
      })
    }
    return renderListSection(data)
  }

  cancelEditMode () {
    this.setState({ openEditMode: false }, () => {
      this.revertData(_.clone(this.backUpData))
    })
  }

  revertData(dataBackup) {
    Object.keys(dataBackup).forEach((key) => {
      this.props.updateData(key, dataBackup[key])
    })
  }

  onSubmit() {
    this.props.submitDataUpdate()
    .then(() => {
      this.setState({ openEditMode: false })
    })
  }

  render() {
    let { props: { skill, basicInfo, experiences, education, profileImageUrl, role = "admin" },
      buildSection,
      onChangeBasicInfo,
      onChangeEducation,
      onChangeExperience,
      onChangeSkill,
      onRemoveBasicInfo,
      onRemoveEducation,
      onRemoveExperience,
      onRemoveSkill,
      onRemoveSubData,
      onAddSection,
      onSubmit,
      cancelEditMode,
      state: {
        openEditMode
      }
    } = this;
    return (
      <div className="content container" style={{ paddingBottom: '100px' }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="banner"></div>
          </div>
        </div>
        {role === "admin" && !this.state.openEditMode &&
          <div className="row">
            <div className="col-sm-12">
              <div className="admin-menu">
                <input type="button" className="btn btn-info btn-edit" value="Edit profile"
                  onClick={() => {
                    this.setState({ openEditMode: true }, () => {
                      this.backUpData = {
                        skill: JSON.parse(JSON.stringify(skill)),
                        basicInfo: JSON.parse(JSON.stringify(basicInfo)),
                        experiences: JSON.parse(JSON.stringify(experiences)),
                        education: JSON.parse(JSON.stringify(education))
                      }
                    })
                  }}
                />
              </div>
            </div>
          </div>
        }
        {this.state.openEditMode &&
          <div className="row">
            <div className="col-sm-12">
              <div className="admin-menu">
                <input type="button" className="btn btn-info btn-save" value="Save"
                  onClick={onSubmit.bind(this)}
                />
                <input type="button" className="btn btn-secondary btn-cancel" value="Cancel" data-toggle="modal" data-target="#confirm-cancel"
                />
              </div>
            </div>
          </div>
        }
        <div className="row">
          <div className="col-sm-3">
            <div className="image-profile-wrapper">
              <img className="image-profile margin-center" src={profileImageUrl} alt="profile" />
            </div>
          </div>
          <div className="col-sm-4 basic-infomation">
            <div className="row"><div className="col-sm-12 title"> BASIC INFO </div></div>
            {buildSection(basicInfo, { onChange: onChangeBasicInfo.bind(this), onRemove: onRemoveBasicInfo.bind(this) })}
            {openEditMode &&
              <i className="fas fa-plus-square"
                onClick={onAddSection.bind(this, 'basicInfo', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.TextWithLabel })}
              />
            }
          </div>
          <div className="col-sm-5 skills">
            <div className="row"><div className="col-sm-12 title"> SKILLS </div></div>
            {buildSection(skill, { onChange: onChangeSkill.bind(this),
              onRemove: onRemoveSkill.bind(this),
              onRemoveSubData: onRemoveSubData.bind(this),
              onAddSection: onAddSection.bind(this, 'skill')
            })}
            {openEditMode &&
              <i className="fas fa-plus-square"
                onClick={onAddSection.bind(this, 'skill', [], { isAddToRoot: true, isAddSection: true, isAddSubData: true, renderType: RENDER_TYPE.Title })}
              />
            }
          </div>
        </div>
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EXPERIENCES
              </div>
          </div>
        </div>
        {buildSection(experiences, { onChange: onChangeExperience.bind(this), onRemove: onRemoveExperience.bind(this) })}
        { openEditMode &&
          <i className="fas fa-plus-square"
            onClick={onAddSection.bind(this, 'experiences', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth })}
          />
        }
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EDUCATION - Nature Science University
              </div>
          </div>
        </div>
        {buildSection(education, { onChange: onChangeEducation.bind(this), onRemove: onRemoveEducation.bind(this) })}
        { openEditMode &&
          <i className="fas fa-plus-square"
            onClick={onAddSection.bind(this, 'education', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth })}
          />
        }
        {renderModalConfirm({ id: 'confirm-cancel', title: 'Confirm cancel', content: 'Updated data will be unsaved. Do you want to cancel',
          onConfirm: cancelEditMode.bind(this)
        })}
      </div>
    )
  }
}

export default Content