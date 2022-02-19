<template>
  <div class="eight">
    <h1>8</h1>
    <router-link to="/nine-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "eight",
  components: {
    HelloWorld,
  },
};

</script>