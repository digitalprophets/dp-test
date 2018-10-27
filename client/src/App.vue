<template>

	<div id="app">
		<transition name="router-anim">
   			<router-view/>
		</transition>
  	</div>
	  
</template>

<script>
export default {}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Lato);
@import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,500,300);
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);

* {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", Times, serif;
}

html {
    height: 100%;
	width: 100%;
    font-size:62.5%;
  	overflow: auto;
}

body {
	height: 100%;
	width:100%;
	font-family: 'Lato', sans-serif;
	color:#444;
	margin: 0px;
	background-color:grey;

}

#app { 
    background: #0d0e0f;
	background: -webkit-radial-gradient(#0d0e0f, black);
	background: -o-radial-gradient(#0d0e0f, black);
	background: -moz-radial-gradient(#0d0e0f, black);
	background: radial-gradient(#0d0e0f, black);
	background-repeat: repeat; 
	/* text-align: center;  */
    width: 100%; 
    height: 100%; 
    background-color:#0d0e0f; 
    display: block; 
    position: relative; 
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box; 
  	overflow: auto;
	/* TODO ANDRIJA samo da kazem da sam maestro ovo sprecava da animacija headera razvuce po x osi idemo */
	overflow-x: hidden;

}

.page {
	position: absolute;
   	width: inherit;
}

.router-anim-enter-active {
	animation: zoomInDown 1s;
  	animation-duration: 1s;
  	opacity: 0;
}
.router-anim-leave-active {
  	animation: zoomOutUp 1s;
 	 animation-duration: 1s;
}

@-webkit-keyframes zoomInDown {
  	from {
		opacity: 0;
		-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
		transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
		-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
		animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  	}

  	60% {
    	opacity: 1;
		-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
		transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
		-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
		animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInDown {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}
</style>
