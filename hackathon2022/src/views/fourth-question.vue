<template>
  <div class="fourth">
    <div class="container">
      <div class="fourth-qustion-box">
        <h1>
          What happend at {{ fourthAnsweruestion }}? Can you tell me more ?
        </h1>
        <div class="button-1">
          <selectbutton msg="YES" v-on:click="answer = true" />
          <router-link to="/fifth-question"
            ><selectbutton msg="NO" v-on:click="answer = false"
          /></router-link>
        </div>
      </div>
<<<<<<< HEAD
      <div class="content" v-if="answer">
        <textarea
          cols="0"
          rows="10"
          class="content-input"
          v-model="text"
        ></textarea>
        <button class="submit-button" v-on:click="showNextButton()">
          submit
        </button>
      </div>
      <div id="nextButton" v-if="answer">
        <router-link to="/fifth-question"
          ><HelloWorld msg="Next"
        /></router-link>
=======
      <div class="button">
        <selectbutton msg="Yes" />
        <router-link to="/fifth-question">
          <selectbutton msg="NO" v-on:click="answer = false" /></router-link>
        <router-link to="/fifth-question"><HelloWorld msg="Next"/></router-link>
>>>>>>> f3ba9b0d0edc068db8a2d7458481b2f0086a3f61
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
  name: "fourth",
  components: {
    selectbutton,
    HelloWorld,
  },
  data() {
    return {
      answer: false,
      message: "",
    };
  },
};
</script>

<style scoped>

.fourth {
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

.fourth-qustion-box {
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

.content {
  background-color: bisque;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem 0.25rem;
  text-align: right;
}

.content-input {
  width: 100%;
  background-color: bisque;
  border: none;
  outline: none;
  padding: 0.25rem 0.5rem 0.5rem 0;
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

.submit-button {
  text-decoration: none;
  color: inherit;
  color: white;
  background: goldenrod;
  border: 0;
  border-radius: 10px;
  text-align: center;
  padding: 0.5rem 1rem;
}

.submit-button:hover {
  background-color: #f2f3ae;
  color: #020122;
}

#nextButton {
  margin: auto;
}


</style>