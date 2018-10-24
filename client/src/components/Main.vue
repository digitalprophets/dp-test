<template>

	<div id="main page">

	    <button v-on:click="zatvori" id="zatvori" class="zatvori">&times;</button>
		<!-- registracija box vrv nece ovako da bude, baguje nesto a i bzvz je -->
		<div id="registracijaPozadina"></div>
		<div id="senka"></div>

		<form @submit.prevent="ulogujSe" @keyup.esc="klikEsc" @keyup.enter="ulogujSe">
			<label id="greska"></label>
			<input v-model="user" id="user" type="text" name="user" placeholder="Username"> <!-- skidam required sa kraja i odozdo-->
			<input v-model="pass" id="pass" type="password" name="pass" placeholder="Password">
	
			<!-- <router-link :to="{ name: 'shop', params: { user:user, pass:pass } }"> -->
                <button id="logIn" name="logIn">Uloguj se</button>
                <!-- <button v-on:click="ulogujSe" id="logIn" name="logIn">Uloguj se</button> -->
            <!-- </router-link> -->
			
            <button v-on:click="registruj" type="button" id="register" name="register">Registruj se</button>
		
			<button id="prodavacDugme" name="prodavacDugme">Prodavac</button>
			<button id="kupacDugme" name="kupacDugme">Kupac</button>
		</form> 
	
		<!-- TODO ANDRIJA prebaciti ovo u zasebnu komponentu? -->
    	<div class="animacija">
      		<svg style="z-index:9999;" id="mainlogo"  height="440" width="770">
        		<g id="layer1" stroke-miterlimit="4" stroke-dasharray="none" transform="translate(0,-712.36218)">
					<path id="ceoBox" stroke-linejoin="miter" d="m385, 755 L95, 755 L95, 1085 L385, 1085" 
						stroke="white" stroke-linecap="butt" stroke-width="5.5"> 
					</path>

		        	<path id="ceoBox" stroke-linejoin="miter" d="m385, 755 L675, 755 L675, 1085 L385, 1085" 
              			stroke="white" stroke-linecap="butt" stroke-width="5.5">
		        	</path>

		        	<path id="ulazBox" stroke-linejoin="miter" d="m250, 800 L520, 800 L520, 860 L250, 860 Z" 
              			stroke="white" stroke-linecap="butt" stroke-width="3.5">
	        		</path>

					<path id="ulazBox" stroke-linejoin="miter" d="m520, 930 L250, 930 L250, 870 L520, 870 Z" 
						stroke="white" stroke-linecap="butt" stroke-width="3.5">
					</path>
			  </g>
    		</svg>
	  	</div>

    	<img id="slikaLogo" src="../test.png"/>

		<div id="odgSaBackenda"> {{ primio.odgovor }}</div>

  	</div>
</template>

<script>
// import axios from 'axios';
import AuthenticationService from '../services/AuthenticationService'

export default {
	name: 'app',
  	components: {
  	},
  	data() {
    	return{
			user: '',
			pass: '',
			primio: {}
		}
	},
  	methods: {
		registruj(){
			if (document.getElementById("user").value=="")
			{
				document.getElementById("greska").innerHTML="Morate uneti korisničko ime";
				return;
			}
			if (document.getElementById("pass").value=="")
			{
				document.getElementById("greska").innerHTML="Morate uneti lozinku";
				return;
			}
			document.getElementById("prodavacDugme").style.display='block';
			document.getElementById("kupacDugme").style.display='block';
			document.getElementById("registracijaPozadina").style.display='block';
			document.getElementById("zatvori").style.display='block';
			document.getElementById("senka").style.display='block';
		},
		zatvori(){
			document.getElementById("prodavacDugme").style.display='none';
			document.getElementById("kupacDugme").style.display='none';
			document.getElementById("registracijaPozadina").style.display='none';
			document.getElementById("zatvori").style.display='none';
			document.getElementById("senka").style.display='none';
		},
		klikEsc(){
			document.getElementById("prodavacDugme").style.display='none';
			document.getElementById("kupacDugme").style.display='none';
			document.getElementById("registracijaPozadina").style.display='none';
			document.getElementById("zatvori").style.display='none';
			document.getElementById("senka").style.display='none';
		},
		async ulogujSe(){
            // TODO ANDRIJA TODO VELJKO cekamo backend da prihvati ovo
			// try {
			// 	const response = await AuthenticationService.register({
			// 		user: this.user,
			// 		pass: this.pass
			// 	})
			// 	console.log(response.data)


			// 	this.primio = response.data;
			// 	if (this.primio.odgovor == "ok"){
			// 		// nek router prenese parametre
			// 		this.$router.push({ name: 'shop', params: { user: this.user, pass: this.pass }})
			// 	}
			// 	else this.$router.push('/error');
			// } catch (err) {
			//  	console.log(err);
			// }
			this.$router.push({ name: 'shop', params: { user: this.user, pass: this.pass }})

			// const formData = new FormData();
			// formData.append('korisnickoime', this.user); // "korisnickoime" : "staTiProsledim"
			// formData.append('sifra', this.pass); // analogno

			// console.log(formData);
			// console.log(`username: ${this.user}`);
			// console.log(`pass: ${this.pass}`);
		}
	}
}
</script>

<style>
@import url(http://fonts.googleapis.com/css?family=Lato);
@import url(http://fonts.googleapis.com/css?family=Montserrat:400,700);
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,500,300);
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);

*
{
    margin:0;
    padding:0;
    font-family: "Montserrat", Times, serif;
}

html
{
    height: 100%;
    font-size:62.5%;
    overflow-x:hidden;
}

body 
{
	height: 100%;
	width:100%;
	font-family: 'Lato', sans-serif;
	color:#444;
	margin: 0px;
	background-color:grey;
}

/* *********************************** PROZORCE ZA LOG IN / REGISTER *********************************** */

#user, #pass
{
	display: block;
    position: absolute;
    top:42%;
    left:50%;
    margin-left:-133px;
    margin-top:-84px;
	z-index: 1;
	height:59px;
	width:270px;	
	background:transparent;
	border:none; 
	font-style:white;
	color:white;
	text-align:center;
}

#pass
{
    margin-top: -14px;
}

#greska
{
	display: block;
    position: absolute;
    top:42%;
    left:50%;
    margin-left:-133px;
    margin-top:65px;
	z-index: 1;
	height:59px;
	width:270px;	
	background:transparent;
	border:none; 
	color:red;
	text-align:center;
	
}


#logIn, #register, #kupacDugme, #prodavacDugme
{
	display: table;
    position: absolute;
    top:42%;
    left:50%;
    margin-left: 55px;
    margin-top: 110px;
	z-index: 1;	
	width:160px;
	font-size:14px;
	font-weight: 400;
	line-height: 45px;	
	border: 0 solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
	outline: 1px solid;
	outline-color: rgba(255, 255, 255, .5);
	outline-offset: 0px;
	text-shadow: none;
	transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
	transition-duration: 2s;
	-webkit-transition-duration: 2s;	
}
	
#register
{
    margin-left: -205px;
}
	
#logIn:hover, #register:hover 
{
	border: 1px solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 25px;
	text-shadow: 1px 1px 2px #427388; 
}			

#kupacDugme
{
	display: none;
    margin-left: -195px;
    margin-top: 40px;
	z-index: 3;	
}

#prodavacDugme
{
	display: none;
    margin-left: 45px;
    margin-top: 40px;
	z-index: 3;	
}

#registracijaPozadina
{
	height:200px;
	width:500px;	
	position: absolute;
    top:42%;
    left:50%;
	margin-left:-250px;
    margin-top:-84px;
	border: 2px solid white;
	z-index:3;
	position:absolute;
	opacity:1;
	display:none;
	background: #004276; /* For browsers that do not support gradients  */
    background: -webkit-radial-gradient(#0d0e0f, black); /* Safari 5.1 to 6.0 */ 
    background: -o-radial-gradient(#0d0e0f, black); /* For Opera 11.6 to 12.0 */ 
    background: -moz-radial-gradient(#0d0e0f, black); /* For Firefox 3.6 to 15 */ 
    background: radial-gradient(#0d0e0f, black); /* Standard syntax */ 
	/* iznad je bio prvi parametar #004276 */
    background-repeat: repeat;

}

#senka
{
	display: none;	
	height:100%;
	width:100%;
	z-index:2;
	position:absolute;
	opacity:0.8;
	background:black;
}

.zatvori 
{
    color: white;
    font-size: 28px;
    font-weight: bold;
	position:absolute;
	z-index:4;	
	position: absolute;
    top:42%;
    left:50%;
    margin-left: 205px;
    margin-top: -72px;
	width:30px;
	height:30px;
	background-color: transparent;
	border:none;
	display:none;
	
	/* POSTAVI IKSIC U CENTAR DIVA */
	text-align: center;
	vertical-align: middle;
	line-height: 30px; /* MORA DA BUDE ISTA VISINA KAO VISINA DIVA */
}

.zatvori:hover 
{
    text-decoration: none;
    cursor: pointer;	
	border: 1px solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 25px;
	text-shadow: 1px 1px 2px #427388; 	
}

#kupacDugme:hover, #prodavacDugme:hover
{
	border: 1px solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 25px;
	text-shadow: 1px 1px 2px #427388; 	
}

/* dirano */
#app  
{ 
     background: #0d0e0f; /* For browsers that do not support gradients  */
     background: -webkit-radial-gradient(#0d0e0f, black); /* Safari 5.1 to 6.0 */ 
     background: -o-radial-gradient(#0d0e0f, black); /* For Opera 11.6 to 12.0 */ 
     background: -moz-radial-gradient(#0d0e0f, black); /* For Firefox 3.6 to 15 */ 
     background: radial-gradient(#0d0e0f, black); /* Standard syntax */ 
     background-repeat: repeat; 
     text-align: center; 
     width: 100%; 
     height: 100%; 
     background-color:#0d0e0f; 
     display: block; 
     position: relative; 
     -webkit-box-sizing: border-box; 
     -moz-box-sizing: border-box; 
     box-sizing: border-box; 
     overflow: hidden;
} 

#app:after 
{
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 0;
    opacity: 1;
}

.animacija 
{
    display: block;
    width:770px;
    height:340px;
    position: absolute;
    top:42%;
    left:50%;
    margin-left:-385px;
    margin-top:-170px;
}

#mainlogo
{
  display:block;
}

#ceoBox
{
    stroke-dasharray: 1700; /* manual se gadja duzina celog objekta koji se crta*/
    stroke-dashoffset: 1700; /* linija iscrtavanja logoa */
    animation: path_a 9s linear  forwards;
    animation-delay: 0s;
    -webkit-animation: path_a 9s linear  forwards;
    -webkit-animation-delay: 0s;
    fill-opacity:0;
}

#ulazBox
{
  stroke-dasharray: 1500; /* manual se gadja duzina celog objekta koji se crta*/
  stroke-dashoffset: 1500; /* linija iscrtavanja logoa */
  animation: path_a 10s linear  forwards;
  animation-delay: 0s;
  -webkit-animation: path_a 10s linear  forwards;
  -webkit-animation-delay: 0s;
  fill-opacity:0;
}

#user, #pass
{
	animation-name: example;
    animation-duration: 4s;
	animation-timing-function: ease-in;
}

@keyframes example 
{
    from 
	{
		opacity:0;
	}
    to
	{
		opacity:1;
	}
}

#logIn, #register
{
	animation-name: example;
    animation-duration: 6s;
	animation-timing-function: ease-in;
	
}

#register:active
{
	background:transparent;
	color:white;
}

#logIn:active
{
	background:transparent;
	color:white;
}

#registracijaPozadina, #kupacDugme, #prodavacDugme, .zatvori
{
	-webkit-animation-name: rotateIn;
	animation-name: rotateIn;
    animation-duration: 1s;	
}

@-webkit-keyframes rotateIn 
{
	from 
	{
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transform: rotate3d(0, 0, 1, -200deg);
		transform: rotate3d(0, 0, 1, -200deg);
		opacity: 0;
	}
	
	to 
	{
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}

@keyframes rotateIn 
{
	from 
	{
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transform: rotate3d(0, 0, 1, -200deg);
		transform: rotate3d(0, 0, 1, -200deg);
		opacity: 0;
	}
	
	to 
	{
		-webkit-transform-origin: center;
		transform-origin: center;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		opacity: 1;
	}
}

/* DOLE SE DEFINISE KAKO SE "ANIMIRANE" STVARI PONASAJU */

@keyframes line_a 
{
	0% 
	{
		stroke-dashoffset: 701;
	}
	50%
	{
		stroke-dashoffset: 0;
	}
	100% 
	{
		stroke-dashoffset: 0;
	}
}

@keyframes path_i 
{
	0% 
	{
		fill-opacity:0;
		stroke-opacity:0;
	}
	50%
	{
		fill-opacity:0.0;
	}
	75%
	{
		stroke-opacity:1.0;
	}
	100% 
	{
		fill-opacity:0.0;
		stroke-opacity:1.0;
	}
}

@keyframes path_a 
{
	0% 
	{
		stroke-dashoffset: 1700;
	}
	70%
	{
		fill-opacity:0;
		stroke-dashoffset: 0;
	}
	90%
	{
		fill-opacity:0.0;
	}
	100% 
	{
		fill-opacity:0.3;
		stroke-dashoffset: 0;
	}
}

@-webkit-keyframes line_a 
{
	0% 
	{
		stroke-dashoffset: 701;
	}
	50%
	{
		stroke-dashoffset: 0;
	}
	100% 
	{
		stroke-dashoffset: 0;
	}
}

@-webkit-keyframes path_i 
{
	0% 
	{
		fill-opacity:0;
		stroke-opacity:0;
	}
	50%
	{
		fill-opacity:0.0;
	}
	75%
	{
		stroke-opacity:0.0;
	}
	100% 
	{
		fill-opacity:0.3;
		stroke-opacity:1.0;
	}
}

@-webkit-keyframes path_a 
{
	0% 
	{
		stroke-dashoffset: 1700;
	}
	70%
	{
		fill-opacity:0;
		stroke-dashoffset: 0;
	}
	90%
	{
		fill-opacity:0.0;
	}
	100% 
	{
		fill-opacity:0.3;
		stroke-dashoffset: 0;
	}
}

@-webkit-keyframes fadeOut 
{ 
    0% 
	{
		opacity: 1;
	} 
    100% 
	{
		opacity: 0;
	} 
} 

@keyframes fadeOut 
{ 
    0% 
	{
		opacity: 1;
	}	
    100% 
	{
		opacity: 0;
	} 
} 

@-webkit-keyframes fadeIn 
{ 
    0% 
	{
		opacity: 0;
	} 
    100% 
	{
		opacity: 1;
	} 
} 

@keyframes fadeIn 
{ 
    0% 
	{
		opacity: 0;
	} 
    100% 
	{
		opacity: 1;
	} 
}

#slikaLogo{
	width:100px;
  	margin-top:30px;
}

#odgSaBackenda{
	font-size: 5rem;
	color: white;
	margin-top: 500px;
}

</style>
