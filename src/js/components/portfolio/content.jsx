import React, { PureComponent } from "react";

import { RENDER_TYPE } from './../../constants/enums'

import _ from 'lodash'

import './portfolio.scss'


class Content extends PureComponent {
  constructor (props) {
    super(props)
    this.buildSection = this.buildSection.bind(this)
    this.renderSection = this.renderSection.bind(this)
  }

  renderSection (data) {
    switch (data.renderType) {
      case RENDER_TYPE.Title:
        return <div className="row" key={`${data.name}-${data.id}`}><div className="col-sm-12 title">{data.name}</div></div>
      case RENDER_TYPE.TextWithLabel:
        return (
          <div className="row padding-top-5 word-break" key={`${data.name}-${data.id}`}>
            <div className="col-sm-4">
              {data.name}:
            </div>
            <div className="col-sm-8">
              {data.value}
            </div>
          </div>
        )
      case RENDER_TYPE.ProgessBar:
        return (
          <div className="row" key={`${data.name}-${data.id}`}>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
              {data.name}
            </div>
            <div className="col-sm-8 padding-top-5">
              <div className="progress background-color-red">
                <div className="progress-bar bg-info" role="progressbar" style={{ width: data.progress }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        )
      case RENDER_TYPE.CardFullWidth:
        return (
          <div className="card" style={{ width: '100%' }} key={`${data.name}-${data.id}`}>
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">** {data.duringTime}</p>
              <p className="card-text">{data.description}</p>
            </div>
          </div>
        )
    }
  }

  buildSection (data) {
    const renderListSection = (sectionList) => {
      return sectionList.map((section) => {
        if (!_.isNil(section.subData)) {
          return (
            <React.Fragment key={`${section.name}-data-${section.id}`}>
              <div className={`row ${section.isBorderTop ? "border-top" : ""}`}>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-3">
                  <p><b>{section.name}</b></p>
                </div>
                <div className="col-sm-8">
                </div>
              </div>
              {renderListSection(section.subData)}
            </React.Fragment>
          )
        }
        return this.renderSection(section)
      })
    }
    return renderListSection(data)
  }

  render () {
    let { props: { skill, basicInfo, experiences, education, profileImageUrl },
      buildSection
    } = this;
    return (
      <div className="content container" style={{ paddingBottom: '20px' }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="banner"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="image-profile-wrapper">
              <img className="image-profile" src={profileImageUrl} alt="profile" />
            </div>
          </div>
          <div className="col-sm-4 basic-infomation">
            <div className="row"><div className="col-sm-12 title"> BASIC INFO </div></div>
            {buildSection(basicInfo)}
          </div>
          <div className="col-sm-5 skills">
            <div className="row"><div className="col-sm-12 title"> SKILLS </div></div>
            {buildSection(skill)}
          </div>
        </div>
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EXPERIENCES
              </div>
          </div>
        </div>
        {buildSection(experiences)}
        <div className="row padding-top-15">
          <div className="col-sm-12">
            <div className="title">
              EDUCATION - Nature Science University
              </div>
          </div>
        </div>
        {buildSection(education)}
      </div>
    )
  }
}

export default Content