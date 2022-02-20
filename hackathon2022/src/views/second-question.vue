<template>
  <div class="second">
    <div class="container">
      <div class="second-qustion-box">
        <questionCard question="how is your day" />
      </div>
      <div class="button">
        <router-link to="/third-question"><HelloWorld msg="Next" /></router-link>
        <router-view />
        <HelloWorld msg="Next" />
        <HelloWorld msg="Next" />
        <HelloWorld msg="Next" />
        <HelloWorld msg="Next" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import questionCard from "@/components/questionCard.vue";

export default {
  name: "Second",
  components: {
    HelloWorld,
    questionCard
  },
};
</script>

<style scoped>

.second {
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

.second-qustion-box {
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