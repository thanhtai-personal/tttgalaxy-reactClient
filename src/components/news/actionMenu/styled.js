import styled from 'styled-components'

export const MenuStyled = styled.div`
.action-menu {
  width: 100vw;
  height: 60px;
  background-color: black;
  color: white;
  opacity: 0.9;
  display: none;
  z-index: 2;
  position: fixed;
  &.active {
   display: block;
  }
}
.action-icon {
  width: 60px;
  height: 60px;
  background-color: green;
  float: right;
  top: 0;
  left: calc(100vw - 60px);
  position: fixed;
  cursor: pointer;
  z-index: 3;
  &.icon-show {

  }
  &.icon-hide {

  }
  :hover {
    background-color: white;
  }
} 
`