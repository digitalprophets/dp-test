<template>

	<div class="main page">
		
		<!-- TODO ANDRIJA OVERFLOW SLIKA TABELA -->
		<div id="image_container">
			<img id="logo_image" src="../test.png"/>
		</div>

		<div id="main_container">
			<form @submit.prevent="login" @keyup.enter="login">
				<input v-model="username" id="username" type="text" name="username" placeholder="Username"> <!-- skidam required sa kraja i odozdo-->
				<input v-model="password" id="password" type="password" name="password" placeholder="Password">
		
				<button id="login_button" name="login_button">Uloguj se</button>
				<!-- <button v-on:click="logIn" id="login_button" name="login_button">Uloguj se</button> -->
				<button v-on:click="register" type="button" id="register_button" name="register_button">Register</button>
			
				<label id="error"></label>
			</form> 
		
			<!-- TODO ANDRIJA prebaciti ovo u zasebnu komponentu? -->
			<div class="box">
				<svg style="z-index:9999;" id="mainlogo"  height="440" width="770">
					<g id="layer1" stroke-miterlimit="4" stroke-dasharray="none" transform="translate(0,-712.36218)">
						<path id="outer_line" stroke-linejoin="miter" d="m385, 755 L95, 755 L95, 1085 L385, 1085" 
							stroke="white" stroke-linecap="butt" stroke-width="5.5"> 
						</path>

						<path id="outer_line" stroke-linejoin="miter" d="m385, 755 L675, 755 L675, 1085 L385, 1085" 
							stroke="white" stroke-linecap="butt" stroke-width="5.5">
						</path>

						<path id="inner_input_box" stroke-linejoin="miter" d="m250, 800 L520, 800 L520, 860 L250, 860 Z" 
							stroke="white" stroke-linecap="butt" stroke-width="3.5">
						</path>

						<path id="inner_input_box" stroke-linejoin="miter" d="m520, 930 L250, 930 L250, 870 L520, 870 Z" 
							stroke="white" stroke-linecap="butt" stroke-width="3.5">
						</path>
				</g>
				</svg>
			</div>
		</div>
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
			username: '',
			password: '',
			primio: {}
		}
	},
  	methods: {
		register(){
			// TODO ANDRIJA cekam backend..
			this.$router.push({ name: 'register'})
		},
		async login(){
            // TODO ANDRIJA TODO VELJKO cekamo backend da prihvati ovo
			// try {
			// 	const response = await AuthenticationService.login({
			// 		username: this.username,
			// 		password: this.password
			// 	})
			// 	console.log(response.data)
			// 	this.primio = response.data;
			// 	if (this.primio.odgovor == "ok"){
			// 		// nek router prenese parametre
			// 		this.$router.push({ name: 'shop', params: { username: this.username, password: this.password }})
			// 	}
			// 	else this.$router.push('/error');
			// } catch (err) {
			//  	console.log(err);
			// }
			this.$router.push({ name: 'shop', params: { username: this.username, password: this.password }})
			// const formData = new FormData();
			// formData.append('korisnickoime', this.username); // "korisnickoime" : "staTiProsledim"
			// formData.append('sifra', this.password); // analogno
			// console.log(formData);
			// console.log(`usernamename: ${this.username}`);
			// console.log(`password: ${this.password}`);
		}
	}
}
</script>

<style>
/* OVO NE SME SCOPED JER GA APP OTVARA U SVOM I ONDA SE IGNORISE OVAJ STYLE SECTION.. */
.main {
	height: 100%;
    display: grid;
    grid-template-rows: 20% auto;
    grid-template-areas:
		"image_container"
        "main_container";
	color: white;
}

#image_container {
	align-self: center;
	justify-self: center;
}

#logo_image {
	width:100px;
  	margin-top:30px;
}

#main_container{
	align-self: center;
	justify-self: center;
}

#username, #password {
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

#password {
    margin-top: -14px;
}

#error {
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

#login_button, #register_button {
	display: table;
    position: absolute;
    top:42%;
    left:50%;
    margin-left: 45px;
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
	
#register_button {
    margin-left: -205px;
}
	
#login_button:hover, #register_button:hover {
	border: 1px solid;
	box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
	outline-color: rgba(255, 255, 255, 0);
	outline-offset: 25px;
	text-shadow: 1px 1px 2px #427388; 
}		

#register_button:active, #login_button:active {
	background:transparent;
	color:white;
}

.box {
    display: block;
    width:770px;
    height:340px;
    position: absolute;
    top:42%;
    left:50%;
    margin-left:-385px;
    margin-top:-170px;
}

#mainlogo {
  display:block;
}

#outer_line {
    stroke-dasharray: 1700; /* manual se gadja duzina celog objekta koji se crta*/
    stroke-dashoffset: 1700; /* linija iscrtavanja logoa */
    animation: path_a 9s linear  forwards;
    animation-delay: 0s;
    -webkit-animation: path_a 9s linear  forwards;
    -webkit-animation-delay: 0s;
    fill-opacity:0;
}

#inner_input_box {
  stroke-dasharray: 1500; /* manual se gadja duzina celog objekta koji se crta*/
  stroke-dashoffset: 1500; /* linija iscrtavanja logoa */
  animation: path_a 10s linear  forwards;
  animation-delay: 0s;
  -webkit-animation: path_a 10s linear  forwards;
  -webkit-animation-delay: 0s;
  fill-opacity:0;
}

#username, #password {
	animation-name: example;
    animation-duration: 4s;
	animation-timing-function: ease-in;
}

@keyframes example {
    from 
	{
		opacity:0;
	}
    to
	{
		opacity:1;
	}
}

#login_button, #register_button {
	animation-name: example;
    animation-duration: 6s;
	animation-timing-function: ease-in;
	
}

/* DOLE SE DEFINISE KAKO SE "ANIMIRANE" STVARI PONASAJU */
@keyframes line_a {
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

@keyframes path_i {
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

@keyframes path_a {
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

@-webkit-keyframes line_a {
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

@-webkit-keyframes path_i {
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

@-webkit-keyframes path_a {
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
</style>
