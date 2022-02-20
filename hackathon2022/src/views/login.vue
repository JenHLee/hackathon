<template>
<div class="login">

        <div class="container">
            <div class="username-container">
                <input class="username-placeholder" type="text" placeholder="Your name here" v-model="username"/>
            </div>
            <div class="button" type="submit">
                <router-link to="/first-question">
                    <NextBtn msg="ADD" />
                </router-link>
            </div>
        </div>
</div>

</template>

<script>
// @ is an alias to /src
import NextBtn from "@/components/NextBtn.vue";

export default {
    name: "login",
    components: {
        NextBtn,
    },
    data() {
        return {
            username: ""
        }
    },
    mounted() {
        if (localStorage.username) {
            this.username = localStorage.username;
        }
    },
    watch: {
        username(newName){
            localStorage.username = newName
        }
    }
};
</script>

<style scoped>
.login {
    box-sizing: border-box;
    height: 100vh;
    background: url("../img/bg-1.gif");
    background-size: 100%;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}


.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}

.button {
    flex: 2;
    text-align: center;
>>>>>>> bba217b1ffd6fc73b71cc99595f4c2d388dab07b
}


.username-placeholder {
	display: block;
	margin: auto;
	width: 10rem;
	min-width: 150px;
	padding: 10px;
	text-align: center;
	background: rgba(223,235,228,.8); 
	font-size: 20px; 
	caret-color: #bf7950;
	border-radius: 15px;
	border: 3px solid #bf7950;
} 

    inpute[type=text]{
	background: rgba(223,235,228,.8); 
	outline: none; 
}

</style>
