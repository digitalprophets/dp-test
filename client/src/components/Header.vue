<template>
	<div class="header">	
        <div id="header"> 
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
            <div class="header_content" id="header_content5">
                {{ header_content5 }}
		    </div>
            <div class="header_content" id="header_content6">
                {{ header_content6 }}
		    </div>
        </div>
  	</div>
</template>

<script>
	export default {
    	name: 'register',
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
        }
        }
</script>

<style scoped>

#header {
    background-color:darkred;
    padding:10px;
	border: 2px solid white;
	font-size: 15px;
	font-weight: bold;
	-webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
	        animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
			animation-delay: 1s;
    color: white;
    display: grid;
    grid-template-columns: 17% 8% 8% 12% 45% 10%;
    grid-auto-rows: 25px;
}

.header_content{
    width: 100%;
    align-self: center;
    justify-self: center;
    text-align: center;
}

#header_content1{
    font-size: 25px;
}

#header_content5 {
    text-align: end;
}

</style>
