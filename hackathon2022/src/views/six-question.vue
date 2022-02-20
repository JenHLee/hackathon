<template>
  <div class="six">
    <div class="container">
      <div class="six-qustion-box">
        <h1>Would you like me to show you a special place that'll help you get calm and mindful at any moment?</h1>
      </div>
      <div class="button">
        <selectbutton msg="Yes" />
        <selectbutton msg="No" />
        <router-link to="/seven-question"><HelloWorld msg="Next"/></router-link>
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
  name: "six",
  components: {
    selectbutton,
    HelloWorld,
  },
};
</script>

<style scoped>

.six {
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

.six-qustion-box {
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