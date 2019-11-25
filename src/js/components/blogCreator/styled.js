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

const input = styled.input`
  width: 90%;
  float: right;
`
const label = styled.label`
  width: 10%;
  background-color: ${commonStyle.color.gray}
  padding-left: 50px;
  height: 30px;
  margin: 0;
`

const viewWrapper = styled.div`
  background-color: ${commonStyle.color.white}
  width: 100%;
  height: 100%;
  .main-content {
    height: 80vh;
  }
`


export default {
  editorWrapper,
  input,
  label,
  viewWrapper
}