<template>
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
</template>

<script>
// @ is an alias to /src
import NextBtn from "@/components/NextBtn.vue";

export default {
  name: "login",
  components: {
    NextBtn,
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
}
</style>
