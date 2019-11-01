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
//https://kipalog.com/posts/Hieu-ung-chu-dang-kinh-ngac-bang-CSS


const max = 5;
const strokeStep = 7

const strokeOffset = keyframes`
50% {
  stroke-dashoffset: ${strokeStep * max};  
  stroke-dasharray: 0 ${strokeStep * max * 2.5};
}
`
// const colors = ['#360745', '#D61C59', '#E7D84B', '#EFEAC5', '#1B8798']
const colors = ['yellow', 'yellow', 'yellow', 'yellow', 'yellow']

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
  animation: ${strokeOffset} 12s infinite linear;
}
:hover {
  background-color: ${color.hoverTabColor};
  color: ${color.textHover};
  animation-state: paused;
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

const MagicalPanel = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: url('images/wallpaper-10.jpg') no-repeat center center;
  background-size: cover;
`

const ElasticStrokeFree = styled.svg`
font-family: times new roman;
font-size: 2em;
width: 100vw;
height: 80px;
text-align: center;
.text-copy {
  fill: none;
  stroke: yellow;
  stroke-dasharray: ${strokeStep} ${strokeStep * (max - 1)};
  stroke-width: 1px;
  animation: ${strokeOffset} 12s infinite linear;
}
.text-copy-1 {
  stroke: yellow;
  stroke-dashoffset: ${strokeStep * 1};
}
.text-copy-2 {
  stroke: yellow;
  stroke-dashoffset: ${strokeStep * 2};
}
.text-copy-3 {
  stroke: yellow;
  stroke-dashoffset: ${strokeStep * 3};
}
.text-copy-4 {
  stroke: yellow;
  stroke-dashoffset: ${strokeStep * 4};
}
.text-copy-5 {
  stroke: yellow;
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
  ElasticStroke,
  MagicalPanel,
  ElasticStrokeFree
}