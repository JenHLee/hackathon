<template>
  <div class="third">
    <div class="container">
      <div class="third-qustion-box">
        <h1>Would you like to elaborate on this?</h1>
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
        <router-link to="/fourth-question"
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
  name: "third",
  components: {
    selectbutton,
    HelloWorld,
  },
};
</script>

<style scoped>

.third {
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

.third-qustion-box {
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