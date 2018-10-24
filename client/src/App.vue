<template>

	<div id="app">
		<!-- <nav>
        	<router-link to="/shoppingPage">About</router-link> 
    	</nav>         -->

		<!-- zajebancija xD animacija izmedju stranica -->
		<!-- <transition name="router-anim" enter-active-class="animated zoomInDown" leave-active-class="animated zoomOutUp">
   			<router-view/>
		</transition> -->

		<transition name="router-anim">
   			<router-view/>
		</transition>
    	<!-- <router-view/> -->

    <!-- <shopping-page :user=user :pass=pass></shopping-page> prikazi shopping page ovde--> 

  	</div>
</template>

<script>

</script>

<style>

.page {
	position: fixed;
   	width: inherit;
}

.router-anim-enter-active {
	animation: zoomInDown 1s;
  	animation-duration: .8s;
  	opacity: 0;
}
.router-anim-leave-active {
  	animation: zoomOutUp 1s;
 	 animation-duration: .8s;
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
