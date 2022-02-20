<template>
  <div class="questionCard">
    <div class="container">
      <div class="question-qustion-box">
        <h1>{{ question }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "qustionCard",
  props: {
    question: String
  },
};
</script>

<style scoped>




</style>