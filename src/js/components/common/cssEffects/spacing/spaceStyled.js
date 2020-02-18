import styled from 'styled-components'

export const Space = styled.div`
.large-header {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #111;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 11;
}

.demo .large-header {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
}

.main-title {
  position: absolute;
  margin: 0;
  padding: 0;
  color: #F9F1E9;
  text-align: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}

.demo .main-title {
  text-transform: uppercase;
  font-size: 4.2em;
  letter-spacing: 0.1em;
}

.main-title .thin {
  font-weight: 200;
}

@media only screen and (max-width: 768px) {
  .demo .main-title {
     font-size: 3em;
  }
}
`