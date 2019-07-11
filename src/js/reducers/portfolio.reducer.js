import {

} from "../constants/action-types";

import {
  RENDER_TYPE
} from "../constants/enums"

const initialState = {
  profileImageUrl: 'https://res.cloudinary.com/di6vua0hr/image/upload/v1561099454/web_images/photo_2019-06-21_13-41-21_f2vx3r.jpg',
  skill: [
    {
      id: 1,
      name: 'Front end',
      isBorderTop: false,
      renderType: RENDER_TYPE.Title,
      subData: [
        {
          id: 1,
          name: 'React JS',
          progress: '90%',
          isMainSkill: true,
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 2,
          name: 'HTML/CSS',
          progress: '70%',
          isMainSkill: true,
          renderType: RENDER_TYPE.ProgessBar,
        }
      ]
    },
    {
      id: 2,
      name: 'Back End',
      isBorderTop: true,
      renderType: RENDER_TYPE.Title,
      subData: [
        {
          id: 1,
          name: '.Net core',
          progress: '60%',
          isMainSkill: true,
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 2,
          name: 'Node JS',
          progress: '40%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 3,
          name: 'Scala',
          progress: '60%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 4,
          name: 'Java',
          progress: '40%',
          renderType: RENDER_TYPE.ProgessBar,
        }
      ]
    },
    {
      id: 3,
      name: 'Tools',
      isBorderTop: true,
      renderType: RENDER_TYPE.Title,
      subData: [
        {
          id: 1,
          name: 'Git',
          progress: '90%',
          isMainSkill: true,
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 2,
          name: 'TortoiseSVN',
          progress: '60%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 3,
          name: 'Bitbucket',
          progress: '60%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 4,
          name: 'Jira',
          progress: '40%',
          renderType: RENDER_TYPE.ProgessBar,
        }
      ]
    },
    {
      id: 4,
      name: 'Game',
      isBorderTop: true,
      renderType: RENDER_TYPE.Title,
      subData: [
        {
          id: 1,
          name: 'Phaser',
          progress: '50%',
          isMainSkill: true,
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 2,
          name: 'Unity',
          progress: '40%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 3,
          name: 'MS XNA',
          progress: '70%',
          renderType: RENDER_TYPE.ProgessBar,
        }
      ]
    },
    {
      id: 5,
      name: 'Language',
      isBorderTop: true,
      renderType: RENDER_TYPE.Title,
      subData: [
        {
          id: 1,
          name: 'Vietnamese',
          progress: '100%',
          renderType: RENDER_TYPE.ProgessBar,
        },
        {
          id: 2,
          name: 'English',
          progress: '50%',
          renderType: RENDER_TYPE.ProgessBar,
        }
      ]
    }
  ],
  basicInfo: [
    {
      id: 1,
      name: 'Name',
      value: 'Trần Thanh Tài',
      renderType: RENDER_TYPE.TextWithLabel,
    },
    {
      id: 2,
      name: 'Age',
      value: '26 at 2019',
      renderType: RENDER_TYPE.TextWithLabel,
    },
    {
      id: 3,
      name: 'Date of Birth',
      value: '05/06',
      renderType: RENDER_TYPE.TextWithLabel,
    },
    {
      id: 4,
      name: 'Come From',
      value: 'ĐắkNông',
      renderType: RENDER_TYPE.TextWithLabel,
    },
    {
      id: 5,
      name: 'Email',
      value: 'thanhtai.tttgalaxy@gmail.com',
      renderType: RENDER_TYPE.TextWithLabel,
    },
    {
      id: 6,
      name: 'Phone number',
      value: 'waiting for security feature...',
      renderType: RENDER_TYPE.TextWithLabel,
    }
  ],
  experiences: [
    {
      id: 1,
      title: 'Titan Technology Corporation',
      duringTime: '1/2019 to present',
      description: 'Fullstack developer with React JS and .NET Core',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 2,
      title: 'KOLABS LLC',
      duringTime: '4/2017 to 11/2018',
      description: 'Front end developer with React JS',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 3,
      title: 'Citynow',
      duringTime: '10/2016 to 4/2017',
      description: 'Full stack developer with React JS and Scala',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 4,
      title: 'Gameloft',
      duringTime: '10/2015 to 10/2016',
      description: 'Game fresher - game developer with java/c++',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 5,
      title: 'Fujinet',
      duringTime: '7/2015 to 9/2015',
      description: 'Trial working as a web developer with java struts - spring - hibernate',
      renderType: RENDER_TYPE.CardFullWidth,
    }
  ],
  education: [
    {
      id: 1,
      title: 'News offline mobile App',
      duringTime: '1 months',
      description: 'Team members: 1. -- window phone',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 2,
      title: 'Online shopping web app',
      duringTime: '2 months',
      description: 'Team members: 2. -- ASP.net web application ',
      renderType: RENDER_TYPE.CardFullWidth,
    },
    {
      id: 3,
      title: 'Battle city - classical tank fire',
      duringTime: '2 months',
      description: 'team member: 2. -- Create a game with MS XNA game studio code',
      renderType: RENDER_TYPE.CardFullWidth,
    }
  ]
};

function portfolioReducer (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default portfolioReducer;