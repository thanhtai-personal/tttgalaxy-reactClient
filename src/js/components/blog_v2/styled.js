import styled, { keyframes } from 'styled-components'
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 

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
  fullName: '#2ECC71'
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
  width: ${isMobile ? '100vw':'20vw'};
  min-width: 200px;
  ${isMobile && 'max-width:300px;'}
  position: ${isMobile ? 'static':'fixed'};
  z-index: 25; 
  top: 0; 
  left: 0;
  background-color: ${color.SideNavBackground};
  overflow-x: hidden;
  padding-top: 20px;
`

const MainWrapper = styled.div`
  ${isMobile && 'padding-left: 10vw;'}
  padding-top: 20px;
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
  };
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
  }
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
  max-height: 100vh;
  background-color: ${color.tabContentBackground};
  opacity: 0.7;
  box-shadow: 20px 20px 20px ${color.shadowColor};
  over-flow: scroll;
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
  ImageShow
}