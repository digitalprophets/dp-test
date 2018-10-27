<template>
	<div class="header">	
        <div id="header_component"> 
            <div class="header_content" id="header_content1">
                {{ header_content1 }}
		    </div>
            <div class="header_content" id="header_content2">
                {{ header_content2 }}
            </div>
            <div class="header_content" id="header_content3">
                {{ header_content3 }}
            </div>
            <div class="header_content" id="header_content4">
                {{ header_content4 }}
		    </div>
            <div v-on:click="openUser" class="header_content" id="header_content5">
                {{ header_content5 }}
		    </div>
            <div class="header_content" id="header_content6">
                {{ header_content6 }}
		    </div>

            <div id="dropdown_container">
                <button v-on:click="toggleDropdownItems" id="dropdown_button">Drop</button>
                <div id="dropdown_items">
                    <a href="#">{{ header_content2 }}</a>
                    <a href="#">{{ header_content3 }}</a>
                    <a href="#">{{ header_content4 }}</a>
                    <a v-on:click="openUser" href="#">{{ header_content5 }}</a>
                    <a href="#">{{ header_content6 }}</a>
                </div>
            </div>
        </div>
  	</div>
</template>

<script>
	export default {
        data(){
            return {
                flag: 1
            }
        },
	    props: {
            header_content1: {
                type: String,
                default: 'DivineShop'
            },
            header_content2: {
                type: String,
                default: 'My shop'
            }, 
            header_content3: {
                type: String,
                default: 'Add product'
            }, 
            header_content4: {
                type: String,
                default: 'Current balance: 0 RSD'
            }, 
            header_content5: {
                type: String,
                default: 'Username'
            }, 
            header_content6: {
                type: String,
                default: 'Logout'
            }
        },
        methods: {
            openUser() {
                this.$router.push({ name: 'user'})
            },
            toggleDropdownItems() {
                if (this.flag==1) {
                    document.getElementById("dropdown_items").style.display = "block"
                    this.flag=2;
                }
                else {
                    document.getElementById("dropdown_items").style.display = "none"
                    this.flag=1;
                }
            }
        }
        }
</script>

<style scoped>

#header_component {
    background-color:darkred;
    padding:10px;
	border: 2px solid white;
	font-weight: bold;
	-webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
			animation-delay: 1s;
    color: white;
    display: grid;
    grid-template-columns: 17% 8% 8% 15% 42% 10%;
    grid-auto-rows: 25px;
}

.header_content {
    width: 100%;
    align-self: center;
    justify-self: center;
    text-align: center;	
	-webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	        animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	animation-delay: 1s;
}

#header_content1{
    font-size: 24px;
}

#header_content5 {
    text-align: end;
}

#header_content5:hover {
    cursor: pointer;
}

#dropdown_button {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

#dropdown_container {
    position: relative;
    /* display: inline-block; */
    display: none;
}

#dropdown_items {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

#dropdown_items a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

#dropdown_items a:hover {background-color: #f1f1f1}

/* #dropdown_container:hover #dropdown_items {
    display: block;
} */

#dropdown_container:hover #dropdown_button {
    background-color: #3e8e41;
}

@media all and (max-width: 1280px) {

    #header_component {
        grid-template-columns: 17% 9% 9% 16% 39% 10%;
    }

    .header_content{
        font-size: 12px;
    }

    #header_content1{
        font-size: 22px;
    }
}

@media all and (max-width: 1024px) {

    #header_component {
        grid-template-columns: 17% 10% 10% 17% 36% 10%;
    }

    .header_content {
        font-size: 10px;
    }

    #header_content1 {
        font-size: 20px;
    }
}

@media all and (max-width: 750px) {
    
    #header_component {
        display: grid;
        grid-template-columns: 25% auto;
        grid-auto-rows: 25px;
    }

    /* .header_content {
            font-size: 8px; mozda? 
    } */

    #header_content2, #header_content3, #header_content4, #header_content5, #header_content6{
        display: none;
    }

    #dropdown_button {
        background-color: #4CAF50;
        color: white;
        padding: 6px;
        margin-right: 1vw;
        border: none;
        cursor: pointer;
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    	border: #fbfbfb solid 2px;
    	background: #0d0e0f; 
        background: radial-gradient(#0d0e0f, black);  
        background-repeat: repeat; 
    	font-weight:600;
        font-size: 14px;
    }

    #dropdown_container {
        position: relative;
        display: inline-block;
        align-self: center;
        justify-self: end;
    }

    #dropdown_items {
        display: none;
        position: absolute;
        right: 6px;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    #dropdown_items a {
        color: black;
        padding: 15px 12px;
        text-decoration: none;
        display: block;
        outline: 0;
    }

    #dropdown_items a:hover {
        background-color: #f1f1f1
    }


}

@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
            transform: scale(2);
    -webkit-filter: blur(2px);
            filter: blur(2px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}

</style>
