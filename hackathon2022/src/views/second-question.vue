<template>
  <div class="second">
    <div class="container">
      <div class="second-qustion-box">
        <h1>Please, tell me what made you feel {{ firstAnswer }}</h1>
      </div>
      <div class="button">
        <selectbutton msg="WORK" />
        <selectbutton msg="STUDIES" />
        <selectbutton msg="RELATIONSHIP" />
        <selectbutton msg="RELAXING" />
        <selectbutton msg="MUSIC" />
        <selectbutton msg="FOOD" />
        <selectbutton msg="FRIENDS" />
        <selectbutton msg="MORE" />
        <router-link to="/third-question"
          ><HelloWorld msg="Next"
        /></router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import selectbutton from "@/components/selectbutton.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Second",
  components: {
    selectbutton,
    HelloWorld
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
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}

.button {
  display: flex;
  flex: 2;
  margin: auto;
  text-align: center;
  max-width: 30rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

</style>