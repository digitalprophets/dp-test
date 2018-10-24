<template>
	<div class="shop page">	
		<header>
			<div class="sadrzaj"> 
				sadrzaj.. 
			</div>
			<div class="sadrzaj"> 
				sranje.. 
			</div>
			<div class="sadrzaj"> 
				govna.. 
			</div>
		</header>
    	<div id="content">
      		<h1>Ovo je shopping page username je 
		  		<span id="korisnik" style="color:red;">{{ user }}</span> 
		  		a sifra je <span id="lozinka" style="color:blue;">{{pass}}</span>
			</h1>
    	</div>
		

  	</div>
</template>

<script>
	export default {
    	name: 'shop',
		data() {
			return {
				user:'',
				pass:''
			}
		},
    	// ovo created je da hvata ono sto saljemo preko routera
    	created() {
        	    this.user = this.$route.params.user;
            	this.pass = this.$route.params.pass;
    	}

    // OVO SAM KORISTIO KAO  <shopping-page :user=user :pass=pass></shopping-page> KAD IZ DRUGE STR POZIVAM OVU PA KAO
    // props: {
    //   user: {
    //     type: String,
    //     default: 'Andrija'
    //   },
    //   pass: {
    //     type: String,
    //     default: 'Gospodar'
    //   }
    // }
  }
</script>

<style scoped>

.shop{
	height: 100%;
	 margin: 0;

    display: grid;
    grid-template-rows: 50px auto;
    grid-template-areas:
		"header"
        "content";
	color: white;
}

header {
    background-color:darkred;
    padding:10px;
	border: 2px solid white;
	font-size: 2rem;
	display: grid;
	grid-template-columns: repeat(3, auto);
}

.sadrzaj {
	font-weight: bold;
	-webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
			animation-delay: 1s;
}

.sadrzaj:hover {
	cursor: pointer;
}


@-webkit-keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
@keyframes tracking-in-contract {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}

#content {
   	/* grid-area: content; */
	justify-self: center;
    align-self: center;
}

#korisnik {
	/* span mora da ima inline block inace ne moz se animira! */
	display: inline-block;
	-webkit-animation: vibrate-3 0.5s linear infinite both;
	        animation: vibrate-3 0.5s linear infinite both;
}


#lozinka {
	display: inline-block;
	-webkit-animation: vibrate-3 0.5s linear infinite reverse both;
	        animation: vibrate-3 0.5s linear infinite reverse both;
}


@-webkit-keyframes vibrate-3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-3 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}

</style>
