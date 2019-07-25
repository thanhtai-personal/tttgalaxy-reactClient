import React, { PureComponent } from "react";

import {
  renderSection,
  renderModalConfirm
} from './../../helper'

// import { RENDER_TYPE } from './../../constants/enums'

import _ from 'lodash'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

import './portfolio.scss'
import { RENDER_TYPE } from "../../constants/enums";


class Content extends PureComponent {
  constructor(props) {
    super(props)
    this.buildSection = this.buildSection.bind(this)
    this.renderSection = renderSection.bind(this)
    this.revertData = this.revertData.bind(this)
    this.exportPdf = this.exportPdf.bind(this)
    this.state = {
      openEditMode: false,
      exportingPdf: false,
      imageUrlNull: _.isNil(props.profileImageUrl) || props.profileImageUrl === ''
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
    const renderListSection = (sectionList, listParentSection, isRoot = true) => {
      return sectionList.map((section) => {
        if (isRoot) {
          listParentSection = [] 
       }
        if (!_.isNil(section.subData)) {
          listParentSection.push(section.id)
          return (
            <React.Fragment key={`${section.name}-data-${section.id}`}>
              <div className={`row ${section.isBorderTop ? `border-top ${openEditMode ? "margin-top-30" : ""}` : ""}`}>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-3">
                  <p>
                    {openEditMode ?
                      <input
                        placeholder="example: Front End"
                        defaultValue={section.name}
                        onBlur={typeof htmlEvent.onChange === "function" ?
                          htmlEvent.onChange.bind(null, [], { path: 'name', sectionId: section.id }) : () => { }} //not working here
                    />
                    :<b>{section.name}</b>
                    }</p>
                </div>
                <div className="col-sm-8">
                </div>
              </div>
              {renderListSection(section.subData, JSON.parse(JSON.stringify(listParentSection)), false)}
              {openEditMode && 
              <div className="btn-remove float-left">
                <i className="fas fa-minus-square cursor-pointer"
                  title="remove skill group"
                  onClick={typeof htmlEvent.onRemoveSubData === "function" ?
                  htmlEvent.onRemoveSubData.bind(null, JSON.parse(JSON.stringify(listParentSection))) : () => { }}
                />
                <i className="fas fa-plus-square cursor-pointer"
                  title="add new skill"
                  onClick={typeof htmlEvent.onAddSection === "function" ?
                  htmlEvent.onAddSection.bind(null, JSON.parse(JSON.stringify(listParentSection)), { isAddSection: true, renderType: RENDER_TYPE.ProgessBar, isMissName: false}) : () => { }}
                />
              </div>}
            </React.Fragment>
          )
        }
        return this.renderSection(section, this.state.openEditMode, 
          { 
            onChange: htmlEvent.onChange.bind(null, listParentSection),
            onRemove: htmlEvent.onRemove.bind(null, listParentSection)
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
    this.props.validateDataUpdate()
    .then((dataValidate) => {
      this.props.submitDataUpdate()
      this.setState({ openEditMode: false })
    })
    .catch((errorValidate) => {
      window.alert(errorValidate.errorMessage || errorValidate.message)
    })
  }

  exportPdf () {
    const { props: { profileImageUrl } } = this
    // const imageProfileElement = document.getElementById('image-profile');
    const basicInfoElement = document.getElementById('basic-info');
    const skillsElement = document.getElementById('skills');
    const experienceElement = document.getElementById('experience');
    const educationElement = document.getElementById('education');

    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text(60, 25, "CURRICULUM VITAE");
    this.setState({ exportingPdf: true })
    try {
      // html2canvas(imageProfileElement)
      // .then((imageCanvas) => {
      // const imgData = imageCanvas.toDataURL('image/png');
      let img = new Image()
      img.src = profileImageUrl
      let pdfHeight = pdf.internal.pageSize.getHeight()
      let imageProfileHeight = img.height / img.width * 40
      pdf.addImage(img, 'JPEG', 10, 45, 40, imageProfileHeight);
      html2canvas(basicInfoElement)
        .then((basicInfoCanvas) => {
          let basicInfoHeight = basicInfoCanvas.height / basicInfoCanvas.width * 75
          pdf.addImage(basicInfoCanvas, 'JPEG', 40, 40, 75, basicInfoHeight);
          html2canvas(skillsElement)
            .then((skillsCanvas) => {
              let skillHeight = skillsCanvas.height / skillsCanvas.width * 75
              pdf.addImage(skillsCanvas, 'JPEG', 125, 40, 75, skillHeight);
              html2canvas(experienceElement)
                .then((experienceCanvas) => {
                  let experienceHeight = experienceCanvas.height / experienceCanvas.width * 180
                  let experienceY = 40 + skillHeight + 15
                  if (experienceY + experienceHeight > pdfHeight) {
                    pdf.addPage();
                    experienceY = 15
                  }
                  pdf.addImage(experienceCanvas, 'JPEG', 15, experienceY, 180, experienceHeight);
                  html2canvas(educationElement)
                    .then((educationCanvas) => {
                      let educationHeight = educationCanvas.height / educationCanvas.width * 180
                      let educationY = 40 + skillHeight + experienceHeight + 15
                      if (educationY + educationHeight > pdfHeight) {
                        pdf.addPage();
                        educationY = 15
                      }
                      pdf.addImage(educationCanvas, 'JPEG', 15, educationY, 180, educationHeight);
                      pdf.save("cv.pdf")
                      this.setState({ exportingPdf: false })
                    })
                })
            })
        })
      // })
    } catch (error) {
      window.alert('error', error.message)
    }

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
      exportPdf,
      state: {
        openEditMode,
        exportingPdf,
        imageUrlNull
      }
    } = this;
    return (
      <div className="content container portfolio-content portfolio-view" style={{ paddingBottom: '100px' }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="banner"></div>
          </div>
        </div>
        {role === "admin" && !openEditMode &&
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
                        education: JSON.parse(JSON.stringify(education)),
                        profileImageUrl: profileImageUrl,
                      }
                    })
                  }}
                />
              </div>
            </div>
          </div>
        }
        {openEditMode &&
          <div className="row">
            <div className="col-sm-12">
              <div className="admin-menu">
                <input type="button" className="btn btn-info btn-save" value="Save"
                  disabled={imageUrlNull}
                  onClick={onSubmit.bind(this)}
                />
                <input type="button" className="btn btn-secondary btn-cancel" value="Cancel" data-toggle="modal" data-target="#confirm-cancel"
                />
              </div>
            </div>
          </div>
        }
        {!openEditMode &&
          <div className="row">
            <div className="col-sm-12">
              <div className="admin-menu">
                <input type="button" className="btn btn-info btn-save" value={exportingPdf ? "exporting your PDF" : "export PDF file"}
                  disabled={exportingPdf}
                  onClick={exportPdf.bind(this)}
                />
              </div>
            </div>
          </div>
        }
        <div className="row">
          <div className="col-sm-3">
            <div className="image-profile-wrapper">
              <img className="image-profile margin-center" id="image-profile" 
              src={profileImageUrl || 'https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149'}
              alt="profile" />
            </div>
            {openEditMode &&
            <div className="edit-image-area">
              <input 
                className={`edit-image ${imageUrlNull ? 'error' : ''}`}
                placeholder="Enter your image url"
                defaultValue={profileImageUrl}
                onBlur={(e) => {
                  if(_.isNil(e.target.value) || e.target.value === "") {
                    this.setState({imageUrlNull: true})
                  } else {
                    this.setState({imageUrlNull: false})
                  }
                  this.props.updateData('profileImageUrl', e.target.value)}
                }
              />
            </div>}
          </div>
          <div className="col-sm-4 basic-infomation" id="basic-info">
            <div className="row"><div className="col-sm-12 title"> BASIC INFO </div></div>
            {buildSection(basicInfo, { onChange: onChangeBasicInfo.bind(this), onRemove: onRemoveBasicInfo.bind(this) })}
            {openEditMode &&
              <i className="fas fa-plus-square cursor-pointer float-right"
                title="add new info"
                onClick={onAddSection.bind(this, 'basicInfo', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.TextWithLabel, isMissName: false })}
              />
            }
          </div>
          <div className="col-sm-5 skills" id="skills">
            <div className="row"><div className="col-sm-12 title"> SKILLS </div></div>
            {buildSection(skill, { onChange: onChangeSkill.bind(this),
              onRemove: onRemoveSkill.bind(this),
              onRemoveSubData: onRemoveSubData.bind(this),
              onAddSection: onAddSection.bind(this, 'skill')
            })}
            {openEditMode &&
              <i className="fas fa-plus-square cursor-pointer float-right"
                title="add new group of skills"
                onClick={onAddSection.bind(this, 'skill', [], { isAddToRoot: true, isAddSection: true, isAddSubData: true, renderType: RENDER_TYPE.Title, isMissName: true })}
              />
            }
          </div>
        </div>
        <div id="experience">
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title center">
              EXPERIENCES
              </div>
          </div>
        </div>
        {buildSection(experiences, { onChange: onChangeExperience.bind(this), onRemove: onRemoveExperience.bind(this) })}
        </div>
        { openEditMode &&
          <i className="fas fa-plus-square cursor-pointer"
            title="add new experience card"
            onClick={onAddSection.bind(this, 'experiences', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth, isMissName: true })}
          />
        }
        <div id="education">
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title center">
              EDUCATION
              </div>
          </div>
        </div>
        {buildSection(education, { onChange: onChangeEducation.bind(this), onRemove: onRemoveEducation.bind(this) })}
        </div>
        { openEditMode &&
          <i className="fas fa-plus-square cursor-pointer"
            title="add new education card"
            onClick={onAddSection.bind(this, 'education', [], { isAddToRoot: true, isAddSection: true, renderType: RENDER_TYPE.CardFullWidth, isMissName: true })}
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