<template>
<div class="fifth">
    <div class="container">
        <div class="fifth-qustion-box">
            <h1>
                Have you done anything specific to be mindful of what was happening today?
            </h1>
            <div class="button-1">
                <router-link to="/fifth-yes">
                    <selectbutton msg="YES" v-on:click="answer = true" />
                    </router-link>
                    <router-link to="/six-question">
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
    name: "fifth",
    components: {
        selectbutton,
    },
};
</script>

<style scoped>
.fifth {
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

.fifth-qustion-box {
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
