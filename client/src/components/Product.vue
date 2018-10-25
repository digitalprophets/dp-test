<template>
	<div class="product page">
        <!-- TODO ANDRIJA da ne zaboravim da napravim header a i mozda jos nesto kao zasebnu komponentu -->
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

		<div id="container">
		
			<div id="divSlikaOglasa">
				<img id="slikaOglasa" src = "../slike/proba.jpg"/>
			</div>
		
			<div id = "divNaslovOglasa">
				<div id = "naslovOglasa">Veoma povoljna bicikla</div>
				<div id = "opisOglasa">nije kradena ide brze nego metak ide zamena moguca kontakt sms</div>
				<div id = "cenaOglasa">20 RSD</div>
				
				<!-- DUGME NE SME DA IME TYPE DUGME DA BI RADILA FORMA.. -->
				<div id="divKupiDugme">
                    <button id="kupiDugme">KUPI</button>
                </div>
			</div>

		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>

.product{
	height: 100%;
	width: 100%;
	margin: 0;
    display: grid;
    grid-template-rows: 50px auto;
    grid-template-areas:
		"header"
    	"main_content";
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
      
	align-self: center;
	justify-self: center;
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

#container {
    margin-top: 40px;
    width:100%;	
    color:white;
}

#divSlikaOglasa {
	margin-top:6%;
	width:50%;
	height:100%;
	float:left;
}

#slikaOglasa {	
	width:70%;
	background:transparent;   
	padding:6px;
    border:1px solid #999999;
	margin-left:21%;
}

#divNaslovOglasa {
	margin-top:6%;	
	width:50%;
	float:left;
	height:100%;	
	font-family: 'Lato', sans-serif;
}

#naslovOglasa {
	font-size: 26px;
	text-align:center;
	padding-right:20%;
}

#opisOglasa {
	padding-top:10%;
	padding-left:5%;
	padding-right:20%;
	word-wrap: break-word;
	font-size: 16px;
}

#cenaOglasa {
	padding-top:20%;
	padding-right:20%;
	text-align:center;
	word-wrap: break-word;
	font-size: 16px;
	font-weight:bold;
}

#divKupiDugme {
	padding-top:5%;
	padding-right:20%;	
	display: flex;
	align-items: center;
	justify-content: center;
}

#kupiDugme {
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	float:left;
	width: 230px;
	border: #fbfbfb solid 4px;
	cursor:pointer;
	background: #004276; /* For browsers that do not support gradients  */
    background: -webkit-radial-gradient(darkred, black); /* Safari 5.1 to 6.0 */ 
    background: -o-radial-gradient(darkred, black); /* For Opera 11.6 to 12.0 */ 
    background: -moz-radial-gradient(darkred, black); /* For Firefox 3.6 to 15 */ 
    background: radial-gradient(darkred, black); /* Standard syntax */ 
    background-repeat: repeat; 
	color:white;
	font-size:20px;
	padding-top:15px;
	padding-bottom:15px;
	transition: all 0.3s;
	margin-top:-4px;
	font-weight:600;	
}

#kupiDugme:hover {
	background-color: rgba(0,0,0,0);
	color: #0d0e0f;
}
</style>
