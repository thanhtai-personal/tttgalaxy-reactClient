import styled from 'styled-components'

export const Snow = styled.div`
.wrapper {
  width:100vw;
  height:100vh;
  background: radial-gradient(farthest-corner at 30vw 20vh,#7397a1 1%,#3f2c41 100%);
}
$s1:"";
$s2:"";
$s3:"";
@for $i from 1 through 400 {
  $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
  $s2: $s2 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
  $s3: $s3 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + " " + random(50)*-0.01rem + #fff;
  @if $i < 400 {
      $s1: $s1 + ",";
      $s2: $s2 + ",";
      $s3: $s3 + ",";
  }
}
.snow {
  border-radius: 50%;
  opacity: 0.8;
  position: absolute;
  top:-100vh;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.layer1 {
  width: 1.5rem;
  height: 1.5rem;
  filter:blur(1.5px);
  box-shadow: #{$s1};
  animation-duration: 6s;
}
.layer1.a {
  animation-delay: -3s;
}
.layer2 {
  width: 1.2rem;
  height: 1.2rem;
  filter:blur(3px);
  box-shadow: #{$s2};
  animation-duration: 8s;
}
.layer2.a {
  animation-delay: -4s;
}
.layer3 {
  width: 0.8rem;
  height: 0.8rem;
  filter:blur(6px);
  box-shadow: #{$s3};
  animation-duration: 10s;
}
.layer3.a {
  animation-delay: -5s;
}
@keyframes fall {
  100% {transform: translateY(200vh); }
}
`