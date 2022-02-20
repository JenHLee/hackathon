<template>
  <div class="first">
    <div class="container">
      <div class="first-qustion-box">
        <img :src="changeIcon(pic)" />
        <input type="range" id="volume" name="volume" min="0" max="4" step="1"  v-model="value" v-on:change="changeIcon"/>
      </div>
      <div class="button">
        <router-link to="/second-question"><HelloWorld msg="Next" /></router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "first",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: 3
    }
  },
  methods: {
    changeIcon: function () {
      if (this.value == 0) {
        return require('@/img/icon0.svg')
      } else if (this.value == 1){
        return require('@/img/icon25.svg')
      } else if (this.value == 2){
        return require('@/img/icon50.svg')
      } else if (this.value == 3){
        return require('@/img/icon75.svg')
      } else {
        return require('@/img/icon100.svg')
      }
    }
  }
};
</script>

<style scoped>
.first {
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

.first-qustion-box {
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