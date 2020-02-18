import styled from 'styled-components'

// `background:#c4252a url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/cheap_diagonal_fabric.png);
//     background-blend-mode: multiply;
//     mix-blend-mode: multiply;

export const Mosaic = styled.div`
overflow:hidden;
margin:0;
&:before{
	content:'';
	position: fixed;
	left:0;
	top:0;
	width:100vw;
	height:100vh;
	z-index: 10;
}
canvas{
	opacity:0;
	transition:1s opacity cubic-bezier(.55,0,.1,1);
	&.ready{
		opacity:0.4;
	}
	
}

.intro{
	position: absolute;
	padding:20px;
	transform:translate(-50%, -50%);
	left:50%;
	top:50%;
	text-align:center;
	color:#fafafa;
	z-index: 10;
	width:100%;
	max-width:700px;
	font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
	text-shadow:0px 5px 20px black;
	h1{
		font-size:40px;
		font-weight:300;
		letter-spacing:2px;
	}
	p{
		letter-spacing:1px;
		line-height:24px;
	}
}
`