<template>
  <div class="third">
    <div class="container">
      <div class="third-qustion-box">
        <h1>Would you like to elaborate on this?</h1>
        <div class="button-1">
          <selectbutton msg="YES" v-on:click="answer = true" />
          <selectbutton msg="NO" v-on:click="answer = false" />
        </div>
      </div>
      <div class="content" v-if="answer"> 
        <textarea cols="0" rows="7" class="content-input" v-model="text"></textarea>
        <button class="submit-button" v-on:click="showNextButton()">submit</button>
      </div>
      <div id="nextButton" v-else>
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
  data() {
    return {
      answer: false,
      message: ""
    };
  },
  mehotds: {
    showNextButton: function() {
      
    }
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

.button-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
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

 