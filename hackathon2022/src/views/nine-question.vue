<template>
  <div class="nine">
    <h1>9</h1>
    <router-link to="/ten-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "nine",
  components: {
    HelloWorld,
  },
};

</script>