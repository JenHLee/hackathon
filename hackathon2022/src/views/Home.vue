<template>
  <div class="home">
    <div class="container">
      <div class="home-image">
      </div>
      <div class="button">
        <router-link to="/first-question"><HelloWorld msg="Start" /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";


export default {
  name: "Home",
  components: {
    HelloWorld
  },
};
</script>

<style scoped>
.home {
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 4rem;
}

.home-image {
  background-color: brown;
  flex: 4;
  padding: 15vw;
}

.button {
  flex: 2;
  margin: 2rem;
  background-color: bisque;
  text-align: center;
}
</style>

