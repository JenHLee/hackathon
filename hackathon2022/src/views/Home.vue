<template>
  <div class="home">
    <loading v-if="loadingOn" />
    <div v-else class="container">
      <div class="main-writing">
        <h1>MOOD SPOT</h1>
        <h2>Check Your Mood, Find Your Spot</h2>
      </div>
      <div class="button">
        <router-link to="/login"><HelloWorld msg="Start" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import loading from "@/components/loading.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    loading,
  },
  data() {
    return {
      loadingOn: true,
    };
  },
  mounted() {
    setTimeout(() => (this.loadingOn = false), 3000);
  }
};
</script>

<style scoped>
h1 {
  font-size: 8vw;
  font-weight: bold;
}
h2{
  font-size: 2vw;
}
.home {
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
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

