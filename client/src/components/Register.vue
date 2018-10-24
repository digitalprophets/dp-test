<template>
	<div class="register page">	
		
        <div class="header"> 
            <div class="header_content">
				Welcome to the Divine Shop! 
		</div>
        </div>

    	<div id="main_content">
            <div id="message">
                <h1>Please fill in all of the boxes <br> and, when you are ready, click register!</h1>
            </div>

            <!-- TODO ANDRIJA ovo method i enctype xD -->
		    <form method="post" enctype="multipart/form-data" @submit.prevent="register" @keyup.enter="register">
                <p class="name">
                    <input v-model="username" type="text" class="feedback-input" required placeholder="USERNAME" id="name" />
                </p>
                <p class="email">
                    <input v-model="email" type="email" required  class="feedback-input" id="email" placeholder="EMAIL" />
                </p>
                <p class="email">
                    <input v-model="password" type="password" required  class="feedback-input" id="email" placeholder="PASSWORD" />
                </p>
                <p class="email">
                    <input v-model="password_rep" type="password" required  class="feedback-input" id="email" placeholder="REPEAT PASSWORD" />
                </p>
                    
                <button type="submit" class="button">REGISTER</button>
            </form>
            <!-- TODO ANDRIJA ZAJEBANCIJA -->
            <div style="color: red; font-size: 2rem;" id="poruka">{{ poruka }} </div>
        </div>
  	</div>
</template>

<script>
	export default {
    	name: 'register',
		data() {
			return {
				username:'',
				email:'',
                password:'',
                password_rep:'',
                poruka: ''
			}
        },
        methods: {
        register() {
            this.poruka = 'pederu'
            // TODO ANDRIJA TODO VELJKO cekamo backend da prihvati ovo
			// try {
			// 	const response = await AuthenticationService.register({
            // 		username: this.username,
            //      email: this.email,
            // 		password: this.password,
            //      password_rep: this.password_rep // TODO ANDRIJA DA LI DA SALJEM OVAKO
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
        }
  }
    }
</script>

<style scoped>

.register {
	height: 100%;

    display: grid;
    grid-template-rows: 50px auto;
    grid-template-areas:
		"header"
        "main_content";
	color: white;
}

.header {
    background-color:darkred;
    padding:10px;
	border: 2px solid white;
	font-size: 2rem;

    display: grid;

	font-weight: bold;
	-webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
			animation-delay: 1s;
}

.header_content{
    width: fit-content;

    align-self: center;
    justify-self: center;
}

.header_content:hover {
	cursor: pointer;
}

#main_content {
   	/* grid-area: content; */
	justify-self: center;
    align-self: center;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: 25% auto;
}

#message {
    padding: 50px;
    overflow: hidden;
    align-self: center;
    justify-self: center;
    text-align: center;
}

form {
	background-color:rgba(72,72,72,0.4);
	padding:35px;
    position: relative;
    width: 450px;
    height: 330px;
    border-radius: 7px;
    align-self: top;
    justify-self: center;
}

.feedback-input {
	color:#3c3c3c;
	font-family: Helvetica, Arial, sans-serif;
	font-weight:500;
	font-size: 18px;
	border-radius: 0;
	line-height: 22px;
	background-color: #fbfbfb;
	padding: 13px 13px 13px 54px;
	margin-bottom: 10px;
	width:100%;
	box-sizing: border-box;
	border: 3px solid rgba(0,0,0,0);
}

.feedback-input:focus {
	background: #fff;
	border: 3px solid darkred;
	color: darkred;
	outline: none;
	padding: 13px 13px 13px 54px;
}

.button {
	font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	float:left;
	width: 100%;
	border: #fbfbfb solid 4px;
	cursor:pointer;
	background: #0d0e0f; /* For browsers that do not support gradients  */
    background: radial-gradient(#0d0e0f, black); /* Standard syntax */ 
    background-repeat: repeat; 
	color:white;
	font-size:24px;
	padding-top:22px;
	padding-bottom:22px;
	transition: all 0.3s;
	font-weight:700;
}

.button:hover {
	color: darkred;
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

</style>
