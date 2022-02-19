<template>
  <div class="six">
    <h1>6</h1>
    <router-link to="/seven-question"><HelloWorld  /></router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "six",
  components: {
    HelloWorld,
  },
};

</script>