<template>
	<div class="products page">	
		<Header :header_content5="username" />

    	<div id="main_content">
			<div id="main_content_text">
				<h1>Welcome, {{ username }}</h1>
			</div>
			
			<div id ="product_section">
				<!-- TODO ANDRIJA eslint smara pa sam stavio ovaj key iako nzm cemu sluzi -->
				<div v-for="n in 5" v-bind:key="n" class="product">
					<img src="../slike/proba.jpg">
					<div class="button_container">
						<button v-on:click="goToProduct">KUPI ME ZA DVE-TRI LAZI</button>
					</div>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
import ProductService from '../services/ProductService'

// TODO ANDRIJA globalno definisati header? nzm jos kako
import Header from './Header.vue'

	export default {
    	name: 'products',
		data() {
			return {
				username:'',
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
		components: {
			Header
		},
   		created() {
       	    this.username = this.$route.params.username;
           	this.password = this.$route.params.password;
		},
		async mounted() {
			// TODO ANDRIJA ovde uhvati proizvode sa backenda
			// this.products = (await ProductService.getAllProducts()).data
			// console.log('products', this.products)
		},
		methods: {
			goToProduct() {
				this.$router.push({ name: 'product' })
			}
		}
	}

</script>

<style scoped>

.products {
	height: 100%;
	width: 100%;
	margin: 0;
	color: white;
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
	text-align: center;
	font-size: 22px;
	border: 1px solid white;
	padding: 10px;	
}

#product_section {
	width: 80%;
	align-self: top;
	justify-self: center;
	display: grid; 
	grid-template-columns: auto auto auto;
	grid-auto-rows: 400px;
	grid-gap: 20px;
}

.product {
	align-self: center;
	justify-self: center;
	height: 100%;
	width: 100%;
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
	float: left;
	border: #fbfbfb solid 2px;
	cursor: pointer;
	background: #0d0e0f;
    background: radial-gradient(#0d0e0f, black); 
    background-repeat: repeat; 
	color:white;
	font-size: 10px;
	padding: 3px;
	transition: all 0.3s;
	font-weight: 700;
}

@media all and (max-width: 1300px) {

	#main_content_text h1 {
		font-size: 18px;
	}

	#product_section {
		grid-auto-rows: 300px;
		grid-gap: 5px;
	}

}

@media all and (max-width: 900px) {

	#main_content_text h1 {
		font-size: 16px;
	}

	#product_section {
		grid-template-columns: auto auto;
	}
	
}

@media all and (max-width: 500px) {

	#main_content_text h1 {
		justify-self: center;
		font-size: 14px;
		width:60%;
		line-break: auto;
		text-align: center;
	}

	#product_section {
		margin-top: 6%;
		grid-template-columns: auto;
		grid-auto-rows: 350px;
	}

}

@media all and (max-width: 400px) {

	#product_section {
		grid-auto-rows: 260px;
	}
	
}

</style>
