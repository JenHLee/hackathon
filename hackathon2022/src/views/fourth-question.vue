<template>
<div class="fourth">
    <div class="container">
        <div class="fourth-qustion-box">
            <h1>{{ name }}
                What happend at {{ fourthAnswerQuestion }}?<br>
                Can you tell me more ?
            </h1>
            <div class="button-1">
                <router-link to="/fourth-yes">
                    <selectbutton msg="YES" v-on:click="answer = true" />
                    </router-link>
                    <router-link to="/fifth-question">
                        <selectbutton msg="NO" v-on:click="answer = false" />
                    </router-link>
                    <router-view />
            </div>
        </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import selectbutton from "@/components/selectbutton.vue";

export default {
    name: "fourth",
    components: {
        selectbutton,
    },
    data() {
    return {
       name: localStorage.username
    };
  },
};
</script>

<style scoped>
.fourth {
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
</style>
