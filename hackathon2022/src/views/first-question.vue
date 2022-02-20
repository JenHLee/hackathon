<template>
  <div class="first">
    <div class="container">
<<<<<<< HEAD
      <div class="first-qustion-box">Welcome, how are you today?</div>
      <div class="moodrange">
        <img :src="changeIcon()" />
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
      <div class="button">
        <router-link to="/second-question">
          <HelloWorld msg="Next" />
        </router-link>
        <router-view />
      </div>
=======
        <div class="first-qustion-box">
            <h1>How are you today?</h1>
        </div>
        <div class="moodrange">
            <img :src="changeIcon(pic)" />
            <figcaption v-text="emotion"></figcaption>
            <input type="range" id="volume" name="volume" min="0" max="4" step="1" v-model="value" v-on:change="changeIcon" />
        </div>
        <div class="button">
            <router-link to="/second-question">
                <HelloWorld msg=">" />
            </router-link>
            <router-view />
        </div>
        {{ value }}
        {{ emotion }}
>>>>>>> 5b5b67d30da1884f3eca504ad81c1b945c1a8f7a
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
      value: 3,
      emotion: "sdfsfs",
      name: "",
    };
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
      console.log('now pretend I did more stuff...');
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
<<<<<<< HEAD
  },
  methods: {
    changeIcon: function () {
      if (this.value == 0) {
        this.emotion = "REALLY TERRIBLE";
        return require("@/img/icon0.svg");
      } else if (this.value == 1) {
        this.emotion = "SOMEWHAT BAD";
        return require("@/img/icon25.svg");
      } else if (this.value == 2) {
        this.emotion = "OKAY";
        return require("@/img/icon50.svg");
      } else if (this.value == 3) {
        this.emotion = "PRETTY GOOD";
        return require("@/img/icon75.svg");
      } else {
        this.emotion = "SUPER AWESOME";
        return require("@/img/icon100.svg");
      }
=======
    data() {
        return {
            value: 2,
            emotion: "sdfsfs",
        };
    },

    methods: {
        changeIcon: function () {
            if (this.value == 0) {
                this.emotion = "REALLY TERRIBLE";
                return require("@/img/icon0.svg");
            } else if (this.value == 1) {
                this.emotion = "SOMEWHAT BAD";
                return require("@/img/icon25.svg");
            } else if (this.value == 2) {
                this.emotion = "OKAY";
                return require("@/img/icon50.svg");
            } else if (this.value == 3) {
                this.emotion = "PRETTY GOOD";
                return require("@/img/icon75.svg");
            } else {
                this.emotion = "SUPER AWESOME";
                return require("@/img/icon100.svg");
            }
        },
>>>>>>> 5b5b67d30da1884f3eca504ad81c1b945c1a8f7a
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
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  margin: 4rem;
=======
    display: flex;
    flex-direction: column;
    margin: auto;
>>>>>>> 5b5b67d30da1884f3eca504ad81c1b945c1a8f7a
}

.first-question-box {
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}

.moodrange {
<<<<<<< HEAD
  margin: auto;
  padding-top: 5rem;
  background-color: rgb(219, 189, 161);
  width: 20rem;
  height: 20rem;
  border-radius: 5rem;
  text-align: center;
  flex: 4;
=======
    margin: auto;
    padding-top: 1rem;
    padding-bottom: 2rem;
    background-color: rgb(219, 189, 161);
    width: 20rem;
    height: 20rem;
    border-radius: 5rem;
    text-align: center;
    flex: 4;
>>>>>>> 5b5b67d30da1884f3eca504ad81c1b945c1a8f7a
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
<<<<<<< HEAD
  text-align: center;
=======
    display: flex;
    flex: 2;
    margin: auto;
    text-align: center;
    max-width: 30rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
>>>>>>> 5b5b67d30da1884f3eca504ad81c1b945c1a8f7a
}

img {
  width: 10rem;
}
</style>
