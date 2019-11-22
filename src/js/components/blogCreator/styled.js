import styled, { keyframes } from 'styled-components'
import commonStyle from './../utils/commonStyle'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const mobileFont = 'times new roman'


const editorWrapper = styled.div`
  width: 100%;
  height: 100%;
  .right-bar {
    background-color: ${commonStyle.color.gray}
    float: right;
    padding-top: 0px;
    position: fixed;
    width: 10%;
    height: 100%;
    min-width: 50px;
    margin-left: 90%;
    button {
      width: 110px;
      ${commonStyle.buttonBlue}
      ${commonStyle.rounded4}
      :hover {
        ${commonStyle.buttonColoredBoderBlue}
      }
    }
  }
  .content-wrapper {
    width: 90%;
    height: 100%;
    float: left;
  }
`


export default {
  editorWrapper
}