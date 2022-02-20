<template>
<<<<<<< HEAD
  <div class="login">
    <div class="container">
      <div class="main-writing">
        <h1>Log in to MOOD SPOT</h1>
        <form action="action_page.php" method="post">
          <div class="login-container">
            <label for="email" id="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="uname"
              id="email_input"
              required
            />

            <label for="pw" id="pw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pw"
              id="pw_input"
              required
            />
          </div>
        </form>
      </div>
      <div class="button" type="submit">
        <router-link to="/first-question">
          <NextBtn msg="Login" />
        </router-link>
      </div>
    </div>
  </div>
=======
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
>>>>>>> bba217b1ffd6fc73b71cc99595f4c2d388dab07b
</template>

<script>
// @ is an alias to /src
import NextBtn from "@/components/NextBtn.vue";

export default {
<<<<<<< HEAD
  name: "login",
  components: {
    NextBtn,
  },
=======
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

>>>>>>> bba217b1ffd6fc73b71cc99595f4c2d388dab07b
};
</script>

<style scoped>
.login {
<<<<<<< HEAD
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-size: cover;
}

.main-writing {
  text-align: center;
}

.container {
  padding-top: 3vw;
}

.login-container {
  width: 20vw;
  height: 20vw;
  padding-top: 5vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 4rem;
}

#email_input,
#pw_input {
  margin-bottom: 2vw;
}

.home-image {
  flex: 4;
  margin: 0.2vw;
  padding: 15vw;
}

.button {
  flex: 2;
  margin: 2rem;
  text-align: center;
=======
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
