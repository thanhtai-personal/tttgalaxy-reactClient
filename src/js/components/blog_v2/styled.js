import styled from 'styled-components'

const SideNavWrapper = styled.div`
  height: 100vh; 
  width: 20vw;
  min-width: 200px;
  max-width: 300px;
  position: fixed;
  z-index: 1; 
  top: 0; 
  left: 0;
  background-color: #76D7C4;
  overflow-x: hidden;
  padding-top: 20px;
`

const MainWrapper = styled.div`
  margin-left: 20vw; 
  padding-top: 20px;
`

const Title = styled.div`
  text-align: center; 
  margin: 0 auto;
  font-size: 26px;
  &:hover {
    background-color: #FFEE58;
    color: #76D7C4;
  }
`

const ImageWrapper = styled.image`
  max-width: 11rem;
  max-height: 11rem;
  border: 0.5rem solid rgba(255, 255, 255, 0.4);
  vertical-align: middle;
  width: 200px;
  height: 100px;
`

export default {
  SideNavWrapper,
  MainWrapper,
  Title,
  ImageWrapper
}