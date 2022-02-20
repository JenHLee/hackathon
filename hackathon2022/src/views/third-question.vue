<template>
  <div class="third">
    <div class="container">
      <div class="third-qustion-box">
        <h1>Would you like to elaborate on this?</h1>
      </div>
      <div class="content">
        <textarea cols="0" rows="7" class="content-input"></textarea>
      </div>
      <div class="button">
        <selectbutton msg="YES" v-on:click="answer = false" />
        <selectbutton msg="NO" v-on:click="answer = true" />
        <div>
          <router-link to="/fourth-question"
            ><HelloWorld msg="Next"
          /></router-link>
          <router-view />
        </div>
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
      message: "",
    };
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

.content {
  background-color: bisque;
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
}

.content-input {
  width: 100%;
  background-color: bisque;
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;

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