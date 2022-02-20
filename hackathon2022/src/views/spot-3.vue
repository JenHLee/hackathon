<template>
  <div class="spot-3">
    <div class="container">
      <div class="spot-3-question-box">
        <h1>This is your MOODSPOT.</h1>
        
        <div id="spotCard"></div>
      </div>
  <div class="button" type="submit">
            <router-link to="/spot-4">
            <spotBtn msg="Another Recommendation"/>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import spotBtn from "@/components/spotBtn.vue";

export default {
    name: "spot-3",
    components: {
        spotBtn,
    },
};
</script>

<style scoped>

.spot-3 {
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


.spot-3-question-box {
  background-color: antiquewhite;
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}


.button {
    flex: 2;
    margin: 2rem;
    text-align: center;
}



</style>