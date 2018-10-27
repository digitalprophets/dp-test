<template>
	<div class="products page">	
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

    	<div id="main_content">
			<div id="main_content_text">
				<h1>Ovo je products page username je 
		  			<span id="korisnik" style="color:red;">{{ user }}</span> 
		  			a sifra je <span id="lozinka" style="color:blue;">{{pass}}</span>
				</h1>
			</div>
			
			<div id ="product_section">
				<!-- TODO ANDRIJA eslint smara pa sam stavio ovaj key iako nzm cemu sluzi -->
				<div v-for="n in 5" v-bind:key="n" class="product">
					<img src="../slike/proba.jpg">
					<div class="button_container">
						<button>KUPI ME ZA DVE-TRI LAZI</button>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
import ProductService from '../services/ProductService'

	export default {
    	name: 'products',
		data() {
			return {
				user:'',
				pass:'',
				products: null,
				proizvodi: [
					{
						id: '1',
						name: 'bicikla1',
						price: '10',
						category: '',
						description: '', 
						image: ''
					},
					{
						id: '2',
						name: 'bicikla2',
						price: '20',
						category: '',
						description: '', 
						image: ''
					},
					{
						id: '3',
						name: 'bicikla3',
						price: '30',
						category: '',
						description: '', 
						image: ''
					}
				]
			}
		},
   		created() {
       	    this.user = this.$route.params.username;
           	this.pass = this.$route.params.password;
		},
		async mounted() {
			// TODO ANDRIJA ovde uhvati proizvode sa backenda
			// this.products = (await ProductService.getAllProducts()).data
			// console.log('products', this.products)
		}
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
</script>

<style scoped>

.products{
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

#main_content {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 15% auto;
}

#main_content_text {
	display: grid;
}

#main_content_text h1 {
	align-self: center;
	justify-self: center;
}

#product_section {
	width: 80%;
	align-self: top;
	justify-self: center;
	display: grid; 
	grid-template-columns: auto auto auto;
	grid-auto-rows: 300px;
	grid-gap: 10px;
}

.product {
	align-self: center;
	justify-self: center;
	height: 250px;
	width: 350px;
}

.product img {
	width: 100%;
}

.button_container {
	display: grid;
}

button {
	justify-self: center;
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	float:left;
	border: #fbfbfb solid 2px;
	cursor:pointer;
	background: #0d0e0f;
    background: radial-gradient(#0d0e0f, black); 
    background-repeat: repeat; 
	color:white;
	font-size:10px;
	padding: 3px;
	transition: all 0.3s;
	font-weight:700;
}

#porukaZaKupca {
	text-align: center;
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	font-size: 20px;
	color: red;
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

@media all and (max-width: 1300px) {
	#product_section {
		grid-auto-rows: 300px;
		grid-gap: 3px;
	}

	.product {
		height: 150px;
		width: 250px;
	}
}

@media all and (max-width: 900px) {
	#product_section {
		grid-auto-rows: 150px;
		grid-gap: 3px;
	}

	.product {
		height: 90px;
		width: 120px;
	}
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
