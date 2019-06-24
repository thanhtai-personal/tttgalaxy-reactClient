import React, { PureComponent } from "react";

import './home.scss'


class Content extends PureComponent {
  constructor (props) {
    super(props)
    this.renderBasicInfo = this.renderBasicInfo.bind(this)
    this.renderSkill = this.renderSkill.bind(this)
    this.renderEducation = this.renderEducation.bind(this)
    this.renderExperiences = this.renderExperiences.bind(this)
  }

  renderSkill () {
    return this.props.skillData.map((item) => {
      const subItemsElements = item.subItems.map((skill) => {
        return (
          <div className={`row ${skill.isMainSkill ? "main-skill" : ""}`} key={`skill-${skill.id}`}>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              {skill.name}
            </div>
            <div className="col-sm-8 padding-top-5">
              <div className="progress background-color-red">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: skill.progress }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        )
      })
      return (
        <React.Fragment key={`skill-data-${item.id}`}>
          <div className={`row ${item.isBorderTop ? "border-top" : ""}`}>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              <p><b>{item.name}</b></p>
            </div>
            <div className="col-sm-8">
            </div>
          </div>
          {subItemsElements}
        </React.Fragment>
      )
    })
  }

  renderBasicInfo () {
    return this.props.basicInfo.map((info) => {
      return (
        <div className="row padding-top-5 word-break" key={`basic-info-${info.id}`}>
          <div className="col-sm-4">
            {info.name}:
          </div>
          <div className="col-sm-8">
            {info.value}
          </div>
        </div>
      )
    })
  }

  renderExperiences () {
    return this.props.experiencesData.map((exp) => {
      return (
        <div className="card" style={{ width: '100%' }} key={`exprience-${exp.id}`}>
          <div className="card-body">
            <h5 className="card-title">{exp.title}</h5>
            <p className="card-text">** {exp.duringTime}</p>
            <p className="card-text">{exp.description}</p>
          </div>
        </div>
      )
    })
  }

  renderEducation () {
    return this.props.educationData.map((edu) => {
      return (
        <div className="card" style={{ width: '100%' }} key={`exprience-${edu.id}`}>
          <div className="card-body">
            <h5 className="card-title">{edu.title}</h5>
            <p className="card-text">** {edu.duringTime}</p>
            <p className="card-text">{edu.description}</p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="content container" style={{ paddingBottom: '20px' }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="profile-title">
              About me
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="image-profile-wrapper">
              <img className="image-profile" src="https://res.cloudinary.com/di6vua0hr/image/upload/v1561099454/web_images/photo_2019-06-21_13-41-21_f2vx3r.jpg" alt="profile" />
            </div>
          </div>
          <div className="col-sm-4 basic-infomation">
            <div className="row"><div className="col-sm-12 title"> BASIC INFO </div></div>
            {this.renderBasicInfo()}
          </div>
          <div className="col-sm-5 skills">
            <div className="row"><div className="col-sm-12 title"> SKILLS </div></div>
            {this.renderSkill()}
          </div>
        </div>
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EXPERIENCES
              </div>
          </div>
        </div>
        {this.renderExperiences()}
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EDUCATION - Nature Science University
              </div>
          </div>
        </div>
        {this.renderEducation()}
      </div>
    )
  }
}

export default Content