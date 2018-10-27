<template>
	<div class="user page">
		<Header />

		<div id="container">
			
			<div id="user_data">
				<div id="user_name">User Userovic</div>
				<div id="user_total_purchases">Total purchases: 20</div>
				<div id="user_total_sales">Total sales: 10</div>
				<div id="user_total_active_ads">Active ads: 2</div>

				<form>
					<label id="form_name">User details:</label>
					<br>
					<br>
					<label for="email">E-mail: </label>
					<br>
					<input type="email" placeholder="user@user.com">
					<br>
					<label for="current_password">Current password: </label>
					<br>
					<input type="password" placeholder="password">
					<br>
					<label for="new_password">New password: </label>
					<br>
					<input type="password" placeholder="password">
					<br>
					<label for="repeat_new_password">Repeat new password: </label>
					<br>
					<input type="password" placeholder="password">
					<br>
					<button id="confirm_button">CONFIRM</button>					
				</form>
			</div>

			<div id="image_container">
				<img id="user_avatar" src="../slike/avatar.png">
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

.user {
	height: 100%;
	width: 100%;
}

#container{
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 55% 45%;
}

#user_data{
	height: 70%;
	width: 100%;
	padding-top: 5%;
	padding-bottom: 10%;

	color: white;
	font-family: 'Lato', sans-serif;
	font-size: 1vw;

	display: grid;
	grid-template-rows: 20% 3% 3% 3% auto auto;

}

#user_name {
	align-self: center;
	justify-self: center;

	font-weight: 400;
	font-size: 3vw;
}

#image_container {
    border:3px solid darkred;
	background-color: rgb(238, 237, 237);
	/* TODO ANDRIJA dakle gospodar weba je resio problem reskaliranja idemoooooo */
	width: 30vw;
	height: 30vw;
	margin-right: 10%;
}

#user_avatar {
	width: 100%;
}

#user_total_purchases, #user_total_sales, #user_total_active_ads {
	align-self: center;
	justify-self: center;
}

form {
	padding-left: 10%;
	align-self: end;
}

#form_name {
	font-size: 1.5vw;
}

label {
	font-size: 0.7vw;
}

input {
	background: transparent;
	color: white;
	line-height: 30px;
	margin: 20px 20px 20px 50px;
	border: none;
	border-bottom: 1px solid white;	
	width: 30%;
	font-size: 0.8vw;
}

/* TODO ANDRIJA ovo cu doteram  */
button {
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	float:left;
	width: 20%;
	border: #fbfbfb solid 2px;
	cursor:pointer;
	background: darkred; /* For browsers that do not support gradients  */
    background: radial-gradient(darkred, black); /* Standard syntax */ 
    background-repeat: repeat; 
	color:white;
	font-size:15px;
	padding-top:12px;
	padding-bottom:12px;
	margin-top: 2%;
	margin-left: 9%;
	transition: all 0.3s;
	font-weight:700;
}

button:hover {
	color: black;
}
	
</style>
