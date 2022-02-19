<template>
  <div class="seven">
    <h1>7</h1>
    <router-link to="/eight-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "seven",
  components: {
    HelloWorld,
  },
};

</script>