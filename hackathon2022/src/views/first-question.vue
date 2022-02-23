<template>
  <div class="first">
    <div class="container">
      <div class="first-qustion-box">
        <h1>{{ name }} How are you today?</h1>
      </div>
      <div class="moodrange">
        <img :src="changeIcon(pic)" />
        <figcaption v-text="emotion"></figcaption>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="4"
          step="1"
          v-model="value"
          v-on:change="changeIcon"
        />
      </div>
      <div class="button" @click="update" :disabled="!emotion">
        <router-link to="/second-question">
          <HelloWorld msg=">" />
        </router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "first",
  components: {
    HelloWorld,
  },
  data() {
    return {
      value: 2,
      emotion: "sdfsfs",
      name: localStorage.username,
    };
  },
  methods: {
    async update() {
      console.log(this.type);
      const response = await axios.put("api/6211e5f3746a29fbd65ad678", {
        answer: this.type,
      });
      response.data = this.answer;
    },
    changeIcon: function () {
      if (this.value == 0) {
        this.emotion = "REALLY TERRIBLE";
        this.type = "park";
        return require("@/img/icon0.svg");
      } else if (this.value == 1) {
        this.emotion = "SOMEWHAT BAD";
        this.type = "cafe";
        return require("@/img/icon25.svg");
      } else if (this.value == 2) {
        this.type = "recreation_center";
        this.emotion = "OKAY";
        return require("@/img/icon50.svg");
      } else if (this.value == 3) {
        this.emotion = "PRETTY GOOD";
        this.type = "restaurant";
        return require("@/img/icon75.svg");
      } else {
        this.emotion = "SUPER AWESOME";
        this.type = "finedining_restaurant";
        return require("@/img/icon100.svg");
      }
    },
  },
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
  background-size: cover;
}

.container {
  display: flex;
  flex-direction: column;
  margin: auto;
}

.first-question-box {
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}

.moodrange {
  margin: auto;
  padding-top: 1rem;
  padding-bottom: 2rem;
  background-color: rgb(219, 189, 161);
  width: 20rem;
  height: 20rem;
  border-radius: 5rem;
  text-align: center;
  flex: 4;
}

figcaption {
  text-align: center;
  font-weight: bold;
}

#volume {
  margin-top: 1rem;
}

.question {
  margin-bottom: 3rem;
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

img {
  width: 10rem;
}
</style>
