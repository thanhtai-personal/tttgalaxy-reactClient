import styled, { keyframes } from 'styled-components'
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const mobileFont = 'times new roman'
const smallSize = 926

const color = {
  backgroundHover: '#FFEE58',
  textHover: '#76D7C4',
  SideNavBackground: '#76D7C4',
  borderImage: 'rgba(255, 255, 255, 0.4)',
  textMenuHover: '#7D3C98',
  activeBackgroundHover: '#F39C12',
  textMenuActive: '#FFEE58',
  tabBackground: '#4A235A',
  tabActiveBackground: '#4A235A',
  tabBorder: '#FFEE58',
  shadowColor: '#666',
  tabContentBackground: 'white',
  fullName: '#2ECC71',
  hoverTabColor: '#ffbf00',
}

const scaleHover = keyframes`
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const paddingHover = keyframes`
  0% {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  50% {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  100% {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

const tabHover = keyframes`
  0%   {
    padding-top: 0px;
  }
  50%  {
    padding-top: 15px;
  }
  100% {
    padding-top: 0px;
  }
`



const SideNavWrapper = styled.div`
  height: 100vh; 
  width: 20vw;
  min-width: 200px;
  max-width:300px;
  position: fixed;
  z-index: 25; 
  top: 0; 
  left: 0;
  background-color: ${color.SideNavBackground};
  overflow-x: hidden;
  padding-top: 20px;
  ${isMobile && `font-family: ${mobileFont};`}
  @media (max-width: ${smallSize}px) {
    max-width:${smallSize};
    position: static;
  };
`

const MainWrapper = styled.div`
  padding-left: 10vw;
  padding-top: 20px;
  ${isMobile && `font-family: ${mobileFont};`}
  @media (max-width: ${smallSize}px) {
    padding-left: 20px;
  };
`

const Title = styled.div`
  text-align: center; 
  margin: 0 auto;
  font-size: 26px;
  font-family: 'chalkduster, fantasy';
  &:hover {
    background-color: ${color.backgroundHover};
    color: ${color.textHover};
  }
`

const CenterWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 25px;
`

const ImageAvatar = styled.img`
  max-width: 20rem;
  max-height: 20rem;
  border: 0.5rem solid ${color.borderImage};
  vertical-align: middle;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  &:hover {
    animation: ${scaleHover} 0.5s linear infinite;
  }
`

const Menu = styled.ul`
  width: 90%;
  margin-right: 5%;
  li {
    cursor: pointer;
    list-style-type: none;
    margin-top: 5px;
    line-height: 200%;
    padding-top: 5px;
    padding-bottom: 5px;
    &:hover {
      background-color: ${color.backgroundHover};
      color: ${color.textMenuHover};
      animation: ${paddingHover} 0.5s linear;
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &:active {
      background-color: ${color.activeBackgroundHover};
      color: ${color.textMenuActive};
      padding-top: 15px;
      padding-bottom: 15px;
    }
    &.active {
      background-color: ${color.activeBackgroundHover};
      color: ${color.textMenuHover};
      padding-top: 10px;
      padding-bottom: 10px;
    }
    &.other-profile {
      :hover {
        background-color: ${color.hoverTabColor};
        color: red;
        border: solid 2px;
        border-color: ${color.tabBorder}
      };
    }
  };
`

const TabList = styled.div`
  display: inline-block;
  min-width: 70vw;
  max-width: 100vw;
  overflow-x: hidden;
`

const Tab = styled.div`
  opacity: 0.7;
  width: 100%;
  height: auto;
  background-color: ${color.tabBackground}
  .title {
    padding: 8px 16px;
    float: left;
    width: auto;
    border: none;
    display: block;
    outline: 0;
    cursor: pointer;
    border-bottom: solid 2px ${color.tabBorder};
    border-left: solid 1px ${color.tabBorder};
    border-right: solid 1px ${color.tabBorder};
    box-shadow: 10px 10px 10px ${color.shadowColor};
  };
  .hover-tab {
    animation: ${tabHover} 0.5s linear infinite;
  };
  .active-tab {
    background-color: ${color.tabActiveBackground}
    color: ${color.backgroundHover}
    box-shadow: 20px 20px 20px ${color.shadowColor};
  };
  .redirect-button {
    :hover {
      background-color: ${color.hoverTabColor};
      color: red;
    };
  };
`

const TabContent = styled.div`
  width: 100%;
  height: 100%;
  float: left;
  padding-top: 4rem;
  padding-bottom: 2rem;
  padding-left: 4rem;
  padding-right: 1rem;
  min-width: 60vw;
  max-width: 100vw;
  min-height: 85vh;
  background-color: ${color.tabContentBackground};
  opacity: 0.7;
  box-shadow: 20px 20px 20px ${color.shadowColor};
`

const About = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 2.5rem;
    margin-bottom: 0;
    text-transform: uppercase;
    color: ${color.fullName};
    font-family: Saira Extra Condensed, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  }
  .welcome {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  .account {
    padding-top: 2rem;
  }
  strong {
    font-weight: bold;
  }
`
const Experience = styled.div`
  .organization-data {
    float: left;
    padding-top: 3rem;
    width: 70%;
  }
  .organization-name {
    text-transform: uppercase;
    font-size: 2rem;
    color: ${color.fullName};
  }
  .organization-time {
    float: right;
    color: ${color.textMenuHover}
    text-decoration-line: overline underline;
    padding-top: 3rem;
  }
  .organization-pos {
    font-size: 1rem;
  }
  .organization-des {
    padding-top: 2rem;
    .list-inline {
      list-style: none;
      max-width: 70%;
    }
    .dev-icons {
      font-size: 3rem;
      cursor: pointer;
    }
    .list-inline-item:not(:last-child) {
      margin-right: .5rem;
    }
    .list-inline-item {
    }
    i:hover {
      background-color: ${color.backgroundHover}
    }
  }
`

const ButtonGroup = styled.div`
  cursor: pointer;
  &:hover {
    color: ${color.textMenuHover}
  }
  .left {
    float: left
    padding-right: 2rem;
  }
  .right {
    float: right;
    padding-left: 2rem;
  }
`

const ImageShow = styled.img`
  max-width: 20rem;
  max-height: 20rem;
  vertical-align: middle;
  width: 100px;
  height: 100px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transform: scale(1.3);
  }
`

const OpenForm = styled.button`
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
  margin-right: 11vw;
`


const MusicButton = styled.span`
  cursor: pointer;
  :hover {
    background-color: ${color.backgroundHover}
  }
`

const cloudMoving = isMobile ? '' : keyframes`
  {
    0% {
      margin-bottom: 0px
    }
    10% {
      margin-bottom: 90px
    }
    15% {
      margin-bottom: 45px
    }
    25% {
      margin-bottom: 135px
    }
    30% {
      margin-bottom: 90px
    }
    40% {
      margin-bottom: 180px
    }
    45% {
      margin-bottom: 135px
    }
    50% {
      margin-bottom: 180px
    }
    55% {
      margin-bottom: 135px
    }
    60% {
      margin-bottom: 180px
    }
    70% {
      margin-bottom: 90px
    }
    75% {
      margin-bottom: 135px
    }
    85% {
      margin-bottom: 45px
    }
    90% {
      margin-bottom: 90px
    }
    100% {
      margin-bottom: 0px
    }
  }
`

const MusicBox = styled.div`
  .music-box {
    max-width: 15vw;
    height: auto;
    text-align: center;
    animation: ${cloudMoving} 20s linear infinite;
  }
`


const max = 5;
const strokeStep = 7

const strokeOffset = keyframes`
50% {
  stroke-dashoffset: ${strokeStep * max};  
  stroke-dasharray: 0 ${strokeStep * max * 2.5};
}
`
const colors = ['#360745', '#D61C59', '#E7D84B', '#EFEAC5', '#1B8798']
// const colors = ['white', 'white', 'white', 'white', 'white']

const ElasticStroke = styled.svg`
font-family: times new roman;
font-size: 2em;
height: 80px;
text-align: center;
.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: ${strokeStep} ${strokeStep * (max - 1)};
  stroke-width: 1px;
  animation: ${strokeOffset} 6s infinite linear;
}
:hover {
  background-color: ${color.hoverTabColor};
  color: ${color.textHover};
  .text-copy-1 {
    stroke: white;
  }
  .text-copy-2 {
    stroke: white;
  }
  .text-copy-3 {
    stroke: white;
  }
  .text-copy-4 {
    stroke: white;
  }
  .text-copy-5 {
    stroke: white;
  }
  .text-copy {
    animation: unset;
  }
}
.text-copy-1 {
  stroke: ${colors[0]};
  stroke-dashoffset: ${strokeStep * 1};
}
.text-copy-2 {
  stroke: ${colors[1]};
  stroke-dashoffset: ${strokeStep * 2};
}
.text-copy-3 {
  stroke: ${colors[2]};
  stroke-dashoffset: ${strokeStep * 3};
}
.text-copy-4 {
  stroke: ${colors[3]};
  stroke-dashoffset: ${strokeStep * 4};
}
.text-copy-5 {
  stroke: ${colors[4]};
  stroke-dashoffset: ${strokeStep * 5};
}
`

export default {
  SideNavWrapper,
  MainWrapper,
  Title,
  CenterWrapper,
  ImageAvatar,
  Menu,
  Tab,
  TabContent,
  About,
  Experience,
  ButtonGroup,
  ImageShow,
  OpenForm,
  MusicButton,
  TabList,
  MusicBox,
  ElasticStroke
}