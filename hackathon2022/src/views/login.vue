<template>
  <div class="login">
    <div class="container">
      <div class="main-writing">
        <h1>Log in to MOODSPOT</h1>
        <form action="action_page.php" method="post">
          <div class="imgcontainer">
          </div>

          <div class="container">
            <label for="email"><b>Email</b></label>
            <input
              type="text"
              placeholder="Enter Email"
              name="uname"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
      <div class="button" type="submit">
        <router-link to="/first-question"
          ><HelloWorld msg="Login"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "login",
  components: {
    HelloWorld,
  },
};
</script>


<style scoped>
.login {
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
  display: flex;
  flex-direction: column;
  margin: 4rem;
}

.home-image {
  flex: 4;
  padding: 15vw;
}

.button {
  flex: 2;
  margin: 2rem;
  text-align: center;
}
</style>