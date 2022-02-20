<template>
<div class="third-yes">
    <div class="container">
        <div class="third-yes-qustion-box">
            <h1>Would you like to elaborate on this?</h1>
        </div>
        <div class="content">
            <textarea cols="0" rows="7" class="content-input" v-model="text"></textarea>
            <button class="submit-button" v-on:click="showNextButton()">submit</button>
        </div>
        <div id="nextButton">
            <router-link to="/fourth-question">
                <HelloWorld msg="Next" />
            </router-link>
            <router-view />
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "third-yes",
    components: {
        HelloWorld,
    },
};
</script>

<style scoped>
.third-yes {
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

.third-yes-qustion-box {
    text-align: center;
    flex: 4;
    width: 40rem;
    margin: auto;
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
