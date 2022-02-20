<template>
<div class="final">
    <div class="container">
        <div class="main-writing">
            <h1>Bye {{ name }},</h1>
            <h2>Hope you have a moodful day!</h2>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "final",
    data() {
        return {
            name: localStorage.username
        };
    },
}
</script>>

<style scoped>
h1 {
    font-size: 8vw;
    font-weight: bold;
}

h2 {
    font-size: 2vw;
}

.final {
    box-sizing: border-box;
    height: 100vh;
    background: url("../img/bg-1.gif");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-content: center;
    background-repeat: no-repeat;
}

.main-writing {
    text-align: center;
}

.container {
    display: flex;
    flex-direction: column;
    margin: 4rem;
}

.home-image {
    flex: 4;
    padding: 15vw;
}

.button {
    flex: 2;
    margin: 2rem;
    text-align: center;
}
</style>
