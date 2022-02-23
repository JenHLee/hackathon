<template>
  <div class="home">
    <loading v-if="loadingOn" />
    <div v-else class="container">
      <div class="main-writing">
        <h1>MOOD SPOT</h1>
        <h2 v-if="userNameRegistered()">HELLO</h2>
        <h2 v-else>{{ name }}</h2>
        <h2>Check Your Mood, Find Your Spot</h2>
      </div>
      <div class="button" v-if="userNameRegistered()">
        <router-link to="/login"><NextBtn msg="START" /></router-link>
      </div>
      <div class="button" v-else>
        <router-link to="/first-question"><NextBtn msg="START" /></router-link>
        <NextBtn msg="Remove" v-on:click="remove" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NextBtn from "@/components/NextBtn.vue";
import loading from "@/components/loading.vue";

export default {
  name: "Home",
  components: {
    NextBtn,
    loading,
  },
  data() {
    return {
      loadingOn: true,
      name: "HELLO " + localStorage.username,
    };
  },
  mounted() {
    setTimeout(() => (this.loadingOn = false), 4000);
  },
  methods: {
    userNameRegistered: function () {
      console.log("test");
      if (localStorage.getItem("username") === null) {
        console.log("test");
        return true;
      } else {
        return false;
      }
    },
    remove: function () {
      localStorage.removeItem("username");
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 8vw;
  font-weight: bold;
}
h2 {
  font-size: 2vw;
}
.home {
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-content: center;
  background-repeat: no-repeat;
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
