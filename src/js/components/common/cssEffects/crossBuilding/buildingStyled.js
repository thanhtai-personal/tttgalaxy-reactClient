import styled from 'styled-components'

export const Building = styled.div`
  height: 100vh;
  width: 100vw
  left: 0;
  position: fixed;
  top: 0;
  background: url(https://jackrugile.com/images/misc/skyline-texture.png);
  canvas {
    background: 
      linear-gradient(
        hsl(200, 50%, 80%) 0%, 
        hsl(200, 30%, 95%) 75%)
    ;
    display: block;
  }
`