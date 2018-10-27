<template>
	<div class="product page">
		<Header />

		<div id="container">
			<div id="image_containter">
				<img id="product_image" src = "../slike/proba.jpg"/>
			</div>

			<div id = "product_data">
				<div id = "product_name">Veoma povoljna bicikla</div>
				<div id = "product_description">
					&emsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
					sunt in culpa qui officia deserunt mollit anim id est laborum
				</div>
				<div id = "product_price">20 RSD</div>
				
				<!-- DUGME NE SME DA IME TYPE DUGME DA BI RADILA FORMA.. -->
                <button id="purchase_button">PURCHASE</button>
			</div>

		</div>
	</div>
</template>

<script>
import Header from './Header.vue'

export default {
	components: {
			Header
		}
	}
</script>

<style scoped>

.product {
	height: 100%;
	width: 100%;
	margin: 0;
	color: white;
}


#container {
    margin-top: 100px;
    width:100%;	
    color:white;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-auto-rows: 500px;
}

#image_containter {
	height: 100%;
	width: 100%;
	display: grid;
}

#product_image {	
	width:80%;
	background:transparent;   
	padding:6px;
    border:1px solid #999999;
	align-self: center;
	justify-self: center;
}

#product_data {
	float:left;
	height:100%;	
	width: 100%;
	font-family: 'Lato', sans-serif;
	align-self: center;
	justify-self: center;
	display: grid;
	grid-template-rows: 10% 65% 10% 15%
}

#product_name {
	font-size: 30px;
	align-self: center;
	justify-self: center;
}

#product_description {
	padding:10%;
	word-wrap: break-word;
	font-size: 16px;
	align-self: top;
	justify-self: center;
}

#product_price {
	word-wrap: break-word;
	font-size: 16px;
	font-weight:bold;
	justify-self: center;
	align-self: top;
}

#purchase_button {
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	float:left;
	width: 230px;
	height: 60px;
	border: #fbfbfb solid 4px;
	cursor:pointer;
	background: darkred;
    background: -webkit-radial-gradient(darkred, black);
    background: -o-radial-gradient(darkred, black);
    background: -moz-radial-gradient(darkred, black);
    background: radial-gradient(darkred, black);
    background-repeat: repeat; 
	color:white;
	font-size: 20px;
	padding-top: 15px;
	padding-bottom: 15px;
	transition: all 0.3s;
	font-weight: 600;	
	align-self:center;
	justify-self: center;
}

#purchase_button:hover {
	background-color: rgba(0,0,0,0);
	color: #0d0e0f;
}

@media all and (max-width: 500px) {
	#container {
		width:100%;	
		height: 100%;
		margin-top: 50px;
		grid-template-columns: auto;
		grid-auto-rows: 50%;
	}

	#image_containter {
		height: 100%;
		object-fit: contain;
		width: 100%;
	}

	#product_image {	
		align-self: center;
		justify-self: center;
		height: auto;
		width: 80%;
		object-fit: contain;
	}

	#product_data {
		grid-template-rows: 10% 65% 10% 15%
	}

	#product_name {
		font-size: 10px;
	}

	#product_description {
		padding:5%;
		font-size: 8px;
	}

	#product_price {
		font-size: 8px;
		font-weight:bold;
	}

	#purchase_button {
		width: 115px;
		height: 30px;
		border: #fbfbfb solid 2px;
		font-size: 10px;
		padding-top: 7px;
		padding-bottom: 7px;
		font-weight: 300;	
	}
}
</style>
