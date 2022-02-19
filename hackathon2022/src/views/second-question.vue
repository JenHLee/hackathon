<template>
  <div class="second">
    <h1>2</h1>
    <router-link to="/third-question"><HelloWorld  /></router-link>
    <questionCard />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import questionCard from "@/components/questionCard.vue";

export default {
  name: "Second",
  components: {
    HelloWorld,
    questionCard
  },
};

</script>