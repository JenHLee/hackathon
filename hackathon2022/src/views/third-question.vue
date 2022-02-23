<template>
  <div class="third">
    <div class="container">
      <div class="third-qustion-box">
        <h1>{{ name }} Would you like to elaborate on this?</h1>
        <div class="button-1">
          <router-link to="/third-yes">
            <NextBtn msg="YES" v-on:click="answer = true" />
          </router-link>
          <router-link to="/fourth-question">
            <NextBtn msg="NO" v-on:click="answer = false" />
          </router-link>
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NextBtn from "@/components/NextBtn.vue";

export default {
  name: "third",
  components: { NextBtn },
  data() {
    return {
      name: localStorage.username,
    };
  },
};
</script>

<style scoped>
.third {
  padding-top: 12%;
  box-sizing: border-box;
  height: 100vh;
  background: url("../img/bg-1.gif");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-size: cover;
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

.button-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 3rem;
}
</style>
