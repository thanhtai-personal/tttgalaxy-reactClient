import React, { PureComponent } from "react";

import './home.scss'

const SkillData = [
  {
    id: 1,
    name: 'Front end',
    isBorderTop: false,
    subItems: [
      {
        id: 1,
        name: 'React JS',
        progress: '90%',
        isMainSkill: true
      },
      {
        id: 2,
        name: 'HTML/CSS',
        progress: '70%',
        isMainSkill: true
      }
    ]
  },
  {
    id: 2,
    name: 'Back end',
    isBorderTop: true,
    subItems: [
      {
        id: 1,
        name: '.Net core',
        progress: '60%',
        isMainSkill: true
      },
      {
        id: 2,
        name: 'Node JS',
        progress: '40%'
      },
      {
        id: 3,
        name: 'Scala',
        progress: '60%'
      },
      {
        id: 4,
        name: 'Java',
        progress: '40%'
      }
    ]
  },
  {
    id: 3,
    name: 'Tools',
    isBorderTop: true,
    subItems: [
      {
        id: 1,
        name: 'Git',
        progress: '90%',
        isMainSkill: true
      },
      {
        id: 2,
        name: 'TortoiseSVN',
        progress: '60%'
      },
      {
        id: 3,
        name: 'Bitbucket',
        progress: '60%'
      },
      {
        id: 4,
        name: 'Jira',
        progress: '40%'
      }
    ]
  },
  {
    id: 4,
    name: 'Game',
    isBorderTop: true,
    subItems: [
      {
        id: 1,
        name: 'Phaser',
        progress: '50%',
        isMainSkill: true
      },
      {
        id: 2,
        name: 'Unity',
        progress: '40%'
      },
      {
        id: 3,
        name: 'MS XNA',
        progress: '70%'
      }
    ]
  },
  {
    id: 5,
    name: 'Language',
    isBorderTop: true,
    subItems: [
      {
        id: 1,
        name: 'Vietnamese',
        progress: '100%'
      },
      {
        id: 2,
        name: 'English',
        progress: '50%'
      }
    ]
  }
]

const basicInfo = [
  {
    id: 1,
    name: 'Name',
    value: 'Trần Thanh Tài'
  },
  {
    id: 2,
    name: 'Age',
    value: '26 at 2019'
  },
  {
    id: 3,
    name: 'Date of Birth',
    value: '05/06'
  },
  {
    id: 4,
    name: 'Come From',
    value: 'ĐắkNông'
  }
]

const experiencesData = [
  {
    id: 1,
    title: 'Titan Technology Corporation',
    duringTime: '1/2019 to present',
    description: 'Fullstack developer with React JS and .NET Core'
  },
  {
    id: 2,
    title: 'KOLABS LLC',
    duringTime: '4/2017 to 11/2018',
    description: 'Front end developer with React JS'
  },
  {
    id: 3,
    title: 'Citynow',
    duringTime: '10/2016 to 4/2017',
    description: 'Full stack developer with React JS and Scala'
  },
  {
    id: 4,
    title: 'Gameloft',
    duringTime: '10/2015 to 10/2016',
    description: 'Game fresher - game developer with java/c++'
  },
  {
    id: 5,
    title: 'Fujinet',
    duringTime: '7/2015 to 9/2015',
    description: 'Trial working as a web developer with java struts - spring - hibernate'
  }
]

class Content extends PureComponent {
  // constructor (props) {
  //   super(props)
  // }

  renderSkill () {
    return SkillData.map((item) => {
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
                {item.name}
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
    return basicInfo.map ((info) => {
      return (
        <div className="row" key={`basic-info-${info.id}`}>
          <div className="col-sm-6">
            {info.name}
          </div>
          <div className="col-sm-6">
            {info.value}
          </div>
        </div>
      )
    })
  }

  renderExperiences () {
    return experiencesData.map ( (exp) => {
      return (
        <div className="card" style={{width: '100%'}} key={`exprience-${exp.id}`}>
          <div className="card-body">
            <h5 className="card-title">{exp.title}</h5>
            <p className="card-text">** {exp.duringTime}</p>
            <p className="card-text">{exp.description}</p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className="content container">
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
      </div>
    )
  }
}

export default Content