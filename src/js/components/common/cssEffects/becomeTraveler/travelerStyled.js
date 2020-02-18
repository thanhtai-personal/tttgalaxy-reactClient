import styled from 'styled-components'

export const Traveler = styled.div`
@import url(https://fonts.googleapis.com/css?family=Pathway+Gothic+One);

// body {
//   background: -webkit-radial-gradient(center, ellipse cover, #ffffff 0%,#f2efd9 100%);
// }

@keyframes rotate-right {
  from { 
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate-left {
  from { 
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes hover {
  0% {
    -webkit-transform: translateY(0%);  
  }
  50% {
    -webkit-transform: translateY(5%);  
  } 
  100% {
    -webkit-transform: translateY(0%);
  }     
}

@keyframes pull {
  0% {
    -webkit-transform: scaleY(1);
  }
  40% {
    -webkit-transform: scaleY(1.01);
  }
  60% {
    -webkit-transform: scaleY(0.99);
  }
  80% {
    -webkit-transform: scaleY(1.01);
  }
  100% {
    -webkit-transform: scaleY(0.99);
  }       
  80% {
    -webkit-transform: scaleY(1.01);
  }
  100% {
    -webkit-transform: scaleY(1);
  }   
}

@function getSpeed($speed, $type:turtle) {
  $secs: 360;
  $divider: 1;
  @if($type == turtle) {
    $divider: 1;
  } @else if($type == rabbit) {
    $divider: 10;
  } @else {
    $divider: 60;
  }
  @if $speed == fastest {
    $secs: 60 / $divider;
  } @else if $speed == really-fast {
    $secs: 120 / $divider;
  } @else if $speed == fast {
    $secs: 180 / $divider;
  } @else if $speed == slow {
    $secs: 240 / $divider;
  } @else if $speed == really-slow {
    $secs: 300 / $divider;
  } @else if $speed == slowest {
    $secs: 360 / $divider;
  }
  @return #{$secs}s;
}

@mixin _rotate-animation($direction, $speed, $type) {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-animation: rotate-#{$direction} getSpeed($speed, $type) linear 0s infinite;
}

@mixin _hover-animation($duration, $delay) {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-animation: hover #{$duration}s linear #{$delay}s infinite; 
}

@mixin _pull-animation($duration, $delay, $x: 200px, $y: 200px) {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-origin: $x $y;
  -webkit-animation: pull #{$duration}s linear #{$delay}s infinite alternate; 
}

@mixin rotate($type, $direction: left, $speed: slow, $x: 200px, $y: 200px) {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transform-origin: $x $y;
  @include _rotate-animation($direction, $speed, $type);
}

#airplane2, #airplane1 {
  @include rotate(turtle, right, fastest);
}

#countryObjects {
  @include rotate(turtle, right, slow);
}

#floatingGlobe {
  @include rotate(turtle, left, normal);
}

#globe {
  $duration: 0;
  $delay: 0;
  @include _hover-animation($duration, $delay);
}

#windmill {
  @include rotate(flash, right, really-fast, 331px, 201px);
}

// Clouds
@for $i from 1 through 3 {
  #cloud#{$i} {
    @include _hover-animation(3, $i);
  }
}


// Inner Circles
@for $i from 1 through 5 {
  $direction: left;
  $speed: really-fast;
  #circle#{$i} {
    @if $i % 2 == 1 {
      $direction: right;
      $speed: really-fast;
    } @else {
      $direction: left;
      $speed: slow;
    }
    @include rotate(rabbit, $direction, $speed);
  }
}
`