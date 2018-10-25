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

    	<div id="content">
      		<h1>Ovo je products page username je 
		  		<span id="korisnik" style="color:red;">{{ user }}</span> 
		  		a sifra je <span id="lozinka" style="color:blue;">{{pass}}</span>
			</h1>
			
		<div id ="oglasi">
				
				<!-- TODO ANDRIJA eslint smara pa sam stavio ovaj key iako nzm cemu sluzi -->
				<div v-for="n in 3" v-bind:key="n"> 
					<div class="col span1">
						<p> naziv </p>
						<div class="item">
							<img src="../slike/proba.jpg">
							<div class="item-overlay">
								<button class="dugmeta">cena</button>

							</div>
						</div>
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

.products{
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

.sekcije 
{
	width: 80%;
	margin: 0 auto;
	
}

.zaText 
{
    font-size:20px;
    font-size:2rem;
    margin: 40px;
}

p 
{
	line-height: 1.4;
}

.zaText h1 
{
	margin: 16px auto;
	text-align: center;
	text-transform: uppercase;
}

a 
{
	text-decoration: none;
	color: #3498db;
}


.redURad 
{
    clear: both;
    padding: 0px;
    margin: 0px;
    margin-bottom: 20px;
}

.col 
{
    display: block;
    float:left;
    margin: 1% 0 1% 8%;
}

.item
{
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
}

.col p, .col a
{
    text-transform: uppercase;
    display: block;
    text-align: center;
    color: #607D8B;
    font: 400 17px/30px "Roboto",sans-serif;
}

.item-overlay
{
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:rgba(27, 28, 28, 0);

    -moz-transition: background 0.3s;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
}

.item-overlay p, .item-overlay a
{
    position: relative;
    display: block;
    top: 50%; 
    width:100%;
    text-align: center;
    opacity: 0;
    transform: translateY(-50%);

    -moz-transition: opacity 0.3s;
    -webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
}

.item img 
{
    max-width: 100%;
    margin:0px;
    padding: 0px;
    vertical-align: bottom;
    
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.item:hover img 
{
    -moz-transform: scale(1.3);
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}

.item:hover .item-overlay
{
    background:rgba(27, 28, 28, 0.9); /* BOJA KAD SE STANE MISEM */
}

.item:hover .item-overlay p
{
    opacity: 1;
}

.item:hover .item-overlay a
{
    opacity: 1;
	height:100%;
}

/* majstorski poduhvat, div u linku da bi tekst u linku bio na sredini a link preko cele slike. medjutim to nije ni potrebno */
.divA
{
	padding-top:25%;
}

.dugmeta
{
	width:100%;
	height:100%;
	opacity:0;
	color: #607D8B;
    font: 400 17px/30px "Roboto",sans-serif;
}

.dugmeta:hover
{
	opacity:0.6;
	border:none;
	transition:0.5s;
	cursor: pointer;
}

.col:first-child 
{
	margin-left: 0; 
}

.grupa:before, .grupa:after 
{ 
	content:""; 
	display:table; 
}

.grupa:after 
{
	clear:both;
}

.span1
{
	width: 28%; 
}
</style>
