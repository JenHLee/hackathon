<template>
  <div class="spotRecommendation">
    <div class="container">
      <div class="spot-question-box">
        <h1>This is your MOODSPOT.</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "spotRecommendation",
  components: {

  },
};
</script>

<style scoped>

.spotRecommendation {
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


.spot-question-box {
  background-color: antiquewhite;
  text-align: center;
  flex: 4;
  width: 40rem;
  margin: auto;
}



</style>