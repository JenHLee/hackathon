<template>
<div class="fourth-yes">
    <div class="container">
        <div class="fourth-yes-qustion-box">
            <h1>{{ name }}
                What happend at {{ fourthAnswerQuestion }}?<br>
                Can you tell me more ?</h1>
        </div>
        <div class="content">
            <textarea cols="0" rows="10" class="content-input" v-model="text"></textarea>
            <button class="submit-button" v-on:click="showNextButton()">submit</button>
        </div>
    </div>
    <div id="nextButton">
        <router-link to="/fifth-question">
            <HelloWorld msg=">" />
        </router-link>
        <router-view />
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "fourth-yes",
    components: {
        HelloWorld,
    },
    data() {
    return {
       name: localStorage.username
    };
  },
};
</script>

<style scoped>
.fourth-yes {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    height: 100vh;
    background: url("../img/bg-1.gif");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
}

.container {
    display: flex;
    flex-direction: column;
    margin: auto;
    padding-left: 28%;
}

.fourth-yes-qustion-box {
    text-align: center;
    flex: 4;
    width: 40rem;
    margin-bottom: 2rem;
}

.content {
    background-color: bisque;
    width: 30rem;
    height: 20rem;
    margin: auto;
    border-radius: 0.5rem;
    padding-top: 2rem;
    text-align: right;
}

.content-input {
    width: 26rem;
    height: 17rem;
    background-color: bisque;
    border: none;
    outline: none;
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
    display: flex;
    flex: 2;
    text-align: center;
    max-width: 30rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
